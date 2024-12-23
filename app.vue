<script setup>
  const { data } = await useAsyncData(async (nuxtApp) => {
    // fetch and return all "example" records...
    const records = await nuxtApp.$pb.collection("posts").getFullList();

    return structuredClone(records);
  });
</script>

<template>
  <div>
    <div v-for="post in data" :key="post.id">
      <h2>{{ post.title }}</h2>
      <div v-html="post.content"></div>
    </div>
  </div>
</template>
