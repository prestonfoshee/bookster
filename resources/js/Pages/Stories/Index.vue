<template>
    <Head title="Stories" />

    <main class="flex flex-col items-center justify-center gap-y-10 px-4 md:px-0">
        <div>
            <h1 class="text-2xl text-center text-main-black font-poppins font-bold tracking-wide md:text-4xl">Latest <span class="text-2xl text-center text-main-green font-poppins font-bold tracking-wide md:text-4xl">Stories</span> For You</h1>
        </div>
        <section class="flex flex-wrap gap-10 justify-center lg:max-w-screen-2xl">
            <story-post-card v-for="story in stories.data" :key="story.id" :story="story" />
        </section>
        <pagination :links="stories.links" />
    </main>
</template>

<script setup>
import StoryPostCard from './StoryPostCard.vue'
import Pagination from '../../Shared/Pagination.vue'
// import StoriesPaginator from './StoriesPaginator'
import { ref } from 'vue'

const props = defineProps({
    stories: Object,
})

// const topSection = props.stories.slice(0, 4)

</script>
