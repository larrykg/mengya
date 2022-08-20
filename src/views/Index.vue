<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="image-wrapper">
            <img :src="leaf4" alt="leaf4" class="leaf4" v-show="leafShow"/>
            <img :src="leaf3" alt="leaf3" class="leaf3" v-show="leafShow"/>
            <img :src="leaf2" alt="leaf2" class="leaf2" v-show="leafShow"/>
            <img :src="leaf1" alt="leaf1" class="leaf1" v-show="leafShow"/>
            <div class="brand">
              <h1>一直在</h1>
              <h3>专业的评级</h3>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="alert alert-info">
        <div class="container">
          <button type="button" aria-hidden="true" class="close" @click="event => removeNotify(event,'alert-info')">
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b> 敬请关注 </b> : 华誉评级即将推出现时特惠活动敬请期待...
        </div>
      </div>
      <div v-if="false" class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Basic Elements111111</h2>
          </div>
          <basic-elements></basic-elements>
        </div>
      </div>

      <div v-if="false" class="section section-navbars">
        <div class="container">
          <small-navigation></small-navigation>
        </div>
        <navigation></navigation>
      </div>

      <div v-if="false" class="section section-tabs">
        <div class="container">
          <tabs></tabs>
        </div>
      </div>

      <div v-if="false" class="section section-white">
        <div class="container">
          <nav-pills></nav-pills>
        </div>
      </div>

      <div v-if="false" class="section section-notifications">
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <notifications></notifications>
      </div>


      <div v-if="false" class="section">
        <div class="container">
          <typography-images></typography-images>
        </div>
      </div>


