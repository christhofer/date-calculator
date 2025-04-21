<script setup lang="ts">
  import { format } from 'date-fns'

  const view = defineModel<string>('view', { required: true })
  const month = defineModel<number>('month', { required: true })
  const year = defineModel<number>('year', { required: true })

  const btnPrevClick = () => {
    if (view.value === 'months') {
      year.value--
    } else if (view.value === 'days') {
      if (month.value === 0) {
        month.value = 11
        year.value--
      } else {
        month.value--
      }
    }
  }
  const btnNextClick = () => {
    if (view.value === 'months') {
      year.value++
    } else if (view.value === 'days') {
      if (month.value === 11) {
        year.value++
        month.value = 0
      } else {
        month.value++
      }
    }
  }
  const viewUp = () => {
    if (view.value === 'days') {
      view.value = 'months'
    }
  }
</script>

<template>
  <div class="flex gap-4 text-sm">
    <button
      class="px-2"
      type="button"
      @click="btnPrevClick">
      <fa-icon icon="i-far-arrow-left" />
    </button>

    <button
      class="flex-1"
      type="button"
      @click="viewUp">
      <template v-if="view === 'months'">
        {{ year }}
      </template>
      <template v-else>
        {{ format(new Date(year, month), 'MMMM') }} {{ year }}
      </template>
    </button>

    <button
      class="px-2"
      type="button"
      @click="btnNextClick">
      <fa-icon icon="i-far-arrow-right" />
    </button>
  </div>
</template>
