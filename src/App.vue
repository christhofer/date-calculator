<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-lg-6 col-xl-4">
        <div class="form-group">
          <input-date-picker v-model="date" />
        </div>
        <div class="form-group">
          <label for="dateplus">Add Days</label>
          <input-numeric v-model="plus" />
        </div>
        <div class="form-group">
          <label>Result</label>
          <h4>{{ resultDate }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',

  data () {
    return {
      date : this.$moment(),
      plus : 0,
    }
  },

  computed: {
    resultDate () {
      return this.$moment(this.date).add(this.plus, 'd').format('DD MMMM YYYY')
    },
  },
}
</script>

<style lang="scss">
</style>
