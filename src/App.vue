<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import s2vs3 from './components/2vs3.vue'
import Basic from './components/basic.vue'
import Coputed from './components/coputed.vue'
import Watch from './components/watch.vue'
import Life from './components/life.vue'
import PropsEmits from './components/propsEmits.vue'


const isOpen=ref(true);
const price = ref(11);
const count = ref(5);

</script>

<template>
  <HelloWorld msg="我是msg消息" :age="20" @zdyClick="" />
  <HelloWorld2 />
  <s2vs3 />
  <Basic />
  <Coputed />
  <Watch />
----------------------------组件生命周期
  <Life v-if="isOpen" />
  <button @click="isOpen=!isOpen">{{ isOpen?'关闭':'打开' }}</button>
----------------------props&emits
  <!-- <PropsEmits :price="price" :count="count" v-on:update="price++" /> -->
  <!-- <PropsEmits :price="price" :count="count" @update="v => { price += v }" /> -->
  <PropsEmits :price="price" :count="count" v-on:update="v => { price += v }" />


  <button @click="price++">price++</button>
  <router-view></router-view>
</template>
