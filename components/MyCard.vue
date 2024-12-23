<script setup lang="ts">
  import { Button } from "@/components/ui/button";
  import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
  import { Input } from "@/components/ui/input";
  import { Label } from "@/components/ui/label";
  import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

  defineProps<{ post: object }>();
</script>

<template>
  <div class="mb-4">
    <NuxtLink :to="'/posts/' + post.id">
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>{{ post.title }}</CardTitle>
          <CardDescription>
            <div v-html="post.content"></div>
          </CardDescription>
        </CardHeader>
      </Card>
    </NuxtLink>
  </div>
</template>
