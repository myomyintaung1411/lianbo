<script setup>
import {  computed } from "vue";
import { useStore } from "vuex";
const store = useStore()

const agentInfo = computed(() => store.getters["user/AGENT_INFO"]);

</script>

<template>
    <footer class="footer w-full">
        <div class="w-[1100px] min-w-[1100px] mx-auto my-0">
            <div class="mb-[30px] mx-auto w-full  flex justify-center items-center">
                <img src="@/assets/pc/company.png" alt="" class="w-[700px] object-cover">
            </div>
            <!-- <p class="text-center text-[#9c746b] leading-6 text-sm">
                联博娱乐所提供的产品和服务，是由澳门特别行政区 The Macao Special Administrative Region.授权和监管。选择我们，您将拥有可靠的资金保障和优质的服务。 
                <br/>
                
            Copyright ©版权所有2016 联博娱乐 Reserved    E-mail： {{agentInfo?.QQ}}@gmail.com   国际热线：{{agentInfo?.phone}}   国际热线：{{agentInfo?.phone}}
            </p> -->
            <p class="text-center text-[#9c746b] leading-6 text-sm"> ©版权所有2016 联博娱乐 Reserved</p>
        </div>
    </footer>
</template>

<style scoped>
 .footer{
 overflow: hidden;
 padding:45px 0 30px;
 background:#1c1616 url(@/assets/pc/footer_bg.jpg) repeat-x center top;
 width: 100%;
 }
</style>