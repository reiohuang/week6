<template>
  <div class="home">
    <h1>這裡是首頁</h1>
    <div class="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/about">關於我們</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/carts">購物車</router-link> |
      <router-link to="/admin">後台</router-link>
    </div>
    <router-view/>
  </div>
</template>
