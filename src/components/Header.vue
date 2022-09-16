<template>
  <div class="root">
    <div class="personal-info" @click.stop="onTitleClicked">
      <span style="font-size: 10px">{{ personalInfo.mobile }}</span>
      |
      <span style="font-size: 10px">{{ personalInfo.name }}</span>
      |
      <span style="font-size: 10px">{{ personalInfo.email }}</span>
    </div>

    <div style="z-index: 99" class="popup" v-show="isContactPopupShow">
      <div style="width: 100px; height: 2px; background-color: red"></div>
      <div style="margin-top: 5px; cursor: pointer">
        <a
          style="
            color: black;
            text-decoration: none;
          "
          href="https://www.facebook.com/vhscar"
          >Facebook</a
        >
      </div>
      <div
        style="
          width: 250px;
          height: 2px;
          background-color: gray;
          opacity: 0.1;
          margin-top: 5px;
        "
      ></div>
      <transition name="detail">
        <div class="more-wrapper" v-if="isShow">
          <div class="more-content">
            <h1 style="color: chartreuse">LINE</h1>
            <img
              style="width: 50%; height: 50%"
              src="@/assets/line2.png"
              alt=""
            />
            <div>透過行動條碼加入LINE好友</div>
            <div style="font-size: 10px; margin-top: 10px">
              請在LINE應用程式上開啟「好友」分頁，點選畫面右上方用來加入好友的圖示，
            </div>
            <div style="font-size: 10px">
              接著點選「行動條碼」，然後掃描此行動條碼。
            </div>
            <a
              class="tab-item"
              style="font-size: 10px"
              href="https://line.me/zh-hant/"
              >進一步瞭解LINE</a
            >
            <a
              class="tab-item"
              style="font-size: 10px; margin-left: 10px"
              href="https://line.me/zh-hant/"
              >立即下載</a
            >
          </div>
          <div class="close-wrapper">
            <div class="close-icon" @click="closeMore">
              <span>X</span>
            </div>
          </div>
        </div>
      </transition>
      <div @click="showMore" style="cursor: pointer; margin-top: 5px">Line</div>
      <div
        style="
          width: 250px;
          height: 2px;
          background-color: gray;
          opacity: 0.1;
          margin-top: 5px;
        "
      ></div>
      <div style="margin-top: 5px">
        <a
          style="cursor: pointer; color: black; text-decoration: none"
          href="https://www.instagram.com/ctwscar/"
          >Instagram</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onOuterClicked: Number,
  },

  data() {
    return {
      isShow: false,
      personalInfo: {
        name: "Line",
        mobile: "Facebook",
        email: "Instagram",
      },
      index: 1, // odd => popup visible, even => popup invisible
      isContactPopupShow: false,
    };
  },
  watch: {
    onOuterClicked() {
      this.isContactPopupShow = false;
    },
  },
  methods: {
    onTitleClicked() {
      this.isContactPopupShow = !this.isContactPopupShow;
      // if(this.isContactPopupShow){
      //     this.isContactPopupShow = false;
      // }else{
      //     this.isContactPopupShow = true;
      // }
    },
    showMore() {
      this.isShow = true;
    },
    closeMore() {
      this.isShow = false;
    },
  },
};
</script>

<style  scoped>
.root {
  background-color: purple;
  height: 40px;
  width: 100%;
  position: relative;
}
.personal-info {
  position: absolute;
  right: 20px;
  top: 0;
  color: white;
  line-height: 30px;
}
.personal-info:hover {
  color: red;
  cursor: pointer;
  transition: 0.6s;
}
.popup {
  position: absolute;
  top: 0;
  right: 25px;
  top: 30px;
  width: 150px;
  height: 120px;
  background-color: white;
}

.hello {
  background-color: blue;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.content-wrapper {
  width: 400px;
  height: 200px;
  text-align: center;
  margin: 0 auto;
}

.content-wrapper .content {
  width: 100%;
  height: 100%;
  font-size: 20px;
}
.more-wrapper {
  width: 100%;
  height: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(98, 98, 98, 0.8);
}
.more-wrapper .more-content {
  width: 100%;

  background: white;
  border-radius: 5px;
  margin: 40px auto;
}

.more-wrapper .close-wrapper {
  cursor: pointer;
}

.more-wrapper .close-wrapper .close-icon {
  width: 30px;
  height: 30px;
  background: white;
  border-radius: 50%;
  vertical-align: center;
  margin: 0 auto;
  font-size: 21px;
  color: grey;
}

.detail-enter-active,
.detail-leave-active {
  transition: 1s all;
}

.detail-enter,
.detail-leave-to {
  opacity: 0;
}

.detail-enter-to,
.detail-leave {
  opacity: 1;
}
.tab-item:hover {
  color: red;
  cursor: pointer;
  transition: 0.6s;
}
</style>