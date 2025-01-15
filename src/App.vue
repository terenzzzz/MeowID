<template class="m-0 p-0 w-100">
    <TopHeader class="m-0 p-0 w-100"></TopHeader>
    <RouterView class="w-100 "></RouterView>
    <BottomFooter class="m-0 p-0 w-100"></BottomFooter>
</template>


<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue'
import BottomFooter from '@/components/BottomFooter.vue'
</script>

<style lang="css">
* {
    box-sizing: border-box;
}

</style>

