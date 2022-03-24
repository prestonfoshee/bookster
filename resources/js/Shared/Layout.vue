<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import Nav from './Nav.vue'

const props = defineProps({
    auth: Object
})

</script>

<template>
    <Head title="Learning Inertia" />
    <section class="p-6 bg-gray-300">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="text-lg font-bold">Learning Inertia</h1>
                <span class="text-sm ml-4">Welcome back, {{ auth.user.username }}</span>
            </div>
            <Nav />
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>
