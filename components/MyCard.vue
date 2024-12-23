<script setup lang="ts">
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

  const props = defineProps<{ post: object }>();

  const excerpt = computed(() => {
    return (
      props.post.excerpt ||
      props.post.content
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .substring(0, 200)
    );
  });
</script>

<template>
  <div class="mb-4">
    <NuxtLink :to="'/posts/' + post.id">
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>{{ post.title }}</CardTitle>
          <CardDescription>
            <div>{{ excerpt }}</div>
          </CardDescription>
        </CardHeader>
      </Card>
    </NuxtLink>
  </div>
</template>
