<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import Nav from './Nav.vue'

const props = defineProps({
    auth: Object
})

</script>

<template>
    <Head title="Learning Inertia" />
    <section class="px-16 py-6 border-b border-main-blue">
        <header class="flex items-center">
            <div class="flex items-center space-x-8">
                <div class="border-r border-main-blue px-6">
                    <h1 class="text-4xl text-main-blue font-poppins font-bold">Bookster</h1>
                </div>
                <Nav />
            </div>
        </header>
    </section>

    <section class="p-6">
        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </section>
</template>
