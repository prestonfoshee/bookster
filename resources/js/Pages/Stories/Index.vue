<template>
    <Head title="Stories" />

    <main class="flex flex-col items-center justify-center gap-y-10 px-4 md:px-0">
        <div>
            <h1 class="text-2xl text-center text-main-black font-poppins font-bold tracking-wide md:text-4xl">Latest <span class="text-2xl text-center text-main-green font-poppins font-bold tracking-wide md:text-4xl">Stories</span> For You</h1>
        </div>
        <div class="w-1/3 flex justify-center gap-x-4">
            <input type="text" v-model="search" placeholder="Find a story..." class="rounded-full px-5 py-3 bg-main-off-white focus:outline-none">
            <select v-model="categoryFilter" class="rounded-full px-5 py-3 bg-main-off-white focus:outline-none">
                <option value="" disabled selected>Category</option>
                <option v-for="category in categories" :key="category.id" v-text="category" aria-placeholder="Categories"></option>
            </select>
        </div>
        <section class="flex flex-wrap gap-10 justify-center lg:max-w-screen-2xl">
            <story-post-card v-for="story in stories.data" :key="story.id" :story="story" />
        </section>
        <pagination :links="stories.links" />
    </main>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import debounce from 'lodash/debounce'
import StoryPostCard from './StoryPostCard.vue'
import Pagination from '../../Shared/Pagination.vue'

const props = defineProps({
    stories: Object,
    filters: Object
})

const categories = [
    'Fantasy',
    'Sci-Fi',
    'History',
    'Technology'
]

const categoryFilter = ref('')

const search = ref(props.filters.search)

watch(search, debounce((value) => {
    Inertia.get('/stories',
    { search: value },
    { preserveState: true,
    replace: true })
}, 300))

watch(categoryFilter, (oldValue, value) => {
    if (oldValue === 'Fantasy') {
        value = 1
    }
    else if (oldValue === 'Sci-Fi') {
        value = 2
    }
    else if (oldValue === 'History') {
        value = 3
    }
    else if (oldValue === 'Technology') {
        value = 4
    }

    // console.log(value)

    Inertia.get('/stories',
    { categoryFilter: value })
})

// const topSection = props.stories.slice(0, 4)

</script>
