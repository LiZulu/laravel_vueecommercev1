<script setup>

</script>

<template>
<div class="min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8"> 
        <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> Sign in to your account </h2>
        </div>
        <form class="mt-8 space-y-6" action="#" methods="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
                <div>
                    <label for="email-address" class="sr-only"> Email address </label>
                    <input id="email-address" name="email" type="email" autocomplete="email" required="" class="">
                </div>

                <div>
                    <label for="password" class="sr-only"> Password </label>
                    <input id="password" name="password" type="password" autocomplete="current-password" required="" class="">
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<style scoped>

</style>