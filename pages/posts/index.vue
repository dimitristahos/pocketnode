<script setup>
  const { data } = await useAsyncData(async (nuxtApp) => {
    // fetch and return all "example" records...
    const records = await nuxtApp.$pb.collection("posts").getFullList();

    return structuredClone(records);
  });
</script>

<template>
  <div>
    <MyCard v-for="post in data" :key="post.id" :post="post"></MyCard>
  </div>
</template>
