<template>
  <div class="home-root">
    <div style="width: 100%">
      <div style="display:inline-block; width: 10px"></div>
      <div class="half-screen">
        <img class="image-1" src="@/assets/fengmian1.jpeg" />
        <div class="description">
          <div style="font-size: 20px">婚紗拍攝</div>
          <div style="color: blue">婚紗拍攝</div>
        </div>
      </div>
      <div style="display:inline-block; width: 10px"></div>
      <div class="half-screen">
        <img class="image-1" src="@/assets/fengmian2.jpeg" />
        <div class="description">
          <div style="font-size: 20px">MV拍攝</div>
          <div style="color: blue">MV拍攝</div>
        </div>
      </div>
      <div style="display:inline-block; width: 10px"></div>
    </div>
    <div style="width: 100%">
      <div style="display:inline-block; width: 10px"></div>
      <div class="half-screen">
        <img class="image-1" src="@/assets/fengmian3.jpeg" />
        <div class="description">
          <div style="font-size: 20px">外拍活動</div>
          <div style="color: blue">外拍活動</div>
        </div>
      </div>
      <div style="display:inline-block; width: 10px"></div>
      <div class="half-screen">
        <img class="image-1" src="@/assets/fengmian4.jpeg" />
        <div class="description">
          <div style="font-size: 20px">活動展演</div>
          <div style="color: blue">活動展演</div>
        </div>
      </div>
      <div style="display:inline-block; width: 10px"></div>
    </div>

    <!-- <img style="cursor: pointer" class="image-1" src="@/assets/car2.jpeg" @click="onTabSelected(2)"/> -->

    <div style="width: 100%; position: relative">
      <div class="text-image" style="left: 0">
        <div class="hello">
          <img class="image-2" src="@/assets/fengmian3.jpeg" />
        </div>
        <div class="description">
          <div style="font-size: 20px">外拍活動</div>
          <div style="color: blue">外拍活動</div>
        </div>
        <!-- <img
          
          class="image-2"
          src="@/assets/car3.jpeg"
        /> -->
        <div>
          <div style="font-size: 20px; display: inline-block; margin-top: 20px">
            聯絡方式:
          </div>
          <div style="display: inline-block">
            <a href="https://www.facebook.com/vhscar">
              <img
                style="width: 20px; height: 20px; margin-left: 10px"
                src="@/assets/fb.png"
              />
            </a>
            <img
              @click="showMore"
              style="
                width: 20px;
                height: 20px;
                margin-left: 10px;
                cursor: pointer;
              "
              src="@/assets/line.png"
            />
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

            <a href="https://www.instagram.com/ctwscar/">
              <img
                style="width: 20px; height: 20px; margin-left: 10px"
                src="@/assets/ig.png"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="text-image" style="right: 0; height: 100px">
        <div class="hello">
          <img class="image-2" src="@/assets/fengmian4.jpeg" />
        </div>
        <div class="description">
          <div style="font-size: 20px">活動展演</div>
          <div style="color: blue">活動展演</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onTabSelected(index) {
      // 0 1 2 3 4.. 0=> home
      this.$emit("onTabSelected", index);
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

<style scoped>
.home-root {
  background-color: red;
  width: 100%;
  height: 100%;
  text-align: left;
  /* padding: 0 20px; */
  /* padding-left: 20px; */
}
.half-screen{
  display: inline-block; width: calc(50% - 15px); 
}

.image-1 {
  width: 100%;
  margin-bottom: 10px;
  overflow-x: scroll;
  white-space: nowrap;
}
.text-image {
  /* cursor: pointer; */
  display: inline-block;
  width: calc(50% - 10px);
  position: absolute;
  top: 0;
  /* background-color: red; */
}
.image-2 {
  width: 100%;
  /* margin: 0 20px; */
}
/* .clicked-style {
  border-radius: 16px;
  border-width: 1px;
  border-style: solid;
  border-color: blue;
} */
.description {
  padding: 5px;
}
.content-wrapper {
  width: 100px;
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
.hello {
  /* background-color: pink; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  white-space: nowrap;
}

</style>