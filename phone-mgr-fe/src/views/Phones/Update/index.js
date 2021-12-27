import { defineComponent, reactive, watch } from 'vue';
import { phone } from '@/service';
import { message } from 'ant-design-vue';
import { result, clone }  from '@/helpers/utils';

export default defineComponent({
    props: {
        show: Boolean,
        phone: Object,
    },
    setup(props, context) {
        const editForm = reactive({
            name: '',
            price: 0,
            author: '',
            publishDate: 0,
            classify: '',
        });

        const close = () => {
            context.emit('update:show', false);
        };

        watch(() => props.phone, (current) => {
            console.log(current, '---------');
            Object.assign(editForm, current);
        });

        const submit = async () => {

        };

        return {
            editForm,
            submit,
            props,
            close,
        };
    },
});
