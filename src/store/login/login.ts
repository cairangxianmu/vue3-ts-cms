import {
    accountLoginRequest,
    requestUserInfoById,
    requestUserMenusById,
} from "@/service/login/login";
import { Module } from "vuex";
import { IAccount } from "@/service/login/types";
import { IRootState } from "../types";
import { ILoginState } from "./types";

import localCache from "@/utils/cache";
import router from "@/router";

const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state() {
        return {
            token: "",
            userInfo: {},
            userMenus: [],
        };
    },
    getters: {},
    mutations: {
        changeToken(state, token: string) {
            state.token = token;
        },
        changeUserInfo(state, userInfo: any) {
            state.userInfo = userInfo;
        },
        changeUserMenus(state, userMenus: any) {
            state.userInfo = userMenus;
        },
    },
    actions: {
        async accountLoginAction({ commit }, payload: IAccount) {
            const loginResult = await accountLoginRequest(payload);
            const { id, token } = loginResult.data;
            commit("changeToken", token);
            localCache.setCache("token", token);
            console.log(loginResult);

            // 2.请求用户信息
            const userInfoResult = await requestUserInfoById(id);
            const userInfo = userInfoResult.data;
            commit("changeUserInfo", userInfo);
            localCache.setCache("userInfo", userInfo);

            // 3. 请求用户菜单
            const userMenuResult = await requestUserMenusById(userInfo.role.id);
            const userMenus = userMenuResult.data;
            console.log(userMenus);

            // 4. 跳到首页
            router.push("/main");
        },
        loadLocalLogin({ commit }) {
            const token = localCache.getCache("token");
            if (token) {
                commit("changeToken", token);
            }
            const userInfo = localCache.getCache("userInfo");
            if (userInfo) {
                commit("changeUserInfo", userInfo);
            }
            const userMenu = localCache.getCache("userMenu");
            if (userMenu) {
                commit("changeUserMenu", userMenu);
            }
        },
        phoneLoginAction({ commit }, payload: any) {
            console.log("执行phoneLoginAction", payload);
        },
    },
    modules: {},
};

export default loginModule;
