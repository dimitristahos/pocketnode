<script setup>
  import { Button } from "@/components/ui/button";

  const $route = useRoute();

  const { data } = await useAsyncData(async (nuxtApp) => {
    // fetch and return all "example" records...
    const records = await nuxtApp.$pb.collection("posts").getOne($route.params.id);

    return structuredClone(records);
  });
</script>

<template>
  <div>
    <Button as-child> <NuxtLink to="/posts"> Back </NuxtLink></Button>
    <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {{ data.title }}
    </h1>
    <div class="leading-7 [&:not(:first-child)]:mt-6" v-html="data.content"></div>
  </div>
</template>
