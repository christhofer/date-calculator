<script setup lang="ts">
  import { addDays, format, subDays } from 'date-fns'
  import { computed, ref } from 'vue'
  import AppDatePicker from './components/datepicker/app-date-picker.vue'

  const startDate = ref<Date | null>(new Date())
  const operator = ref<'+' | '-'>('+')
  const difference = ref(0)
  const result = computed(() => {
    if (!startDate.value) return null
    if (operator.value === '-') {
      return subDays(startDate.value, -difference.value)
    } else {
      return addDays(startDate.value, difference.value)
    }
  })
</script>

<template>
  <main class="fixed left-1/2 top-1/2 -translate-1/2 p-4">
    <div class="bg-white shadow-lg rounded-lg p-4">
      <div class="mb-4">
        <app-date-picker v-model="startDate" />
      </div>
      <div class="flex mb-8 justify-center">
        <app-button
          class="size-9 bg-blue-500 rounded-l text-white"
          @click="operator = operator === '-' ? '+' : '-'">
          {{ operator }}
        </app-button>
        <input
          v-model="difference"
          class="rounded-r border h-9 pr-2 pl-6 w-24 text-center"
          type="number">
      </div>
      <div class="text-center">
        {{ result ? format(result, 'd MMMM yyyy') : '' }}
      </div>
    </div>
  </main>
</template>

<style>
  @reference "@/assets/main.css";

  html {
    background-color: var(--color-gray-200);
  }
</style>
