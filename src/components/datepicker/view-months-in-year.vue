<script setup lang="ts">
  const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr',
    'Mei', 'Jun', 'Jul', 'Agu',
    'Sep', 'Okt', 'Nov', 'Des',
  ]

  const view = defineModel<string>('view', { required: true })
  const month = defineModel<number>('month', { required: true })

  const monthClick = (i: number) => {
    month.value = i
    view.value = 'days'
  }
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-4 gap-2 mt-4">
    <button
      v-for="(m, i) in MONTHS"
      :key="m"
      type="button"
      class="h-[var(--h-input)] flex-center border hover:bg-gray-100 rounded text-xs"
      @click="monthClick(i)">
      {{ MONTHS[i] }}
    </button>
  </div>
</template>
