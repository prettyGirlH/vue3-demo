<script setup lang="ts">
import { ref, onMounted  } from 'vue';
const isOpen = ref<boolean>(true);

const personInfo = ref<{
  name: string;
  age: number;
}> ({
  name:'张三',
  age: 18
});
const handleIsOpen = ()=>{
  isOpen.value=!isOpen;
}

const personInfo1 = ref<{
  name: string;
  age: number;
} | null> (null)

const initPerson = ()=>{
  personInfo1.value={
    name: '李四',
    age: 18
  }
}
onMounted(()=>{
  initPerson();
})
</script>

<template>
  <div>开关：{{ isOpen?'开':'关' }}</div>
  <button @click="handleIsOpen">切换开关</button>

  <div>{{ personInfo?.name }}:{{ personInfo?.age }}</div>
  <div>{{ personInfo1?.name }}:{{ personInfo1?.age }}</div>

</template>
