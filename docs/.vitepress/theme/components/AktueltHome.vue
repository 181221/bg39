<script setup lang="ts">
import AktueltPost from "./AktueltPost.vue";

import { data as posts } from "../aktuelt.post.data";
</script>
<template>
  <div class="mx-auto max-w-screen-xl lg:px-6 lg:py-16">
    <div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
      <h1
        class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-1)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
      >
        Aktuelt
      </h1>
      <p>Her får du fortløpende oppdateringer om aktivitetene og hendelsene i sameiet.</p>
    </div>
    <div class="grid gap-6 px-10 py-2 lg:grid-cols-2">
      <template v-for="post of posts" :key="post.url">
        <AktueltPost :post="post" />
      </template>
    </div>
  </div>
</template>
