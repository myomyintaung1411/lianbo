<script setup>
import { onMounted,ref } from 'vue'
import { useRouter } from 'vue-router'

const loader = ref(true);
const router = useRouter()

setTimeout(() => {
  loader.value = false;
}, 2000);

const isMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true
  } else {
    return false
  }
}

onMounted(() => {
  if (isMobile()) {
    router.push('/m')
  } else {
    router.push('/')
  }
})
</script>

<template>
 <section v-if="loader" class="loader w-full h-screen flex justify-center items-center">
  <div class="relative">
    <img src="@/assets/pc/global_spinner.gif" alt="" class="">
    <p class="text-center font-bold text-base -mt-20 tracking-widest typing-text ">LIANBO CASINO</p>
  </div>
 </section>
  <div v-else class="w-full h-full relative ">
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
@font-face {
  font-family: 'Inter var';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url('public/font/Inter-roman.var.woff2') format('woff2');
}
html {
  scroll-behavior: smooth;
}

*:focus {
  outline: none !important;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  padding: 0;
  margin: 0;
  font-size: 12px;
  line-height: 1;
  font-family: "Open Sans", sans-serif;
  @apply bg-[#2f1c0b];
  min-height: 100vh;
  width: 100%;
  color: #e3a497;
  overflow-x: hidden !important;
  font-family:  PingFang SC, Hiragino Sans GB, Helvetica Neue, Microsoft Yahei, sans-serif, arial;
}

/* .typing-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(11, end) forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
} */
</style>
