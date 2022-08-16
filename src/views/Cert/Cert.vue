<template>
  <div class="wrapper">
    <parallax
        class="section page-header header-filter"
        :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                      :src="img"
                      alt="Circle Image"
                      class="img-raised rounded-circle img-fluid"
                  />
                </div>
                <div class="name">
                  <h2 class="title">证书验证</h2>
                  <div v-if="false">
                    <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                    ></md-button>

                    <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                    ></md-button>

                    <md-button
                        href="javascript:void(0)"
                        class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                    ></md-button>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="description text-center">
            <p>
              只需输入认证编号，即可鉴定等级的钱币
              （日期、造帀厂厂标、面额、版别和等级将会显示）
            </p>
          </div>

          <div class=" text-center">
            <md-field>
              <label>证书验证</label>
              <md-input v-model="inputNo"></md-input>
              <span class="md-helper-text">请输入需要查询的编号</span>
            </md-field>
            <md-button class="md-success" @click="search">查询</md-button>
          </div>

          <!--          <md-button class="md-primary md-round classic-modal" @click="classicModal = true">提示</md-button>-->
          <modal v-if="classicModal" @close="classicModalHide">
            <template slot="header">
              <h4 class="modal-title">提示</h4>
              <md-button class="md-simple md-just-icon md-round modal-default-button" @click="classicModalHide">
                <md-icon>clear</md-icon>
              </md-button>
            </template>

            <template slot="body">
              <p> 请输入正确编号</p>
            </template>

            <template slot="footer">
              <md-button class="md-simple"></md-button>
              <md-button class="md-danger md-simple" @click="classicModalHide">关闭</md-button>
            </template>
          </modal>


          <div class="content">
            <el-descriptions v-if="tableData.length>0" :colon=true :title="product_info" :column="2" border>
              <el-descriptions-item :label="label.product_id" label-class-name="my-label">
                <el-tag size="small">{{ tableData[0].product_id }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.name">
                <el-tag size="small">{{ tableData[0].name }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.product_type">
                <el-tag size="small">{{ tableData[0].product_type }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.issue_time">
                <el-tag size="small">{{ tableData[0].issue_time }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.denomination">
                <el-tag size="small">{{ tableData[0].denomination }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.product_version">
                <el-tag size="small">{{ tableData[0].product_version }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.diameter">
                <el-tag size="small">{{ tableData[0].diameter }}*{{ tableData[0].thick }}mm</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.weight">
                <el-tag size="small">{{ tableData[0].weight }}g</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.level">
                <el-tag size="small">{{ tableData[0].level }} {{ tableData[0].score }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item :label="label.identify_result">
                <el-tag size="small">{{ tableData[0].identify_result }}</el-tag>
              </el-descriptions-item>

              <el-descriptions-item content-class-name="my-content" :label="label.desc"
                                    :contentStyle="{'text-align': 'left'}">
                {{ tableData[0].desc }}
              </el-descriptions-item>


            </el-descriptions>
          </div>

          <div class=" text-center">
            <p v-if="picUrl.length>0">{{ pikeImage }}</p>
            <el-image
                v-if="url.length>0"
                alt=""
                v-for="(imgUrl,index) in url"
                :key="index"
                style="display: block"
                :class="{ 'phone':isPhone,'normal':!isPhone}"
                :src="imgUrl.product_img"
                :preview-src-list="picUrl">
            </el-image>
          </div>


          <div style="height: 200px"></div>


          <div v-if="false" class="profile-tabs">
            <tabs
                :tab-name="['Studio', 'Work', 'Favorite']"
                :tab-icon="['camera', 'palette', 'favorite']"
                plain
                nav-pills-icons
                color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane1[0].image" class="rounded"/>
                    <img :src="tabPane1[1].image" class="rounded"/>
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane1[3].image" class="rounded"/>
                    <img :src="tabPane1[2].image" class="rounded"/>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane2[0].image" class="rounded"/>
                    <img :src="tabPane2[1].image" class="rounded"/>
                    <img :src="tabPane2[2].image" class="rounded"/>
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane2[3].image" class="rounded"/>
                    <img :src="tabPane2[4].image" class="rounded"/>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded"/>
                    <img :src="tabPane3[1].image" class="rounded"/>
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded"/>
                    <img :src="tabPane3[3].image" class="rounded"/>
                    <img :src="tabPane3[4].image" class="rounded"/>
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Tabs, Modal} from "@/components";

import {getProductInfo} from '@/api';

export default {
  components: {
    Tabs,
    Modal
  },
  bodyClass: "profile-page",
  data() {
    return {
      isPhone:false,
      url: [],
      picUrl: [],
      product_info: '产品信息',
      pikeImage: '',
      classicModal: false,
      tableData: [],
      inputNo: null,
      label: {},
      labelCh: {
        product_id: "产品ID:",
        name: "名称:",
        product_type: "类别:",
        issue_time: "年份:",
        denomination: "面额:",
        product_version: "版别:",
        diameter: "规格:",
        weight: "重量:",
        level: "等级:",
        identify_result: "鉴定结果:",
        desc: "备注:",
      },
      labelEn: {
        product_id: "Product ID:",
        name: "Name:",
        product_type: "Product Type:",
        issue_time: "Issue Time:",
        denomination: "Denomination:",
        product_version: "Version:",
        diameter: "Diameter:",
        weight: "Weight:",
        level: "Level:",
        identify_result: "Identify Result:",
        desc: "Des:",
      },
      tabPane1: [
        {image: require("@/assets/img/examples/studio-1.jpg")},
        {image: require("@/assets/img/examples/studio-2.jpg")},
        {image: require("@/assets/img/examples/studio-4.jpg")},
        {image: require("@/assets/img/examples/studio-5.jpg")}
      ],
      tabPane2: [
        {image: require("@/assets/img/examples/olu-eletu.jpg")},
        {image: require("@/assets/img/examples/clem-onojeghuo.jpg")},
        {image: require("@/assets/img/examples/cynthia-del-rio.jpg")},
        {image: require("@/assets/img/examples/mariya-georgieva.jpg")},
        {image: require("@/assets/img/examples/clem-onojegaw.jpg")}
      ],
      tabPane3: [
        {image: require("@/assets/img/examples/mariya-georgieva.jpg")},
        {image: require("@/assets/img/examples/studio-3.jpg")},
        {image: require("@/assets/img/examples/clem-onojeghuo.jpg")},
        {image: require("@/assets/img/examples/olu-eletu.jpg")},
        {image: require("@/assets/img/examples/studio-1.jpg")}
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/cert/mogen_001.jpeg")
    }
  },
  mounted() {
    let agent =  navigator.userAgent;
    if(!!agent.match(/AppleWebKit.*Mobile.*/)){
      this.isPhone = true
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    classicModalHide() {
      this.classicModal = false
    },
    submitCk(value) {
      let n = parseFloat(value);
      // console.log(isNaN(n));
      if (isNaN(n)) {
        return false
      } else return true
      // let reg = /\d/;
      // if (!reg.test(value)) {
      //   return false
      // }
    },
    async search() {

      this.tableData.splice(0, this.tableData.length > 0 ? this.tableData.length : 0);
      this.url.splice(0, this.url ? this.url.length : 0);
      this.picUrl.splice(0, this.picUrl ? this.picUrl.length : 0);

      //输入校验
      let inputFlag = this.submitCk(this.inputNo);
      if (!inputFlag) {
        this.classicModal = true;
        return
      }
      let res = await getProductInfo(this.inputNo);
      console.log("res---", res);
      if (res.status > 0) {
        this.classicModal = true
      }

      if (!res.data) {
        this.tableData.splice(0, 1);
        this.url.splice(0, this.url ? this.url.length : 0)
        return
      }

      this.tableData.push(res.data.list);
      if (res.data.list.lan === 'ch' || !res.data.list.lan) {
        Object.assign(this.label, this.labelCh);
        this.pikeImage = '点击放大蹄片';
        this.product_info = '产品信息'
      } else if (res.data.list.lan === 'en') {
        Object.assign(this.label, this.labelEn);
        this.pikeImage = 'Click to Enlarge The Picture';
        this.product_info = 'Product Info'
      }

      //this.url: 分张 this.picUrl:所有
      if (res.data.list.pic) {
        this.url = res.data.list.pic;
        console.log('this.url', this.url);
        console.log('res.data.list.pic', res.data.list.pic);

        if (res.data.list.pic) {
          res.data.list.pic.forEach(item => {
            this.picUrl.push(item.product_img)
          })
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.normal {
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  position: relative;
  left: 45%;
  display: block
}
.phone{
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  position: relative;
  left: 28%;
  display: block
}
.cert_input {
  width: 500px;
}

.section {
  padding: 0;
}

.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