<!--    跑马灯区域-->
      <Carousel/>

      <div v-if="false" class="section section-javascript">
        <div class="container">
          <javascript-components></javascript-components>
        </div>
      </div>

      <div class="main main-raised">


        <div class="section text-center">
          <div class="container">
            <h2 class="title">经典藏品</h2>
            <div class="team">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="team-player">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                            :src="teamImg1"
                            alt="Thumbnail Image"
                            style="width: 400px;height: 100px"
                            class="   "
                        />
                      </div>
                      <h4 class="card-title">
                        宣统年造大清银币伍角
                        <br/>
                        <!--                        <small class="card-description text-muted">Model</small>-->
                      </h4>

                      <md-card-content>
                        <p class="card-description">
                          宣统年造大清银币伍角“1/2DOL.”一枚，K-220/LM-25，奥地利维也纳造币厂设计制模，1910年度支部天津造币总厂铸造，小批量生产并未发行，通体浅灰色包浆，底光尚存
                        </p>
                      </md-card-content>


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
                            style="width: 400px;height: 100px"
                            class=" "
                        />
                      </div>
                      <h4 class="card-title">
                        户部光绪元宝二十文铜币样币
                        <br/>
                        <!--                        <small class="card-description text-muted">Designer</small-->

                      </h4>

                      <md-card-content>
                        <p class="card-description">
                          Y1903年户部光绪元宝二十文铜币样币一枚，Y-5/CL-HB.08a，属试样或留档样币性质，币坯制作精良，压力十足，马齿凌厉，图文深峻精美，底版充盈红铜光泽，精整度明显优于流通币，与中国钱币博物馆馆藏之户部二十文留档样币风格一致，存世极罕；据周沁园、李平文编著《中国机制铜元目录》记述，户部二十文样币目前私人收藏仅有二枚，另据孙浩先生考证，此版户部二十文流通币发行的时间和地点，并非晚清的天津总厂，而是1917年由湖北的武昌厂制作
                        </p>
                      </md-card-content>


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
                            style="width: 400px;height: 100px"
                            class="  "
                        />
                      </div>
                      <h4 class="card-title">
                        户部光绪元宝十文铜币
                        <br/>
                        <!--                        <small class="card-description text-muted">Model</small>-->
                      </h4>

                      <md-card-content>
                        <p class="card-description">
                          1903年户部光绪元宝十文铜币一枚，Y-4/CL-HB.04，边花阴蕊版，全深打，铜光颇佳，PCGS MS63RB，目前为该公司RB级评级纪录唯一冠军分
                        </p>
                      </md-card-content>


                    </md-card>
                  </div>
                </div>

              </div>
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="team-player">
                    <md-card class="md-card-plain">
                      <div class="md-layout-item md-size-50 mx-auto">
                        <img
                            :src="teamImg4"
                            alt="Thumbnail Image"
                            style="width: 400px;height: 100px"
                            class="   "
                        />
                      </div>
                      <h4 class="card-title">
                        丁未大清铜币十文
                        <br/>
                        <!--                        <small class="card-description text-muted">Model</small>-->
                      </h4>

                      <md-card-content>
                        <p class="card-description">
                          1905年乙巳户部大清铜币二十文一枚                        </p>
                      </md-card-content>


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
                            style="width: 400px;height: 100px"
                            class=" "
                        />
                      </div>
                      <h4 class="card-title">
                        光绪戊申中心“总”一文背二文部颁龙铜币样币
                        <br/>
                        <!--                        <small class="card-description text-muted">Designer</small-->

                      </h4>

                      <md-card-content>
                        <p class="card-description">
                          1908年光绪戊申中心“总”一文背二文部颁龙铜币样币一枚，CCC-642/CL-HB.50，度支部天津造币总厂试铸，未发行，存世稀少；样币铜质优良，压印深峻，龙图饱满，品相颇佳                        </p>
                      </md-card-content>


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
                            style="width: 400px;height: 100px"
                            class="  "
                        />
                      </div>
                      <h4 class="card-title">
                        己酉大清铜币二十文
                        <br/>
                        <!--                        <small class="card-description text-muted">Model</small>-->
                      </h4>

                      <md-card-content>
                        <p class="card-description">
                          909年己酉大清铜币二十文一枚，Y-21/CL-HB.63，细字宣统龙带点版                        </p>
                      </md-card-content>


                    </md-card>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="section">
          <div class="container">
            <div class="md-layout">
              <div
                  class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
              >
                <h2 class="title text-center">我们的组成</h2>
                <h5 class="description">
                  客户服务部、鉴定评级部、封装部、产品检验部、包装物流部、运行推广部、销售部、产品研发部、工厂生产部、人力资
                  源部等10个主要部门组成。
                  所有的员工都是经过严格的培训，有着丰富的业内知识。其中鉴定评级部和产品研发部，更是来自于业内的顶尖级人士组成。
                </h5>
              </div>
            </div>
            <div class="features text-center">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-info">
                      <md-icon>star</md-icon>
                    </div>
                    <h4 class="info-title">我们的理念</h4>
                    <p>
                      秉承用我们专业的技术、公正的操守、精细的做工、完美的服务，来最大化彰显您钱币的价值。
                    </p>
                  </div>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-success">
                      <md-icon>verified_user</md-icon>
                    </div>
                    <h4 class="info-title">我们的品质</h4>
                    <p>
                      秉承用我们专业的技术、公正的操守、精细的做工、完美的服务，来最大化彰显您钱币的价值。
                    </p>
                  </div>
                </div>
                <div class="md-layout-item md-medium-size-33 md-small-size-100">
                  <div class="info">
                    <div class="icon icon-danger">
                      <md-icon>help</md-icon>
                    </div>
                    <h4 class="info-title">我们的服务</h4>
                    <p>
                      评级鉴定服务，已实现了对各个品种的中国古代、近代、现代钱币及世界各国的古代、近代、现代钱币，中国邮票、外国邮票，进行权威性专业性的评级与鉴定服务。
                    </p>
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
      <tabs></tabs>

      <div v-if="false" class="section">
        <div class="container text-center">
          <div class="md-layout">
            <div
                class="md-layout-item md-size-66 md-xsmall-size-100 ml-auto mr-auto text-center"
            >
              <h2>Completed with examples</h2>
              <h4>
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. More importantly, looking at them will give you a picture of
                what you can built with this powerful kit.
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div v-if="false" class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
            <div
                class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center"
            >
              <login-card header-color="green">
                <h4 slot="title" class="card-title">Login</h4>
                <md-button
                    slot="buttons"
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                    slot="buttons"
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                    slot="buttons"
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">Or Be Classical</p>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>First Name...</label>
                  <md-input v-model="firstname"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model="email" type="email"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>lock_outline</md-icon>
                  <label>Password...</label>
                  <md-input v-model="password"></md-input>
                </md-field>
                <md-button slot="footer" class="md-simple md-success md-lg">
                  Get Started
                </md-button>
              </login-card>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false" class="md-layout">
        <div class="md-layout-item text-center">
          <md-button href="#/login" class="md-simple md-success md-lg"
          >View Login Page
          </md-button
          >
        </div>
      </div>
      <div v-if="false" class="section section-examples">
        <div class="container-fluid text-center">
          <div class="md-layout">
            <div class="md-layout-item">
              <a href="#/landing" target="_blank">
                <img
                    :src="landing"
                    alt="Rounded Image"
                    class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/landing" class="md-simple md-success md-lg"
              >View Landing Page
              </md-button
              >
            </div>
            <div class="md-layout-item">
              <a href="#/profile" target="_blank">
                <img
                    :src="profile"
                    alt="Rounded Image"
                    class="img-raised rounded img-fluid"
                />
              </a>
              <md-button href="#/profile" class="md-simple md-success md-lg"
              >View Profile Page
              </md-button
              >
            </div>
          </div>
        </div>
      </div>



      <div v-if="false" class="section section-download" id="downloadSection">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Do you love this UI Kit?</h2>
              <h4>
                Cause if you do, it can be yours for FREE. Hit the buttons below
                to navigate to our website where you can find the kit. Our
                friends from
                <a
                    href="https://themeisle.com/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website"
                    target="_blank"
                >ThemeIsle</a
                >
                created a Wordpress Theme which can be also downloaded for free.
                Start a new project or give an old Bootstrap project a new look!
              </h4>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <md-button
                  href="https://www.creative-tim.com/product/material-kit"
                  target="_blank"
                  class="md-success md-lg"
              ><i class="fab fa-html5"></i> Free HTML Download
              </md-button
              >
              <md-button
                  href="https://themeisle.com/themes/hestia/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website"
                  class="md-success md-lg"
                  target="_blank"
              ><i class="fab fa-wordpress"></i> Wordpress Theme
              </md-button
              >
            </div>
          </div>
          <br/><br/>

          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Want more?</h2>
              <h4>
                We've just launched
                <a
                    href="https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=utp-mk-demos"
                    target="_blank"
                >Vue Material Dashboard PRO</a
                >
                and
                <a
                    href="https://www.creative-tim.com/product/vue-material-kit-pro?ref=utp-vmk-demos"
                    target="_blank"
                >Vue Material Kit PRO</a
                >. Every product has a huge number of components, sections and
                example pages. Start Your Development With A Badass Bootstrap UI
                Kit inspired by Material Design.
              </h4>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="btn-container">
                <md-button
                    href="https://www.creative-tim.com/product/vue-material-kit-pro?ref=utp-vmk-demos"
                    class="md-button md-success md-lg md-upgrade"
                    target="_blank"
                >
                  <md-icon>unarchive</md-icon>
                  Vue Material Kit PRO
                </md-button
                >
                <md-button
                    href="https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=utp-vmd-demos"
                    class="md-button md-success md-lg md-upgrade"
                    target="_blank"
                >
                  <md-icon>unarchive</md-icon>
                  Vue Material Dashboard
                  PRO
                </md-button
                >
              </div>
            </div>
          </div>

          <div class="sharing-area text-center">
            <div class="md-layout">
              <div class="md-layout-item">
                <h3>Thank you for supporting us!</h3>
              </div>
            </div>

            <md-button class="md-twitter"
            ><i class="fab fa-twitter"></i>Tweet
            </md-button
            >
            <md-button class="md-facebook"
            ><i class="fab fa-facebook-square"></i> Share
            </md-button
            >
            <md-button class="md-google"
            ><i class="fab fa-google-plus"></i> Share
            </md-button
            >
            <md-button class="md-github"
            ><i class="fab fa-github"></i> Star
            </md-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import {LoginCard} from "@/components";
