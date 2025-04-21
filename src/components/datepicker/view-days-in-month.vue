<script setup lang="ts">
  import { getDaysInMonth } from 'date-fns'
  import { computed } from 'vue'

  const props = defineProps<{
    month: number, // 0-11
    year: number,
  }>()

  const firstDayInMonth = computed(() => {
    return new Date(props.year, props.month) // accept month 0-11
  })
  const collectionDaysInMonth = computed(() => {
    return Array.from({ length: getDaysInMonth(firstDayInMonth.value) }, (_, i) => {
      return new Date(props.year, props.month, i + 1)
    })
  })
  const dayOfFirstDateInMonth = computed(() => {
    return firstDayInMonth.value.getDay() // return 0-6 where 0 is Sunday
  })
</script>

<template>
  <div class="grid grid-cols-7 gap-y-px text-xs">
    <div>Min</div>
    <div>Sen</div>
    <div>Sel</div>
    <div>Rab</div>
    <div>Kam</div>
    <div>Jum</div>
    <div>Sab</div>

    <template
      v-for="d in collectionDaysInMonth"
      :key="d.getDate()">
      <slot
        :date="d"
        :grid-column-start="d.getDate() === 1 ? (dayOfFirstDateInMonth+1) : ''"></slot>
    </template>
  </div>
</template>

<style scoped>
  @reference "@/assets/main.css";

  .grid > * {
    @apply aspect-square flex-center;
  }
</style>
