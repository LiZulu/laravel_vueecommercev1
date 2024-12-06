<script setup>
import { LockClosedIcon } from '@heroicons/vue/24/solid'
import GuestLayout from '../components/GuestLayout.vue';
</script>

<template>
<GuestLayout title="Set new password">
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
    <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="new-password" class="ssr-only"> New Password </label>
          <input id="new-password" name="password" type="password" required=""
                  class="appearnace-none rounded-none relative black w-full px-3 py-2 border
                        border-gray-300" placeholder="New Password" />
        </div>
                
        <div>
          <label for="password-repeat" class="ssr-only"> Repeat Password </label>
          <input id="password-repeat" name="password_repeat" type="password" required=""
                class="appearance-none rounded-none relative block w-full px-3 py-2 border
                      border-gray-300" placeholder="Repeat Password" />
        </div>
      </div>
    </form>
  </div>
</GuestLayout>
</template>

<style scoped>

</style>