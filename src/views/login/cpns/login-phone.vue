<template>
    <el-form :model="ruleForm" :rules="rules" label-width="120px">
        <el-form-item label="手机号" prop="number">
            <el-input v-model="ruleForm.number" />
        </el-form-item>
        <el-form-item label="验证码" prop="code">
            <div class="get-code">
                <el-input v-model="ruleForm.code" />
                <el-button type="primary" class="get-btn">获取验证码</el-button>
            </div>
        </el-form-item>
    </el-form>
</template>

<script>
import { defineComponent, reactive } from "vue-demi";
import { rules } from "../config/phone-config";
export default defineComponent({
    setup() {
        const ruleForm = reactive({
            number: "",
            code: "",
        });

        return {
            ruleForm,
            rules,
        };
    },
});
</script>

<style lang="less" scoped>
.get-code {
    display: flex;
}

.get-btn {
    margin-left: 8px;
}
</style>
