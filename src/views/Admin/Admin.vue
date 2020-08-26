<template>
  <div class="admin">
    <h1>這裡是後台</h1>
    <div class="nav">
      <router-link to="/">返回首頁</router-link> |
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/coupons">優惠券</router-link> |
      <router-link to="/admin/orders">訂單列表</router-link>
    </div>
    <router-view/>
  </div>
</template>
