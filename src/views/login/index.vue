<template>
    <div class="login-container">
        <el-form
            class="login-form"
            :rules="rules"
            ref="form"
            :model="user"
        >
            <div class="login-form__header">
                <img
                    class="login-logo"
                    src="@/assets/login_logo.png"
                    alt="拉勾心选"
                />
            </div>
            <el-form-item prop="account">
                <el-input v-model="user.account" placeholder="请输入用户名">
                    <template #prefix>
                        <i class="el-input__icon el-icon-user" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input
                    v-model="user.pwd"
                    type="password"
                    placeholder="请输入密码"
                >
                    <template #prefix>
                        <i class="el-input__icon el-icon-lock" />
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="imgcode">
                <div class="imgcode-wrap">
                    <el-input v-model="user.imgcode" placeholder="请输入验证码">
                        <template #prefix>
                            <i class="el-input__icon el-icon-key" />
                        </template>
                    </el-input>
                    <img class="imgcode" alt="验证码" :src="captchaSrc"  @click="loadCaptcha"/>
                </div>
            </el-form-item>
            <el-form-item>
                <el-button
                    class="submit-button"
                    type="primary"
                    :loading="loading"
                    native-type="submit"
                    @click="handleSubmit(form)"
                >
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { useRouter, useRoute } from 'vue-router'
import { getCaptchaPro, login } from "@/api/common";
import { useUserInfoStore } from '@/store/index'
import type { FormInstance, FormRules } from "element-plus";
const userStore = useUserInfoStore()
const router = useRouter()
const route = useRoute()

const user = reactive({
    account: "admin",
    pwd: "123456",
    imgcode: "",
});
const captchaSrc = ref("");
const form = ref<FormInstance>()
const loading = ref(false);
const rules = reactive<FormRules>({
    account: [{ required: true, message: "请输入账号", trigger: "change" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "change" }],
    imgcode: [{ required: true, message: "请输入验证码", trigger: "change" }],
});

onMounted(() => {
    loadCaptcha();
});

const loadCaptcha = async () => {
    const data = await getCaptchaPro();
    captchaSrc.value = URL.createObjectURL(data);
};

const handleSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate( async (valid, fields) => {
        if (valid) {
            loading.value = true
            const data = await login(user).catch(() => {
                loadCaptcha() // 刷新验证码
            }).finally(() => {
                loading.value = false
            })
            if(!data) return;
            userStore.setUser(
                {
                    ...data.user_info,
                    token:data.token
                } 
            )
            let redirect = route.query.redirect
            if (typeof redirect !== 'string') {
                redirect = '/'
            }
            router.replace(redirect)
        } else {
            console.log("error submit!", fields);
        }
    });
};
</script>

<style lang="scss" scoped>
.login-container {
    min-width: 400px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d3a4b;
}

.login-form {
    padding: 30px;
    border-radius: 6px;
    background: #fff;
    min-width: 350px;
    .login-form__header {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
    }

    .el-form-item:last-child {
        margin-bottom: 0;
    }

    .login__form-title {
        display: flex;
        justify-content: center;
        color: #fff;
    }

    .submit-button {
        width: 100%;
    }

    .login-logo {
        width: 271px;
        height: 74px;
    }
    .imgcode-wrap {
        display: flex;
        align-items: center;
        .imgcode {
            height: 37px;
            cursor:pointer;
        }
    }
}
</style>