import  Carousel from './components/Carousel'
export default {
  components: {
    Carousel,
    BasicElements,
    Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,
    JavascriptComponents,
    LoginCard
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/coin/main.jpg")
    },
    header: {
      type: String,
      default: require("@/assets/img/coin/header.jpg")
    },
    leaf4: {
      type: String,
      default: require("@/assets/img/leaf4.png")
    },
    leaf3: {
      type: String,
      default: require("@/assets/img/leaf3.png")
    },
    leaf2: {
      type: String,
      default: require("@/assets/img/leaf2.png")
    },
    leaf1: {
      type: String,
      default: require("@/assets/img/leaf1.png")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/coin/main01.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/coin/main002.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/coin/main003.jpg")
    },
    teamImg4: {
      type: String,
      default: require("@/assets/img/coin/main004.jpg")
    },
    teamImg5: {
      type: String,
      default: require("@/assets/img/coin/005.jpeg")
    },
    teamImg6: {
      type: String,
      default: require("@/assets/img/coin/006.png")
    },
    teamImg7: {
      type: String,
      default: require("@/assets/img/coin/007.png")
    },
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null,
      leafShow: false,

    };
  },
  methods: {
    leafActive() {
      if (window.innerWidth < 768) {
        this.leafShow = false;
      } else {
        this.leafShow = false;
      }
    },
    removeNotify(e, notifyClass) {
      let target = e.target;
      while (target.className.indexOf(notifyClass) === -1) {
        target = target.parentNode;
      }
      return target.parentNode.removeChild(target);
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  },
  mounted() {
    this.leafActive();
    window.addEventListener("resize", this.leafActive);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.leafActive);
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
