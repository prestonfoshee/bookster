<script setup>
import { useForm } from '@inertiajs/inertia-vue3'

const form = useForm({
    email: '',
    password: ''
})

const submit = () => {
    form.post('/login')
}
</script>

<template>
    <Head title="Login" />

    <main class="flex justify-center font-poppins">
        <section class="py-10 rounded-3xl border border-main-green md:w-1/2">
            <h1 class="text-3xl text-center mb-6 font-bold">Login</h1>
            <form @submit.prevent="submit" class="flex flex-col items-center">
                <div class="mb-6 px-3">
                    <label class="block mb-2 text-sm text-main-black"
                        for="email"
                    >
                    Email
                    </label>

                    <input v-model="form.email" class="border border-gray-400 bg-main-off-white rounded-sm p-2"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        required
                    >
                    <div v-if="form.errors.email" v-text="form.errors.email" class="text-red-500 text-sm mt-1"></div>
                </div>

                <div class="flex flex-col mb-12 px-3">
                    <label class="block mb-2 text-sm text-main-black"
                        for="password"
                    >
                        Password
                    </label>

                    <input v-model="form.password" class="border border-gray-400 bg-main-off-white rounded-sm p-2 mb-2"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                    >
                    <Link href="/" class="text-xs text-main-orange font-light underline ml-auto">Forgot password?</Link>
                    <div v-if="form.errors.password" v-text="form.errors.password" class="text-red-500 text-sm mt-1"></div>
                </div>

                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-main-orange text-main-off-white rounded py-2 px-4 border border-transparent hover:bg-transparent hover:border-main-orange hover:text-main-orange transition duration-100"
                        :class="{ 'hover:cursor-not-allowed': form.processing }"
                        :disabled="form.processing"
                    >
                        Login
                    </button>
                </div>
            </form>
        </section>
    </main>
</template>
