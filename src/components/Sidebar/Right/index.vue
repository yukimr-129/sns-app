<script setup lang="ts">
const items = ref([
  { id: 1, title: 'test1', count: '18.8k Tweet' },
  { id: 2, title: 'test2', count: '18.8k Tweet' },
  { id: 3, title: 'test3', count: '18.8k Tweet' }
])
const follower = ref([
  { id: 1, name: 'test1', acount: '@text1', image: 'https://picsum.photos/200/200' },
  { id: 2, name: 'test2', acount: '@text2', image: 'https://picsum.photos/200/200' },
  { id: 3, name: 'test3', acount: '@text3', image: 'https://picsum.photos/200/200' }
])
</script>
<template>
  <div class="flex flex-col">
    <!-- preview -->
    <SidebarRightPreviewCard title="人気">
      <template #item>
        <template v-for="item in items" :key="item.id">
          <SidebarRightPreviewCardItem>
            <div>
              <h2 class="font-bold text-gray-800 text-md dark:text-white">
                {{ item.title }}
              </h2>
              <p class="text-xs text-gray-400">
                {{ item.count }}
              </p>
              <!-- <p>{{ item.item }}</p> -->
            </div>
          </SidebarRightPreviewCardItem>
        </template>
      </template>
    </SidebarRightPreviewCard>

    <!-- follow -->
    <SidebarRightPreviewCard title="おすすめユーザー">
      <template #item>
        <template v-for="follow in follower" :key="follow.id">
          <SidebarRightPreviewCardItem>
            <div class="flex flex-row justify-between items-center p-2">
              <div class="flex flex-row">
                <img class="w-10 h-10 rounded-full" :src="follow.image" :alt="follow.name">

                <div class="flex flex-col ml-2">
                  <h1 class="text-ms font-bold text-gray-900">
                    {{ follow.name }}
                  </h1>
                  <p class="text-xs text-gray-400">
                    {{ follow.acount }}
                  </p>
                </div>
              </div>
              <div class="flex  h-full ">
                <button class="px-4 py-2 text-xs font-bold text-white bg-black rounded-full dark:text-black dark:bg-white">
                  フォロー
                </button>
              </div>
            </div>
          </SidebarRightPreviewCardItem>
        </template>
      </template>
    </SidebarRightPreviewCard>
  </div>
</template>
