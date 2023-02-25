<script setup lang="ts">
import { useTailwindConfig } from '../composable/useTailwindConfig'

type Props = {
    title: string
    loding: boolean
}
const props = defineProps<Props>()

const { defaultTweetBorderColor } = useTailwindConfig()

</script>

<template>
  <div class="border-x" :class="defaultTweetBorderColor">
    <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-dim-900/80">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">
        {{ title }}
      </h2>
    </div>
    <div v-if="loding" class="flex items-center justify-center p-4 border-b" :class="defaultTweetBorderColor">
      <UISpinner />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>
