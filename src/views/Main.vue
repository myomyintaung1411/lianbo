<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import vueQr from 'vue-qr/src/packages/vue-qr.vue'

import { ref, onMounted, watch,computed } from 'vue';
import { useStore } from "vuex";

const store = useStore()
const floatDivTop = ref(200);
const showAdv = ref(true)
const loginState = computed(() => store.getters["user/LOGIN_STATE"]);
const agentInfo = computed(() => store.getters["user/AGENT_INFO"]);
const LoginResponseInfo = computed(() => store.getters["user/LOGIN_INFO"]);
const scY = ref(0);
const scTimer = ref(0);

const   isshowWx = ref(false)
const   isshowQQ = ref(false)
const   isshowPhone = ref(false)
      // isshowPh.value = false
      // isshowQQ.value = false

function handleScroll() {
  if (scTimer.value) return;
  scTimer.value = setTimeout(() => {
    scY.value = window.scrollY;
    clearTimeout(scTimer.value);
    scTimer.value = 0;
  }, 100);
}
function toTop() {
      isshowQQ.value = false
      isshowWx.value = false
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
onMounted(() => {
  // window.addEventListener('scroll', updateFloatDivPosition);
  //window.addEventListener("scroll", handleScroll);

});

// watch(floatDivTop, (newValue, oldValue) => {
//   if (Math.abs(newValue - oldValue) > 5) {
//     // animate transition using CSS transition
//     const floatDivEl = document.querySelector('.floatDiv-l');
//     floatDivEl.style.transition = 'top 0.5s';

//     const floatDivEl2 = document.querySelector('.floatDiv-r');
//     floatDivEl2.style.transition = 'top 0.5s';
//   }
// });

const clickInfo = (number) => {
  switch (number) {
    case 0:
      isshowQQ.value = false
      isshowWx.value = false
      isshowPhone.value = !isshowPhone.value

      break;
    case 1:
      isshowQQ.value = !isshowQQ.value
      isshowWx.value = false
      isshowPhone.value = false
      break;
    case 2:
       isshowQQ.value = false
       isshowPhone.value = false
       isshowWx.value = !isshowWx.value
      break;
  
    default:
      break;
  }
}

const goService = () => {
      isshowQQ.value = false
      isshowWx.value = false
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=700,left=${window.screen.width / 2},top=${window.screen.width / 2}`;
  let url = agentInfo?.value?.customerAddr;
  if(agentInfo?.value){
    if(loginState?.value){
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
      //window.open(cusUrl)
       window.open(cusUrl,"mywindow",params)
    }else{
       window.open(url,"mywindow",params)
      //window.open(url)
    }
  }
}

const goDownLoad = () => {
    let url = agentInfo?.value?.downloadUrl;
    if(url){
      window.open(url)
    }

}

// function updateFloatDivPosition() {
//   const scrollTop = window.pageYOffset;

//   if (scrollTop > 200 && scrollTop < 700) {
//     const floatDivEl = document.querySelector('.floatDiv-l');
//     floatDivTop.value = scrollTop;

//     const floatDivEl2 = document.querySelector('.floatDiv-r');
//     floatDivTop.value = scrollTop;
//   } else {
//     floatDivTop.value = 200;
//   }
// }

</script>

<template>
    <main class="w-full h-full relative z-50">
       <Header></Header>
       <router-view></router-view>
       <Footer></Footer>
     
           <!-- customer service -->
    <div class="fixed right-5 bottom-[100px]   z-50 flex flex-col space-y-3">
      <li @click="goService" class="list-none w-[50px] h-[50px] cursor-pointer relative  ">
        <div class="gg_cl">
          <div class="hidden bg-[#a87c25] center _para w-[50px] h-[50px] cursor-pointer relative text-center text-white 
           text-[16px] break-words 
          ">在线客服</div>
          <img src="@/assets/pc/home/ic_kf.svg" alt="" class="w-full h-full _img">
        </div>
      </li>

      <li v-if="agentInfo?.phone" @click="clickInfo(0)" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div class="gg_cl">
          <div class="hidden bg-[#a87c25] center _para w-[50px] h-[50px] cursor-pointer relative text-center text-white 
           text-[16px] break-words 
          ">电话</div>
          <img src="@/assets/pc/home/ic_shouji.png" alt="" class="w-full h-full _img">
        </div>
        <div  v-if="isshowPhone"
          class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-150px] bg-[#3a3a3a] top-[10px]">
          <span  class="w-[100px]">{{ agentInfo?.phone }}</span>
        </div>
      </li>

       <li v-if="agentInfo?.WXH" @click="clickInfo(2)"  class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div class="gg_cl">
          <div class="hidden bg-[#a87c25] center _para w-[50px] h-[50px] cursor-pointer relative text-center text-white 
           text-[16px] break-words 
          ">微信</div>
          <img src="@/assets/pc/home/ic_wechat.svg" alt="" class="w-full h-full _img">
        </div>
        <div  v-if="isshowWx"
          class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] top-[10px]">
          <vue-qr class="  w-40" v-bind:text="agentInfo?.WXH"  :margin="5" />
        </div>
      </li>

      <li v-if="agentInfo?.QQ" @click="clickInfo(1)" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div class="gg_cl">
          <div class="hidden bg-[#a87c25] center _para w-[50px] h-[50px] cursor-pointer relative text-center text-white 
           text-[16px] break-words 
          ">QQ</div>
          <img src="@/assets/pc/home/ic_qq.svg" alt="" class="w-full h-full _img">
        </div>
        <div  v-if="isshowQQ"
          class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-150px] bg-[#3a3a3a] top-[10px]">
          <span  class="w-[100px]">{{ agentInfo?.QQ }}</span>
        </div>
      </li>



      <li @click="goDownLoad" class="list-none w-[50px] h-[50px] cursor-pointer relative ">
        <div class="gg_cl">
          <div class="hidden bg-[#a87c25] center _para w-[50px] h-[50px] cursor-pointer relative text-center text-white 
           text-[16px] break-words 
          ">APP下载</div>
          <img src="@/assets/pc/home/ic_app.svg" alt="" class="w-full h-full _img">
        </div>
        <!-- <div v-if="IconNum == 2 && isshowWx" class="absolute  flex items-center text-center h-[30px] leading-[30px] text-sm left-[-220px] bg-[#3a3a3a] top-[10px]">
          <vue-qrcode  :value="agentInfo?.WXH" 
              class=" rounded-t-lg" tag="img" ref="Iosqr" :options="{
                     errorCorrectionLevel: 'Q',
                     width:200,
                     type:'png'
                      }"></vue-qrcode>
        </div> -->
      </li>

      <li  @click="toTop" class="list-none w-[50px] h-[50px] cursor-pointer z-10">
        <div class="gg_cl">
          <div class="hidden bg-[#a87c25] center _para w-[50px] h-[50px] cursor-pointer relative text-center text-white 
           text-[16px] break-words 
          ">回到顶部</div>
          <img src="@/assets/pc/home/ic_top.svg" alt="" class="w-full h-full _img">
        </div>

      </li>
     





    </div>

       <!-- <div  class="floatDiv floatDiv-l" :style="{ top: floatDivTop + 'px' }" style="position: fixed; z-index: 1000;  left: 5px;">



        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2202120751286341183.gif" alt="">
        </a>
        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2204240848450341183.jpg" alt="">
        </a>
        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2204240848540341183.jpg" alt="">
        </a>
        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2002110405136341183.png" alt="">
        </a>
        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2002110405595341183.png" alt="">
        </a>
        <a href="#" class="kf-close cursor-pointer">
           
        </a>
       </div>
       <div  class="floatDiv floatDiv-r" :style="{ top: floatDivTop  + 'px' }" style="position: fixed; z-index: 1000;  right: 5px;">



        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2204240848278341183.gif" alt="">
        </a>
        <a @click="goService()" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2002110407120341183.png" alt="">
        </a>
        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2002110407338341183.png" alt="">
        </a>
        <a @click="goService()" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2002110407533341183.png" alt="">
        </a>
        <a href="#" class=" cursor-pointer">
            <img src="https://static.5u5tf6.com/1/uph5img/2104220743293341183.png" alt="">
        </a>
        <a href="#" class="kf-close cursor-pointer">
           
        </a>
       </div> -->
       <div v-if="showAdv" class="absolute left-0 top-0 " style="z-index:9999">
        <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/chat/r5.gif?=1155" alt="">
        <img @click="showAdv = !showAdv"  src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/lb/gb.png?=1155" alt="" class="absolute right-0 top-0">
       </div>
    </main>
</template>

<style scoped>
 .kf-close{
    display: inline-block;
    position: absolute;
    width: 130px;
    height: 35px;
    left: 0px;
    bottom: -35px;
    z-index: 9999999999;
    background: url(https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/chat/l5-1.png?=445);
 }
 .floatDiv {
    transition: top 0.5s ease-in-out; 
}

.gg_cl:hover ._img{
  display: none;
}
.gg_cl:hover ._para{
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
}

</style>