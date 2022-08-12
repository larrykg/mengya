<template>
  <div class="wrapper">
    <div id="nav-tabs">
      <md-button class="md-primary">
        公司简介
<!--        <md-tooltip md-direction="top">on top</md-tooltip>-->
      </md-button>
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <h3 style="text-align: center"><small>公司特点</small></h3>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-primary" md-alignment="left">
                <md-tab id="tab-home" md-label="服务范围" md-icon="face">
                  <div style="min-height: 200px">
                    &nbsp;&nbsp;华誉评级是国内最早的鉴定机构之一，经过长期的经验和技术积累，服务范围涵盖古钱、机制币、金银 币 、纪念币、硬币、纸币、邮票、徽章、奖章、像章等。
                    华誉的创建者早在2010年就开始组建专业的团队， 华誉团队是由丰富经验和专业知识的业内人士组建，历经三年的准备，在2013年 全面上市。
                    在这三年里， 华誉团队对钱币评级标准经过无数次的验证，确立了目前最准确的评级标准。
                    华誉力争成为最全面的第三方钱币鉴定评级公司。
                  </div>
                </md-tab>

                <md-tab id="tab-pages" md-label="评级标准" md-icon="chat">
                  <div style="min-height: 200px">
                    华誉评级本着严谨、公平、公正、负责任的态度，制定权威评级标准细则，以标准为唯一尺度，衡量收藏 价值及维护行业规范。
                    华誉主要由客户服务部、鉴定评级部、封装部、产品检验部、包装物流部、运行推广部、销售部、产品研发部、工厂生产部、人力资
                    源部等10个主要部门组成。
                    所有的员工都是经过严格的培训，有着丰富的业内知识。其中鉴定评级部和产品研发部，更是来自于业内的顶尖级人士组成。
                  </div>
                </md-tab>

                <md-tab id="tab-posts" md-label="评级查询" md-icon="build">
                  <div style="min-height: 200px">
                    本公司每个评品上面都有唯一的九位或者十三位查询编码，大家可根据编码查看该评品的详细信息及高清 图片，以便识别评品真伪。
                    华誉评级鉴定服务，已实现了对各个品种的中国古代、近代、现代钱币及世界各国的古代、近代、现代钱币，中国邮票、外国邮票，进行权威性专业性的评级与鉴定服务。
                    华誉评级旗下包括钱币评级NPGS，邮票评级SPGS鉴定评级服务。
                  </div>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <h3 style="text-align: center"><small>关于华誉</small></h3>
          <nav-tabs-card no-label>
            <template slot="content">
              <md-tabs class="md-primary" md-alignment="left">
                <md-tab id="tab-home" md-label="业界认可" md-icon="image">
                  <div style="min-height: 200px">
                    &nbsp;&nbsp;华誉拍卖在十余年间累创佳绩，其中现当代艺术，二〇〇六年春季推出的“中国当代艺术：从10到20”、二〇一〇年春季“郭骥、袁枢真珍藏二十世纪西画”等专题受到市场及学术界的一致好评；中国书画，二〇〇五年秋季首拍“黄天才成扇”专场、二〇〇八年秋季“介轩藏扇暨书画成扇精选”专场、二〇〇九年春季吴昌硕书画作品和书法长联两个专题、二〇一一年秋季“大美之境，炎黄之胄”专题等反响热烈；瓷器工艺品，二〇〇七年春季“凛然轩藏珍”、二〇一三年秋季“雍乾单色釉瓷撷英”、“智缘精舍藏金铜佛像”等专题均引起竞拍高潮；钱币邮品，二〇〇九年秋季“馨悟堂藏中国纸币”、二〇一一年春季“日安堂藏中国银锭”等专题均近百分之百成交，现场气氛火爆热烈。另有艺术图书专场拍卖2场，亦全部成交，大获好评。
                  </div>
                </md-tab>

                <md-tab id="tab-pages" md-label="业务准则" md-icon="help">
                  <div style="min-height: 200px">
                    华誉评级本着严谨、公平、公正、负责任的态度，制定权威评级标准细则，以标准为唯一尺度，衡量收藏 价值及维护行业规范。
                    华誉主要由客户服务部、鉴定评级部、封装部、产品检验部、包装物流部、运行推广部、销售部、产品研发部、工厂生产部、人力资
                    源部等10个主要部门组成。
                    所有的员工都是经过严格的培训，有着丰富的业内知识。其中鉴定评级部和产品研发部，更是来自于业内的顶尖级人士组成。
                  </div>
                </md-tab>

                <md-tab id="tab-posts" md-label="编码规则" md-icon="more">
                  <div style="min-height: 200px">
                    本公司每个评品上面都有唯一的九位或者十三位查询编码，大家可根据编码查看该评品的详细信息及高清 图片，以便识别评品真伪。
                    华誉评级鉴定服务，已实现了对各个品种的中国古代、近代、现代钱币及世界各国的古代、近代、现代钱币，中国邮票、外国邮票，进行权威性专业性的评级与鉴定服务。
                    华誉评级旗下包括钱币评级NPGS，邮票评级SPGS鉴定评级服务。
                  </div>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <h3><small>关于我们</small></h3>
          <nav-tabs-card no-label tabs-plain>
            <template slot="content">
              <md-tabs class="md-danger" md-alignment="left">
                <md-tab id="tab-home" md-label="公司理念">
                  <div style="min-height: 200px; text-align: center">
                    今后，我们将一如既往，铭记拍卖公司应扮演中立的桥梁角色，对每件拍品无分金额大小，一律投入最大心力，对每位客户一视同仁，坚守以诚为本的信条，坚持精品拍卖的风格，努力为建立一个成熟的、诚信的艺术品市场贡献自己的一份力量！                  </div>
                </md-tab>

                <md-tab id="tab-pages" md-label="公司历程">
                  <div style="min-height: 200px; text-align: center">
                    公司自创立以来，始终以弘扬社会主义核心价值观为己任，积极参与各种公益活动，比如自2015年起，一直按月向联合国儿童基金会提供捐赠；在2020年春季湖北省和武汉市疫情爆发时期，组织捐助现金约20万元及口罩上万只，获得湖北、云南等地多家单位的表扬与感谢。2021年3月底，在云南省弥勒市隆重举办公司成立十周年庆典暨钱币文化进校园公益捐赠活动时，吸引全国约700位嘉宾光临参与，来宾覆盖全国所有34个省市自治区及港澳台代表，进行了为期三晚四天的研讨交流活动。会议前后筹集到善款100多万，计划在未来一年通过中国致公党云南省委牵头，大部分以购买真品古钱币作为教材教具 。
                  </div>
                </md-tab>

                <md-tab id="tab-posts" md-label="公司贡献">
                  <div style="min-height: 200px; text-align: center">
                    在学术研究方面，2006年创始人段洪刚先生在中华书局出版《中国铜元分类研究》。2007年起受聘担任大型科研项目《中国钱币大辞典》编委、分卷主编、副主编等，为中国钱币科研事业做出了一定的贡献。此后段洪刚与华誉公司顾问、评级师等专家学者还主编、参编各类著作9部，2015年开始主持“中国华誉钱币收藏与鉴赏系列”丛书编著，至今已经出版6部，为普及宣传推广中国钱币收藏鉴赏事业做出一定的贡献，为扶持、培养更多研究型专家略尽绵薄之力。该丛书计划共出版约20种。
                  </div>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>

        <div class="md-layout-item md-size-50 md-small-size-100">
          <h3><small>公司氛围</small></h3>
          <nav-tabs-card no-label tabs-plain>
            <template slot="content">
              <md-tabs class="md-danger" md-alignment="left">
                <md-tab id="tab-home" md-label="政策指导">
                  <div style=" min-height: 200px;text-align: center">
                    2018年以来，我们以党和国家关于“供给侧改革”经济理论和政策为指引，积极调整公司经营策略，根据区域性行业需要，经过全面和慎重考察，设立了以西安为首的品牌授权加盟商体系，在全国共设立6家区域性加盟公司（西安、青岛、昆明、广州、长春、河北），1家香港公司，1家鉴定中心（澳门），这些分布在全国各地的机构，为各地区、各类型藏家、玩家、商家对华誉评级币的收藏需求提供了有力支撑和保障。
                  </div>
                </md-tab>

                <md-tab id="tab-pages" md-label="价值观念">
                  <div style="min-height: 200px;text-align: center">
                    公司自创立以来，始终以弘扬社会主义核心价值观为己任，积极参与各种公益活动，比如自2015年起，一直按月向联合国儿童基金会提供捐赠；在2020年春季湖北省和武汉市疫情爆发时期，组织捐助现金约20万元及口罩上万只，获得湖北、云南等地多家单位的表扬与感谢。2021年3月底，在云南省弥勒市隆重举办公司成立十周年庆典暨钱币文化进校园公益捐赠活动时，吸引全国约700位嘉宾光临参与，来宾覆盖全国所有34个省市自治区及港澳台代表，进行了为期三晚四天的研讨交流活动。会议前后筹集到善款100多万，计划在未来一年通过中国致公党云南省委牵头，大部分以购买真品古钱币作为教材教具 。
                  </div>
                </md-tab>

                <md-tab id="tab-posts" md-label="文化宣讲">
                  <div style="min-height: 200px;text-align: center">
                    在学术研究方面，2006年创始人段洪刚先生在中华书局出版《中国铜元分类研究》。2007年起受聘担任大型科研项目《中国钱币大辞典》编委、分卷主编、副主编等，为中国钱币科研事业做出了一定的贡献。此后段洪刚与华誉公司顾问、评级师等专家学者还主编、参编各类著作9部，2015年开始主持“中国华誉钱币收藏与鉴赏系列”丛书编著，至今已经出版6部，为普及宣传推广中国钱币收藏鉴赏事业做出一定的贡献，为扶持、培养更多研究型专家略尽绵薄之力。该丛书计划共出版约20种。
                  </div>
                </md-tab>
              </md-tabs>
            </template>
          </nav-tabs-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsCard
  }
};
</script>

<style lang="css"></style>
