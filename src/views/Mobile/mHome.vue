<script setup>
import { onMounted, ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import {
  UserIcon,
  CurrencyYenIcon,
  LogoutIcon,
  HomeIcon,
  XCircleIcon,
} from "@heroicons/vue/outline";
import vueQr from "vue-qr/src/packages/vue-qr.vue";

// import Swiper core and required modules
import SwiperCore, { Autoplay, EffectFade } from "swiper";
import { GetAgentInfo, GetUserBalance } from "@/api/user";
import global from "@/api/global";
import AES from "@/api/aes";
import { useStore } from "vuex";

const store = useStore();
const balance = ref("");
const agentInfo = ref(null);
const loginState = computed(() => store.getters["user/LOGIN_STATE"]);
const gameEnterInfo = computed(() => store.getters["user/GAME_USER_INFO"]);
const LoginResponseInfo = computed(() => store.getters["user/LOGIN_INFO"]);

const isshowWx = ref(false);
const isshowQQ = ref(false);
const isshowPhone = ref(false)

const goService = () => {
  isshowQQ.value = false;
  isshowWx.value = false;
   isshowPhone.value = false;
  let url = agentInfo?.value?.customerAddr;
  if (agentInfo?.value) {
    if (loginState?.value) {
      let loginId = LoginResponseInfo?.value?.Id;
      let loginName = LoginResponseInfo?.value?.username;
      let splitedUrl = url?.split("=");
      let nick_name = `&nick_name=${loginName}`;
      let cusUrl =
        splitedUrl[0] +
        "=" +
        loginId +
        splitedUrl[1] +
        "=" +
        splitedUrl[2] +
        "=" +
        splitedUrl[3] +
        "=" +
        splitedUrl[4] +
        "=" +
        splitedUrl[5] +
        nick_name;
      window.open(cusUrl);
    } else {
      window.open(url);
    }
  }
};

function handleScroll() {
  let scrollTop = document.documentElement.scrollTop;
  console.log(document.documentElement.scrollTop);
  if (scrollTop > 200) {
    //this.flag_scroll = true;
  } else {
    //this.flag_scroll = false;
  }
}

const closeIcon = () => {
  isshowQQ.value = false;
  isshowWx.value = false;
  isshowPhone.value = false
};

function toTop() {
  isshowQQ.value = false;
  isshowWx.value = false;
  isshowPhone.value = false;
  document.getElementById("_top").scrollIntoView({ behavior: "smooth" });

  // window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
}

const clickInfo = (number) => {
  switch (number) {
    case 0:
        isshowPhone.value = !isshowPhone.value
      isshowQQ.value = false
      isshowWx.value = false
     break;
    case 1:
        isshowWx.value = false;
       isshowPhone.value = false
      isshowQQ.value = !isshowQQ.value
      break;
    case 2:
      isshowQQ.value = false;
       isshowPhone.value = false;
      isshowWx.value = !isshowWx.value
      break;

    default:
      break;
  }
};

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
        store.commit("user/Agent_Info", msg?.JsonData);
        agentInfo.value = msg?.JsonData;
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
  if (
    agentInfo?.value?.gameAddr == null ||
    agentInfo?.value?.gameAddr == undefined ||
    agentInfo?.value?.gameAddr == ""
  )
    return;
  if (loginState?.value) {
    window.open("http://" + agentInfo?.value?.gameAddr + `?token=${endata}`);
  } else {
    window.open("http://" + agentInfo?.value?.gameAddr + `?token=`);
  }
};

const Logout = () => {
  window.location.reload();
};

const goDownSite = () => {
  if (agentInfo?.value?.downloadUrl) {
    window.open(agentInfo?.value?.downloadUrl);
  }
};

function UserBalance() {
  if (loginState.value) {
    var en = global.en;
    let data = JSON.stringify({
      Id: LoginResponseInfo?.value?.Id,
      token: "",
    });
    console.log(data);
    let endata = AES.encrypt(data, en);
    GetUserBalance({ data: endata })
      .then((res) => {
        var body = res.data;
        var msg = JSON.parse(AES.decrypt(body, en));
        console.log("userbalanceeeeeeeeeeeeeeeeeee", msg);
        if (msg?.JsonData?.code == 200) {
          balance.value = msg?.JsonData?.balance;
        }
      })
      .catch((e) => {
        console.log(e.toString());
        //   return this.$message.warning(e.toString());
      });
  }
}

onMounted(() => {
  toTop();
  //console.log(window.scrollTo({top:0}));
  //var url = "www.lb888.vip";
    var url = window.location.host;
  GetAgentdata(url);
  UserBalance();
  //   GetScrollData()
});
</script>


