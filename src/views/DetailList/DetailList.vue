<template>
  <div class="wrapper">
    <parallax
        class="section  "
        :style="headerStyle"
    ></parallax>
    <div class="main main-raised">

      <div class="main_content">
        <div class="main_bread">
          <div style="display: inline-block">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>公司藏品</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>

        <div class="main_content_left">
          <h3>公司藏品</h3>

          <el-collapse v-model="activeIndex" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>

        <div class="main_content_right">
          <!--          此处为信息展示板块-->
          <div>
            <div class="right_img">
              <el-image
                  style="width: 60%; height: 60%"
                  :src="activeInfo.imageUrl"
                  :preview-src-list="activeInfo.srcList">
              </el-image>
              <!--              <h3>{{configObj.name}}</h3>-->
            </div>
            <div class="right_text">
              <div>
                <h3>{{ detailName }}</h3>
              </div>
              <hr>
              <div>
                <h3>简介</h3>
                <p>
                  {{ configObj.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div v-if="false" class="section text-center">
        <div class="container">
          <h2 class="title">Here is our team</h2>
          <div class="team">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                          :src="teamImg1"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Gigi Hadid
                      <br/>
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                          :src="teamImg2"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Carla Hortensia
                      <br/>
                      <small class="card-description text-muted"
                      >Designer</small
                      >
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-linkedin"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="team-player">
                  <md-card class="md-card-plain">
                    <div class="md-layout-item md-size-50 mx-auto">
                      <img
                          :src="teamImg3"
                          alt="Thumbnail Image"
                          class="img-raised rounded-circle img-fluid"
                      />
                    </div>
                    <h4 class="card-title">
                      Kendall Jenner
                      <br/>
                      <small class="card-description text-muted">Model</small>
                    </h4>

                    <md-card-content>
                      <p class="card-description">
                        You can write here details about one of your team
                        members. You can give more details about what they do.
                        Feel free to add some <a href="#">links</a> for people
                        to be able to follow them outside the site.
                      </p>
                    </md-card-content>

                    <md-card-actions class="text-center">
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-twitter"></i>
                      </md-button>
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-instagram"></i>
                      </md-button>
                      <md-button
                          href="javascript:void(0)"
                          class="md-just-icon md-simple"
                      >
                        <i class="fab fa-facebook-square"></i>
                      </md-button>
                    </md-card-actions>
                  </md-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false" class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Work with us</h2>
              <h4 class="text-center description">
                Divide details about your product or agency work into parts.
                Write a few lines about each one and contact us about any
                further collaboration. We will responde get back to you in a
                couple of hours.
              </h4>
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success">Send Message</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ElTree from "@/views/components/ElTree";
import {getSinRotationInfo} from '@/api' ;

export default {
  name: "DetailList",
  data() {
    return {
      configObj: {
        name:'',
        desc:''
      },
      activeIndex: '1',
      activeInfo: {
        imageUrl: ' ',
        srcList: []
      }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/detailList/listHeader.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/cert/mogen_001.jpeg")
    }
  },
  async created() {
    let detailListId = this.$route.query.detailListId;
    console.log(detailListId);
    let res = await getSinRotationInfo(detailListId);
    if (res.status > 0) return this.$message.error("获取配置列表失败")
    this.configObj = res.data.list[0];
    this.activeInfo.imageUrl = this.configObj.image_url;
    this.activeInfo.srcList.push(this.configObj.image_url)
    console.log(this.configObj);
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,

      };
    },
    detailName() {
      return this.configObj.name ? this.configObj.name : ''
    }
  },
}
</script>

<style scoped>
.main_bread {
  text-align: left;
  border-bottom: 1px solid #000;
}

.main_content {
  text-align: center;
  padding: 20px 10px;
}

.main_content_left {
  display: inline-block;
  min-height: 1300px;
  width: 20%
}

.main_content_right {
  display: inline-block;
  padding: 66px 0 0 0;
  width: 60%;
}

.right_img {

}
</style>
