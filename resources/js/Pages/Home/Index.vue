<template>
    <Head title="Home" />

    <main class="flex flex-col">
        <div class="mb-44">
            <section class="flex flex-col items-center max-w-screen-xl mx-auto gap-y-8 lg:flex-row lg:justify-between p-6">
                <content-header />
                <two-book-logo />
            </section>
        </div>
        <div class="bg-main-orange">
            <section class="mx-auto px-24 py-14">
                <stories-and-libraries />
            </section>
        </div>
        <div class="bg-main-green">
            <section class="mx-auto py-14 md:px-32">
                <find-books />
            </section>
        </div>
        <div class="bg-main-blue">
            <section class="mx-auto py-14">
                <Footer />
            </section>
        </div>
    </main>
</template>

<script>
    import HomeLayout from '../../Shared/HomeLayout.vue'
    import Layout from '../../Shared/Layout.vue'

    export default {
        layout: HomeLayout
    }
</script>


<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import ContentHeader from './ContentHeader.vue'
import TwoBookLogo from '../../Shared/TwoBookLogo.vue'
import StoriesAndLibraries from './StoriesAndLibraries.vue'
import FindBooks from './FindBooks.vue'
import Footer from './Footer.vue'

defineProps({
    name: String,
    technologies: Array,
})

const user = computed(() => usePage().props.value.auth.user)

</script>
