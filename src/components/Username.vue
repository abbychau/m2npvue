<template>

  <popper
    trigger="clickToOpen"
    :options="{
      placement: 'top',
      modifiers: { offset: { offset: '0,10px' } }
    }">
    <div class="popper">

    <template slot="content"  v-auto-link>

      {{ $store.state.users[this.$props.userId].description }}
    </template>
    <span slot="title">{{ $store.state.users[this.$props.userId].username }}</span>

    </div>

        <span :style="{color:'#777'}" slot="reference">~{{ $store.state.users[this.$props.userId].username }}</span>
  </popper>

</template>

<script>
  import Popper from 'vue-popperjs';
  import 'vue-popperjs/dist/vue-popper.css';

export default {
      components: {
      'popper': Popper
    },
  name: 'Username',
  props: ['userId']
}
</script>
