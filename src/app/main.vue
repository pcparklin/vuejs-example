
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
    <h2 class="md-title" style="flex: 1">Fund</h2>
    <md-button>Distribution</md-button>
    <md-button>Combination</md-button>
  </md-toolbar>
  <div class="main-content">
    <h1>Hello, {{ who }}.</h1>
    <p>This is a basestack for vuejs. This project integrate vuejs with gulp, vueify and browserify.</p>
  </div>
</div>
</template>

<script>

export default {
  data () {
    return {
      "who": "world"
    }
  }
}
</script>
