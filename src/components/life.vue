<template>
    <div>单价：<input v-model="price" /></div>
    <div>数量：<input v-model="count" /></div>
    <div>总价：{{ total }}</div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, onUpdated, ref, watch } from 'vue';
// , watchEffect, watchPostEffect, watchSyncEffect
const price = ref(2);
const count = ref(1);
// 不会变，需要用计算属性
// const total = price.value * count.value;
const total = computed(()=>{
    return price.value * count.value
})

// newValues、oldValues 是数组
// watch([price,count],(newValues,oldValues)=>{
//     console.log("watch-new",newValues);
//     console.log("watch-old",oldValues);
// })
watch([price,count],([newPrice,newCount],[oldPrice,oldCount])=>{
    console.log('watch')
    console.log("watch-newPrice",newPrice);
    console.log("watch-newCount",newCount);
    console.log("watch-oldPrice",oldPrice);
    console.log("watch-oldCount",oldCount);
    if(price.value > 10){
        alert('不能大于10');
        price.value = oldPrice;
    }
})
// 组件挂载
onMounted(()=>{
    console.log("组件挂载")
})
// 组件更新
onUpdated(()=>{
    console.log("组件更新")
})
// 组件卸载
onUnmounted(()=>{
    console.log('组件卸载')
})
</script>
<style></style>