<script setup>
import {ref} from 'vue'
const activeTab = ref(0)
</script>
<template>
                    <div class="px-[10px] text-left border-b cursor-pointer border-[#3f3d3d]  mb-[30px]">
                        <div @click="activeTab = 0" class="h-[30px] text-center inline-block  "
                         :class="activeTab == 0 ? 'border-b border-[#ffd438] text-[#ffd438]' : 'text-[#d0d0d0]'"
                        >
                            <a  class=" bg-[#19110f]  
                             h-full leading-[30px] text-base font-bold px-[25px] 
                            ">
                                <!-- 取款帮助 -->
                                加盟方案

                        </a>
                    </div>
                    <div @click="activeTab = 1" class="h-[30px] text-center inline-block  "
                    :class="activeTab == 1 ? 'border-b border-[#ffd438] text-[#ffd438]' : 'text-[#d0d0d0]'"
                    >
                            <a  class=" bg-[#19110f]  
                         h-full leading-[30px] text-base font-bold px-[25px] 
                        ">
                         加盟协议

                                </a>
                            </div>
                    <div  class="h-[30px] text-center inline-block text-[#d0d0d0]">
                            <a href="https://ag.ca1088.com/" target="_blank"  class=" bg-[#19110f] h-full leading-[30px] text-base font-bold px-[25px]  ">
                        代理登入 </a>
                    </div>
                    </div>
                    <section v-if="activeTab == 0" class="">
                        <p class="text-sm font-bold text-[#ffd438] mb-[3px]">
                            ● 欢迎加入联博娱乐集团代理合作计划，如果您拥有不错的人际关系或网络资源，请立即加入到联博娱乐代理合作中，加入程序简单，而且完全免费。佣金丰厚，无须负担任何费用，就可以开始无上限的收入，期待您的加入！
                        </p>
                        <p class="text-sm font-bold text-[#ffd438] mt-[15px] mb-[5px]">
                            ● 加盟代理条件
                        </p>
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                            1. 具有便利的手机或者电脑上网设备。<br>
                            2. 有一定的网络资源或人脉资源。<br>
                            3. 不得以任何理由拖欠交易所得利润。<br>
                        </p>
                        <!-- <p class="text-center text-[22px] font-bold text-[#fff799] mb-[8px]">
                            方案一：佣金日结算，抽水代理方案
                        </p> -->
                        <p class="text-center text-[22px] font-bold text-[#fff799] mb-[8px]">
                            ● 代理商待遇
                        </p>

                        <!-- <table class="mb-[20px] border-collapse w-full ">
                            <tbody>
                                <tr>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">代理优惠</th>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">回馈佣金</th>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">佣金派送方式比例</th>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">结算日期派送方式</th>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        线下会员注册数量（个）
                                    </td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">18元/1个</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        例：当日代理总注册10个<br>
                                        可得：18X10=180元佣金
                                    </td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle" rowspan="3">
                                        日结算（美东时间）<br>第二天05:00-23:59之间自动派送
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        线下会员日总存款
                                    </td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        5‰（千分5）
                                    </td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        例：当日代理下总存款100万<br>
                                        可得：100万X0.005=5000元
                                    </td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        线下会员日总有效投注
                                    </td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        1‰（千分1）
                                    </td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">
                                        例：当日代理下总投注100万<br>
                                        可得：100万X0.001=1000元
                                    </td>
                                </tr>
                            </tbody>
                        </table> -->
                        <!-- <p class="my-5 text-[12px] leading-6">
                            注：请谨记使用任何不诚实方式骗取代理佣金，如出现同IP多账号现象/恶意套利等，所有账号公司有权拒绝派送该退佣。
                        </p> -->
                        <p class="my-5 text-[12px] leading-6 text-left">
                         您不用投入任何的资金，即可享受最高双边洗码1.0、提成佣金25%的待遇。您的用户的赢利不用您承担，都由公司为您承担，您不用承担任何客户赢钱的风险，代理佣金每个月一号中午12:00结算。结算完毕后，即可申请提款，您的所有提款将在30分钟内到达您的收款账户。
                        </p>

                        <!-- <p class="text-center text-[22px] font-bold text-[#fff799] mb-[8px]">
                            佣金周结算，实际代理盈利方案
                        </p> -->

                        <table class="mb-[20px] border-collapse w-full ">
                            <tbody>
                                <tr>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">当月业绩	</th>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">洗码比例	</th>
                                    <th class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">提成佣金比例</th>

                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">当月洗码佣金达到100万或输赢达到5万</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">可享双边洗码0.9</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">提成佣金10%</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">当月洗码佣金达到500万或输赢达到10万</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">可享双边洗码0.9</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">提成佣金15%</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">当月洗码佣金达到1000万或输赢达到30万</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">可享双边洗码1.0</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">提成佣金20%</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">当月洗码佣金达到2000万或输赢达到50万</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">可享双边洗码1.0</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">提成佣金25%</td>
                                </tr>
                                <!-- <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">300001~800000</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">15或以上</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">25%</td>
                                </tr>
                                <tr>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">800001以上</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">20或以上	</td>
                                    <td class="p-[10px] text-[#e3a497] border border-[#e3a497] align-middle">30%</td>
                                </tr> -->


                            </tbody>
                        </table>

                        <!-- <p class="text-sm font-bold text-[#ffd438] mb-[3px]">
                            例如：
                        </p>
                       
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                            A：代理线下客户拥有5个有效会员星期一到星期日真人视讯累计的盈利58000元（扣除相应费用后），依照上表门槛x佣金百分比，那么代理可得佣金58000元x15%=8700元。B：代理下线客户拥有18个有效会员（未达到20个有效会员）星期一到星期日真人视讯累计的盈利58万元（扣除相应费用后），依照上表门槛x佣金百分比，那么代理可得佣金58万 x25%=145000元。
                        </p> -->
                        <p class="text-[12px]  mt-[5px] mb-[10px]">
                            请紧记任何使用不诚实的方法以骗取佣金将会永久冻结代理账户，所有佣金都将清零。
                        </p>
                        <p class="text-sm font-bold text-[#ffd438] mt-[15px] mb-[5px] ">
                            ● 代理功能
                        </p>
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                            我们为您提供完善的代理管理系统，您可以无限制的发展下线会员，并且实时了解下线会员的输赢、投注、存款、取款、报表等情况。公司为每位代理提供代理专属网址，您可以直接将您的网址在网站、论坛、博客、微信/QQ群里发送您的专属网址，只要通过您的网址注册的会员都是您的下线客户，推广方式多种多样。
                        </p>
                        <p class="text-sm font-bold text-[#ffd438] mt-[10px] mb-[5px]">
                            ● 贴心服务
                        </p>
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                            公司客服7×24小时在线服务，您可以直接联系网站在线客服或直接拨打客服电话。立即加盟联博娱乐集团，快速开创一番属于自己的事业！我们将以最低的门槛和最丰厚的回报助您成功！
                        </p>
                    </section>
                    <section v-if="activeTab == 1" class="">
                        <p class="text-sm font-bold text-[#ffd438] mb-[3px] mt-3">
                            一、联博娱乐对加盟代理的权利与义务
                        </p>
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                           
                            1. 联博娱乐的客服部会登记加盟的会员并会观察他们的投注状况。加盟及会员必须同意并遵守联博娱乐的会员条例，政策及操作程式。联博娱乐保留拒绝或冻结加盟/会员帐户权利。<br>
                            2. 加盟代理可随时登入介面观察旗下会员的下注状况及会员在网站的活动概况。联博娱乐的客服部会根据加盟代理旗下的会员计算所得的佣金。<br>
                            <!-- 3. 联博娱乐保留可以修改合约书上的任何条例，包括: 现有的佣金范围、佣金计划、付款程式、及参考计划条例的权力，联博娱乐会以电邮、网站公告等方法通知代理联盟。 代理联盟对于所做的修改有异议，代理联盟可选择终止合约，或洽客服人员反映意见。 如修改后代理联盟无任何异议，便视作默认合约修改，代理联盟必须遵守更改后的相关规定。<br> -->

                        </p>
                        <p class="text-sm font-bold text-[#ffd438] mb-[3px] mt-3">
                            二、加盟代理对联博娱乐的权力及义务
                        </p>
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                            1. 加盟代理应尽其所能，广泛地宣传、销售及推广联博娱乐，使代理本身及联博娱乐的利润最大化。<br>
                            2. 加盟代理所使用的宣传、销售及推广方法，所产生的费用可以向联博娱乐申请报销一部分。<br>
                            3. 任何联博娱乐相关资讯包括: 公司现场、标志、报表、游戏画面、图样、文案等，加盟代理可以随意公开、分发有关材料。<br>
                            4. 加盟代理不可开设双/多个游戏帐号，进行游戏对打，从而赚取洗码佣金。<br>

                        </p>
                        <!-- <p class="text-sm font-bold text-[#ffd438] mb-[3px] mt-3">
                            三、 规则条款
                        </p>
                        <p class="text-[13px] text-[#e3a497] mb-[20px] leading-6">
                            1. 各阶层代理联盟不可在未经联博娱乐许可情况下开设双/多个的代理帐号，也不可从联博娱乐帐户或相关人士赚取佣金。请谨记任何阶层代理不能用代理帐户下注，联博娱乐有权终止并封存帐号及所有在游戏中赚取的佣金。<br>
                            2. 为确保所有联博娱乐会员账号隐私与权益，联博娱乐不会提供任何会员密码，或会员个人资料。各阶层代理联盟亦不得以任何方式取得会员资料，或任意登入下层会员账号，如发现代理联盟有侵害联博娱乐会员隐私行为，联博娱乐有权取消代理联盟红利，并取消代理联盟账号。<br>
                            3. 代理联盟旗下的会员不得开设多于一个的帐户。联博娱乐有权要求会员提供有效的身份证明以验证会员的身份，并保留以IP判定是否重复会员的权利。如违反上述事项，联博娱乐有权终止玩家进行游戏并封存帐号及所有于游戏中赚取的佣金<br>
                            4. 代理联盟不可为自己或其他联盟下的有效投注会员,只能是公司直属下的有效投注会员, 代理每月需有5个下线有效投注（有效投注为每月至少上线5次进行正常投注），如有违反联盟协议联博娱乐有权终止并封存帐号及所有在游戏中赚取的佣金。<br>
                            5. 如代理联盟旗下的会员因为违反条例而被禁止享用联博娱乐的游戏，或联博娱乐退回存款给会员，联博娱乐将不会分配相应的佣金给代理联盟。如代理联盟旗下会员存款用的信用卡、银行资料须经审核，联博娱乐保留相关佣金直至审核完成。<br>
                            6. 合约内的条件会以联博娱乐通知接受代理联盟加入后开始执行。联博娱乐及代理联盟可随时终止此合约，在任何情况下，代理联盟如果想终止合约，都必须以书面/电邮方式提早于七日内通知联博娱乐。代理联盟的表现会3个月审核一次，如代理联盟已不是现有的合作成员则本合约书可以在任何时间终止。如合作伙伴违反合约条例，联博娱乐有权立即终止合约。<br>
                            7. 在没有联博娱乐许可下，代理联盟不能透露及授权联博娱乐相关密资料，包括代理联盟所获得的回馈、佣金报表、计算等;代理联盟有义务在合约终止后仍执行机密档及资料的保密。<br>
                            8. 在合约终止后，代理联盟及联博娱乐将不须要履行双方的权利及义务。终止合约并不会解除代理联盟于终止合约前应履行的义务。<br>

                        </p> -->
                    </section>
</template>