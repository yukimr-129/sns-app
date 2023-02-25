import { Ref } from 'nuxt/dist/app/compat/capi'

type useTailwindConfigType = {
  (): {
    defaultTransition: Ref<string>
    defaultTweetBorderColor: Ref<string>
  }
}

export const useTailwindConfig: useTailwindConfigType = () => {
  const defaultTransition = ref('transition ease-in-out duration-350')
  const defaultTweetBorderColor = ref('border-white-200 dark:border-gray-700')

  return {
    defaultTransition,
    defaultTweetBorderColor
  }
}
