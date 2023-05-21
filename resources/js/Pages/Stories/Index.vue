<template>
    <Head title="Stories" />
    <main class="flex flex-col items-center justify-center gap-y-10 px-4 md:px-0">
        <div>
            <h1 class="text-2xl text-center text-main-black font-poppins font-bold tracking-wide md:text-4xl">Latest <span class="text-2xl text-center text-main-green font-poppins font-bold tracking-wide md:text-4xl">Stories</span> For You</h1>
        </div>
        <div class="w-1/3 flex justify-center gap-x-4">
            <input type="text" v-model="state.searchQuery" placeholder="Find a story..." class="rounded-md px-5 py-3 bg-main-off-white">
            <select v-model="state.selectedCategory" class="rounded-md px-3 py-3 bg-main-off-white">
                <option v-for="category in state.categories" :key="category.id" :value="category.id">{{ category.name }}</option>
            </select>
        </div>
        <section class="flex flex-wrap gap-10 justify-center lg:max-w-screen-2xl">
            <story-post-card v-for="story in stories.data" :key="story.id" :story="story" />
        </section>
        <pagination :links="stories.links" :queryString="" />
    </main>
</template>

<script setup>
import { watch, reactive, onMounted } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import debounce from 'lodash/debounce'
import StoryPostCard from './StoryPostCard.vue'
import Pagination from '../../Shared/Pagination.vue'

onMounted(() => {
    state.selectedCategory = props.filters.categoryFilter
})

const categoryMap = {
    'Fantasy': 1,
    'Sci-Fi': 2,
    'History': 3,
    'Technology': 4
}

const props = defineProps({
    stories: Object,
    filters: Object,
    categories: Object
})

const state = reactive({
    items: [],
    categories: props.categories,
    searchQuery: props.filters.search,
    selectedCategory: props.filters.categoryFilter,
})

watch(() => state.searchQuery, debounce((value) => {
    if (state.selectedCategory === 5 && value != '') {
        Inertia.get('/stories', {search: state.searchQuery}, {preserveState: true,})
    } else if (value === '') {
        Inertia.get('/stories', {}, {preserveState: true})
    } else {
        Inertia.get('/stories', {search: state.searchQuery, categoryFilter: state.selectedCategory}, {preserveState: true})
    }
}, 300)
)

watch(() => state.selectedCategory, (value) => {
    // console.log(value)
    // console.log('value:', categoryMap[value])
    // const categoryValue = categoryMap[value] || 0

    if (value === 5 && state.searchQuery != null) {
        Inertia.get('/stories',{
            search: state.searchQuery
        },
        {
            preserveState: true
        })
    } else if (value === 5 && state.searchQuery == null) {
        Inertia.get('/stories', {
            categoryFilter: value
        },
        {
            preserveState: true,
        })
    } else {
        Inertia.get('/stories',
        {
            search: state.searchQuery,
            categoryFilter: value
        },
        {
            preserveState: true
        })
    }
})

</script>
