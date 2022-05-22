<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import MainContent from './MainContent.vue'
import TwoBookLogo from '../../Shared/TwoBookLogo.vue';

defineProps({
    name: String,
    technologies: Array,
})

const user = computed(() => usePage().props.value.auth.user)

</script>

<template>
    <Head title="Home" />
    <section class="flex flex-col items-center md:flex-row md:justify-between">
        <MainContent />
        <two-book-logo :mobile="false" />
    </section>
</template>
