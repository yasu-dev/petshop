<template>
  <div>
    <button v-on:click="PriceCal">Show Pet</button>
    <p>結果</p>
    <p>{{ $store.state.pets }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    PriceCal: function (event) {
      var xmldata = '{id: "987",username: "abc987",firstName: "yasu",lastName: "kishi",email: "xyz@gmail.com",password: "xxx",phone: "09012345678",userStatus: 0}'
      this.$store.dispatch('getPricedata', {Xmldata: xmldata})
    }
  }
}
</script>
