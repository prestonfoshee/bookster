<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import ContentHeader from './ContentHeader.vue'
import TwoBookLogo from '../../Shared/TwoBookLogo.vue';
import ContentSubheader from './ContentSubheader.vue';

defineProps({
    name: String,
    technologies: Array,
})

const user = computed(() => usePage().props.value.auth.user)

</script>

<template>
    <Head title="Home" />
    <main class="flex flex-col gap-y-20">
        <section class="flex flex-col items-center md:flex-row md:justify-between">
            <content-header />
            <two-book-logo :mobile="false" />
        </section>
        <section>
            <content-subheader />
        </section>
    </main>
</template>
