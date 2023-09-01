<script setup>
import {ref,onMounted,watch} from 'vue'
import { useRouter, useRoute } from 'vue-router';

import AboutComponent from '@/components/AboutComponent.vue'
import DepositComponent from '@/components/DepositComponent.vue'
import WithdrawComponent from '@/components/WithdrawComponent.vue'
import MemberComponent from '@/components/MemberComponent.vue'
import { ChevronRightIcon } from '@heroicons/vue/outline';

const route = useRoute()
const router = useRouter()
const activeRoute = ref('')

const Tabclick = (number) => {
  // activeTab.value = number
  switch (number) {
    case 0:
      router.push('/menu/deposit')
      break;
    case 1:
    router.push('/menu/withdraw')
      break;
    case 2:
    router.push('/menu/about')
      break;
    case 3:
    router.push('/menu/member')
      break;
  
    default:
      break;
  }
}

watch(
    () => route.path,
    () => {
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

</script>

<template>
  <div class="-mt-[150px]"></div>
        <div :class="activeRoute == '/menu/deposit' ?
         'bannerBox' : activeRoute == '/menu/withdraw' ?
          'bannerBoxWith' : activeRoute == '/menu/about' ? 
          'bannerBoxabout' : 'bannerBoxmember' "  
          class=" relative h-[420px] w-full ">
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
    <section class="about bg-[#162113]">
      <div class="bg-[#241d1c] py-5 w-full">
        <div class="w-[1100px] my-0 mx-auto flex">
          <!-- left side -->
          <section class="w-[240px] relative">
            <p>
              <img src="@/assets/pc/home/fast.jpg" alt="" class="w-full">
            </p>
            <div class="mb-5 bg-[#17100e]">
              <li @click="Tabclick(0)" class="list-none text-sm li_hover" >
                <a :class="activeRoute == '/menu/deposit' ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5  cursor-pointer bg-[#17100e] flex items-center justify-between relative border-b border-[#2B1D1A]
                  
                ">
               <p class="py-[18px]">存款演示</p>
               <ChevronRightIcon :class="activeRoute == '/menu/deposit' ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px]  cc"></ChevronRightIcon>
              </a>
              </li>
              <li @click="Tabclick(1)" class="list-none text-sm li_hover">
                <a :class="activeRoute == '/menu/withdraw' ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5  cursor-pointer bg-[#17100e] flex items-center justify-between relative border-b border-[#2B1D1A]
                  
                ">
               <p class="py-[18px]">取款演示</p>
               <ChevronRightIcon :class="activeRoute == '/menu/withdraw' ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px]  cc"></ChevronRightIcon>
              </a>
              </li>
              <li @click="Tabclick(2)" class="list-none text-sm li_hover">
                <a :class="activeRoute == '/menu/about' ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5 text-[#e3a497] cursor-pointer bg-[#17100e] flex items-center justify-between relative border-b border-[#2B1D1A]
                  
                ">
               <p class="py-[18px]">关于我们</p>
               <ChevronRightIcon :class="activeRoute == '/menu/about' ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px]  cc"></ChevronRightIcon>
              </a>
              </li>
              <li @click="Tabclick(3)" class="list-none text-sm li_hover">
                <a :class="activeRoute == '/menu/member' ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5 text-[#e3a497] cursor-pointer bg-[#17100e] flex items-center justify-between relative
                  
                ">
               <p class="py-[18px]">合作加盟</p>
               <ChevronRightIcon :class="activeRoute == '/menu/member' ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px] cc"></ChevronRightIcon>
              </a>
              </li>
            </div>
            <div class="sImg">
              <img src="@/assets/pc/home/slotmenu.jpg" alt="" class="w-full">
            </div>
          </section>

          <div class="w-[760px] bg-[#17100e] min-h-[450px]  px-10 pb-5 pt-[30px] mx-5">
           <router-view> </router-view>

          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.bannerBox {
    background: url(@/assets/pc/withdraw.jpg)   no-repeat center top;
    background-size: cover;
}
.bannerBoxabout {
  background: url(@/assets/pc/about.jpg)  no-repeat center top;
}
.bannerBoxmember {
  background: url(@/assets/pc/member.jpg)  no-repeat center top;
}
.bannerBoxWith {
  background: url(@/assets/pc/bgwith.jpg)  no-repeat center top;
}
.li_hover:hover  .cc {
 color:#b6982e
}
.li_hover:hover  p {
 color:#b6982e
}

.marquee_bg {
    background: url(@/assets/pc/marqueebg.png);
}
</style>