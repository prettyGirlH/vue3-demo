<template>
    <div>
        <div>单价：{{price}}</div>
        <div>数量：{{count}}</div>
        <div @click="emits('update',count)">更新数据count</div>
        <div @click="emits('update',10)">更新数据10</div>

    </div>
</template>
<script setup lang="ts">


// props 父传子传数据--defineProps
// emit 父给子传事件-- defineEmits
// defineProps(["price","count"]);

// const emits = defineEmits(['update:value'])
// emits('update:value', 5)

const emits = defineEmits<{
    change: [];
    update: [value:number];
}>();
emits('update',10)

defineProps< { price:number; count:number; } >();

</script>
<style></style>