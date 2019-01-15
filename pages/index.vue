<template>
  <div>
    <CardList :data="json"/>
    <TopButton/>
  </div>
</template>

<script>
import CardList from '~/containers/CardList.vue'
import TopButton from '~/basics/TopButton.vue'

export default {
  asyncData ({app}) {
    const json = require("~/assets/data.json");
    return {json}
  },
  components: {
    CardList,
    TopButton
  }
}
</script>

<style>
.return-top {
  position: fixed;
  bottom: 5vw;
  right: 2vw;
  font-size: 2vw;
}
.el-button.is-circle {
    padding: 2vw;
}
</style>