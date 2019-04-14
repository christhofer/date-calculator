<template>
  <datepicker
    :value="value"
    :inline="true"
    :bootstrap-styling="true"
    @input="onInput"
  />
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'DatePicker',

  components: {
    Datepicker,
  },

  props: {
    value: {
      type    : [String, Object, Date],
      default : null,
    },
  },

  methods: {
    onInput (event) {
      this.$emit('input', event)
    },
  },
}
</script>

<style scoped>
</style>