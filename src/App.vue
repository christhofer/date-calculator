<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-auto">
        <div class="form-group text-center">
          <date-picker v-model="date" />
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <button
                type="button"
                class="btn btn-info text-monospace"
                @click="switchOperator"
              >
                {{ selectedOperator }}
              </button>
            </div>
            <input
              type="number"
              v-model.number="number"
              class="form-control text-right"
              v-select-on-focus
            >
            <div class="input-group-append">
              <button
                type="button"
                class="btn btn-info w-80px"
                @click="switchUnits"
              >
                {{ selectedUnit }}
              </button>
            </div>
          </div>
        </div>
        <div class="form-group text-center">
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
      date      : this.$moment().toDate(),
      number    : 0,
      operators : ['+', '-'],
      units     : ['days', 'weeks', 'months'],
    }
  },

  computed: {
    selectedOperator () {
      return this.operators[0]
    },

    selectedUnit () {
      return this.units[0]
    },

    resultDate () {
      let resultDate = this.$moment(this.date)

      if (this.selectedOperator === '+') {
        resultDate.add(this.number, this.selectedUnit)
      }
      else {
        resultDate.subtract(this.number, this.selectedUnit)
      }

      return resultDate.format('DD MMMM YYYY')
    },
  },

  methods: {
    switchOperator () {
      this.operators.push(this.operators.shift())
    },

    switchUnits () {
      this.units.push(this.units.shift())
    },
  },
}
</script>

<style>
.vdp-datepicker__calendar {
  width: initial!important;
  max-width: 300px;
}
.vdp-datepicker__calendar .cell.selected {
  background-color: #17a2b8!important;
  color: white!important;
  border-color: #17a2b8;
}
.w-80px {
  width: 80px;
}
/* remove bootstrap glow */
*:hover,
*:focus,
*:active
 {
  outline: none;
  box-shadow: none !important;
  -webkit-appearance: none;
}
</style>
