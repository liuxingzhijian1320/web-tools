<style lang="scss">
.movie {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  .iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
<template>
  <div class="movie">
    <iframe class="iframe" src="http://transition.vipray.cn/index.php"
      frameborder="0"></iframe>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
</script>

