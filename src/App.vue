<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-auto mw-320px">
        <div class="py-3 text-center">
          <img
            src="img/logo.png"
            alt="Logo"
          >
        </div>
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
.w-80px {
  width: 80px;
}
.mw-320px {
  max-width: 320px;
}

/* override datepicker default fixed width date 300px */
.vdp-datepicker__calendar {
  width: initial!important;
  max-width: 300px;
  border-radius: 20px;
  padding-bottom: 20px;
}
/* make circle datepicker day */
.vdp-datepicker__calendar .cell.day {
  border-radius: 50%;
}
.vdp-datepicker__calendar .next {
  border-top-right-radius: 50%;
}
.vdp-datepicker__calendar .prev {
  border-top-left-radius: 50%;
}
/* override default color */
.vdp-datepicker__calendar .cell.selected {
  background-color: #0097E3!important;
  color: white!important;
  border-color: #0097E3;
}
.btn-info {
  background-color: #0097E3!important;
  border-color: #0097E3;
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
