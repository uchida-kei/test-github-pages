<template>
  <div class="container">
    <div v-on:click="openCard">
    <el-card>
      <div class="image-background">
        <img :src="imageUrl" class="image"/>
      </div>
      <div class="title">{{title}}</div>
      <div class="text">{{text}}</div>
    </el-card>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openCard() {
      console.log(this.data.card.title[this.num]);
      //this.$children[1].$children[0].$el.childNodes[0].childNodes[0].click()
    }
  },
  props: {
    num: Number,
    data: Object
  },
  computed: {
    imageUrl : function () {
      return "image/"+this.data.card.image.name[this.num];
    },
    textUrl : function () {
      return "text/"+this.data.card.text.name[this.num];
    },
    title : function () {
      return this.data.card.title[this.num];
    },
    text : function () {
      return this.data.card.text.contents[this.num];
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
  max-width: 700px;
  width: 50%;
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
  line-height: 1.2em;
}
.title {
  width: 100%;
  font-size: 2.5vw;
  color: #222;
  align-items: center;
  word-wrap: break-word;
  padding: 2%;

}
.image-background{
  background: #999;

}
</style>

