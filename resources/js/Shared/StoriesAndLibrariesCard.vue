<template>
    <main class="flex flex-col items-center justify-center gap-y-6 border-2 border-main-blue rounded-3xl p-8 w-80">
        <div>
            <stories-card-logo v-if="type === 'stories'" />
            <libraries-card-logo v-else-if="type === 'libraries'" />
        </div>
        <div class="flex flex-col gap-y-3 text-center">
            <p v-if="type === 'stories'" class="text-main-off-white text-3xl text-center font-base font-poppins">Stories</p>
            <p v-else-if="type === 'libraries'" class="text-main-off-white text-3xl text-center font-poppins">Libraries</p>
            <p v-if="type === 'stories'" class="text-main-off-white text-md font-extralight">
                Reading leaves all of us with so many thoughts, sometimes we want to write our own stories.
                Bookster gives you the ability to compose posts sharing your unique thoughts about your favorite books.
            </p>
            <p v-else-if="type === 'libraries'" class="text-main-off-white text-md font-extralight">
                Create a timeless collection of all the books you've read with the ability to keep track of your progress,
                filter by genre, title, author, and more. View other's libraries and leave a comment too!
            </p>
        </div>
        <Link href="/login" v-if="type === 'stories'" class="flex gap-x-3 border-b-2 p-1 border-transparent hover:border-main-blue">
            <WriteStoryIcon />
            <span class="text-main-blue text-lg text-center">
                write story
            </span>
        </Link>
        <Link href="/login" v-else-if="type === 'libraries'" class="flex gap-x-3 border-b-2 p-1 border-transparent hover:border-main-blue">
            <ViewLibrariesIcon />
            <span class="text-main-blue text-lg text-center">
                view libraries
            </span>
        </Link>
    </main>
</template>

<script setup>
import LibrariesCardLogo from './LibrariesCardLogo.vue'
import StoriesCardLogo from './StoriesCardLogo.vue'
import WriteStoryIcon from './WriteStoryIcon.vue'
import ViewLibrariesIcon from './ViewLibrariesIcon.vue'

const props = defineProps({
    type: String,
})

</script>
