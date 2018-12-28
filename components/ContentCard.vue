<template>
  <div class="container">
    <div v-on:click="openCard">
    <el-card>
      <img src="https://nekogazou.com/wp-content/uploads/2015/03/gazou12-e1426694824704.jpg" class="image"/>
    </el-card>
    </div>
    <el-collapse>
      <el-collapse-item title="hoge" class="title">
        <div class="text">hogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehogehoge</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  methods: {
    openCard() {
      this.$children[1].$children[0].$el.childNodes[0].childNodes[0].click()
    }
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

