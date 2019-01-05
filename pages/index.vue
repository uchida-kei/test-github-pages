<template>
  <div>
    <el-row type="flex" v-for="o in 10" :key="o">
        <ContentCard :num="o" />
        <br>
    </el-row>
    <el-row>
      <a href="#">
        <el-button class="return-top" icon="el-icon-arrow-up" circle></el-button>
      </a>
    </el-row>
  </div>
</template>

<script>
import ContentCard from '~/components/ContentCard.vue'
export default {
  asyncData ({app}) {
    /*
    const trees = await app.$axios.$get(`https://api.github.com/repos/uchida-kei/test-github-pages/git/trees/master`)
    const tree = await app.$axios.$get(`https://api.github.com/repos/uchida-kei/test-github-pages/git/trees/${trees.tree[1].sha}`)
    const len = tree.length()
    const name = (tree, len) => {
        const reg = /(.*)(?:\.([^.]+$))/
        let list = []
        for(const i = 0; i <= len; i++){
            list[i] = tree.tree[i].path.match(reg)[1]
        }
        return list
    }
    */

    return 
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