<template>
  <div style="width: 100vw; height: 100vh" @click="onRootClicked">
    <Header :onOuterClicked="x" @testtest="onTestTest"/>
    <Nav :selectedIndex="selectedTabIndex" @onTabSelected="onTabSelected"/>
    <Body :selectedIndex="selectedTabIndex" />
    <!-- <h1 @click="testClicked">hello</h1>
    <h1 v-on:click="testClicked">{{z.a}}</h1>
    <h1 id="testClick">hello</h1>
    <h1>{{ x }}</h1> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Body from '@/components/body/Body.vue'
export default {
  name: "App",
  components: {Header,Nav,Body},
  data() {
    return {
      selectedTabIndex: 0,
      x: 55555,
      headerIndex: 1,
    
    };
  },
  mounted() {
   
   
  },
  methods:{
    onTabSelected(index){
      this.selectedTabIndex = index;
    },
    onRootClicked(){
      // console.log('onRootClicked');  
      this.x++;
      // method 1, here detect the state of header, 
      // if pop is visible, then deliver clicked event to header
      // else do nothing
    },
    onTestTest(xxx){
      this.headerIndex = xxx;
    }
  
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
