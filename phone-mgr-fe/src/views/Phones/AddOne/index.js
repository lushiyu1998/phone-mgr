import { defineComponent, reactive } from 'vue';
import { phone } from '@/service';
import { message } from 'ant-design-vue';
import store from '@/store';
import { result, clone }  from '@/helpers/utils';

const defaultFormData = {
    name: '',
    price: 0,
    author: '',
    publishDate: 0,
    classify: '',
    count: '',
};

export default defineComponent({
    props: {
        show: Boolean,
    },
    setup(props, context) {
        const addForm = reactive(clone(defaultFormData));

        if (store.state.phoneClassify.length) {
        addForm.classify = store.state.phoneClassify[0]._id;
        }

        const submit = async () => {
            const form = clone(addForm);
            form.publishDate = addForm.publishDate.valueOf();
            const res = await phone.add(form);

            result(res)
                .success((d, { data }) => {
                    Object.assign(addForm, defaultFormData);
                    message.success(data.msg);

                    context.emit('getList');
                });
        };

        const close = () => {
            context.emit('update:show', false);
        };

        return {
            addForm,
            submit,
            props,
            close,
            store: store.state,
        };
    },
});
