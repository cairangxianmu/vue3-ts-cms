<template>
    <div class="login-panel">
        <h1 class="title">后台管理系统</h1>
        <el-tabs
            type="border-card"
            class="demo-tabs"
            stretch
            v-model="currentTab"
        >
            <el-tab-pane name="account">
                <template #label>
                    <span class="custom-tabs-label">
                        <User
                            style="width: 1em; height: 1em; margin-right: 8px"
                        />
                        <span>账号登录</span>
                    </span>
                </template>
                <login-acount ref="accountRef"></login-acount>
            </el-tab-pane>
            <el-tab-pane name="phone">
                <template #label>
                    <span class="custom-tabs-label">
                        <Iphone
                            style="width: 1em; height: 1em; margin-right: 8px"
                        />
                        <span>手机登录</span>
                    </span>
                </template>
                <login-phone ref="phoneRef"></login-phone>
            </el-tab-pane>
        </el-tabs>

        <div class="account-control">
            <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>

        <el-button type="primary" class="login-btn" @click="handleLoginClick"
            >立即登录</el-button
        >
    </div>
</template>

<script lang="ts">
import { ref } from "vue";
import LoginAcount from "./login-acount.vue";
import LoginPhone from "./login-phone.vue";

export default {
    components: {
        LoginPhone,
        LoginAcount,
    },
    setup() {
        const isKeepPassword = ref(true);
        const accountRef = ref<InstanceType<typeof LoginAcount>>();
        const phoneRef = ref<InstanceType<typeof LoginPhone>>();
        const currentTab = ref("account");

        const handleLoginClick = () => {
            if (currentTab.value === "account") {
                accountRef.value?.loginAction(isKeepPassword.value);
            } else {
                console.log("phoneRef调用LoginAction");
            }
        };

        return {
            isKeepPassword,
            handleLoginClick,
            accountRef,
            phoneRef,
            currentTab,
        };
    },
};
</script>

<style lang="less" sco LoginAccountped>
.login-panel {
    margin-bottom: 150px;
    width: 320px;

    .title {
        text-align: center;
    }
}

.account-control {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
}
.login-btn {
    width: 100%;
    margin-top: 10px;
}
</style>
