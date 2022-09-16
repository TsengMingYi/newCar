<template>
  <div class="root">
    <Home v-show="selectedIndex == 0" @onTabSelected="onTabSelected" />
    <div v-show="selectedIndex == 1">
      <div class="hello">
        <img class="image-1" src="@/assets/beijing.jpg" />
      </div>
      <div style="padding-left: 10px; overflow-x: scroll; overflow-y: scroll">
        <h3>
          6825
          超跑俱樂部位於台中市，起初是因為喜愛玩車而組成，家中車種以法拉利、麥拉倫、保時捷、奧迪、寶馬等品牌為主（會不定時更換車種），也因車種眾多，決定多方經營，同時也歡迎志同道合的人能一起合作，攜手共創美好未來。
          6825諧音是“老婆愛我”
          ,希望每一對情侶都能幸福的步入禮堂，因此，我們的車牌都是6825，希望能藉此讓
          6825
          大家族可以一同“沾沾新人喜氣”，也希望有超跑夢的人可以讓6825來完成您的夢想。
        </h3>
      </div>
      <!-- <h3 style="text-align: center">Services We Offer</h3>
      <h2 style="text-align: center">車種價格一覽表</h2> -->
      <!-- <table style="width: 100%">
        <thead>
          <tr>
            <th>車款車種</th>
            <th>租金</th>
            <th>財力證明</th>
            <th>每日限駛里程</th>
            <th>超程費用</th>
            <th>超時費用</th>
          </tr>
        </thead>
        <tfoot></tfoot>
        <tbody>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
          <tr>
            <th scope="row">
              <div>法拉利</div>
            </th>
            <td data-title="每日租金">NT95,000</td>
            <td data-title="財力證明">YES</td>
            <td data-title="每日限駛里程">120Km</td>
            <td data-title="超程費用">NT$900/km</td>
            <td data-title="超時費用">NT$9000/h</td>
          </tr>
        </tbody>
      </table> -->
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
    <CarIntroduction v-show="selectedIndex == 2" />
    <div v-show="selectedIndex == 3">
      <div class="QRCSuccess">
        <img class="mdQrCode" src="@/assets/fb2.png" />
        <div style="text-align: center" class="hello1">
          <h3>Facebook</h3>
        </div>
        <img class="mdQrCode" src="@/assets/line2.png" />
        <div style="text-align: center" class="hello1">
          <h3>Line</h3>
        </div>

        <img class="mdQrCode" src="@/assets/ig2.png" />
        <div style="text-align: center" class="hello1">
          <h3>Instagram</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "@/components/body/page/Home.vue";
import CarIntroduction from "@/components/body/page/CarIntroduction.vue";
export default {
  components: {
    Home,
    CarIntroduction,
  },
  props: {
    selectedIndex: Number,
  },
  data() {
    return {
      isShow: false,
    };
  },

  methods: {
    showMore() {
      this.isShow = true;
    },
    closeMore() {
      this.isShow = false;
    },
    onTabSelected(index) {
      this.$emit("onTabSelected", index);
    },
  },
};
</script>

<style scoped>
.root {


  width: 100%;
  height: calc(100% - 140px);
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
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
.image-1 {
  width: 100vw;
  margin-bottom: 50px;
  overflow-x: scroll;
  white-space: nowrap;
  padding-left: 20px;
}
.home-root {
  width: 100%;
  height: 100%;
  /* padding: 0 10px; */
}
.hello {
  /* background-color: pink; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.car-block {
  display: inline-block;
  width: 30vw;
  /* width: 230px; */
  padding-left: 10px;
  padding-right: 10px;
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
.hello1 {
  /* background-color: blue; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.QRCSuccess {
  margin: 60px 0 0;
  text-align: center;
}
.QRCSuccess .mdQrCode {
  margin: 0 auto;
  width: 250px;
  height: 250px;
  border: #cdcdcd 1px solid;
}
</style>




