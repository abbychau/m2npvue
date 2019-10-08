<template>
  <div class="home">
    <div
      v-for="(item,index) in items"
      :key="`tl_item_${index}`"
      :style="{ wordBreak:'break-all', backgroundColor: index%2?'#CCC':'white', padding:'1em'}"
    >
      {{ item.json.created_at | timeDifference }}

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
  filters: {
    timeDifference: (previous) => {
      var current = Date.now()
      var msPerMinute = 60 * 1000
      var msPerHour = msPerMinute * 60
      var msPerDay = msPerHour * 24
      var msPerMonth = msPerDay * 30
      var msPerYear = msPerDay * 365

      var elapsed = current - previous * 1000

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + 's'
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + 'm'
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + 'h'
      } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + 'd'
      } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + 'm'
      } else {
        return Math.round(elapsed / msPerYear) + 'y'
      }
    }
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
