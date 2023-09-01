<script setup>
import { onMounted,ref,computed } from "vue";
import { GetAgentInfo, GetScrollText,GetUserBalance,GetServicLink } from "@/api/user";
import global from '@/api/global'
import AES from "@/api/aes";
import { useStore } from "vuex";
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import SwiperCore, {
    Autoplay, EffectFade
} from 'swiper';

const store = useStore()
const loginId = ref('')
const marqueeTxt = ref('')
const agentInfo = ref(null)
const loginState = computed(() => store.getters["user/LOGIN_STATE"]);
const gameEnterInfo = computed(() => store.getters["user/GAME_USER_INFO"]);


function GetAgentdata(domain) {
      var en = global.en;
      const data = JSON.stringify({ domain: domain });
      let endata = AES.encrypt(data, en);
      console.log(endata);
      GetAgentInfo({ data: endata })
        .then((res) => {
          var body = res?.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg, "response msg of created");
          if (msg?.JsonData?.code == 200) {
            store.commit('user/Agent_Info',msg?.JsonData)
            agentInfo.value = msg?.JsonData
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }



    function GetScrollData(){
      var en = global.en;
      const data = JSON.stringify({ Id: loginId.value });
      let endata = AES.encrypt(data, en);

      GetScrollText({ data: endata })
        .then((res) => {
          var body = res.data;
          var msg = JSON.parse(AES.decrypt(body, en));
          console.log(msg, "scroll");
          if (msg?.JsonData?.code == 200) {
            //this.$store.commit("SCROLL_DATA", msg.JsonData.msg);
            marqueeTxt.value = msg?.JsonData?.msg
            store.commit("user/Marquee",msg?.JsonData?.msg );
          } 
        })
        .catch((e) => {
          console.log(e);
        });
    }

const goGame = () => {
  var gameEn = global?.gameEn;
  let data = {
    name: gameEnterInfo?.value?.name,
    password: gameEnterInfo?.value?.pw,
  };
  var endata = AES.encrypt(JSON.stringify(data), gameEn);
  if(agentInfo?.value?.gameAddr == null || agentInfo?.value?.gameAddr == undefined || agentInfo?.value?.gameAddr == '') return
  if (loginState?.value) {
    window.open(
      "http://" +
      agentInfo?.value?.gameAddr +
      `?token=${endata}`
    );
  } else {
    window.open("http://" +
      agentInfo?.value?.gameAddr +
      `?token=`)
  }
}

const goDownSite = () => {
  if(agentInfo?.value?.downloadUrl){
    window.open(agentInfo?.value?.downloadUrl)
  }
}

const goSite = () => {
  window.open('https://www.okx.com/')
}

 onMounted(() => {
   //var url = "www.lb888.vip";
  var url = window.location.host;
   GetAgentdata(url)
  GetScrollData()
 })

</script>

<template>
  <div class=" h-full text-white w-full  ">
    <div class="main">
      <div class="bannerBox relative h-[517px]">
        <div class="w-[1100px] mx-auto my-0 relative h-full">
          <div class="absolute h-[180px] w-[377px]   right-0 top-[20px]  ">
            <swiper :loop="true" :modules="[Autoplay]" class="mySwiper h-full w-full "
                :autoplay='{
                    "delay": 2500,
                    "disableOnInteraction": false,
                }'>
                <swiper-slide class="">
                    <img src="@/assets/pc/home/1.png" alt="" class="w-full h-full object-cover z-10">
                </swiper-slide>
                <swiper-slide class="">
                    <img src="@/assets/pc/home/2.png" alt="" class="w-full h-full object-cover z-10">
                </swiper-slide>
                <swiper-slide class="">
                    <img @click="goSite()" src="@/assets/pc/home/3.png" alt="" class="w-full h-full object-cover z-10">
                </swiper-slide>
                <swiper-slide class="">
                    <img @click="goSite()" src="@/assets/pc/home/4.png" alt="" class="w-full h-full object-cover z-10">
                </swiper-slide>
                <swiper-slide class="">
                    <img src="@/assets/pc/home/5.png" alt="" class="w-full h-full object-cover z-10">
                </swiper-slide>
                <swiper-slide class="">
                    <img src="@/assets/pc/home/6.png" alt="" class="w-full h-full object-cover z-10">
                </swiper-slide>
            </swiper>
          </div>
          <div class="absolute bottom-0 w-[1108px] h-[45px]  mx-auto my-0 marquee_bg">
            <!-- <marquee behavior="" direction="">ddddddddddddddddddddddddddddd</marquee> -->
            <div class="py-[10px] pl-[120px] pr-[20px]  h-full text-[#e3a497]">
              <Vue3Marquee :delay="1" :duration="100"  class=" pt-[5px] text-center overflow-y-hidden">☞
                {{marqueeTxt || '☞ 欢迎进入联博娱乐官方网站！数字货币彩金已派送！尊敬的贵宾：凡使用数字货币充值取款，可享当天第一笔数字货币充值金额的5%~8%真人彩金，每天都送，赠送无上限。彩金统一派送时间为北京时间晚上12:00'}}
              </Vue3Marquee>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="section_one">
        <div class="w-[1100px] min-w[1100px] mx-auto my-0 relative">
          <div class="pt-[20px]  ">
            <div class="inline-flex w-[166px] h-[219px] mr-[20px]  section_one_hover  ">
              <a @click="goGame()" class="text-center text-[15px] h-full flex flex-col justify-center items-center w-full">
                <img src="@/assets/pc/baccarat.png" alt=""
                  class="h-[130px] w-[114px]">
                <p>百家乐</p>
                <span class="text-[12px] mt-[5px] text-[#735954]">Baccarat</span>
              </a>
            </div>
            <div class="inline-flex w-[166px] h-[219px] mr-[20px] section_one_hover ">
              <a @click="goGame()" class="text-center text-[15px] h-full flex flex-col justify-center items-center w-full">
                <img src="@/assets/pc/dragon.png" alt=""
                  class="h-[130px] w-[114px]">
                <p>龙虎</p>
                <span class="text-[12px] mt-[5px] text-[#735954]">Dragon Tiger</span>
              </a>
            </div>
            <div class="inline-flex w-[166px] h-[219px] mr-[20px]  section_one_hover">
              <a @click="goGame()" class="text-center text-[15px] h-full flex flex-col justify-center items-center w-full">
                <img src="@/assets/pc/cowcow.png" alt=""
                  class="h-[130px] w-[114px]">
                <p>牛牛</p>
                <span class="text-[12px] mt-[5px] text-[#735954]">Niu Niu</span>
              </a>
            </div>
            <div class="inline-flex w-[166px] h-[219px] mr-[20px] section_one_hover  ">
              <a @click="goGame()" class="text-center text-[15px] h-full flex flex-col justify-center items-center w-full">
                <img src="@/assets/pc/GlodenFlower.png" alt=""
                  class="h-[130px] w-[114px]">
                <p>炸金花</p>
                <span class="text-[12px] mt-[5px] text-[#735954]">Fried Golden Flower</span>
              </a>
            </div>
            <div class="inline-flex w-[166px] h-[219px] mr-[20px] section_one_hover  ">
              <a @click="goGame()" class="text-center text-[15px] h-full flex flex-col justify-center items-center w-full">
                <img src="@/assets/pc/bobbin.png" alt=""
                  class="h-[130px] w-[114px] ">
                <p>推筒子</p>
                <span class="text-[12px] mt-[5px] text-[#735954]">Push the Bobbin</span>
              </a>
            </div>
            <div class="inline-flex w-[166px] h-[219px] section_one_hover  ">
              <a @click="goGame()" class="text-center text-[15px] h-full flex flex-col justify-center items-center w-full">
                <img src="@/assets/pc/sizepoint.png" alt=""
                  class="h-[130px] w-[114px]  ">
                <p>大小点</p>
                <span class="text-[12px] mt-[5px] text-[#735954]">SizePoint</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <section class="section_two  px-0 pt-10 h-[350px] ">
        <div class="mx-auto my-0 relative w-[1100px] ">
          <div class="w-[395px] pb-2">
            <p class="mb-[26px]">
              <img src="@/assets/pc/homeimgtext01.png" alt="">
            </p>
            <p class="text-[#9c746b] leading-5 mb-[30px]">
              全新手机服务体验，新颖的设计更好玩更便捷，汇聚了诸多精彩游戏为您呈现，各国博彩精英，世界博彩服务团队，享受随时随地，足不出户的博彩，游戏新人生！</p>
            <div class="link hover:ml-[10px] mt-4">
              <a @click="goGame" target="_blank"  class="text-white ">
                <img src="@/assets/pc/homelink01.png" alt="">
              </a>
              <!-- <img src="@/assets/pc/qr-code.png" alt=""
                class="w-[90px] mr-[15px] h-[85px]"> -->
            </div>
                 
          </div>
          <div class="mt-[25px] w-[225px] absolute top-0 right-0 pl-[35px] border-l border-l-[#362928] ">
            <div v-if="agentInfo?.downloadUrl"  class="mb-[20px] inline-flex  h-[100px] ">
              <vue-qr class=" h-full" v-bind:text="agentInfo?.downloadUrl"  :margin="5" />
              <!-- <img src="@/assets/pc/qr-code.png" alt=""
                class="w-[90px] mr-[15px] h-[85px]"> -->
              <div class="mx-3 w-[70px]">
                <img src="@/assets/pc/qrcode.png" alt="" class="w-full ">
              </div>
            </div>
            <p class="mb-[27px] text-[#654e4a]">
              <span class="text-white mb-[7px] text-[13px] whitespace-nowrap">手机输入网址： <a @click="goGame" target="_blank"
                  class="text-[15px] text-[#ffdc4a] cursor-pointer">{{agentInfo?.gameAddr}}</a>
                登录
              </span><br /><br />
              本产品支持所有IOS及安卓移动设备
            </p>
            <div class="mobile">
              <img src="@/assets/pc/phoneicon.png" alt="">
            </div>
          </div>
        </div>
      </section>
      <!-- section 3 -->
      <section class="section_3 py-[60px] bg-[#241d1c]">
        <div class="mx-auto my-0 w-[1100px] min-w-[1100px] relative">
          <ul class="w-full inline-flex list-none">
            <li class="w-[350px] mr-[25px] ">
              <p class="ml-[5px] mb-3">
                <img src="@/assets/pc/homeabouttxt.png" alt="">
              </p>
              <div class="w-full h-[120px] overflow-hidden mb-[10px] cursor-pointer ">
                <img src="@/assets/pc/homeaboutphoto.jpg" alt="" class="_img">
              </div>
              <p class="text-[12px] leading-5 text-[#9c746b]">缅甸联博娱乐集团，持缅甸合法经营牌照，受缅甸博彩监察协调局监督。斥资1.6亿人民币，致力于打造五星级酒店、娱乐城一体化企业。缅甸真人实体赌场及线上博彩领导者...</p>
            </li>
            <li class="w-[350px] mr-[25px] ">
              <p class="ml-[5px] mb-3">
                <img src="@/assets/pc/homeour.png" alt="">
              </p>
              <div class="w-full h-[120px] overflow-hidden mb-[10px] cursor-pointer ">
                <img src="@/assets/pc/homeourphoto.jpg" alt="" class="_img">
              </div>
              <p class="text-[12px] leading-5 text-[#9c746b]">
                全网最高信誉，从联博娱乐开始！作为缅甸真人实体赌场及国际专业的网上博彩游戏领导者，我们承诺，为每一位客户提供最安全、最公平的博彩游戏，以及全方位的服务...

              </p>
            </li>
            <li class="w-[350px] mr-[25px] ">
              <p class="ml-[5px] mb-3">
                <img src="@/assets/pc/homeadv.png" alt="">
              </p>
              <div class="w-full h-[120px] overflow-hidden mb-[10px] cursor-pointer ">
                <img src="@/assets/pc/homeadvphoto.jpg" alt="" class="_img">
              </div>
              <p class="text-[12px] leading-5 text-[#9c746b]">
                联博娱乐集团，全方位提供：百家乐、龙虎、牛牛、炸金花、推筒子、大小点游戏等。精挑细选各种娱乐游戏，给您提供最好的选择。每一局游戏结果均为现场真实的游戏结果...

              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.bannerBox {
  background: url(@/assets/pc/homeb.jpg) no-repeat center top;
  ;
}

.marquee_bg {
  background: url(@/assets/pc/marqueebg.png);
}

.section_one {
  position: relative;
  background: url(@/assets/pc/section1bg.jpg) no-repeat center top;
}

.section_one_hover:hover {
  background: url(@/assets/pc/sectionhover.png) no-repeat center top;

}

.section_one_hover:hover span,
.section_one_hover:hover p {
  color: #ffdc4a !important;
}

.section_two {
  background: #1C1616 url(@/assets/pc/section2bg.jpg) no-repeat center top;
  background-size: cover;
  border-top: 1px solid #372826;
    border-bottom: 1px solid #372826;
    background-color: #1C1616;
}

.link {
  transition: all 0.4s;
}

._img {
  transition: all .4s ease-in-out;
}

._img:hover {
  transform: scale(1.1);
}

</style>