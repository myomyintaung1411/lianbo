<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router';

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
import Vcode from "vue3-puzzle-vcode";
import AES from '@/api/aes';
import global from '@/api/global'
import md5 from "js-md5"
import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import { UserRegister, UserLogin, GetUserBalance } from "@/api/user";

const router = useRouter()
const instance = getCurrentInstance()
const store = useStore()

const isShow = ref(false);
const name = ref('')
const password = ref('')
const confirmpass = ref('')
const realname = ref('')

const AgentInfo = computed(() => store.getters["user/AGENT_INFO"]);

const goBack = () => {
    router.push('/m')
}

const onShow = () => {
    isShow.value = true;
};

const onClose = () => {
    isShow.value = false;
};

const onSuccess = () => {
    var en = global?.en;
    var agentName = AgentInfo?.value?.name;
    console.log(agentName);
    let data = {
        name: name.value,
        // pw: this.$md5("aes@13" + this.register.pass + "22dfxs%#DSsd"),
        pw: md5(password.value),
        phone: '',
        agent: agentName,
    };
    isShow.value = true;
    console.log(data, "sendStr");
    let endata = AES.encrypt(JSON.stringify(data), en);
    UserRegister({ data: endata })
        .then((res) => {
            var body = res?.data;
            var msg = JSON.parse(AES.decrypt(body, en));
            console.log(msg, "response msg of register is");
            if (msg?.JsonData?.result == "102") {
                onClose(); // 验证成功，手动关闭模态框
                return instance.proxy.$message({ message: '无此代理', duration: 2 })
            }
            if (msg?.JsonData.result == "103") {
                onClose(); // 验证成功，手动关闭模态框
                return instance.proxy.$message({ message: '已存在此帐号', duration: 2 })
            }
            if (msg.JsonData?.result == "104") {
                onClose(); // 验证成功，手动关闭模态框
                return instance.proxy.$message({ message: '注册失败', duration: 2 })
            }
            if (msg?.JsonData?.result == "101") {
                onClose(); // 验证成功，手动关闭模态框
                name.value = ''
                password.value = ''
                confirmpass.value = ''
                realname.value = ''
                instance.proxy.$message({ message: '注册成功请登录', duration: 2 })
                router.push('/m/login')
            }
        })
        .catch((e) => {
            console.log(e);
            instance.proxy.$message({ message: e.toString(), duration: 2 })
            //this.$message.error(e.toString());
        });
};

const Register = () => {

    if (name.value == '' || password.value == '' || confirmpass.value == '') return instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if (password.value !== confirmpass.value)
        return instance.proxy.$message({ message: '两次输入密码不一致', duration: 2 })
    if (password.value.length < 6)
        return instance.proxy.$message({ message: '密码必须至少有6个字符长', duration: 2 })

    if (!/\d/.test(password.value) || !/[a-zA-Z]/.test(password.value))
        return instance.proxy.$message({ message: '密码必须包含数字和英文字母', duration: 2 })

    if (name.value == password.value)
        return instance.proxy.$message({ message: '用户名和密码不能相同', duration: 2 })
    // if (!agree.value)
    //     return instance.proxy.$message({ message: '※ 请勾选同意条款!!', duration: 2 })
    onShow()
}

const goService = () => {
    let url = AgentInfo?.value?.customerAddr;
    if(url){
        window.open(url)
    }
}



</script>

<template>
    <div class="h-full w-full min-h-screen text-[#C58D16]">
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
                    class="bg-[#13151b] my-5 h-10 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2">
                    <div
                        class="relative flex items-center text-sm justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <p>账号 :</p>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="name" autocomplete="off" class=" input-name text-[#d0d0d0]   
                            border-none outline-none focus:outline-none focus:border-none    
                            w-full h-full" id="username" pattern="" name="username" placeholder="请输入4到12位数字和小写字母的组合"
                            min="6" max="12" maxlength="17" type="text">
                        <XIcon v-if="name" @click="name = ''" class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>
                <div
                    class="bg-[#13151b] h-10 my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2">
                    <div
                        class="relative flex items-center text-sm justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <p>密码 :</p>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="password" autocomplete="off" class=" input-name text-[#d0d0d0]   
                            border-none outline-none focus:outline-none focus:border-none    
                            w-full h-full" id="password" pattern="" name="password" placeholder="请输入6~12位字母或以上和数字组合"
                            min="6" max="12" maxlength="17" type="password">
                        <XIcon v-if="password" @click="password = ''" class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>

                <div
                    class="bg-[#13151b] h-10 my-5 formDiv border  border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2">
                    <div
                        class="relative flex items-center text-sm justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <p>密码 :</p>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="confirmpass" autocomplete="off" class=" input-name text-[#d0d0d0]  pl-[12px] 
                            border-none outline-none focus:outline-none focus:border-none    
                            w-full h-full" id="confirmpass" pattern="" name="confirmpass" placeholder="请输入确认密码" min="6"
                            max="12" maxlength="17" type="confirmpass">
                        <XIcon v-if="confirmpass" @click="confirmpass = ''"
                            class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>
                <div
                    class="bg-[#13151b] h-10 my-5 formDiv border border-solid border-[#272c33] relative overflow-hidden flex items-center mx-auto px-2">
                    <div
                        class="relative flex items-center text-sm justify-center w-20 h-5   border-r border-[#7e7e7e] border-solid">
                        <p>姓名 :</p>
                    </div>
                    <div class=" border-none w-full h-full text-sm flex justify-center items-center relative">
                        <input v-model="realname" autocomplete="off" class=" input-name text-[#d0d0d0]  pl-[12px]  
                            border-none outline-none focus:outline-none focus:border-none    
                            w-full h-full" id="realname" pattern="" name="realname" placeholder="请输入真实姓名" min="6" max="12"
                            maxlength="17" type="realname">
                        <XIcon v-if="realname" @click="realname = ''" class="h-5 w-5 cursor-pointer  absolute right-3  ">
                        </XIcon>
                    </div>
                </div>
                <div class="py-7 w-full">
                    <button @click="Register" class="w-full btn_login text-base py-3 text-[#373c33] text-[19px]">
                        注册
                    </button>
                    <div class=" text-[#747782] text-left text-sm pt-3">已有账户？点这里
                        <router-link to="/m/login" class="switcher transition-3s  cursor-pointer text-[#C58D16]">登录
                        </router-link>
                    </div>
                </div>

            </form>
        </section>
    </div>
    <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>
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
    position: relative; /* Add a relative position to the button */

}

</style>