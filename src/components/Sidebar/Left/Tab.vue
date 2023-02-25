<script setup lang="ts">
import { useTailwindConfig } from '@/composable/useTailwindConfig'

type Props = {
    active: boolean
}
const { defaultTransition: transition } = useTailwindConfig()
const props = withDefaults(defineProps<Props>(), {
  active: false
})

const textClass = computed(() => {
  return props.active ? 'font-semibold' : 'font-normal'
})
</script>

<template>
  <NuxtLink to="#" class="flex items-center p-3 xl:w-full w-min text-black dark:hover:bg-dim-200 dark:text-white hover:bg-gray-200 rounded-full">
    <div class="w-6 h-6 text-dark" :class="transition">
      <slot name="icon" />
    </div>
    <div class="ml-4 text-md hidden xl:block" :class="textClass">
      <slot name="name" />
    </div>
  </NuxtLink>
</template>
