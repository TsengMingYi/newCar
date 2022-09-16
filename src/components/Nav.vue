<template>
  <div class="root">
    <div class="hello">
      <div
        style="display: inline-block"
        class="tab-item"
        :class="[{ selected: index == selectedIndex }]"
        v-for="(label, index) in tabList"
        :key="index"
        @click="onTabSelected(index)"
      >
        {{ label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectedIndex: Number,
  },
  data() {
    return {
      // selectedIndex: 0,
      tabList: [
        "回首頁",
        "企業背景",
        "車種介紹&操作說明",
        "聯絡我們"
      ],
    };
  },
  methods: {
    onTabSelected(index) {
      // this.selectedIndex = index;
      this.$emit("onTabSelected", index);
    },
  },
};
</script>

<style scoped>
.root {
  /* background-color: pink;  */
  height: 100px;
  padding: 5px;
  text-align: center;
}
.tab-item {
  white-space: nowrap;
  display: inline-block;
  font-size: 20px;
  /* font-weight: 500; */
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 20px;
  height: 60px;
  line-height: 60px;
  /* transform: translateY(50%); */
}
.tab-item:hover {
  color: red;
  cursor: pointer;
  transition: 0.6s;
}
.selected {
  color: red;
}
.hello {
  background-color: greenyellow;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
</style>