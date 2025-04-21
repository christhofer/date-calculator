<script setup lang="ts">
  import { isSameDay } from 'date-fns'
  import { ref } from 'vue'
  import DatepickerNavigator from './datepicker-navigator.vue'
  import ViewDaysInMonth from './view-days-in-month.vue'
  import ViewMonthsInYear from './view-months-in-year.vue'

  const value = defineModel<Date | null>({ required: true })

  const view = ref('days')
  const month = ref<number>(new Date().getMonth())
  const year = ref<number>(new Date().getFullYear())
</script>

<template>
  <div class="content">
    <datepicker-navigator
      v-model:view="view"
      v-model:month="month"
      v-model:year="year" />

    <view-months-in-year
      v-if="view === 'months'"
      v-model:view="view"
      v-model:month="month"
      :year="year" />

    <view-days-in-month
      v-else-if="view === 'days'"
      :month="month"
      :year="year">
      <template #default="{ date, gridColumnStart }">
        <button
          type="button"
          :style="{gridColumnStart}"
          :class="{'selected': value && isSameDay(value, date)}"
          @click="value = date">
          {{ date.getDate() }}
        </button>
      </template>
    </view-days-in-month>
  </div>
</template>

<style scoped>
  @reference "@/assets/main.css";

  .content {
    @apply text-center;
    @apply min-w-72 max-w-96;
  }

  .selected {
    @apply text-white bg-blue-500 rounded-full;
  }
</style>
