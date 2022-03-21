<script setup>
import { ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia'
import Pagination from '../Shared/Pagination.vue'

const props = defineProps({
    users: Object,
    filters: Object,
    })

const search = ref(props.filters.search)

watch(search, value => {
    Inertia.get('/users', { search: value }, {
        preserveState: true,
        replace: true
    })
})
</script>

<template>
    <Head title="Users" />
    <div class="flex justify-between mb-8">
        <h1 class="text-3xl font-bold">Users</h1>
        <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg">
    </div>

    <div class="bg-white rounded-lg shadow mx-auto">
        <ul v-for="user in users.data"
            :key="user.id"
            class="flex justify-between border-b-2 border-gray-200 px-4">
            <li class="p-3 text-center">{{ user.name }}</li>
            <li class="p-3 text-center my-auto">
                <a :href="`/users/${user.id}/edit`" class="text-indigo-600 hover:text-indigo-900">Edit</a>
            </li>
        </ul>
    </div>

    <!-- Paginator -->
    <Pagination :links="users.links" class="mt-6" />


    <!-- <div style="margin-top: 900px">
        <p style="font-bold">Preserve Scroll Showcase</p>
        <p>The current time is {{ time }}.</p>
        <Link href="/users"
        class="text-blue-600 hover:underline"
        preserve-scroll
        >
            Refresh
        </Link>
    </div> -->
</template>
