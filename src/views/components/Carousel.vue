<template>
  <el-carousel  :interval="4000" type="card" height="400px">
    <el-carousel-item  v-for="(item,index) in configList" :key="index">
      <div class="content">
        <img @click="change(item.id)" :src="item.image_url" alt="">
        <h3 class="medium">{{ item.name }}</h3>
      </div>

    </el-carousel-item>
  </el-carousel>
</template>

<script>
import {getRotationInfo} from '@/api' ;
export default {
  name: "Carousel",
  data() {
    return {
      configList:[],
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
  async created() {
    let res = await getRotationInfo();
    if (res.status > 0) return this.$message.error("获取配置列表失败")
    this.configList = res.data.list
  },
  methods:{
    change(id){
      console.log(id);
      this.$router.push({path:'/detailList',query:{"detailListId":id}})
    }
  }
}
</script>

<style scoped>
.content{
  padding: 0px;
}
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
