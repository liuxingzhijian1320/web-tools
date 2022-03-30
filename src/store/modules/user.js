import { defineStore } from 'pinia';

const storeUser = defineStore('user', {
  state: () => ({
    count: 0,
    username: '10个肉包子',
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    doublePlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    randomizeCounter() {
      this.counter = Math.round(100 * Math.random());
    },
  },
});

export default storeUser;
