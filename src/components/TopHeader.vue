<template>
  <nav id="navbar" class="navbar navbar-expand-lg py-2  m-0 sticky-top">
    <div class="container-fluid">
      <router-link
        class="navbar-brand fs-3 fw-bold primary text-decoration-none d-flex align-items-center"
        to="/"
      >
          <img src="@/assets/logo.png" class="img-fluid" style="width: 50px">
          <strong class="ms-2">MeowID</strong>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-row-reverse" id="collapsibleNavbar">
        <ul class="navbar-nav d-flex align-items-center">

          <li class="nav-item" >
            <router-link to="/login" class="item text-decoration-none text-primary">
              爱宠血统检测
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>
    <div class="alert alert-warning fs-5" role="alert">
        上传猫咪的照片，立刻了解它属于哪一品种！我们的先进 AI 技术，能精准识别猫咪的品种并输出每个品种的概率百分比。无论是波斯猫、英短猫还是孟加拉猫，都能一秒搞定！赶快试试，让每只猫咪的故事变得更加独特！
    </div>
</template>

<script setup lang="ts">



</script>

<style lang="css" scoped>
#navbar{
  background-color: rgba(247, 247, 248, 0.7);
}

.item {
  color: black;
  font-size: 20px;
  margin-inline: 14px;
}

.navbar-nav .nav-item {
  padding: 10px;
}


</style>
