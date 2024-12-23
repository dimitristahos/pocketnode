// plugins/pocketbase.js
import PocketBase from "pocketbase";

export default defineNuxtPlugin(async () => {
  const pb = new PocketBase("http://pop45.164.92.189.110.sslip.io");

  return {
    provide: { pb },
  };
});
