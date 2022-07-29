<template>
    <Head :title="story.title" />
    <main class="flex flex-col">
        <div>
            <h1>{{ story.title }}</h1>
            <p>{{ story.excerpt }}</p>
            <p>{{ story.body }}</p>
        </div>
    </main>
</template>

<script setup>
defineProps({
    story: Object
})

</script>
