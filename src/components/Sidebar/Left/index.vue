<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/solid'
import { HashtagIcon, BellIcon, InboxIcon, BookmarkIcon, DocumentTextIcon, UserIcon, EllipsisHorizontalCircleIcon } from '@heroicons/vue/24/outline'
import { useTailwindConfig } from '@/composable/useTailwindConfig'

const { defaultTransition: transition } = useTailwindConfig()
</script>
<template>
  <div class="h-screen flex flex-col">
    <div class="p-2 my-2 w-min hover:rounded-full hover:bg-blue-50 dark:hover:bg-white/20" :class="transition">
      <NuxtLink to="/">
        <div class="w-8 h-8">
          <LogoTwitter />
        </div>
      </NuxtLink>
    </div>
    <div class="mt-2 space-y-3">
      <SidebarLeftTab :active="true">
        <template #icon>
          <HomeIcon />
        </template>
        <template #name>
          ホーム
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <HashtagIcon />
        </template>
        <template #name>
          検索
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <BellIcon />
        </template>
        <template #name>
          通知
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <InboxIcon />
        </template>
        <template #name>
          メッセージ
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <BookmarkIcon />
        </template>
        <template #name>
          ブックマーク
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <DocumentTextIcon />
        </template>
        <template #name>
          リスト
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <UserIcon />
        </template>
        <template #name>
          プロフィール
        </template>
      </SidebarLeftTab>
      <SidebarLeftTab :active="false">
        <template #icon>
          <EllipsisHorizontalCircleIcon />
        </template>
        <template #name>
          その他
        </template>
      </SidebarLeftTab>
    </div>
  </div>
</template>
