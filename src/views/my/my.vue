<style lang="scss">
</style>
<template>
  <div>my-{{store}}</div>
</template>

<script setup>
import storeUser from "../../store/modules/user";
const store = storeUser();
console.log(123, store);
</script>

