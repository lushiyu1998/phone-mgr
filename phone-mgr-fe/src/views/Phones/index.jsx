import { defineComponent, ref, onMounted } from 'vue';
import { phone, phoneClassify } from '@/service';
import { useRouter } from 'vue-router';
import { message, Modal, Input } from 'ant-design-vue';
import { result, formatTimestamp } from '@/helpers/utils';
import { getClassifyTitleById } from '@/helpers/phone-classify';
import AddOne from './AddOne/index.vue';
import Update from './Update/index.vue';
// import { resultProps } from 'ant-design-vue/lib/result';

export default defineComponent ({
    components: {
        AddOne,
        Update,
    },
    setup() {
        const router = useRouter();

        const columns = [
            {
                title: '手机名',
                dataIndex: 'name',
            },
            {
                title: '品牌',
                dataIndex: 'author',
            },
            {
                title: '价格',
                dataIndex: 'price',
            },
            {
                title: '库存',
                slots: {
                    customRender: 'count',
                },
            },
            {
                title: '发售日期',
                dataIndex: 'publishDate',
                slots: {
                    customRender: 'publishDate',
                },
            },
            {
                title: '分类',
                slots: {
                    customRender: 'classify',
                },
            },
            {
                title: '操作',
                slots: {
                    customRender: 'actions',
                },
            },
        ];

        const show = ref(false);
        const showUpdateModal = ref(false);
        const list = ref([]);
        const total = ref(0);
        const curPage = ref(1);
        const keyword = ref('');
        const isSearch = ref(false);
        const curEditPhone = ref({});

        //获取手机列表
        const getList = async () => {
            const res = await phone.list({
                page:curPage.value,
                size:10,
                keyword: keyword.value,
            });

            result(res)
                .success(({ data }) => {
                    const { list: l, total: t  } = data;
                    list.value = l;
                    total.value = t;
                });
        }

        onMounted(async () => {
            getList();
        });

        //换页
        const setPage = (page) => {
            curPage.value = page;

            getList();
        };

        //进行搜索
        const onSearch = () => {
            getList();

            //字符串非空时为-> true
            //字符串为空时为-> false
            isSearch.value = Boolean(keyword.value);
        };

        //回到全部列表
        const backAll = () => {
            keyword.value = '';
            isSearch.value = false;

            getList();
        };

        //删除一台手机
        const remove = async ({ text: record }) => {
            const { _id } = record;

            const res = await phone.remove(_id);

            result(res)
                .success(({ msg }) => {
                    message.success(msg);

                    getList();
                });
        };

        const updateCount = (type, record) => {
            let word = '增加';

            if(type === 'OUT_COUNT') {
                word = '减少';
            }

            Modal.confirm({
                title: `要${word}多少库存`,
                content: (
                    <div>
                        <Input class="__phone_input_count" />
                    </div>
                ),
                onOk: async () => {
                    const el = document.querySelector('.__phone_input_count');
                    let num = el.value;

                    const res = await phone.updateCount({
                        id: record._id,
                        num,
                        type,
                    });

                    result(res)
                        .success((data) => {
                            if (type === 'IN_COUNT') {
                                //入库
                                num = Math.abs(num);
                            } else {
                                //出库
                                num = -Math.abs(num);
                            }

                            const one = list.value.find((item) => {
                                return item._id === record._id;
                            });

                            if (one) {
                                console.log(num);
                                one.count = one.count + num;

                                message.success(`成功${word} ${Math.abs(num)}台手机，要赚大钱啦`)
                            }
                        });
                },
            });
        };

        //更新弹框
        const update = ({ record }) => {
            showUpdateModal.value = true;
            curEditPhone.value = record;
        };

        //更新某台手机
        const updateCurPhone = (newData) => {
            Object.assign(curEditPhone.value, newData);
        };

        //进入详情页
        const toDetail = ({ record }) => {
            router.push(`/phones/${record._id}`);
        };

        return {
            columns,
            show,
            list,
            formatTimestamp,
            curPage,
            total,
            setPage,
            keyword,
            onSearch,
            backAll,
            isSearch,
            remove,
            updateCount,
            showUpdateModal,
            update,
            curEditPhone,
            updateCurPhone,
            toDetail,
            getList,
            getClassifyTitleById,
        };
    },
});
