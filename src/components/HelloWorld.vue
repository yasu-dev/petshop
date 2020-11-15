<template>
  <div>
    <button v-on:click="showPets">Show Pets</button>
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
