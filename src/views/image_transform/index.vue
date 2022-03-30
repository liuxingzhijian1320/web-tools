<style lang="scss">
.title {
  font-size: 24px;
  color: #333;
  text-align: center;
  font-weight: bold;
  padding: 30px;
}
.demo-ruleForm {
  width: 500px;
  display: block;
  margin: 0 auto;
}
.box {
  width: 500px;
  height: 500px;
}
</style>
<template>
  <div class="image_transform">
    <div class="title">图片在线webp/png/jpeg格式转换工具</div>

    <div class="content">
      <el-form label-width="100px" class="demo-ruleForm">
        <el-form-item label="选择图片" prop="pass">
          <input type="file" @input="onChange" ref="inputDOM" />
        </el-form-item>
        <el-form-item label="目标格式">
          <el-select placeholder="请选择转换格式" v-model="ruleForm.type">
            <el-option v-for="(item, index) in types" :key="item" :value="item">
              {{item}}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">
            开始转换
          </el-button>
          <!-- <el-button type="primary" v-if="imgbase" @click="download">
            下载
          </el-button> -->
        </el-form-item>
      </el-form>

      <div class="box">
        <img ref="imgDOM" src="" alt="" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import { getBase64 } from "src/assets/scripts/index.js";

const types = ["image/png", "image/jpeg", "image/webp"];

let ruleForm = reactive({
  url: "",
  type: "",
});
let imgbase = ref(null);
let inputDOM = ref(null);
let imgDOM = ref(null);

onMounted(() => {});

const beforeUpload = (file) => {
  if (types.indexOf(file.type) === -1) {
    ElMessage.error("仅支持webp/png/jpeg上传");
    return false;
  } else {
    return true;
  }
};

const onChange = async (e) => {
  const file = inputDOM.value.files[0];
  if (!beforeUpload(file)) {
    return false;
  }
  imgbase = await getBase64(file);
  imgDOM.value.src = imgbase;
};

// 把image 转换为 canvas对象
const imgToCanvas = ({ value: image }) => {
  let canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  canvas.getContext("2d").drawImage(image, 0, 0);
  return canvas;
};

//canvas转换为image
const canvasToImg = (canvas) => {
  return canvas.toDataURL(ruleForm.type);
};

const download = () => {};

const submitForm = () => {
  if (!imgbase || !ruleForm.type) {
    ElMessage.error("请完善信息");
    return;
  }
  let can = imgToCanvas(imgDOM);
  const href = canvasToImg(can);
  const name = inputDOM.value.files[0].name.split(".")[0];
  downLoadImage(href, name);
};

function downLoadImage(href, name) {
  var a = document.createElement("a");
  a.href = href;
  a.download = name;
  a.click();
}
</script>

