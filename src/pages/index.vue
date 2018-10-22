<template>
  <div class="container">
    <el-row type="flex" v-for="o in 3" :key="o">
        <ContentCard />
        <br>
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
    return {
    }
  },
  components: {
    ContentCard
  }
}
</script>

<style>
.container {
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto; 
  width: 80%;
}
.el-row {
  margin-bottom: 5vw;
}

</style>