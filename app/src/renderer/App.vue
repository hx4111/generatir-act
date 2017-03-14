<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  @import './assets/style.less'; 
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  .page { width: 100%;height: 100%; }

  body {
    /*align-items: center;*/
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    /*display: flex;*/
    font-family: Lato, Helvetica, sans-serif;
    /*justify-content: center;*/
    /*text-align: center;*/
  }

  #app {
    width: 100%;
    height: 100%;
  }
</style>
