<template>
  <div>
    <el-row type="flex" v-for="o in data.card.num" :key="o">
        <ContentCard :num="o-1" :data="data"/>
        <br>
    </el-row>
  </div>
</template>

<script>
import ContentCard from '~/components/ContentCard.vue'

export default {
  props: {
    data: Object
  },
  components: {
    ContentCard
  }
}
</script>

<style>
.el-row {
  margin-top: 6.5vw;
  margin-bottom: 6.5vw;
}
</style>