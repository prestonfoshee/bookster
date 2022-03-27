<script setup>

defineProps({ name: String, technologies: Array })
</script>

<template>
    <Head title="Home" />
    <section class="flex flex-col max-w-xl space-y-10">
        <h1 class="text-6xl text-center text-main-green font-poppins font-bold">The Book App for the Modern World.</h1>
        <span v-if="$page.props.auth" class="text-xl">Username: {{ $page.props.auth.user.username }}</span>
    </section>
</template>
