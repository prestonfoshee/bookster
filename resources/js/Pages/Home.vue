<script setup>

defineProps({ name: String, technologies: Array })
</script>

<template>
    <Head title="Home" />
    <h1 class="text-3xl mb-8">Hello World!</h1>
    <p>My name is: {{ name }}</p>
    <ul>
        <li v-for="technology in technologies" :key="technology.index" v-text="technology"></li>
    </ul>
</template>
