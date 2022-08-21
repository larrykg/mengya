<template>
  <el-carousel  :interval="4000" type="card" height="400px">
    <el-carousel-item  v-for="(item,index) in carouselImg" :key="index">
      <img @click="change(item.id)" :src="item.url" alt="">
      <h3 class="medium">{{ item.title }}</h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

export default {
  name: "Carousel",
  data() {
    return {
      carouselImg: [
        {
          url: require("@/assets/img/coin/main01.jpg"),
          title: '一个勺子',
          id:'9527'
        },
        {
          url: require("@/assets/img/coin/main002.jpg"),
          title: '一个勺子',
          id:'9528'
        },
        {
          url: require("@/assets/img/coin/main003.jpg"),
          title: '一个勺子',
          id:'9529'
        },
        {
          url: require("@/assets/img/coin/main004.jpg"),
          title: '一个勺子',
          id:'9530'
        }

      ]
    }
  },
  methods:{
    change(id){
      console.log(id);
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #000;
  font-size: 14px;
  opacity: 0.75;
  line-height: 400px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
