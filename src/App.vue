<template>
  <div id="app">
    <header>
        <img alt="Vue logo" src="./assets/viaplay-logo-1-min-300x91.png" />
      </header>
    <preview-products />
    <footer>
      FOOTER
    </footer>
  </div>
</template>

<script>
import PreviewProducts from "./components/PreviewProducts.vue";


export default {
  name: "app",
  components: {
    PreviewProducts
  }
};
</script>

<style lang="scss">
body{
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}


header, footer{
  background-color: #464a4a;
  flex: 0 0 80px;
}
</style>
