<template>
  <section class="container">
    <el-card>
      <img src="https://nekogazou.com/wp-content/uploads/2015/03/gazou12-e1426694824704.jpg" class="image"/>
    </el-card>
    <el-collapse>
      <el-collapse-item title="hoge" class="title">
        <div class="text">hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge</div>
      </el-collapse-item>
    </el-collapse>
  </section>
</template>

<script>
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
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto; 
  width: 80%;
}

.image {
  width: 100%;
}

.el-card__body {
  padding: 3%;
  margin: 0 auto;
}
.el-collapse-item__header{
  font-size: 2.5vw;
  height: 5vw;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.el-collapse-item__header:after{
  content: "\E604";
  margin-left: 1%;
  color: rgba(255, 255, 255, 0);
}
.el-collapse-item__header :not(p) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1%;
}
.text {
  width: 100%;
  font-size: 1.5vw;
  color: #999;
  text-align: left;
  word-wrap: break-word;
}
</style>

