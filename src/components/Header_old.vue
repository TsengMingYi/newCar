<template>
  <div class="root">
    <div class="personal-info" @click.stop="onTitleClicked">
      <span>{{ personalInfo.mobile }}</span> |
      <span>{{ personalInfo.name }}</span> |
      <span>{{ personalInfo.email }}</span>
    </div>
    <div class="popup" v-show="index % 2 != 0"></div>
  </div>
</template>

<script>
export default {
  props: {
    onOuterClicked: Number,
  },

  data() {
    return {
      personalInfo: {
        name: "Amy",
        mobile: "0912345678",
        email: "www.mingerzeng@gmail.com",
      },
      index: 1,
    };
  },
  watch: {
    index() {
      //   console.log("index: " + v + ", old index: " + oldV);
    },
    onOuterClicked() {
      this.index = 2;
      //   console.log("onOuterClicked"+v+"old onOuterClicked"+oldV);
      if (this.index % 2 != 0) {
        console.log("顯示");
      } else {
        console.log("不顯示");
      }
    },
  },
  methods: {
    onTitleClicked() {
      //   console.log(this.onOuterClicked);
      this.index++;
      if (this.index % 2 != 0) {
        console.log("顯示");
      } else {
        console.log("不顯示");
      }

      this.$emit("testtest", this.index);
    },
  },
};
</script>

<style  scoped>
.root {
  background-color: purple;
  height: 40px;
  position: relative;
}
.personal-info {
  position: absolute;
  right: 20px;
  top: 0;
  bottom: 0;
  color: white;
  line-height: 40px;
}
.personal-info:hover {
  color: red;
  cursor: pointer;
  transition: 0.6s;
}
.popup {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>