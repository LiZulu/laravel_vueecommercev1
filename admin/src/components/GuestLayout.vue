<script setup>
const {title} = defineProps(
    {
        title: String
    })

const emit = defineEmits(['submit'])

</script>

<template>
<div class="min-h-full items-center justify-center py-10 px-4 sm:px-6 lg:px-1">
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-1"> 
        <div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900"> 
                {{ title }}
            </h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="emit(
            'submit')" method="POST">
            <slot></slot>
        </form>
    </div>
</div>
</template>

<style scoped>

</style>