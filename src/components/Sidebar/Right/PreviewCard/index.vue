<script setup lang="ts">
import { useTailwindConfig } from '@/composable/useTailwindConfig'

type Props = {
  title: string
}
const props = defineProps<Props>()

const { defaultTweetBorderColor: tweetBorderColor, defaultTransition: transition } = useTailwindConfig()
</script>
<template>
  <div class="m-2 overflow-hidden border rounded-2xl bg-gray-50 dark:bg-dim-700" :class="tweetBorderColor">
    <h1 class="p-3 text-xl font-extralight text-gray-900 border-b dark:text-white" :class="tweetBorderColor">
      {{ props.title }}
    </h1>

    <slot name="item" />

    <div class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300" :class="transition">
      Show More
    </div>
  </div>
</template>
