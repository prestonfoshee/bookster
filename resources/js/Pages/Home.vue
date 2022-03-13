<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import Nav from '../Shared/Nav.vue'

const props = defineProps({
    name: String,
    technologies: Array,
})
</script>

<template>
    <Nav />
    <h1>Hello World!</h1>
    <p>My name is: {{ name }}</p>
    <ul>
        <li v-for="technology in technologies" :key="technology.index" v-text="technology"></li>
    </ul>
</template>
