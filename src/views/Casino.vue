<script setup>
import { onMounted,ref,computed } from "vue";
import global from '@/api/global'
import AES from "@/api/aes";
import { useStore } from "vuex";
const store = useStore()
const loginState = computed(() => store.getters["user/LOGIN_STATE"]);
const gameEnterInfo = computed(() => store.getters["user/GAME_USER_INFO"]);
const agentInfo = computed(() => store.getters["user/AGENT_INFO"]);

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

</script>

<template>
    <div class="-mt-[165px]"></div>
        <div class="bannerBox  h-[420px] w-full ">
        <div class="w-[1100px] mx-auto my-0 relative h-full">
            <div class="absolute bottom-0 w-[1108px] h-[45px]  mx-auto my-0 marquee_bg">
                <div class="py-[10px] pl-[120px] pr-[20px]  h-full">
                    <Vue3Marquee :delay="1" :duration="100" class=" pt-[5px] text-center overflow-y-hidden">☞
                        欢迎进入联博娱乐官方网站！数字货币彩金已派送！尊敬的贵宾：凡使用数字货币充值取款，可享当天第一笔数字货币充值金额的5%~8%真人彩金，每天都送，赠送无上限。彩金统一派送时间为北京时间晚上12:00
                    </Vue3Marquee>
                </div>
            </div>
        </div>
    </div>
    <section class="live bg-[#000] relative">
        <div class="bg-[#241d1c]">
            <div class="realtive w-[1100px] min-w-[1100px] mx-auto my-0">
                <div class="w-full mr-[-20px] flex items-center">
                    <div @click="goGame" class=" big_hover w-[540px] h-[220px] relative mr-[20px] mb-[20px]">
                        <img src="@/assets/pc/casino/img01.png" alt="" class="w-full h-full">
                        <a  class="absolute bottom-10 left-[72px] block  ">
                            <img src="@/assets/pc/casino/play.png" alt="">
                        </a>
                    </div>
                    <div @click="goGame" class=" big_hover _img2   w-[540px] h-[220px] relative mr-[20px] mb-[20px]">
                        <img src="@/assets/pc/casino/img02.png" alt="" class="w-full h-full">
                        <a  class="absolute bottom-10 left-[72px] block  ">
                            <img src="@/assets/pc/casino/play.png" alt="">
                        </a>
                    </div>
                </div>
                <section class="w-full mr-[-20px] flex items-center">
                    <div @click="goGame" class="w-[260px] h-[300px] text-center cursor-pointer relative mr-[20px] mb-[20px] hover:after:block image_hover">
                        <img src="@/assets/pc/casino/photo01.png" alt="" class="w-full h-full relative z-30">
                        <a  class="block w-[220px] h-10 z-30 absolute bottom-0 left-5">
                            <img src="@/assets/pc/casino/link.png" alt="" class="relative z-30">
                        </a>
                    </div>
                    <div @click="goGame" class="w-[260px] h-[300px] text-center cursor-pointer relative mr-[20px] mb-[20px] hover:after:block image_hover">
                        <img src="@/assets/pc/casino/photo02.png" alt="" class="w-full h-full relative z-30">
                        <a  class="block w-[220px] h-10 z-30 absolute bottom-0 left-5">
                            <img src="@/assets/pc/casino/link.png" alt="" class="relative z-30">
                        </a>
                    </div>
                    <div @click="goGame" class="w-[260px] h-[300px] text-center cursor-pointer relative mr-[20px] mb-[20px] hover:after:block image_hover">
                        <img src="@/assets/pc/casino/photo03.png" alt="" class="w-full h-full relative z-30">
                        <a  class="block w-[220px] h-10 z-30 absolute bottom-0 left-5">
                            <img src="@/assets/pc/casino/link.png" alt="" class="relative z-30">
                        </a>
                    </div>
                    <div @click="goGame" class="w-[260px] h-[300px] text-center cursor-pointer relative mr-[20px] mb-[20px] hover:after:block image_hover">
                        <img src="@/assets/pc/casino/photo04.png" alt="" class="w-full h-full relative z-30">
                        <a  class="block w-[220px] h-10 z-30 absolute bottom-0 left-5">
                            <img src="@/assets/pc/casino/link.png" alt="" class="relative z-30">
                        </a>
                    </div>
                </section>
            </div>
        </div>
    </section>
</template>

<style scoped>
.bannerBox {
    background: url(@/assets/pc/casino/casinobanner.jpg)  center top;
    /* padding-top: -182px; */
    /* position: absolute; */
    /* top: 182px; */
}

.marquee_bg {
    background: url(@/assets/pc/marqueebg.png);
}
/* .big_hover:hover:after{
 display: block;
}
.big_hover:after{
    display: none;
	content:"";
    left: -7px;
    top: 0;
	position: absolute;
	background: url(@/assets/pc/11.png) no-repeat center top;
    width: 544px;
	height: 224px;
	z-index: 1;
}
._img2:after{
    background: url(@/assets/pc/2.png) no-repeat center top;
}
._img2:hover:after{
 display: block;
} */
.image_hover:hover:after{
 display: block;
}
.image_hover:after{
    display: none;
	content:"";
	top: -2px;
	left: -2px;
	position: absolute;
	background: url(@/assets/pc/casino/casinohover.png) no-repeat center top;
	width: 264px;
	height: 304px;
	z-index: 1;
}

.image_hover:hover a {
	background: url(@/assets/pc/casino/casinobtnhover.png) no-repeat center top;
}
.image_hover:hover a img {
	visibility: hidden;
}
.big_hover:hover a {
	background: url(@/assets/pc/casino/casinobtnhover.png) no-repeat center;
    border-radius: 20px;
}
.big_hover:hover a img {
	visibility: hidden;
}
</style>