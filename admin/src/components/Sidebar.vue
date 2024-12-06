<script setup>
import { UsersIcon, ListBulletIcon, ChartBarIcon } from '@heroicons/vue/24/solid';
import { Bars3CenterLeftIcon } from '@heroicons/vue/24/outline';
import { HomeIcon } from "@vue-hero-icons/solid"
</script>

<template>
    <div class="w-[200px] bg-indigo-600 text-white py-4 px-2">
        <router-link :to="{name: 'app.dashboard'}"
                    class="flex items-center p-2 transition-colors hover:bg-black/30 font-light mb-2">
            <span class="mr-2"> 
                <Bars3CenterLeftIcon class="w-8" />
            </span>
            
            <span class="text-m">
                Dashboard
            </span>
        </router-link>

        <router-link :to="{name: 'app.dashboard'}"
                    class="flex items-center p-2 transition-colors hover:bg-black/30 font-light mb-2">
            <span class="mr-2"> 
                <ListBulletIcon class="w-8" />
            </span>
            
            <span class="text-m">
                Products
            </span>
        </router-link>

        <router-link :to="{name: 'app.dashboard'}"
                    class="flex items-center p-2 transition-colors hover:bg-black/30 font-light mb-2">
            <span class="mr-2"> 
                <UsersIcon class="w-8" />
            </span>
            
            <span class="text-m">
                Users
            </span>
        </router-link>

        <router-link :to="{name: 'app.dashboard'}"
                    class="flex items-center p-2 transition-colors hover:bg-black/30 font-light mb-2">
            <span class="mr-2"> 
                <ChartBarIcon class="w-8" />
            </span>
            
            <span class="text-m">
                Reports
            </span>
        </router-link>
    </div>
</template>