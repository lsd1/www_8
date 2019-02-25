<template>
    <div>
        <input type="button" v-on:click="show_value()" value="..." />
        <p>Vue.js周边生态技术dai有n的是：</p>
        <ul>
            <li v-bind:style="'color:' + color" v-for="tech in technologies" :key="tech" v-if="tech.indexOf('n') === 0">
                {{tech}}
            </li>
        </ul>
        <p>我使用的技术是：</p>
        <input type="text" v-model="name" />
        <p v-if="name === 'vue'">
            Vue.js
        </p>
        <p v-else-if="name === 'react'">
            React.js
        </p>
        <p v-else>
            Angular.js
        </p>
        <p>siwei`s blogs title is here</p>
        <tr v-for="blog in blogs" :key="blog.title">
            <router-link :to="{name: 'Blog', query: {id: blog.id}}">
                {{blog.title}}
            </router-link>
        </tr>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '你好Vue, 我来自变量',
      technologies: ['nvm', 'npm', 'node', 'webpack', 'ecma_script'],
      name: 'vue',
      color: 'green',
      blogs: []
    }
  },
  mounted () {
    this.$http.get('api/interface/blogs/all').then((res) => {
      this.blogs = res.body.blogs
    })
  },
  methods: {
    show_value: function (name) {
      alert('your value is ' + (name || 'stone'))
    },
    show_blog (id) {
      this.$router.push({name: 'Blog', query: {id: id}})
    }
  }
}
</script>
<style>
    .hi {
        color:red;
        font-size: 20px;
    }
</style>
