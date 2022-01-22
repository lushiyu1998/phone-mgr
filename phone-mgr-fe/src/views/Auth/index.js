import { defineComponent, reactive, ref } from 'vue';
import { MehOutlined,RobotOutlined,RocketOutlined  } from '@ant-design/icons-vue';
import { auth } from '@/service';
import { result } from '@/helpers/utils';
import { getCharacterInfoById } from '@/helpers/character';
import { message } from 'ant-design-vue';
import store from '@/store';
import { useRouter } from 'vue-router';
import { setToken } from '@/helpers/token';

export default defineComponent({
    components: {
        MehOutlined,
        RobotOutlined,
        RocketOutlined,
    },
    setup() {
        const router = useRouter();

        //注册用的表单数据
        const regForm = reactive({
            account: '',
            password: '',
            inviteCode: '',
        });

        //注册逻辑
        const register = async () => {
            if (regForm.account === '') {
             message.info('要输入账户才行!');
             return;
            }

            if (regForm.password === '') {
                message.info('要输入密码才行!');
                return;   
               }

            if (regForm.inviteCode === '') {
                message.info('要输入邀请码');
                return;   
               }

            const res = await auth.register(
                regForm.account,
                regForm.password,
                regForm.inviteCode,
                );
        
            result(res)
               .success((data) => {
                message.success(data.msg);
               });
        };

        //登录用的表单数据
        const loginForm = reactive({
            account: '',
            password: '',
        });

        //登录逻辑
        const login = async () => {
            if (loginForm.account === '') {
                message.info('要输入账户才行!');
                return;
               }
   
               if (loginForm.password === '') {
                   message.info('要输入密码才行!');
                   return;   
                  }

            const res = await auth.login(loginForm.account, loginForm.password)

            result(res)
               .success(({msg, data: { user, token } }) => {
                    message.success(msg);

                    store.commit('setUserInfo', user);
                    store.commit('setUserCharacter', getCharacterInfoById(user.character));

                    setToken(token);

                    router.replace('/phones');    //页面跳转
               });
        };

        return {
            //注册相关的数据
            regForm,
            register,

            //登录相关的数据
            login,
            loginForm,
        };
    },
});

