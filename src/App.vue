<template class="m-0 p-0 w-100 ">
    <div class="gochi-hand-regular" >
        <TopHeader class="m-0 p-0 w-100 "></TopHeader>
        <RouterView class="w-100" ></RouterView>
        <BottomFooter class="m-0 p-0 w-100 "></BottomFooter>
    </div>

</template>


<script setup lang="ts">
import TopHeader from '@/components/TopHeader.vue'
import BottomFooter from '@/components/BottomFooter.vue'
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');

* {
    box-sizing: border-box;
}


.gochi-hand-regular {
    font-family: "Gochi Hand", cursive;
    font-weight: 600;
    font-style: normal;
}

</style>

