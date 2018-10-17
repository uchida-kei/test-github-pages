<template>
  <section class="container">
    <!--<div id="app">-->
      <el-row v-for="(o, index) in 2">
        <el-col v-for="(i) in 1" :key="i">
          <div style="padding: 0px;">
            <el-card class = "boxcard">
              <img src="https://nekogazou.com/wp-content/uploads/2015/03/gazou12-e1426694824704.jpg" class="image"/>
            </el-card>                        
            <el-collapse v-model="activeNames">
              <el-collapse-item>
                <p class="txt">
                  hogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge
                  <!--{{test[index]}}-->
                </p>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>
    <!--</div>-->
  </section>
</template>

<script>
export default {
  asyncData ({app}) {
    const activeNames = ['1']
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
      activeNames//,
      //len,
      //text,
     //image
    }
  }
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
    display: block;
  }
  
.txt {
    font-size: 20px;
    color: #999;
}
.app {
      Width: 100%;
      display: flex;

}
.boxcard {
  width: 100%;
  padding: 0px;
}
</style>

