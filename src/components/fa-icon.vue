<script setup lang="ts">
  defineProps<{
    icon: string,
    fixedWidth?: boolean,
  }>()
</script>

<template>
  <span :class="[icon, { 'w-1.2em': fixedWidth }]"></span>
</template>
