<script setup>
import Nav from '../Shared/Nav.vue'

const props = defineProps({
    name: String,
    technologies: Array,
})
</script>

<template>
    <Nav />
    <h1 class="text-4xl font-bold mb-8">Hello World!</h1>
    <p>My name is: {{ name }}</p>
    <ul>
        <li v-for="technology in technologies" :key="technology.index" v-text="technology"></li>
    </ul>
</template>
