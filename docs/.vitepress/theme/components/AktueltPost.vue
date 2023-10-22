<script setup lang="ts">
import type { Post } from "../theme-types";
defineProps<{
  post: Post;
}>();
</script>

<template>
  <article
    class="rounded-lg border border-[color:var(--vp-c-brand-1)] p-6 dark:border-[color:var(--vp-c-brand-dark)] transition transform hover:shadow-lg"
  >
    <div class="flex flex-col h-full">
      <div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-[color:var(--vp-c-brand-1)] dark:text-[color:var(--vp-c-brand-dark)]">
          {{ post.title }}
        </h2>
      </div>
      <div class="mb-5" v-html="post.utdrag"></div>
      <div class="mt-auto">
        <p class="">
          <span class="text-sm">{{ post.date.since }}</span>
        </p>
      </div>
    </div>
  </article>
</template>
