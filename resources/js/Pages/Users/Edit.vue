<script setup>
import { ref, onUnmounted } from 'vue'
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    id: Number,
    name: String,
    email: String,
})

const submitted = ref(false)

// onUnmounted(() => {
// submitted.value = false
// })

const form = useForm({
    email: '',
    name: '',
})

const submit = () => {
    form.patch('/users/edit')
    submitted.value = true
}
</script>


<template>
<Head title="Users - Edit" />
<main class="flex flex-col items-center justify-center">
        <section class="bg-white p-8 rounded-xl max-w-md mx-auto mt-8 border border-gray-300">
            <h1 class="text-3xl">Edit User</h1>
            <span v-text="name" class="text-xl"></span>
            <form @submit.prevent="submit" class="mt-8">
                <div class="mb-6">
                    <span class="block text-xs font-medium text-gray-700 pb-3">Your email address: {{ email }}</span>
                    <label class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        for="email"
                    >
                    Change email
                    </label>

                    <input v-model="form.email" class="border border-gray-300 rounded-md p-2 w-full"
                        type="email"
                        name="email"
                        id="email"
                    >
                    <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-xs mt-1"></div>
                </div>

                <div class="mb-6">
                    <span class="block text-xs font-medium text-gray-700 pb-3">Your name: {{ name }}</span>
                    <label class="block mb-2 uppercase font-bold text-xs text-gray-700"
                        for="name"
                    >
                    Change name
                    </label>

                    <input v-model="form.name" class="border border-gray-300 rounded-md p-2 w-full"
                        type="text"
                        name="name"
                        id="name"
                    >
                    <div v-if="form.errors.name" v-text="form.errors.name" class="text-red-500 text-xs mt-1"></div>
                </div>

                <div class="mb-6">
                    <button type="submit"
                        class="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500"
                        :class="{ 'hover:cursor-not-allowed': form.processing }"
                        :disabled="form.processing"
                    >
                        Update info
                    </button>
                </div>
            </form>
        </section>
        <section v-if="submitted" class="bg-white p-8 rounded-xl max-w-md mx-auto mt-8 border border-gray-300">
            <div class="mb-6">
                <h1 class="text-2xl mb-6">Updated User Info</h1>
                <span class="block text-sm font-medium text-gray-700 mb-8">New email address: {{ email }}</span>
                <span class="block text-sm font-medium text-gray-700">New name: {{ name }}</span>
            </div>
        </section>
    </main>
</template>
