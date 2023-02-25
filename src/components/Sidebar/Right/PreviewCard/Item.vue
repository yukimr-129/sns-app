<script setup lang="ts">
import { useTailwindConfig } from '~~/src/composable/useTailwindConfig'

const { defaultTweetBorderColor: tweetBorderColor, defaultTransition: transition } = useTailwindConfig()

</script>
<template>
  <div class="p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 border-b" :class="[tweetBorderColor, transition]">
    <slot />
  </div>
</template>
