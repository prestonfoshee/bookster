<script setup>
import Layout from '../Shared/Layout.vue'
import { Link } from '@inertiajs/inertia-vue3'

const props = defineProps({
    time: String,
})
</script>

<template>
    <Layout>
        <h1 class="text-4xl font-bold mb-8">Users</h1>
        <div style="margin-top: 900px">
            <p style="font-bold">Preserve Scroll Showcase</p>
            <p>The current time is {{ time }}.</p>
            <Link href="/users"
            class="text-blue-600 hover:underline"
            preserve-scroll
            >
                Refresh
            </Link>
        </div>
    </Layout>
</template>
