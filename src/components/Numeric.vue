<template>
  <vue-cleave
    class="form-control text-right"
    :value="value"
    :raw="raw"
    :options="options"
    @focus.native="onFocus($event)"
    @input="onInput($event)"
  />
</template>

<script>
import VueCleave from 'vue-cleave-component'
export default {
  name: 'GtNumeric',

  components: {
    VueCleave,
  },
  props: {
    value: {
      type    : [String, Number],
      default : 0,
    },
    thousandSeparator: {
      type    : String,
      default : '.',
    },
    decimalSeparator: {
      type    : String,
      default : ',',
    },
    precision: {
      type    : Number,
      default : 0,
    },
    raw: {
      type    : Boolean,
      default : true,
    },
    selectOnInput: {
      type    : Boolean,
      default : true,
    },
  },

  computed: {
    options () {
      return {
        numeral             : true,
        numeralDecimalMark  : this.decimalSeparator,
        numeralDecimalScale : this.precision,
        delimiter           : this.thousandSeparator,
        numeralPositiveOnly : true,
      }
    },
  },

  methods: {
    onFocus (event) {
      if (this.selectOnInput) {
        setTimeout(() => {
          event.target.select()
        }, 0)
      }
    },
    onInput (event) {
      this.$nextTick(() => {
        this.$emit('input', + event)
      })
    },
  },
}
</script>

<style scoped>
</style>