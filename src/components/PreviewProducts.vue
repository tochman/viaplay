<template>
  <div class="preview-products">
    <img :src="product.content.images.landscape.url"  v-for="(product, index) in getProducts" :key="index"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from '@/store/index.js'

export default {
  computed:{
    ...mapGetters(['getProducts'])
  },
  mounted:function (){
    store.dispatch("fetchData");
  },
};
</script>

<style scoped lang="scss">
.preview-products {
  width: 90%;
  margin: 0 auto;
  flex: 1 0 auto;

img {
    padding-left: 5px;
    padding-top: 5px;
    width: 300px;
    vertical-align: bottom;
  }
}

</style>
