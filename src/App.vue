<template>
  <div style="width: 100vw; height: 100vh" @click="onRootClicked">
    <Header :onOuterClicked="rootClickedEvent" />
    <!-- <input type="text" v-model.number="selectedTabIndex" /> -->
    <Nav :selectedIndex="selectedTabIndex" @onTabSelected="onTabSelected" />
    <Body :selectedIndex="selectedTabIndex" @onTabSelected="onTabSelected" />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Nav from "@/components/Nav.vue";
import Body from "@/components/body/Body.vue";
export default {
  name: "App",
  components: { Header, Nav, Body },
  data() {
    return {
      selectedTabIndex: 0,
      rootClickedEvent: 0,
      test: "3",
    };
  },
  mounted() {},
  watch: {
    selectedTabIndex(v) {
      console.log(v);
    },
  },
  methods: {
    onTabSelected(index) {
      this.selectedTabIndex = index;
    },
    onRootClicked() {
      this.rootClickedEvent++;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
