import Vue from 'vue'
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
        return (
          '<a href="https://m2np.com/u/' +
          match.getMention() +
          '"/>@' +
          match.getMention() +
          '</a>'
        )

      case 'hashtag':
        return (
          '<a href="https://m2np.com/hashtag/' +
          match.getHashtag() +
          '"/>#' +
          match.getHashtag() +
          '</a>'
        )

      default:
      // do nothing
    }
  }
})
Vue.directive('auto-link', {
  inserted (el) {
    el.innerHTML = autolinker.link(el.innerHTML).trim().replace(/\n/g, '<br/>')// .slice(0,-7)
  }
})
