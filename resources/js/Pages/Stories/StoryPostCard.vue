<template>
    <main class="flex flex-col justify-between gap-y-5 border-2 border-main-green rounded-lg p-4 lg:w-5/12">
        <div class="flex gap-x-3">
            <category-button :category="story.category" />
        </div>
        <div>
            <h2 class="text-2xl text-main-black font-poppins">{{ story.title }}</h2>
        </div>
        <div>
            <span class="text-base text-gray-500 font-light font-poppins">{{ story.created_at }}</span>
        </div>
        <div class="mb-8">
            <p class="text-base text-main-black font-poppins">
                {{ story.body }}
            </p>
        </div>
        <div class="flex justify-between items-center">
            <author-card />
            <read-more-button :slug="story.slug" />
        </div>
    </main>
</template>

<script setup>
import CategoryButton from './CategoryButton.vue'
import AuthorCard from './AuthorCard.vue'
import ReadMoreButton from './ReadMoreButton.vue'

const props = defineProps({
    story: Object
})

</script>
