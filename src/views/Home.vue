<template>
  <div class="home">
    <div v-auto-link v-for="(item,index) in items" :key="`tl_item_${index}`" :style="{ wordBreak:'break-all', backgroundColor: index%2?'#CCC':'white', padding:'1em'}">{{ item.json.post }} ~{{ $store.state.users[item.user_id].username }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Autolinker from 'autolinker'

var autolinker = new Autolinker({
  url: true,
  mention: 'instagram',
  hashtag: 'instagram',
  replaceFn: function (match) {
    switch (match.getType()) {
      case 'url':
        return true // let Autolinker perform its normal anchor tag replacement

      case 'mention':
        return '<a href="https://m2np.com/u/' + match.getMention() + '"/>@' + match.getMention() + '</a>'

      case 'hashtag':
        return '<a href="https://m2np.com/hashtag/' + match.getHashtag() + '"/>#' + match.getHashtag() + '</a>'

      default:
            // do nothing
    }
  }
})
function nl2br (str) {
  if (typeof str === 'undefined' || str === null) {
    return ''
  }
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br />' + '$2')
}
export default {
  name: 'home',
  components: { },
  data: function () {
    return { items: [] }
  },
  mounted () {
    axios
      .request('https://m2np.com/api/users/subscribed')
      .then(res => {
        console.log(res.data)
        this.$store.commit('setUsers', res.data)
      })

    axios
      .request('https://m2np.com/api/timeline/1/0')
      .then(res => {
        this.items = res.data
      })
  },

  directives: {
    'auto-link': {
      inserted (el) {
        el.innerHTML = nl2br(autolinker.link(el.innerHTML))
      }
    }
  }
}
</script>
