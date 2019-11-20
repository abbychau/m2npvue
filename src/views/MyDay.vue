<template>
  <div>
    <div v-for="v in items" v-bind:key="v.id">
      {{v.text}}
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      items:[{
        id: 1,
        text: "test"
      }]
    };
  },

  mounted () {

    axios.get('https://api.m2np.com/myday',{
      params: {
        token: this.$cookies.get('token')
      }
    }
    ).then(res => {
      this.items = res.data
    })
  }
};
</script>
