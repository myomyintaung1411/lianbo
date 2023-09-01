<script setup>
 import {ref} from 'vue'
 const showMore_One = ref(false)
 const showMore_Two = ref(false)
 const showMore_Three = ref(false)
</script>

<template>
     <div class="-mt-[150px]"></div>
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
    <section class="bg-[#1d1d1d] w-full relative">
        <div class="w-[1080px]  h-[41px] bg-[#2f2523] mx-auto mt-0 mb-[5px] pt-[12px] pb-[10px]">
            <a href="#" class="  text-white font-bold h-full  cursor-pointer tracking-wider  mr-[10px] text-center text-[15px] relative px-5">
                所有活动
            </a>
        </div>
        <div class="w-[1100px] my-0 mx-auto">
            <div>
                <!-- <div class="mb-[10px]">
                    <a href="#" class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/1.png" alt="" class="w-full">
                    </a>
                </div>
                <div class="mb-[10px]">
                    <a href="#" class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/2.png" alt="" class="w-full">
                    </a>
                </div>
                <div class="mb-[10px]">
                    <a href="#" class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/3.png" alt="" class="w-full">
                    </a>
                </div>
                <div class="mb-[10px]">
                    <a href="#" class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/4.png" alt="" class="w-full">
                    </a>
                </div> -->
                <div @click="showMore_One = ! showMore_One" class="mb-[10px]">
                    <a  class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/1.png" alt="" class="w-full">
                    </a>
                </div>
                <section class="fade-down" v-if="showMore_One" :class="{ 'active': showMore_One }">
                <div class="my-3 text-center">
                    <h1 class="bg-[#FFFF00] inline-block text-[#FF0000] px-2 py-1 font-bold tracking-widest text-[18px]">玩【真人视讯】永久累计打码,让您的会员账号变成永久收益金管家!</h1>
                </div>
                <div class="pt-[5px] text-white text-sm">
                    <p class="  ">
                        ● 每位游戏玩家在联博娱乐的每一笔真人投注都会永久累积，累积到一定标准，即可升级。
                    </p>
                    <p class="">
                        ● 游戏账号每升一级即可获得相对应的等级礼金，等级礼金最高可获得60000元，还可获得无门槛要求的月月俸禄送不停，这就是您的会员账号金管家！
                    </p>
                </div>
                <section class="py-3 relative ">
                    <table class="mb-[20px] border-collapse w-full ">
                            <tbody>
                                <tr class="bg-[#990000]">
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444] align-middle">晋升标准等级 	</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">累计打码	</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">等级礼金</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">月俸禄</th>
                                    <th class="p-[10px] text-[#fff]  border-r border-[#464444] align-middle">时时返水</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444] align-middle">存取款加速通道</th>
                                    <th class="p-[10px] text-[#fff]  align-middle">一对一客服经理</th>

                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">100万</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">100元</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 50元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">2级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">500万</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">600元</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 300元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">3级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1000万</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 500元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">4级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">2000万</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">2000万 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 1000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">5级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">5000万</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">4000万 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">6级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1.0亿</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">8000万 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 4000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">7级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">2.0亿</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">10000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 5000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">8级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">5.0亿</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">20000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 10000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">9级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">10亿</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">30000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 15000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">10级</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">20亿</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">60000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 30000元 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">不限次数</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">√</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">-</td>
                                </tr>
                            </tbody>
                        </table>
                   <p class="py-3  tracking-wider text-sm text-white">
                    <span class="text-[#ff0000]">例:</span>
                   会员游戏投注累计达到100万打码量即可获得等级一礼金<span class="text-[#ff0000]">100元</span>，分两个月俸禄，每月可获得<span class="text-[#ff0000]">50元</span>俸禄，当游戏投注累计达到1000万打码量，即可再次获得升级礼金<span class="text-[#ff0000]">1000元</span>，每月可获得<span class="text-[#ff0000]">500元</span>俸禄！
                   </p>
                </section>
            </section>
                <div @click="showMore_Two = !showMore_Two" class="mb-[10px]">
                    <a  class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/2.png" alt="" class="w-full">
                    </a>
                </div>
                <section v-if="showMore_Two" :class="{ 'active': showMore_Two }" class="py-2 section_two">
                    <div class="text-white font-bold tracking-widest text-[18px] text-center">
                        <h1 class="bg-[#FFFF00] inline-block text-[#FF0000] px-2 py-1 font-bold tracking-widest text-[18px]">您【推荐好友】加入联博娱乐充值游戏，真人彩金礼包8888送不停！</h1>
                    </div>
                    <div class="py-3 text-white text-sm">
                        <p>独享不如众享，您还在独自战斗吗？立即呼唤亲朋好友助阵体验组团娱乐的乐趣，携手联博 共赢财富，邀请您的好友加入联博娱乐就能获得丰厚回报！</p>
                    </div>
                    <div class="py-1 text-base text-[#FF0000] font-bold">
                        <p>联博娱乐推荐好友活动奖励 :</p>
                    </div>
                    <section class="py-3 relative ">
                    <table class="mb-[20px] border-collapse w-full ">
                            <tbody>
                                <tr class="bg-[#990000]">
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444] align-middle">推荐好友 	</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">存款累计	</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">赠送礼金(RMB)</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">流水倍数</th>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥1000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">100</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥5000 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">500</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥10000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">888</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥50000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥100000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">2000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥300000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">5000 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥500000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">6666 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">1</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥100万</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">8888 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 2 </td>
                                </tr>
                            </tbody>
                        </table>
                   <div class="py-3">
                    <span class="text-base text-[#FF0000] font-bold">优惠细则：</span>
                    <div class="py-2 text-white text-sm">
                        <p>1. 被推荐人游戏存款金额累计时间为一个月，一个月结束后重新开始累计。</p>
                        <p>2. 会员的手机号码+IP地址+银行卡，三者归属地必须统一，否则无法申请此优惠。</p>
                        <p>3. 如何申请：您需要主动联系客服提交优惠申请，客服人员实时为您审核处理优惠。</p>
                        <p>4. 此活动由【联博娱乐】特为玩家而设，如发现任何团体或个人，以不诚实方式套取红利或任何威胁、滥用公司优惠等行为，公司保留冻结、取消该团体或个人账户及账户结余或会员等级的权利。</p>
                    </div>
                   </div>
                </section>
                </section>
                <div @click="showMore_Three = !showMore_Three" class="mb-[10px]">
                    <a class="block w-[1086px] my-0 mx-auto">
                        <img src="@/assets/pc/deliver/3.png" alt="" class="w-full">
                    </a>
                </div>
                <section v-if="showMore_Three" class="py-2">
                    <div class="text-white font-bold tracking-widest text-[18px] text-center">
                        <h1 class="bg-[#FFFF00] inline-block text-[#FF0000] px-2 py-1 font-bold tracking-widest text-[18px]">用【数字货币】存款就送高达8%真人礼金，投注流水三倍即可提款！</h1>
                    </div>
                    <div class="py-3 text-white text-sm">
                        <p>数字货币 安全便捷，联博娱乐引领步入数字货币时代。首次使用USDT进行充值的会员，公司赠送充值金额的5%~8%真人礼金！</p>
                    </div>
                    <section class="py-3 relative ">
                    <table class="mb-[20px] border-collapse w-full ">
                            <tbody>
                                <tr class="bg-[#990000]">
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444] align-middle">首存金额(USDT)</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">礼金百分比</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">赠送礼金(RMB)</th>
                                    <th class="p-[10px] text-[#fff] border-r border-[#464444]  align-middle">流水倍数</th>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥1000U</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">5%</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥330</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">3 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥5000U</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">6% </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥2000	</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 3 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥10000U</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">7%</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥5000</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 3 </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">≥20000U	</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center">8%</td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> ≥10000 </td>
                                    <td class="p-[10px] text-[#fff] border border-[#464444] align-middle text-center"> 3 </td>
                                </tr>
                            </tbody>
                        </table>
                   <div class="py-3">
                    <span class="text-base text-[#FF0000] font-bold">优惠细则：</span>
                    <div class="py-2 text-white text-sm">
                        <p>1. 首存金额指您开户后下第一注之前的所有数字货币USDT充值的金额。</p>
                        <p>2. 如何申请：您需要主动联系客服提交优惠申请，客服人员实时为您审核处理优惠。</p>
                        <p>3. 本优惠活动仅联博娱乐集团独家拥有。</p>
                        <p>4. 同一会员只能申请一个游戏账号，每个账号只能享受一次数字货币首存优惠，会员绑定的开户银行卡地址、手机号码归属地和登录IP需为同一地区，任何人/团体/组织若以不诚实的方法获取红利，将会永远冻结其账户且没收所有资金。</p>
                    </div>
                   </div>
                </section>
                </section>
            </div>
        </div>
    </section>
</template>


<style scoped>
.bannerBox {
    background: url(@/assets/pc/deliver/deliverbg.jpg)  center top;
}

.marquee_bg {
    background: url(@/assets/pc/marqueebg.png);
}
.fade-down {
        opacity: 0;
        transform: translateY(-20px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
    .fade-down.active {
        opacity: 1;
        transform: translateY(0);
    }
</style>