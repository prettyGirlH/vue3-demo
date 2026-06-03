<script setup lang="ts">
import { ref }  from 'vue';
 const msg = ref<string>('初始化消息2vs3')
 const msg1 = ref('我是消息msg1')
 msg.value="改变初始化消息值msg";
 msg1.value="改变初始化消息msg1"
</script>
<template>
    <div>{{ msg }}</div>
    <div>{{ msg1 }}</div>
</template>