<template>
  <div class="container">
    <el-dialog :title="title" :visible.sync="value.dialogVisible">
        <div class="image-background">
            <img :src="imageUrl" class="image"/>
        </div>
        <div class="text">{{text}}</div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    props: {
        imageUrl: String,
        title: String,
        text: String,
        value: {
            type: Object,
            required: true
        }
    }
}
</script>