<template>
  <vue-ctk-date-time-picker
    :value="value"
    format="YYYY-MM-DD"
    formated="YYYY-MM-DD"
    :only-date="true"
    :inline="true"
    :no-header="true"
    @input="onInput"
  />
</template>

<script>
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
export default {
  name: 'DatePicker',

  components: {
    VueCtkDateTimePicker,
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