<template>
  <div class="h-full w-full text-[#C58D16] relative">
    <section class="fixed right-3 bottom-[200px] z-30">
    <div
      class="flex flex-col items-center text-[14px] mb-2 "
    >
      <img
        @click="goService"
        src="@/assets/mobile/ic_kf.svg"
        alt=""
        class="w-10"
      />
    </div>

    <div v-if="agentInfo?.phone"
     
      @click="clickInfo(0)"
      class="flex flex-col items-center mb-2 "
    >
      <img src="@/assets/pc/home/ic_shouji.png" alt="" class="w-10 z-10" />
    </div>
    <div v-if="agentInfo?.WXH"
     
      @click="clickInfo(2)"
      class="flex flex-col items-center mb-2 "
    >
      <img src="@/assets/pc/home/ic_wechat.svg" alt="" class="w-10 z-10" />
    </div>
    <div v-if="agentInfo?.QQ"
     
      @click="clickInfo(1)"
      class="flex flex-col items-center  z-30 mb-2"
    >
      <img src="@/assets/pc/home/ic_qq.svg" alt="" class="w-10 z-10" />
    </div>
    <div
      @click="toTop"
      class="flex flex-col items-center  z-30"
    >
      <img src="@/assets/pc/home/ic_top.svg" alt="" class="w-10 z-10" />
    </div>

    <div
      v-if="isshowPhone && agentInfo?.phone"
      class=" z-30  px-2 bg-[#3a3a3a] text-white h-[40px] leading-[40px] text-sm fixed right-20 bottom-[200px]"
    >
      <span class="w-[100px]">{{ agentInfo?.phone }}</span>
      <div @click="closeIcon" class="absolute -top-8 -right-2 font-bold z-50">
        <XCircleIcon class="w-8 h-8 text-[#ee3131] font-bold"></XCircleIcon>
      </div>
    </div>

    <div
      v-if="isshowQQ && agentInfo?.QQ"
      class=" z-30  px-2 bg-[#3a3a3a] text-white h-[40px] leading-[40px] text-sm fixed right-20 bottom-[200px]"
    >
      <span class="w-[100px]">{{ agentInfo?.QQ }}</span>
      <div @click="closeIcon" class="absolute -top-8 -right-2 font-bold z-50">
        <XCircleIcon class="w-8 h-8 text-[#ee3131] font-bold"></XCircleIcon>
      </div>
    </div>

    <div
     v-if="isshowWx && agentInfo?.WXH"
      class="  px-2 text-white h-[40px] leading-[40px] text-sm fixed right-20 bottom-[200px]"
    >
      <vue-qr class="w-40" v-bind:text="agentInfo?.WXH" :margin="5" />
      <div @click="closeIcon" class="absolute -top-8 -right-2 font-bold z-50">
        <XCircleIcon class="w-8 h-8 text-[#ee3131] font-bold"></XCircleIcon>
      </div>
    </div>

    </section>

    <div id="_top" class="head relative w-full h-[60px] bg-[#312725]">
      <div class="w-full h-full flex items-center px-3 justify-between">
        <div class="">
          <img src="@/assets/pc/logo.gif" class="h-[40px]" alt="" />
        </div>
        <div v-if="!loginState" class="flex items-center space-x-3 text-[14px]">
          <div @click="goDownSite" class="inline-flex items-center">
            <div class="px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="" style="margin-left: 1px">APP下载</div>
          </div>

          <router-link to="/m/login">登录</router-link>
          <router-link to="/m/register">注册</router-link>
        </div>
        <div v-else class="flex items-center space-x-3">
          <div class="flex items-center space-x-2">
            <!-- <span class="text-sm tracking-wider">用户名 :</span> -->
            <UserIcon class="w-5 h-5"></UserIcon>
            <span
              class="text-[#ffd33b] max-w-[80px] overflow-hidden text-ellipsis"
              >{{ LoginResponseInfo?.username || "" }}</span
            >
          </div>
          <div class="flex items-center space-x-2">
            <CurrencyYenIcon class="w-5 h-5"></CurrencyYenIcon>
            <span
              class="text-[#ffd33b] max-w-[80px] overflow-hidden text-ellipsis"
              >{{ balance }}</span
            >
          </div>
          <div
            @click="Logout"
            class="flex items-center space-x-2 cursor-pointer"
          >
            <LogoutIcon class="w-5 h-5"></LogoutIcon>
          </div>
        </div>
      </div>
    </div>

    <section class="w-full h-[180px] swiper_section">
      <swiper
        :loop="true"
        :effect="'fade'"
        :modules="[Autoplay, EffectFade]"
        class="mySwiper h-full w-full"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
      >
        <swiper-slide class="bg-[#101113]">
          <img
            src="@/assets/mobile/c1.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img
            src="@/assets/mobile/c2.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img
            src="@/assets/mobile/c3.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </swiper-slide>
        <swiper-slide class="bg-[#101113]">
          <img
            src="@/assets/mobile/c4.jpg"
            alt=""
            class="w-full h-full object-cover"
          />
        </swiper-slide>
      </swiper>
    </section>

    <section
      class="anouncement flex px-2 w-full justify-between items-center text-white bg-[#3e3f41] py-1"
    >
      <div class="pr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      </div>
      <Vue3Marquee
        :delay="1"
        :duration="100"
        class="w-full text-[13px] tracking-[3px]"
      >
        ☞
        欢迎进入联博娱乐官方网站！数字货币彩金已派送！尊敬的贵宾：凡使用数字货币充值取款，可享当天第一笔数字货币充值金额的5%~8%真人彩金，每天都送，赠送无上限。彩金统一派送时间为北京时间晚上12:00
      </Vue3Marquee>
    </section>

    <section class="py-2 px-3 w-full casino_sec bg-[#101113]">
      <div class="relative flex py-1 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink text-center mx-4 text-base font-bold"
          >真人视讯 <br /><span class="text-[13px]">CASINO</span></span
        >
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div @click="goGame" class="w-full h-[180px] relative mb-[20px]">
        <img
          src="@/assets/mobile/banner.png"
          alt=""
          class="w-full h-full object-cover"
        />
        <a href="#" class="absolute bottom-5 left-[25px] block">
          <img src="@/assets/pc/casino/play.png" alt="" />
        </a>
      </div>
      <!-- <div @click="goGame" class="w-full h-[180px]  relative  mb-[20px]">
                <img src="@/assets/pc/casino/img02.png" alt="" class="w-full h-full ">
                <a href="#" class="absolute bottom-5 left-[25px] block transition-all hover:left-[82px] ">
                    <img src="@/assets/pc/casino/play.png" alt="">
                </a>
            </div> -->
    </section>

    <section class="relative flex-1">
      <img src="@/assets/mobile/3.png" alt="" class="w-full align-middle" />
      <div
        class="flex flex-col justify-center items-center absolute top-10 w-full"
      >
        <h3 class="text-center font-bold text-[30px] mb-[14px]">游戏项目</h3>
        <p class="text-base text-white">
          百家乐、龙虎、牛牛、炸金花、推筒子、大小点
        </p>
        <a @click="goDownSite" class="game-free"> </a>
      </div>
    </section>

    <!-- <section class="py-2 w-full px-3 bg-[#312725]">
            <div class="relative flex py-1 items-center">
                <div class="flex-grow border-t border-gray-400"></div>
                <span class="flex-shrink text-center mx-4 text-base font-bold">下载应用程序<br><span class="text-[13px]">App
                        Download</span></span>
                <div class="flex-grow border-t border-gray-400"></div>
            </div>
            <div class="w-full mx-auto  relative  mb-[20px] shadow-2xl  py-2">

                <p class="text-[13px] leading-5 text-[#d0d0d0] py-2">
                    全新手机服务体验，新颖的设计更好玩更便捷，汇聚了诸多精彩游戏为您呈现，各国博彩精英，世界博彩服务团队，享受随时随地，足不出户的博彩，游戏新人生！
                </p>
                <div @click="goDownSite" class="py-2 text-center flex items-center justify-center">
                    <img src="@/assets/pc/phoneicon.png" alt="" class="w-fit">
                </div>
            </div>

        </section> -->

    <section class="py-2 w-full casino_sec px-3">
      <div class="relative flex py-1 items-center">
        <div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink text-center mx-4 text-base font-bold"
          >关于我们<br /><span class="text-[13px]">ABOUT US</span></span
        >
        <div class="flex-grow border-t border-gray-400"></div>
      </div>
      <div class="w-full relative mb-[20px] shadow-2xl py-2">
        <img
          src="@/assets/pc/homeaboutphoto.jpg"
          alt=""
          class="w-full h-[180px]"
        />
        <p class="text-[13px] leading-5 text-[#d0d0d0] py-2">
          缅甸联博娱乐集团，持缅甸合法经营牌照，受缅甸博彩监察协调局监督。斥资1.6亿人民币，致力于打造五星级酒店、娱乐城一体化企业。缅甸真人实体赌场领导者，拥有数百位训练有素的专业荷官、真实的赌场环境、稳定的高端设备、专业的技术支持。
        </p>
      </div>
      <!-- <div class="w-full   relative  mb-[20px] shadow-2xl  py-2">
                <img src="@/assets/pc/homeourphoto.jpg" alt=""
                    class="w-full h-[180px] ">
                <p class="text-[13px] leading-5 text-[#d0d0d0] py-2">
                    作为国际专业的网上博彩游戏客户端运营企业，我们承诺，为每一位客户提供最新、最安全、最准确的专业博彩数据，以及全方位的国际化服务...
                </p>
            </div>
            <div class="w-full   relative  mb-[20px] shadow-2xl  py-2">
                <img src="@/assets/pc/homeadvphoto.jpg" alt=""
                    class="w-full h-[180px] ">
                <p class="text-[13px] leading-5 text-[#d0d0d0] py-2">
                    我们提供各种安全简便的存款及提款选择给客户。我们一直主张客户「瞭解我们的用户(KYC)」和反洗钱(AML)的原则，用以确保在最大程度上遵从相关的法律及法规...
                </p>
            </div> -->
    </section>

    <section class="py-2 w-full px-3 flex bg-[#101113]">
      <div
        class="w-full h-[219px] flex space-x-2 section_one_hover overflow-x-auto"
      >
        <a
          @click="goGame"
          class="bg-[#312725] px-3 w-[150px] shadow-lg rounded-lg flex-shrink-0 text-center text-[15px] h-full flex flex-col justify-center items-center"
        >
          <img
            src="@/assets/pc/baccarat.png"
            alt=""
            class="h-[130px] w-[114px]"
          />
          <div class="text-lg">
            <p>百家乐</p>
            <span class="text-[12px] mt-[8px] text-white">Baccarat</span>
          </div>
        </a>
        <a
          @click="goGame"
          class="bg-[#312725] px-3 w-[150px] shadow-lg rounded-lg flex-shrink-0 text-center text-[15px] h-full flex flex-col justify-center items-center"
        >
          <img
            src="@/assets/pc/dragon.png"
            alt=""
            class="h-[130px] w-[114px]"
          />
          <div class="text-lg">
            <p>龙虎</p>
            <span class="text-[12px] mt-[8px] text-white">Dragon Tiger</span>
          </div>
        </a>
        <a
          @click="goGame"
          class="bg-[#312725] px-3 w-[150px] shadow-lg rounded-lg flex-shrink-0 text-center text-[15px] h-full flex flex-col justify-center items-center"
        >
          <img
            src="@/assets/pc/cowcow.png"
            alt=""
            class="h-[130px] w-[114px]"
          />
          <div class="text-lg">
            <p>牛牛</p>
            <span class="text-[12px] mt-[8px] text-white">Niu Niu</span>
          </div>
        </a>
        <a
          @click="goGame"
          class="bg-[#312725] px-3 w-[150px] shadow-lg rounded-lg flex-shrink-0 text-center text-[15px] h-full flex flex-col justify-center items-center"
        >
          <img
            src="@/assets/pc/GlodenFlower.png"
            alt=""
            class="h-[130px] w-[114px]"
          />
          <div class="text-lg">
            <p>炸金花</p>
            <span class="text-[12px] mt-[8px] text-white"
              >Fried Golden Flower</span
            >
          </div>
        </a>
        <a
          @click="goGame"
          class="bg-[#312725] px-3 w-[150px] shadow-lg rounded-lg flex-shrink-0 text-center text-[15px] h-full flex flex-col justify-center items-center"
        >
          <img
            src="@/assets/pc/bobbin.png"
            alt=""
            class="h-[130px] w-[114px]"
          />
          <div class="text-lg">
            <p>推筒子</p>
            <span class="text-[12px] mt-[8px] text-white">Push the Bobbin</span>
          </div>
        </a>
        <a
          @click="goGame"
          class="bg-[#312725] px-3 w-[150px] shadow-lg rounded-lg flex-shrink-0 text-center text-[15px] h-full flex flex-col justify-center items-center"
        >
          <img
            src="@/assets/pc/sizepoint.png"
            alt=""
            class="h-[130px] w-[114px]"
          />
          <div class="text-lg">
            <p>大小点</p>
            <span class="text-[12px] mt-[8px] text-white">SizePoint</span>
          </div>
        </a>
      </div>
    </section>

    <footer class="px-3 py-2">
      <p class="leading-5 text-[14px] text-center tracking-wide">
        ©版权所有2016 联博娱乐 Reserved
      </p>
    </footer>
  </div>
</template>


<style scoped>
.game-free {
  position: relative;
  display: block;
  width: 120px;
  height: 40px;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10rem;
  margin-top: 14px;
}
.game-free:before {
  content: "";
  width: 100%;
  height: 100%;
  background-image: url(@/assets/mobile/btn_download.gif);
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 0;
}
</style>