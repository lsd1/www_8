<template>
    <div>
        <div>
            <p>标题： </p>
            <p>发布于： </p>
        </div>
        <div v-html="blog.body">
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      blog: {}
    }
  },
  mounted () {
    this.$http.get('api/interface/blogs/show?id=' + this.$route.query.id).then(res => {
      this.blog = res.body.result
    },
    err => {
      console.error(err)
    })
  }
}
</script>
