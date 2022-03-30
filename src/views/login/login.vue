<style lang="scss">
</style>
<template>
  <div>
    <div class="input-div">
      <div class="label">账号</div>
      <div class="input">
        <input type="text" v-model.trim="formData.username">
      </div>
    </div>
    <div class="input-div">
      <div class="label">密码</div>
      <div class="input">
        <input type="text" v-model.trim="formData.password">
      </div>
    </div>
    <div class="submit" @click="submit">提交</div>
  </div>
</template>

<script setup>
import { reactive, toRefs, ref, computed } from "vue";
const formData = reactive({
  username: "zhanghusheng",
  password: "123",
});

const submit = () => {};
</script>

