<script setup>
import { LockClosedIcon } from '@heroicons/vue/24/solid'
</script>

<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="mx-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Set new password </h2>
        </div>

        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="new-password" class="sr-only"> New Password </label>
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
    </div>
  </template>

<style scoped>

</style>