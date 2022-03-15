<script setup>
import Layout from '../Shared/Layout.vue'

const props = defineProps({
    name: String,
    technologies: Array,
})
</script>

<template>
    <Layout>
        <h1 class="text-3xl mb-8">Hello World!</h1>
        <p>My name is: {{ name }}</p>
        <ul>
            <li v-for="technology in technologies" :key="technology.index" v-text="technology"></li>
        </ul>
    </Layout>
</template>
