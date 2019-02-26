<template>
    <div>
        <h1>Page one</h1>
        {{points}}
        <br />
        <input type="button" @click="increase" value="点击加1" />
        <br />
        <router-link :to="{name: 'ShowCounter2'}">
            计数页面2
        </router-link>
    </div>
</template>

<script>
import store from '@/vuex/store'
import { INCREASE } from '@/vuex/mutation_types'
export default {
  computed: {
    points () {
      return store.getters.get_points
    }
  },
  methods: {
    increase () {
      store.commit(INCREASE, store.getters.get_points + 1)
    }
  }
}
</script>
