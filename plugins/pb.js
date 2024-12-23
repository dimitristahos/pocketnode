// plugins/pocketbase.js
import PocketBase from "pocketbase";

export default defineNuxtPlugin(async () => {
  const env = useRuntimeConfig();
  console.log(env);
  const pb = new PocketBase(env.public.POCKETBASE);

  return {
    provide: { pb },
  };
});
