<template>
  <div class="home">
    <div
      v-for="(item,index) in items"
      :key="`tl_item_${index}`"
      :style="{ wordBreak:'break-all', backgroundColor: index%2?'#CCC':'white', padding:'1em'}"
    >
      <span v-auto-link>{{ item.json.post }}</span> <Username :style="{marginLeft:'0.5em'}" :userId="item.user_id" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Username from './Username'

export default {
  name: 'home',
  components: { Username },
  data: function () {
    return { items: [] }
  },
  mounted () {
    axios.request('https://m2np.com/api/users/subscribed').then(res => {
      console.log(res.data)
      this.$store.commit('setUsers', res.data)
    })

    axios.request('https://m2np.com/api/timeline/1/0').then(res => {
      this.items = res.data
    })
  }
}
</script>
