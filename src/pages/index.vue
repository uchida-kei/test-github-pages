<template>
  <section class="container">
    <div id="app">
      <el-row v-for="(o, index) in 2">
        <el-col :span="20" v-for="(i) in 1" :key="i">
          <div style="padding: 14px;">
            <el-card :body-style="{ padding: '0px' }">
              <el-collapse v-model="activeNames" @change="handleChange">
                <img src="https://i.gyazo.com/37b437093f5d47027c4d57b7994d0374.png" class="image">
                <el-collapse-item>
                  <div class="txt">
                    asasas
                    <!--{{test[index]}}-->
                  </div>
                </el-collapse-item>
              </el-collapse>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
export default {
  /*
  asyncData ({app}) {
    const activeNames = ['1']
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
    
    


    return {
      activeNames,
      len,
      text,
      image
    }
  }
  */
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.image {
    width: 30%;
    display: block;
  }
  
.txt {
    font-size: 20px;
    color: #999;
  }
</style>

