<template>
        <div class="auth">
        <div class="bg"></div>
        <div class="title-info">
            <img class="item" src="./logo.png" alt="" >
            <h1 class="item" >手机库存管理系统</h1>
        </div>

        <div class="form">
        <a-tabs>
            <a-tab-pane key="1" tab="登入">
                <div class="item">
               <a-input
                size="large"
                placeholder="账户" 
                v-model:value="loginForm.account"
               >
                <template v-slot:prefix>
                    <MehOutlined />
                </template>   
                </a-input>       
               </div>

                <div class="item">
               <a-input
                size="large"
                placeholder="密码" 
                v-model:value="loginForm.password"
                >       
               <template v-slot:prefix>
                    <RobotOutlined />
                </template>   
                </a-input>
               </div>

                <div class="item">
                    <a-button href="javascript:;" @click="forgetPassword">忘记密码</a-button>
                </div>

               <div class="item">
                   <a-button 
                    size="large"
                    type="primary"
                    @click="login"
                   >
                       登入
                   </a-button>
               </div>
            </a-tab-pane>
            
            <a-tab-pane key="2" tab="注册">
                <div class="item">
               <a-input 
                size="large" 
                placeholder="账户" 
                v-model:value="regForm.account"
                >
                 <template v-slot:prefix>
                    <MehOutlined />
                </template>   
                </a-input>       
               </div>

                <div class="item">
               <a-input 
                size="large" 
                placeholder="密码" 
                v-model:value="regForm.password"
               >
                <template v-slot:prefix>
                    <RobotOutlined />
                </template>   
                </a-input>       
               </div>

               <div class="item">
               <a-input
                size="large"
                placeholder="邀请码" 
                v-model:value="regForm.inviteCode"
                >
                <template v-slot:prefix>
                    <RocketOutlined />
                </template>   
                </a-input>       
               </div>


               <div class="item">
                   <a-button
                    @click="register"
                    size="large"
                    type="primary"
                   >
                       注册
                   </a-button>
               </div>
            </a-tab-pane>
        </a-tabs>
        </div>
    </div>
</template>

<script src="./index.jsx"></script>

<style lang="scss" scoped>
    @import './index.scss';
</style>