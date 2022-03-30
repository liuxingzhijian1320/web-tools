<style lang="scss">
.content {
  max-width: 960px;
  margin: 0 auto;
  .list {
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;

    .item {
      width: 160px;
      height: 50px;
      background: #fff;
      box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.1);
      float: right;
      margin: 20px;
      border-radius: 6px;
      font-size: 14px;
      color: #999;
      padding: 15px;
      cursor: pointer;
      &:hover {
        transform: translateY(-5px);
        transition: all 0.3s ease-in-out;
      }
    }
  }
}
</style>
<template>
  <div class="index">
    <morecolor></morecolor>
    <div class="content">
      <div class="list">
        <div class="item" @click="goRouter">webp/png/jpeg格式转换工具</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import morecolor from "../../components/morecolor/morecolor.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const goRouter = () => {
  router.push("/image-transform");
};
</script>

