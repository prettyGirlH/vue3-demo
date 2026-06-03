<template>
    <div>{{ msg.value }}</div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
// let msg = ref('初始化值1');
let msg = reactive({
    value:'初始化值1'
})
setTimeout(()=>{
    msg.value ='初始化值2'
},2000)
</script>
<style></style>