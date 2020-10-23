<template>
    <div>
        <img src="@/assets/background.jpg" width="1595" height="750">
        <div class="login-panel">
        <Card style="width:300px">
            <p slot="title">欢迎登录</p>
            <Form  autocomplete="on" :model="formItem" ref="formItem" label-position="left">
                <FormItem prop="user">
                    <i-input type="text" v-model="formItem.user" placeholder="Username">
                        <Icon type="md-person" slot="prepend"></Icon>
                    </i-input>
                </FormItem>

                <FormItem prop="password">
                    <i-input type="password" v-model="formItem.password" placeholder="Password">
                        <Icon type="md-lock" slot="prepend"></Icon>
                    </i-input>
                </FormItem>
                
                <FormItem> 
                    <Button style="margin-left: 60px" >注册</Button>
                    <Button type="primary" style="margin-left: 60px"  @click.native.prevent="handleLogin">登录</Button>
                </FormItem>
            </Form>
        </Card>    
        </div>
    </div>
</template>

<script>
import {setCookie} from '@/utils/support'

export default {
    name: 'login',
    data() {
        return {
            formItem: {
                user: 'admin',
                password: '123456'
            },
            ruleInline: {
                user: [
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码长度不能小于6位' }
                ]
            },
            loading: false,
            pwdType: "password",
        };
    },
    methods: {
        showPwd() {
            if (this.pwdType === "password") {
                this.pwdType = "";
            } else {
                this.pwdType = "password";
            }
        },
        handleLogin() {
            this.$refs.formItem.validate((valid) => {
                if(valid){
                    this.loading = true;
                    this.$store.dispatch("Login", this.formItem).then(response  => {
                        this.loading = false;
                        let code = response.data.code;
                        if(code == 200) {
                            console.log("code=="+code)
                            setCookie("username",this.formItem.user,15);
                            setCookie("password",this.formItem.password,15);
                            this.$router.push({
                                path: "/home",
                                query: { data: response.data.data }
                            });
                        } else{
                            this.$router.push({
                                path: "/error",
                                query: { message: response.data.message }
                            });
                        }
                        
                        // this.$router.push({path: "/home"})
                    }).catch(() => {
                        this.loading = false;
                    });                
                } else{
                    console.log("参数验证不合法！");
                    return false;
                }
            });
        }
    }
};
</script>

<style >

    .login-panel { 
        width: 160px;
        height: 60px;
        position: absolute;
        left:70%;
        top:30%;
        margin-left: -100px;
        margin-top:-10px;

        /* margin: 0 auto;
        height: 100px; */
    }
</style>
