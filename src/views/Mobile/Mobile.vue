<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
const activeTab = ref(0)
const router = useRouter()
const tabClick = (number) => {
    activeTab.value = number
    switch (number) {
        case 0:
            console.log(number);
            break;
        case 1:
            console.log(number);
            // router.push('/abcd')
            break;
        case 2:
            console.log(number);
            break;
        case 3:
            console.log(number);
            break;

        default:
            break;
    }
}


</script>
<template>
    <div class="h-screen w-full relative overflow-y-auto ">


        <!-- <main class="main_section_mobile">
                    <transition name="fade" mode="out-in">

                        <router-view></router-view>
                    </transition>
                </main> -->
        <main class="main_section_mobile">
            <!-- <transition name="fade" mode="out-in" v-slot="{ Component }">
                    <component :is="Component" />
                </transition> -->
            <router-view v-slot="{ Component }">
                <transition  name="slide-fade">
                    <component :is="Component"></component>
                </transition >
            </router-view>
        </main>
        <section class="bottom_navi h-[64px] fixed bottom-0 w-full bg-[rgb(30,30,30)] pt-[2px]">
            <ul class=" list-none w-full text-[#9b896d] flex justify-between items-center px-8 ">
                <li class="list-none ">
                    <div :class="activeTab == 0 ? '' : 'text-white'" @click="tabClick(0)"
                        class=" m-2 flex flex-col items-center justify-center text-[12px]  ">
                        <img v-if="activeTab == 0" src="@/assets/mobile/bottom/homea.svg" alt="" class="w-7 h-7">
                        <img v-else src="@/assets/mobile/bottom/home.svg" alt="" class="w-7 h-7">
                        <p class="mt-[6px]">首页</p>
                    </div>
                </li>
                <li class="list-none ">
                    <div :class="activeTab == 1 ? '' : 'text-white'" @click="tabClick(1)"
                        class=" m-2 flex flex-col items-center justify-center text-[12px]  ">
                        <img v-if="activeTab == 1" src="@/assets/mobile/bottom/moneya.svg" alt="" class="w-7 h-7">
                        <img v-else src="@/assets/mobile/bottom/money.svg" alt="" class="w-7 h-7">
                        <p class="mt-[6px]">存款</p>
                    </div>
                </li>
                <li :class="activeTab == 2 ? '' : 'text-white'" class="list-none ">
                    <div @click="tabClick(2)" class=" m-2 flex flex-col items-center justify-center text-[12px] ">
                        <img v-if="activeTab == 2" src="@/assets/mobile/bottom/walleta.svg" alt="" class="w-7 h-7">
                        <img v-else src="@/assets/mobile/bottom/wallet.svg" alt="" class="w-7 h-7">
                        <p class="mt-[6px]">取款</p>
                    </div>
                </li>
                <li class="list-none ">
                    <div :class="activeTab == 3 ? '' : 'text-white'" @click="tabClick(3)"
                        class=" m-2 flex flex-col items-center justify-center text-[12px]  ">
                        <img v-if="activeTab == 3" src="@/assets/mobile/bottom/usera.svg" alt="" class="w-7 h-7">
                        <img v-else src="@/assets/mobile/bottom/user.svg" alt="" class="w-7 h-7">
                        <p class="mt-[6px]">我的</p>
                    </div>
                </li>

            </ul>
        </section>
    </div>
</template>

<style >
.main_section_mobile {
    height: calc(100vh - 64px);
    width: 100%;
    position: relative;
    overflow-y: scroll !important;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>