<script setup>
import Sidebar from './Sidebar.vue';
import TopHeader from './TopHeader.vue';

const {title} = defineProps(
    {
        title: String
    })

const emit = defineEmits(['submit'])

</script>

<template>
<div class="min-h-full flex">
    <!---- Sidebar ---->
    <Sidebar />

    <!---- Sidebar ---->
    <div class="flex-1">
        <TopHeader />

        <!---- Main Content ---->
        <main>
            <router-view></router-view>
        </main>
    </div>
</div>
</template>

<style scoped>

</style>