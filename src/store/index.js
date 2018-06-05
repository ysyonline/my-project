/**
 * 业务
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    actions: {
        increment: ({ commit }) => {
            commit("increment");
        },
        decrement: ({ commit }) => {
            commit("decrement");
        },
        oddIncrement: ({ commit }) => {
            commit("oddIncrement");
        },
        delayIncrement: ({ commit }) => {
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit("increment");
                    resolve();
                }, 1000);
            });
        },
        forwardModule: ({ commit, state }, payload) => {
            let { title, name } = payload;
            let isTabOpen = state.options.map(tab => tab.name).indexOf(name) > -1;
            if (isTabOpen) {
                state.activeTabValue = name;
            } else {
                commit("addTab", payload);
            }
        },
        removeTab: ({ commit }, payload) => {
            commit("removeTab", payload)
        },
        addTab: ({ commit }, payload) => {
            commit("addTab", payload)
        },
    },
    mutations: {
        forwardModule: (state, payload) => {

        },
        addTab: (state, payload) => {
            ++state.tabIndex;
            state.options.push(payload);
            state.activeTabValue = payload.name;
        },
        removeTab: (state, { targetName }) => {
            let tabs = state.options;
            let activeName = state.activeTabValue;
            if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
            }
            state.activeTabValue = activeName;
            state.options = tabs.filter(tab => tab.name !== targetName);
        },
        increment: (state) => {
            state.count++;
        },
        decrement: (state) => {
            state.count--
        },
        oddIncrement: (state) => {
            if (state.count % 2 == 0) {
                state.count++;
            }
        }
    },
    getters: {
        count(state) {
            return state.count
        },
        options(state) {
            return state.options
        },
        activeTabValue(state) {
            return state.activeTabValue
        },
        tabIndex(state) {
            return state.tabIndex;
        }
    },
    state: {
        count: 0,
        options: [],
        activeTabValue: "",
        tabIndex: 0
    }
});
console.log(store);
export default store;