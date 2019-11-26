<template>
  <div class="home">
    <EntryInputbox />
    <div
      v-for="(item, index) in items"
      :key="`tl_item_${index}`"
      :style="{
        wordBreak: 'break-all',
        backgroundColor: index % 2 ? '#CCC' : 'white',
        padding: '1em'
      }"
    >
      <!--{{ JSON.stringify(item.json) }}-->
      <span v-auto-link>{{ item.json.post }}</span>
      <div v-if="item.json.external_link">
        <a :href="item.json.external_link">{{
          trimToDots(item.json.external_link, 30)
        }}</a>
      </div>
      <div v-if="item.json.attachments">
        <span
          v-for="(medium, i2) in item.json.attachments"
          v-bind:key="`tl_item_${index}_${i2}`"
          class="img_container"
        >
          <img
            v-if="medium.media"
            :src="
              `https://cdn0.m2np.com/file/kiyomi/45b514b70182fa447d4d302b819e5bcd/${medium.media[0].uri}`
            "
            style="width:100px"
          />
        </span>
      </div>
      <Username :style="{ marginLeft: '0.5em' }" :userId="item.user_id" />
      <span style="color:#666">
        {{ item.json.created_at | timeDifference }}</span
      >
    </div>
    <mugen-scroll :handler="fetchData" :should-handle="!loading">
      loading...
    </mugen-scroll>
  </div>
</template>
<style scoped>
.img_container {
  margin-right: 5px;
}
</style>
<script>
import axios from "axios";
import Username from "../../components/Username";
import EntryInputbox from "../../components/EntryInputbox";
import MugenScroll from "vue-mugen-scroll";

export default {
  name: "timeline",
  components: { Username, EntryInputbox, MugenScroll },
  data: function() {
    return { items: [], loading: false, lastid: 0 };
  },
  filters: {
    timeDifference: previous => {
      var current = Date.now();
      var msPerMinute = 60 * 1000;
      var msPerHour = msPerMinute * 60;
      var msPerDay = msPerHour * 24;
      var msPerMonth = msPerDay * 30;
      var msPerYear = msPerDay * 365;

      var elapsed = current - previous * 1000;

      if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + "s";
      } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + "m";
      } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + "h";
      } else if (elapsed < msPerMonth) {
        return Math.round(elapsed / msPerDay) + "d";
      } else if (elapsed < msPerYear) {
        return Math.round(elapsed / msPerMonth) + "m";
      } else {
        return Math.round(elapsed / msPerYear) + "y";
      }
    }
  },
  methods: {
    fetchData() {
      this.loading = true;
      console.log("https://api.m2np.com/timeline/1/" + this.lastid);
      axios
        .request("https://api.m2np.com/timeline/1/" + this.lastid)
        .then(res => {
          console.log(res.data[res.data.length - 1]);
          this.lastid = res.data[res.data.length - 1].id;
          this.items = [...this.items, ...res.data];
          this.loading = false;
        });
    }
  },
  mounted() {
    axios.request("https://api.m2np.com/users/subscribed").then(res => {
      console.log(res.data);
      this.$store.commit("setUsers", res.data);
    });

    this.fetchData();
  }
};
</script>
