<script setup>
import {ref,onMounted} from 'vue'
import { useRouter, useRoute } from 'vue-router';

import AboutComponent from '@/components/AboutComponent.vue'
import DepositComponent from '@/components/DepositComponent.vue'
import WithdrawComponent from '@/components/WithdrawComponent.vue'
import MemberComponent from '@/components/MemberComponent.vue'
import { ChevronRightIcon } from '@heroicons/vue/outline';

const route = useRoute()
const activeTab = ref(0)

const Tabclick = (number) => {
  activeTab.value = number
}
 console.log(route.query.type);
 onMounted(() => {
  console.log("leeeeeeeeee");
 }),
 activeTab.value = route.query.type
</script>

<template>
        <div class="bannerBox relative h-[420px] w-full ">
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
              <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/about/s_title.jpg?=1156" alt="" class="w-full">
            </p>
            <div class="mb-5 bg-[#17100e]">
              <li @click="Tabclick(0)" class="list-none text-sm li_hover" >
                <a :class="activeTab == 0 ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5  cursor-pointer bg-[#17100e] flex items-center justify-between relative border-b border-[#2B1D1A]
                  
                ">
               <p class="py-[18px]">存款演示</p>
               <ChevronRightIcon :class="activeTab == 0 ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px]  cc"></ChevronRightIcon>
              </a>
              </li>
              <li @click="Tabclick(1)" class="list-none text-sm li_hover">
                <a :class="activeTab == 1 ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5  cursor-pointer bg-[#17100e] flex items-center justify-between relative border-b border-[#2B1D1A]
                  
                ">
               <p class="py-[18px]">取款演示</p>
               <ChevronRightIcon :class="activeTab == 1 ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px]  cc"></ChevronRightIcon>
              </a>
              </li>
              <li @click="Tabclick(2)" class="list-none text-sm li_hover">
                <a :class="activeTab == 2 ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5 text-[#e3a497] cursor-pointer bg-[#17100e] flex items-center justify-between relative border-b border-[#2B1D1A]
                  
                ">
               <p class="py-[18px]">关于我们</p>
               <ChevronRightIcon :class="activeTab == 2 ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px]  cc"></ChevronRightIcon>
              </a>
              </li>
              <li @click="Tabclick(3)" class="list-none text-sm li_hover">
                <a :class="activeTab == 3 ? 'text-[#b6982e]' : 'text-[#e3a497]'" class="my-0 mx-5 text-[#e3a497] cursor-pointer bg-[#17100e] flex items-center justify-between relative
                  
                ">
               <p class="py-[18px]">合作加盟</p>
               <ChevronRightIcon :class="activeTab == 3 ? 'text-[#b6982e]' : 'text-[#926056]'" class="w-[18px] h-[18px] cc"></ChevronRightIcon>
              </a>
              </li>
            </div>
            <div class="sImg">
              <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/about/s_img.jpg?=1156" alt="" class="w-full">
            </div>
          </section>

          <div class="w-[760px] bg-[#17100e] min-h-[450px]  px-10 pb-5 pt-[30px] mx-5">
            <!-- <DepositComponent v-if="activeTab == 0"></DepositComponent>
            <WithdrawComponent v-if="activeTab == 1"></WithdrawComponent>
           <AboutComponent v-if="activeTab == 2"></AboutComponent>
           <MemberComponent v-if="activeTab == 3"></MemberComponent> -->
           <router-view>
            dd
           </router-view>
            
          </div>
        </div>
      </div>
    </section>
</template>

<style scoped>
.bannerBox {
  background: url(@/assets/pc/about.jpg)  no-repeat center top;
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