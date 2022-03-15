<script setup>
import Nav from './Nav.vue'


</script>

<template>
    <section class="p-6 bg-gray-400">
        <header class="flex justify-between">
            <div class="flex items-center">
                <h1 class="text-lg font-bold">Learning Inertia</h1>
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
