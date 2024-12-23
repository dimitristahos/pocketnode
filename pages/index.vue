<script setup>
  const { data } = await useAsyncData(async (nuxtApp) => {
    // fetch and return all "example" records...
    const records = await nuxtApp.$pb.collection("frontpage").getFullList();

    return structuredClone(records);
  });
</script>

<template>
  <div>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
