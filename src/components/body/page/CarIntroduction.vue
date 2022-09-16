<template>
  <div class="car-introduction-root">
    <div v-show="!selectedCarData">
      <div
        style="font-weight: bold"
        @click="onCarClicked(carData.carId)"
        class="car-block"
        v-for="carData in carDataProvider.allCarData"
        :key="carData.carId"
      >
        <img style="cursor: pointer" class="car-img" :src="carData.images[0]" />
        <div style="text-align: center;font-size:20px" class="hello1">{{ carData.carName }}</div>
      </div>
    </div>

    <div v-show="selectedCarData">
      <div
        class="tab-item"
        style="padding: 10px 10px 10px 10px; width: 200px"
        @click="returnCarChoose"
      >
        返回;
      </div>
      <div style="text-align: center; font-weight: bold">
        <h1>{{ selectedCarData ? selectedCarData.carName : "" }}</h1>
        
      </div>
      <!-- {{ selectedCarData ? selectedCarData.carName : "" }} -->
      <div class="hello">
        <img
          style="width: 100%; margin: 0 30px"
          :src="selectedCarImages[selectedImgIndex]"
        />
      </div>

      <div style="width: 100%; text-align: center">
        <div
          @click="onCarImageIndexSelected(index)"
          class="car-img-block"
          :class="[{ 'car-img-block-selected': selectedImgIndex == index }]"
          v-for="(img, index) in selectedCarImages"
          :key="index"
        >
          <img style="cursor: pointer;width: 100%" :src="selectedCarImages[index]" />
        </div>
      </div>
    </div>

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
        style="width: 20px; height: 20px; margin-left: 10px; cursor: pointer"
        src="@/assets/line.png"
      />
      <transition name="detail">
        <div class="more-wrapper" v-if="isShow">
          <div class="more-content">
            <h1 style="color: chartreuse">LINE</h1>
            <img style="width: 50%; height: 50%" src="@/assets/line2.png" />
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
</template>

<script>
import carDataProvider from "@/manager/CarDataProvider.js";
export default {
  data() {
    return {
      // todo test
      carDataProvider: carDataProvider,
      selectedCarData: undefined,
      selectedImgIndex: 0,
      isShow: false,
    };
  },
  computed: {
    selectedCarImages() {
      if (this.selectedCarData) {
        return this.selectedCarData.images;
      }
      return [];
    },
  },
  methods: {
    showMore() {
      this.isShow = true;
    },
    closeMore() {
      this.isShow = false;
    },

    onCarClicked(carId) {
      this.selectedCarData = carDataProvider.getCarDataById(carId);
      this.selectedImgIndex = 0;
      //   var x = {
      //       aa: 'd',
      //       name: 'hu',
      //       xyz: {
      //           aaa: 'rr',
      //           age: 12,
      //           family: {
      //               persons: [1,2,3, {
      //                   aaa: 'ooo'
      //               }]
      //           }
      //       }
      //   };
    },
    returnCarChoose() {
      this.selectedCarData = undefined;
    },
    onCarImageIndexSelected(index) {
      this.selectedImgIndex = index;
    },
  },
};
</script>

<style scoped>
.car-introduction-root {
  width: 100%;
  height: 100%;
}
.car-img {
  width: 100%;
  /* height: 200px; */
}
.car-img-block {
  width: 100px;
  display: inline-block;
  opacity: 0.3;
}
.car-img-block-selected {
  opacity: 1;
}
.car-block {
  display: inline-block;
  width: 30vw;
  /* width: 230px; */
  padding-left: 10px;
  padding-right: 10px;
}
.vue-select-image {
  display: flex;
  justify-content: center;
}
.content {
  margin: 0 20px;
}
.centered {
  text-align: center;
}
.vue-select-image__img {
  -webkit-user-drag: none;
  display: block;
  width: 30vw;
  /* max-width: 100%; */
  margin-right: auto;
  margin-left: auto;
}
.vue-select-image__thumbnail--selected {
  background: #08c;
}
.vue-select-image__thumbnail {
  cursor: pointer;
  display: block;
  padding: 4px;
  line-height: 20px;
  border: 1px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px rgb(0 0 0 / 6%);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.055);
  box-shadow: 0 1px 3px rgb(0 0 0 / 6%);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.vue-select-image__wrapper {
  overflow: auto;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.vue-select-image__item {
  margin: 0 12px 12px 0;
  float: left;
}
.vue-select-image__lbl {
  line-height: 3;
}
.tab-item:hover {
  color: red;
  cursor: pointer;
  transition: 0.6s;
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
  width: 30%;
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
.hello {
  /* background-color: blue; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
  white-space: nowrap;
}
.hello1 {
  /* background-color: blue; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
</style>