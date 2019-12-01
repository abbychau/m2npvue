<template>
  <popper
    trigger="clickToOpen"
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,10px' } }
    }"
  >
    <div class="popper" style="text-align:left">
      
      {{ $store.state.users[this.$props.userId].username }}

      <hr />
      <div slot="content" v-auto-link>
        {{ $store.state.users[this.$props.userId].description }}
      </div>
    </div>

    <span :style="{ color: '#777' }" slot="reference">~{{ $store.state.users[this.$props.userId].username }}</span
    >
  </popper>
</template>

<script>
import Popper from "vue-popperjs";

export default {
  components: {
    popper: Popper
  },
  props: ["userId"]
};
</script>
