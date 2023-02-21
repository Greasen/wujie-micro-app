<template>
  <div>
    <HelloWorld msg="弹窗处理"></HelloWorld>
    <div class="content">
      <p>弹窗无需子应用做任何处理就可使用</p>
      <h3>1、打开弹窗</h3>
      <p>
        <el-button @click="dialogVisible = true">点击打开el-dialog</el-button>
      </p>
      <h3>2、打开选择器</h3>
      <p>
        <el-select v-model="value" placeholder="el-select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </p>
      <h3>3、打开气泡卡片</h3>
      <p>
        <el-popover
          placement="top-start"
          title="Title"
          :width="200"
          trigger="hover"
          content="this is content, this is content, this is content"
        >
          <template #reference>
            <el-button>el-popover hover 激活</el-button>
          </template>
        </el-popover>
      </p>
      <h3>4、手动向body中append弹窗</h3>
      <p>
        <AppendBody />
      </p>
    </div>
    <el-dialog v-model="dialogVisible" title="Tips" width="30%">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import AppendBody from "../components/AppendBody.vue";
export default {
  components: {
    HelloWorld,
    AppendBody,
  },
  data() {
    return {
      dialogVisible: false,
      modalVisible: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
    };
  },
  mounted() {
    console.log("vite dialog mounted");
  },
};
</script>

<style>
:root {
  --host-color: #0239d0;
}
</style>