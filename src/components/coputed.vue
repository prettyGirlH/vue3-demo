<template>
    <div>单价：<input v-model="price" /></div>
    <div>数量：<input v-model="count" /></div>
</template>
<script setup lang="ts">
import {  ref } from 'vue';
const price = ref(2);
const count = ref(1);
// 不会变，需要用计算属性
// const total = price.value * count.value;

</script>
<style></style>