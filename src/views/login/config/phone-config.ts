export const rules = {
    number: [
        {
            required: true,
            message: "手机号是必须的",
            trigger: "blur",
        },
        {
            pattern: /^[0-9]{11}$/,
            message: "手机号必须是11个数字",
            trigger: "blur",
        },
    ],
    code: [
        {
            required: true,
            message: "验证码是必须的",
            trigger: "blur",
        },
        {
            pattern: /^[0-9]{4,}$/,
            message: "验证码必须是4个以上的数字",
            trigger: "blur",
        },
    ],
};
