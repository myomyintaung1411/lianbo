<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import { useStore } from "vuex";

import { ChevronLeftIcon, UserIcon, XIcon } from "@heroicons/vue/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation, EffectFade
} from 'swiper';
import { UserLogin } from "@/api/user";

import AES from '@/api/aes';
import global from '@/api/global'
import md5 from "js-md5"
import { getCurrentInstance } from 'vue';

const router = useRouter()
const route = useRoute();
const instance = getCurrentInstance()
const store = useStore()

const AgentInfo = computed(() => store.getters["user/AGENT_INFO"]);


const name = ref('')
const password = ref('')

const goBack = () => {
    router.push('/m')
}

const Login = () => {
    var en = global?.en;
    if (name.value == '' || password.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    let logindata = {
        name: name.value,
        pw: md5(password.value),
        upperId: AgentInfo?.value?.Id,
    };
    let endata = AES.encrypt(JSON.stringify(logindata), en);
    UserLogin({ data: endata })
        .then((res) => {
            var body = res?.data;
            // console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", body);
            var msg = JSON.parse(AES.decrypt(body, en));
            console.log("dataaaaaaaaaaaaaaaaaaaaaaaaaaaa", msg);
            if (msg?.JsonData?.code == 200) {
                store.commit('user/LoginInfo', msg?.JsonData)
                store.commit('user/LoginState', true)
                store.commit('user/GameEnterUserInfo', logindata)

                //  var gameEn = global?.gameEn;
                // let data = {
                //   name: name.value,
                //   password: md5(password.value),
                // };
                // var endata = AES.encrypt(JSON.stringify(data), gameEn);
                // // console.log(this.$store.state.LoginData.gameAddr);
                // window.open(
                //   "http://" +
                //   AgentInfo?.value?.gameAddr +
                //   `?token=${endata}`
                // );

                name.value = "";
                password.value = "";
                router.push('/m')
                return instance.proxy.$message({ message: '登录成功', duration: 2 })
            } else {
                return instance.proxy.$message({ message: '账号或密码错误', duration: 2 })
            }
        })
        .catch((e) => {
            console.log(e.toString());
            //instance.proxy.$message({ message: e.toString(), duration: 2 })
        });
}

const goService = () => {
    let url = AgentInfo?.value?.customerAddr;
    if (url) {
        window.open(url)
    }
}

</script>

<template>

    <div class="h-full w-full min-h-screen text-[#C58D16] 
    ">
        <div class="head relative w-full h-[60px] bg-[#312725]">
            <div class="w-full h-full flex items-center px-3 justify-between">
                <ChevronLeftIcon @click="goBack" class="w-6 h-6"></ChevronLeftIcon>

                <div @click="goService" class="flex items-center space-x-3 text-[14px] ">
                    <img src="@/assets/mobile/service.png" alt="" class="w-10">
                </div>
            </div>
        </div>
        <section class="pt-1 w-full h-[180px] swiper_section">
            <swiper :loop="true" :effect="'fade'" :modules="[Autoplay, EffectFade]" class="mySwiper h-full w-full "
                :autoplay='{
                    "delay": 2500,
                    "disableOnInteraction": false,
                }'>
                <swiper-slide class="bg-[#101113]">
                    <img src="@/assets/mobile/c1.jpg" alt="" class="w-full h-full object-cover">
                </swiper-slide>
                <swiper-slide class="bg-[#101113]">
                    <img src="@/assets/mobile/c2.jpg" alt="" class="w-full h-full object-cover">
                </swiper-slide>
                <swiper-slide class="bg-[#101113]">
                    <img src="@/assets/mobile/c3.jpg" alt="" class="w-full h-full object-cover">
                </swiper-slide>
                <swiper-slide class="bg-[#101113]">
                    <img src="@/assets/mobile/c4.jpg" alt="" class="w-full h-full object-cover">
                </swiper-slide>
            </swiper>
        </section>
        <section class="px-3 py-2 bg-[#101113] w-full">
            <form @click.prevent>
                <div
                    class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2">
                    <div
                        class="relative flex items-center text-sm justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <p>账号 :</p>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="name" autocomplete="off" class=" input-name text-[#d0d0d0]   
                            border-none outline-none focus:outline-none focus:border-none    
                            w-full h-full" id="username" pattern="" name="username" placeholder="请输入账号" min="6" max="12"
                            maxlength="17" type="text">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>
                <div
                    class="bg-[#13151b] my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2">
                    <div
                        class="relative flex items-center text-sm justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <p>密码 :</p>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="password" autocomplete="off" class=" input-name text-[#d0d0d0]   
                            border-none outline-none focus:outline-none focus:border-none    
                            w-full h-full" id="password" pattern="" name="password" placeholder="请输入密码" min="6" max="12"
                            maxlength="17" type="password">
                        <XIcon v-if="password" @click="password = ''" class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>
                <div class="py-7 w-full">
                    <button @click="Login" class="w-full btn_login text-base py-3 text-[#373c33] text-[19px]">
                        登录
                    </button>
                    <div class=" text-[#747782] text-left text-sm pt-3">没有帐户？点击这里
                        <router-link to="/m/register" class="switcher transition-3s  cursor-pointer text-[#C58D16]">注册
                        </router-link>
                    </div>
                </div>

            </form>
        </section>
    </div>
</template>


<style scoped>
.formDiv:focus-within {
    background: transparent !important;
    outline: 0;
}

.formDiv input {
    border: none;
    outline: none;
    background: no-repeat;
}

.input-name:focus-within {
    border: 0;
    outline: none;
    box-shadow: none;
}

.btn_login {
    width: 100%;
    background-image: linear-gradient(to right, #312725, #312725, #C58D16, #C58D16, #C58D16, #C58D16, #C58D16, #C58D16, #C58D16, #C58D16, #312725, #312725);
    border: none;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    color: #272c33;
    outline: none;
}


</style>