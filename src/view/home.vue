<template>
<div>
  <h1>Hello, {{ who }}.</h1>
  <p>This is a basestack for vuejs. This project integrate vuejs with gulp, vueify and browserify.</p>
</div>
</template>

<script type="text/javascript">
export default {
  data () {
  return {
      "who": "world"
    }
  }
}
</script>
