<template>
    <div class="el-form">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="formRef"
            label-width="120px"
        >
            <el-form-item label="账号" prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleForm.pass" show-password />
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { ElForm } from "element-plus/lib";
import { useStore } from "vuex";
import { rules } from "../config/account-config";
import localCache from "@/utils/cache";
export default defineComponent({
    setup() {
        const store = useStore();
        const ruleForm = reactive({
            name: localCache.getCache("name") ?? "",
            pass: localCache.getCache("pass") ?? "",
        });
        const formRef = ref<InstanceType<typeof ElForm>>();
        const loginAction = (isKeepPassword: boolean) => {
            formRef.value?.validate((valid) => {
                if (valid) {
                    if (isKeepPassword) {
                        localCache.setCache("name", ruleForm.name);
                        localCache.setCache("pass", ruleForm.pass);
                    } else {
                        localCache.deleteCache("name");
                        localCache.deleteCache("pass");
                    }
                    store.dispatch("login/accountLoginAction", { ...ruleForm });
                }
            });
        };
        return {
            ruleForm,
            rules,
            loginAction,
            formRef,
        };
    },
});
</script>

<style lang="less" scoped></style>
