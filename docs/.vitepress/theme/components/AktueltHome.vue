<script setup lang="ts">
import AktueltPost from "./AktueltPost.vue";

import { data as posts } from "../aktuelt.post.data";
</script>
<template>
  <div class="mx-auto max-w-screen-xl lg:px-20 md:px-12 lg:py-16">
    <div class="mx-auto mb-8 text-center lg:mb-16">
      <h1
        class="mb-4 text-3xl font-extrabold tracking-tight text-[color:var(--vp-c-brand-1)] dark:text-[color:var(--vp-c-brand-dark)] lg:text-4xl"
      >
        Aktuelt
      </h1>
      <p>Her får du fortløpende oppdateringer om aktivitetene og hendelsene i sameiet.</p>
    </div>
    <div class="grid gap-6 px-6 py-1">
      <template v-for="post of posts" :key="post.url">
        <AktueltPost :post="post" />
      </template>
    </div>
  </div>
</template>
