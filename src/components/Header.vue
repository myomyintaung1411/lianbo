<script setup>
import {ref,watch,computed} from 'vue'
import { UserIcon,LockClosedIcon, CurrencyYenIcon, LogoutIcon } from "@heroicons/vue/outline";
import { useRouter,useRoute } from 'vue-router';
import { useCurrentTime } from "@/utils/currenttime";
import AES from '@/api/aes';
import global from '@/api/global'
import md5 from "js-md5"

import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import { UserRegister, UserLogin, GetUserBalance } from "@/api/user";

const instance = getCurrentInstance()
const router = useRouter()
const route = useRoute();
const store = useStore()

const { currentTime } = useCurrentTime();
console.log(currentTime.value);

const name = ref('')
const password = ref('')

const activeTab = ref(0)
const activeRoute = ref('')

const AgentInfo = computed(() => store.getters["user/AGENT_INFO"]);
const loginState = computed(() => store.getters["user/LOGIN_STATE"]);
const LoginResponseInfo = computed(() => store.getters["user/LOGIN_INFO"]);



const Register = () =>{
    router.push('/register')
}
const Logout = () =>{
    window.location.reload();
}
const goService = () => {
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=500,height=700,left=${window.screen.width / 2},top=${window.screen.width / 2}`;
  let url = AgentInfo?.value?.customerAddr;
  if(AgentInfo?.value) {
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
const Login = () =>{
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

            // this.$store.state.myAccount = this.login.username;
            // this.$store.state.myPassword = this.login.password;
            // //here i am storing user response information to global
            // this.$Global.myLoginInfo.loginId = msg.JsonData.Id;
            // this.$Global.myLoginInfo.loginBalance = msg.JsonData.balance;
            // this.$Global.myLoginInfo.loginEnable = msg.JsonData.enable;
            // this.$Global.myLoginInfo.loginName = msg.JsonData.username;
            store.commit('user/LoginInfo',msg?.JsonData)
            store.commit('user/LoginState',true)
            store.commit('user/GameEnterUserInfo',logindata)
            // this.UserBalance();
             var gameEn = global?.gameEn;
            let data = {
              name: name.value,
              password: md5(password.value),
            };
            var endata = AES.encrypt(JSON.stringify(data), gameEn);
            // console.log(this.$store.state.LoginData.gameAddr);
            if(AgentInfo?.value?.gameAddr){
                window.open(
              "http://" +
              AgentInfo?.value?.gameAddr +
              `?token=${endata}`
            );
            }
            name.value = "";
            password.value = "";
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



const TabClick = (number) => {
    activeTab.value = number
    switch (number) {
        case 0:
            router.push('/home')
            break;
        case 1:
            router.push('/casino')
            break;
        case 2:
            router.push('/deliver')
            break;
        case 3:
            router.push('/deposit')
            break;
        case 4:
            router.push('/withdraw')
            break;
        case 6:
            router.push('/about')
            break;
        case 7:
            router.push('/member')
            break;
    
        default:
            break;
    }
}

watch(
    () => route.path,
    () => {
        console.log(route.path, "watching");
        activeRoute.value = route.path;
    },
    { immediate: true, deep: true }
);

</script>

<template>
    
    <header class="bg-[#161213] w-full relative z-30 ">

        <div class="  h-section my-0 mx-auto pt-[15px] pr-0 pb-2 pl-0 min-w-[1100px] w-[1100px] flex   ">
            <div class="logo z-10">
                <a href="#">
                    <img src="@/assets/pc/logo.gif" alt=""
                        class="w-[290px] h-[82px]">
                </a>
            </div>
            <!-- {{ currentTime.toLocaleDateString()  }} {{ currentTime.toLocaleTimeString() }} -->
            <div class="w-[762px]  ml-[60px] mt-[5px] z-10  ">
                <div class="flex items-center pt-[10px] justify-end mr-[30px]">
                    <ul class=" ml-[5px] list-none inline-flex ">
                        <li class=" leading-5  flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-[17px] h-[17px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <!-- <span class="px-2">{{ currentTime.toLocaleDateString() }} {{ currentTime.toLocaleTimeString()
                            }}</span> -->
                            <span class="">
                                
                                 {{ currentTime.toLocaleDateString('zh-CN') }} 
                                 {{ currentTime.toLocaleTimeString('zh-CN') }}
                                 {{ currentTime.toLocaleString('zh-CN', { weekday: 'long' }) }}
                                </span>
                                 
                                 
                                <span class="text-[#585655] px-[10px]">|</span>
                        </li>
                        <li class=" inline leading-5 ">
                            <a href="#" class="animate-blink">
                                2000元免费试玩 
                                
                            </a>
                            
                            <span class="text-[#585655] px-[10px]">|</span>
                        </li>

                        <!-- <li class=" inline leading-5 ml-[13px]">
                            <a href="#" class="hover:text-[#ffd33b]">
                                电子升级模式
                            </a>
                        </li>
                        <li class=" inline leading-5 ml-[13px]">
                            <a href="#" class="hover:text-[#ffd33b]">
                                免息借呗
                            </a>
                        </li>
                        <li class=" inline leading-5 ml-[13px]">
                            <a href="#" class="hover:text-[#ffd33b]">
                                真人升级模式
                            </a>
                        </li>
                        <li class=" inline leading-5 ml-[13px]">
                            <a href="#" class="hover:text-[#ffd33b]">
                                活动办理大厅
                            </a>
                        </li> -->
                        <li class=" inline leading-5 ">
                            <a href="https://ag.ca1088.com/" target="_blank" class="hover:text-[#ffd33b]">
                                代理登入
                            </a>
                            <span class="text-[#585655] px-[10px]">|</span>
                        </li>
                        
                        <li class="  flex items-center  leading-5 ">
                            <a >
                               <img src="@/assets/pc/ch.png" alt="" srcset="">
                            </a>
                            <a class="ml-[3px]">
                               <img src="@/assets/pc/en.png" alt="" srcset="">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="login_section mt-[10px]  h-[37px]  flex items-center  ">
                    <ul v-if="!loginState"   class=" list-none ml-[160px]">
                        <form  @click.prevent class="flex items-center">
                            <div
                                class="relative pc-input flex items-center w-[170px] h-[30px] leading-[30px] text-white text-[12px] border border-[#5A4B49]">
                                <div
                                    class="relative flex items-center justify-center w-[30px] h-full   ">
                                    <UserIcon class="w-4 h-4 "></UserIcon>
                                </div>
                                <div class="w-full h-full flex items-center relative bg-transparent">
                                    <input v-model="name" type="text"  placeholder="账号:"  class="bg-transparent w-full h-full border-none input_ text-[12px] placeholder:text-white">
                                </div>
                            </div>
                            <div
                                class="relative pc-input ml-[5px] flex items-center w-[170px] h-[30px] leading-[30px] text-white text-[12px] border border-[#5A4B49]">
                                <div
                                    class="relative flex items-center justify-center w-[30px] h-full   ">
                                    <LockClosedIcon class="w-4 h-4 "></LockClosedIcon>
                                </div>
                                <div class="w-full h-full flex items-center relative bg-transparent">
                                    <input v-model="password" type="password" autocomplete="off"  placeholder="密码:"  class="bg-transparent w-full h-full pr-[50px] border-none input_ text-[12px] placeholder:text-white">
                                    <a @click="goService()" class="text-[12px] absolute right-[5px] cursor-pointer">忘记?</a>
                                </div>
                               
                            </div>
                            <div  @click="Login" class="login-btn cursor-pointer  text-center h-[32px] ml-[5px]"></div>
                            <div @click="Register" class="reg-btn cursor-pointer  text-center h-[32px] ml-[5px]"></div>
                            <!-- <a href="#" class="reg-btn  bg-white  h-[32px] ml-[5px]"></a> -->
                        </form>

                    </ul>

                    <div v-else class="flex  w-full justify-end mr-[85px] " >
                            <div class="flex items-center space-x-2 mr-5">
                             <!-- <span class="text-sm tracking-wider">用户名 :</span> -->
                             <UserIcon class="w-5 h-5"></UserIcon>
                             <span class="text-[#ffd33b]">{{ LoginResponseInfo?.username || '' }}</span>
                            </div>
                            <div class="flex items-center space-x-2 mr-5">
                                <CurrencyYenIcon class="w-5 h-5"></CurrencyYenIcon>
                             <span class="text-[#ffd33b]">{{ LoginResponseInfo?.balance || '0.00' }}</span>
                            </div>
                            <div @click="Logout" class="flex items-center space-x-2 mr-5 cursor-pointer">
                               <LogoutIcon class="w-5 h-5"></LogoutIcon>
                            </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="h-[49px] w-full relative bg-nav ">
            <div class=" z-10 nav-sec my-0 mx-auto min-w-[1100px] w-[1100px] flex items-center relative h-full">
                <ul class="list-none flex items-center h-full w-full justify-between">
                    <router-link to="/home"   class="w-[122px] text-[13px] nav-btn  font-bold  py-1 rounded-full  text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]" :class="activeRoute === '/home' ? 'bg-[#e3cd59] text-[#7B1C04] grident' : 'text-[#ddd]'">
                        <div>网站首页</div>
                        <div class="mt-[1px]">HOME</div>
                    </router-link>
                    <router-link to="/casino"   class="w-[122px] text-[13px] nav-btn  font-bold rounded-full py-1   text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full"
                    :class="activeRoute === '/casino' ? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'"
                    >
                        <div>真人视讯</div>
                        <div class="mt-[1px]">CASINO</div>
                        <img src="@/assets/pc/hot.gif" alt="" class="absolute -top-[15px] right-3">
                    </router-link>
                    <router-link to="/deliver"  :class="activeRoute === '/deliver' ? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'"  class="w-[122px] text-[13px] nav-btn  font-bold   rounded-full py-1 text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>优惠活动</div>
                        <div class="mt-[1px]">DELIVER</div>
                        <img src="@/assets/pc/hot.gif" alt="" class="absolute -top-[15px] right-3">
                    </router-link>
                    <router-link to="/menu/deposit"   :class="activeRoute === '/menu/deposit' ? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'" class="w-[122px] text-[13px] nav-btn  font-bold   rounded-full py-1  text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>存款演示</div>
                        <div class="mt-[1px]">RESERVE</div>
                    </router-link>
                    <router-link to="/menu/withdraw" :class="activeRoute === '/menu/withdraw' ? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'" class="w-[122px] text-[13px] nav-btn  font-bold   rounded-full py-1 text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>取款演示</div>
                        <div class="mt-[1px]">CHOOSE</div>
                    </router-link>
                    <!-- <a @click="TabClick(5)" :class="activeTab == 5 ? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'"  class="w-[122px] text-[13px] nav-btn  font-bold   rounded-full py-1  text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>现场视频</div>
                        <div class="mt-[1px]">VIDEO</div>
                    </a> -->
                    <router-link to="/menu/about"  :class="activeRoute === '/menu/about'? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'"  class="w-[122px] text-[13px] nav-btn  font-bold   rounded-full py-1  text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>关于我们</div>
                        <div class="mt-[1px]">ABOUT</div>
                    </router-link>
                    <router-link to="/menu/member"  :class="activeRoute === '/menu/member' ? 'bg-[#e3cd59] text-[#7B1C04]' : 'text-[#ddd]'" class="w-[122px] text-[13px] nav-btn font-bold   rounded-full  py-1 text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>合作加盟</div>
                        <div class="mt-[1px]">MEMBER</div>
                    </router-link>
                    <a @click="goService"  class="w-[122px] text-[13px] nav-btn font-bold   rounded-full text-[#ddd] py-1 text-center relative cursor-pointer hover:bg-[#e3cd59] hover:text-[#7B1C04]   hover:py-1 hover:rounded-full">
                        <div>在线客服</div>
                        <div class="mt-[1px]">SERVICE</div>
                    </a>
                </ul>
            </div>
        </div>
</header>
</template>
<style scoped>
@keyframes blink {
  0% {
    color: #ffd33b;
  }
  50% {
    color: #f00;
  }
  100% {
    color: #ffd33b;
  }
}

.animate-blink {
  animation: blink 0.7s  infinite;
}
.pc-input:focus-within {
    /* border: 0; */
    outline: none;
    box-shadow: none;
    /* border-color: #eed0a4; */
    border: 1px solid #ffd053;
	transition: all 0.4s;
	color: #ffd053;
}
.input_{
    border: 0;
    outline: none;
    box-shadow: none;
}
.login-btn{
    background: url(@/assets/pc/loginbtn.png) no-repeat center top;
    transition: all 0.4s;
    width: 104px;
}
.login-btn:hover{
    background: url(@/assets/pc/loginbtn.png) no-repeat center -32px;
}
.reg-btn{
    background: url(@/assets/pc/registerbtn.png) no-repeat center top;
    transition: all 0.4s;
    width: 104px;
}
.reg-btn:hover{
    background: url(@/assets/pc/registerbtn.png) no-repeat center -32px;
}
.bg-nav{
    background: url(@/assets/pc/bg_nav.jpg) no-repeat center top;
}
.nav-btn{
    transition: all 0.6s;
}
</style>