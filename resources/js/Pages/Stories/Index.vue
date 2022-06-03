<template>
    <Head title="Stories" />

    <main class="flex flex-col items-center justify-center gap-y-10 px-4 md:px-0">
        <div>
            <h1 class="text-2xl text-center text-main-black font-poppins font-bold tracking-wide md:text-4xl">Latest <span class="text-2xl text-center text-main-green font-poppins font-bold tracking-wide md:text-4xl">Stories</span> For You</h1>
        </div>
        <section v-for="post in topSection" :key="post.id" class="flex flex-row flex-wrap justify-center gap-8 w-full">
            <story-post-card :post="post" />
        </section>
    </main>
</template>

<script setup>
import StoryPostCard from './StoryPostCard.vue'
import { ref } from 'vue'

const props = defineProps({
    posts: Array,
})

const topSection = props.posts.slice(0, 4)

</script>
