<style>
.main-content {
  padding: 20px;
}
</style>

<template>
<div>
  <md-toolbar>
    <md-button class="md-icon-button">
      <md-icon>menu</md-icon>
    </md-button>
    <h2 class="md-title" style="flex: 1"><router-link to="/">Fund</router-link></h2>
    <router-link to="/distribution" tag="md-button">Distribution</router-link>
    <router-link to="/combination" tag="md-button">Combination</router-link>
  </md-toolbar>

  <router-view class="main-content"></router-view>
</div>
</template>
<script></script>
