<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import HomeButton from './HomeButton.vue'

defineProps({
    auth: Object,
})

const auth = computed(() => usePage().props.value.auth)
// const user = computed(() => usePage().props.value.auth.user)

</script>



<template>
    <section class="flex flex-col items-center max-w-xl space-y-10">
        <h1 class="text-6xl text-center text-main-green font-poppins font-bold">The Book App for the Modern World.</h1>
        <div class="max-w-md">
            <p class="text-xl text-center text-main-black font-poppins">
                Keep in touch with friends and show off your latest reads in your library.
                Have real discussions with fellow book lovers.
            </p>
        </div>
        <div class="flex flex-col space-y-3">
            <HomeButton :type="'books'">Explore books</HomeButton>
            <HomeButton :type="'story'">Write a story</HomeButton>
        </div>
    </section>
</template>
