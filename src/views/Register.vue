<script setup>
import { ref, computed } from 'vue';
import ModalDialog from "@/components/ModalDialog.vue";
import AES from '@/api/aes';
import global from '@/api/global'
import md5 from "js-md5"
import { useRouter,useRoute } from 'vue-router';
import Vcode from "vue3-puzzle-vcode";

import { useStore } from "vuex";
import { getCurrentInstance } from 'vue';
import { UserRegister, UserLogin, GetUserBalance } from "@/api/user";

const instance = getCurrentInstance()
const store = useStore()
const router = useRouter();

const agree = ref(false);
const dialog = ref(false)
const isShow = ref(false);

const name = ref('')
const password = ref('')
const confirmpass = ref('')
const realname = ref('')



const AgentInfo = computed(() => store.getters["user/AGENT_INFO"]);

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
                 instance.proxy.$message({ message: '注册成功', duration: 2 })
                 router.push('/')
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
    if (!agree.value)
        return instance.proxy.$message({ message: '※ 请勾选同意条款!!', duration: 2 })
     onShow()
}

const clearRegister = () => {
    // router.push('/sdfsd')
    name.value = ''
    password.value = ''
    confirmpass.value = ''
    realname.value = ''


}
</script>

<template>
    <ModalDialog :show="dialog" @close="dialog = false">
        <div class="w-[700px]  relative   py-10 text-white ">
            <h1 class="text-xl absolute top-3 font-bold  px-3 ">开户协议</h1>
            <div class=" px-3 py-2 ">
                <span class="text-[13px] leading-5 text-[#ddd]  ">
                    存款免手续费，开户最低入款金额100人民币。 联博娱乐严禁会员有重复申请账号行为，每位玩家、每一ip地址 、每一电话号码、相同支付卡/信用卡号码，及共享计算机环境(例如网吧、其他公共用计算机等)只能拥有一个帐户数据。无论是个人或是团体，如有任何威胁、滥用联博娱乐名义的行为，联博娱乐保留杈利取消、收回玩家账号。 玩家注册信息有争议时，为确保双方利益、杜绝身份盗用行为，联博娱乐保留权利要求客户向我们提供充足有效的档，并以各种方式辨别客户是否符合资格享有我们的任何优惠。
                </span><br /><br />
                <span
                    class="text-[13px] leading-5 text-[#f00]">联博娱乐官方通知：若发现您在平台上开设多个会员账户，并进行套利下注；本公司有权取消您的会员账号并将所有下注营利取消！</span>
            </div>
        </div>
    </ModalDialog>
    <div class="-mt-[165px]"></div>
    <div class="bannerBox relative h-[420px] w-full ">
        <div class="w-[1100px] mx-auto my-0 relative h-full">
            <div class="absolute bottom-0 w-[1108px] h-[45px]  mx-auto my-0 marquee_bg">
                <div class="py-[10px] pl-[120px] pr-[20px]  h-full">
                    <Vue3Marquee :delay="1" :duration="100"  class=" pt-[5px] text-center overflow-y-hidden">☞
                        欢迎进入联博娱乐官方网站！数字货币彩金已派送！尊敬的贵宾：凡使用数字货币充值取款，可享当天第一笔数字货币充值金额的5%~8%真人彩金，每天都送，赠送无上限。彩金统一派送时间为北京时间晚上12:00
                    </Vue3Marquee>
                </div>
            </div>
        </div>
    </div>
    <section class=" bg-[#241d1c] py-[20px] px-0 w-full">
        <div class="w-[1100px] bg-[#17100e] min-w-[1100px] mx-auto my-0">
            <div class="flex flex-col items-center w-[760px] justify-center  mx-auto px-[40px] pt-[30px] pb-[20px]">
                <div>
                    <h3 class="text-center text-white text-[18px] mb-[10px] pb-[15px]">
                        【联博娱乐】 线路网址：
                        <a href="#" class="text-[#ffd438]">{{AgentInfo?.gameAddr}}</a>
                    </h3>
                    <div class="topText text-white text-[15px] ml-[50px] mb-[20px] ">
                        <div class="inline-flex space-x-1">
                            <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/hot01.gif?=1155" alt=""
                                class="mr-[10px]">
                                【账号升级】可获得相应的等级礼金，礼金最高可获得60000元！
                            <!-- <a href="#" class="bg-[#ffd438] text-[#333] text-center h-4 ">32231.com</a>
                            奖金高达 -->
                            <!-- <span class="text-[#ffd438]">上百万元</span> -->
                        </div>
                        <div class="inline-flex space-x-1">
                            <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/hot01.gif?=1155" alt=""
                                class="mr-[10px]">
                                【推荐好友】加入联博娱乐充值游戏，真人彩金高达8888送不停！
                            <!-- <a href="#" class="bg-[#ffd438] text-[#333] text-center h-4 ">06660.com</a>
                            <span class="text-[#ffd438]">等级礼金748300元</span>
                            月月俸禄
                            <span class="text-[#ffd438]">80000元</span> -->
                        </div>
                        <div class="inline-flex space-x-1">
                            <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/hot01.gif?=1155" alt=""
                                class="mr-[10px]">
                                【数字货币】存款就送高达8%真人礼金，投注流水三倍即可提款！
                            <!-- <a href="#" class="bg-[#ffd438] text-[#333] text-center h-4 ">51153.com</a>
                            自由买卖，
                            <span class="text-[#ffd438]">账号就是金钱！</span> -->
                        </div>
                        <div class="inline-flex space-x-1">
                            <img src="https://static.5u5tf6.com/1/cl/tpl/ambjl2/images/hot01.gif?=1155" alt=""
                                class="mr-[10px]">
                                【免息借呗】单一会员最高可借100万元 0担保，0抵押，0利息！
                        </div>
                    </div>
                    <!-- reg section -->

                    <section class="reg pt-[10px]  w-full">

                        <form @click.prevent>
                            <div class="mx-auto my-0 w-[710px] reg_ flex flex-col items-center justify-center">
                                <span class="text-center w-full mt-5 text-[#ffd438] text-xl">账号信息</span>
                                <span class="text-center w-full  text-[#ffd438] text-[12px]">INFORMATION</span>
                                <div class="my-[40px]  ">
                                    <div class="my-5">
                                        <div class="flex items-center text-[#e3a497] text-[13px] space-x-4">
                                            <span class="text-[#f00] text-[13px]">*</span>
                                            <span>会员帐号</span>
                                            <input v-model="name" type="text" max="15" maxlength="15"
                                                placeholder="请输入您的会员账号"
                                                class="w-[282px] h-[30px] leading-[30px] border border-[#5a4b49] input-name focus-within:border-0 text-[12px] bg-[#2b1d1a] text-[a68b83]">
                                        </div>
                                        <div class="note text-[#e3a497] text-[12px] mt-[10px] ml-[90px]">请输入 <span
                                                class="text-[#f00] text-[13px]">4-12个字元,</span>
                                            仅可输入英文字母以及数字的组合!</div>
                                    </div>
                                    <div class="my-5">
                                        <div class="flex items-center text-[#e3a497] text-[13px] space-x-4">
                                            <span class="text-[#f00] text-[13px]">*</span>
                                            <span>会员密码</span>
                                            <input v-model="password" autocomplete="off" type="password" max="15" maxlength="15" placeholder=""
                                                class="w-[282px] h-[30px] leading-[30px] border border-[#5a4b49] input-name focus-within:border-0 text-[12px] bg-[#2b1d1a] text-[a68b83]">
                                        </div>
                                        <div class="note text-[#e3a497] text-[12px] mt-[10px] ml-[90px]">须为 <span
                                                class="text-[#f00] text-[13px]">46~12码英文或数字夹杂</span>
                                            且符合0~9或a~z字元!</div>
                                    </div>
                                    <div class="my-5">
                                        <div class="flex items-center text-[#e3a497] text-[13px] space-x-4">
                                            <span class="text-[#f00] text-[13px]">*</span>
                                            <span> 确认密码</span>
                                            <input v-model="confirmpass" autocomplete="off" type="password" max="15" maxlength="15"
                                                placeholder=""
                                                class="w-[282px] h-[30px] leading-[30px] border border-[#5a4b49] input-name focus-within:border-0 text-[12px] bg-[#2b1d1a] text-[a68b83]">
                                        </div>
                                        <div class="note text-[#e3a497] text-[12px] mt-[10px] ml-[90px]">请再次确认密码

                                        </div>
                                    </div>
                                    <div class="my-5">
                                        <div class="flex items-center text-[#e3a497] text-[13px] space-x-4">
                                            <span class="text-[#f00] text-[13px]">*</span>
                                            <span> 真实姓名</span>
                                            <input v-model="realname" type="text" max="15" maxlength="15"
                                                placeholder="请输入您的真实姓名"
                                                class="w-[282px] h-[30px] leading-[30px] border border-[#5a4b49] input-name focus-within:border-0 text-[12px] bg-[#2b1d1a] text-[a68b83]">
                                        </div>
                                        <div class="note text-[#f00] text-[13px] mt-[10px] ml-[90px]">
                                            必须与您的银行账户名称相同，否则不能出款
                                        </div>
                                    </div>

                                    <p class="agree">
                                    <div class="flex items-center rounded dark:border-gray-700">

                                        <div @click="agree = !agree" class="w-4 h-4 rounded  cursor-pointer"
                                            :class="agree ? 'bg-blue-900' : 'bg-white'">
                                            <svg v-if="agree" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="w-full h-full " :class="agree ? 'text-white' : ''">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>


                                        </div>
                                        <span class="ml-2 text-sm font-medium">我已届满合法博彩年龄，且同意各项开户条约 <a
                                                @click="dialog = true"
                                                class="text-[#f00] z-10 cursor-pointer">“开户协议”</a>.</span>


                                    </div>

                                    </p>
                                    <div class="flex items-center my-5 ml-20 space-x-4">
                                        <div @click="Register"
                                            class="w-[140px] bg-[#ffc01d] text-base tracking-wider rounded-full leading-[40px] h-[40px] text-[#352c2a] font-bold text-center cursor-pointer border-none">
                                            <span>提交注册</span>
                                        </div>
                                        <div @click="clearRegister"
                                            class="w-[140px]  border  border-[#ffc01d] text-base tracking-wider rounded leading-[40px] h-[40px] text-[#ffc01d] font-bold text-center cursor-pointer ">
                                            <span>重新填写</span>
                                        </div>
                                    </div>

                                </div>
                                <div
                                    class="text-[#e3a497] text-[12px] border-t border-[#2d1f1b] pt-[20px] mt-[15px] ml-[20px] mr-[10px] leading-6">
                                    <p>备注：
                                        <br>
                                        1.标记有
                                        <span class="text-[#f00]">*</span> 者为必填项目。
                                        <br />

                                        2. 真实姓名与取款密码为取款金额时的凭证，请会员务必填写详细资料。
                                    </p>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </section>
    <Vcode :show="isShow" @success="onSuccess" @close="onClose"/>

</template>

<style scoped>
.bannerBox {
    background: url(@/assets/pc/welcomebg.jpg) no-repeat center top;
    background-size: cover;

}

.marquee_bg {
    background: url(@/assets/pc/marqueebg.png);
}

.input-name:focus-within {
    border: 1px solid #5a4b49;
    outline: none;
    box-shadow: none;
}
</style>