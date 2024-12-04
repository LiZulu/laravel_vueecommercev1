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
              <label for="new-password"></label>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>

<style scoped>

</style>