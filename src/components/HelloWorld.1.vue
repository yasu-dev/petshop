<template>
  <div>
    <button v-on:click="showPets">Show Pet</button>
    <p>結果</p>
    <p>{{ $store.state.pets }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    showPets: function (event) {
      this.$store.dispatch('getPetsdata')
    }
  }
}
</script>
