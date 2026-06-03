<template>
    <div>单价：<input v-model="price" /></div>
    <div>数量：<input v-model="count" /></div>
    <div>总价：{{ total }}</div>
</template>
<script setup lang="ts">
import { computed, ref, watch, watchEffect, watchPostEffect, watchSyncEffect } from 'vue';
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
watchSyncEffect(()=>{
console.log('watchSyncEffect')
console.log(price.value,count.value)
})
watchEffect(()=>{
    console.log('watchEffect')
console.log(price.value,count.value)

})
watchPostEffect(()=>{
    console.log('watchPostEffect')
console.log(price.value,count.value)

})
</script>
<style></style>