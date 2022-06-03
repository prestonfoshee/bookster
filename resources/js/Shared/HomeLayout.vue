<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'
import Nav from './Nav.vue'
import AuthButton from './AuthButton.vue'
import Footer from '../Pages/Home/Footer.vue'
import UserIcon from './UserIcon.vue'

const props = defineProps({
    auth: Object
})

</script>

<template>
    <div class="flex justify-center relative">
        <div v-if="$page.props.flash.message" class="absolute flex justify-center items-center text-center whitespace-nowrap top-32 text-sm font-poppins bg-stone-200 border-2 border-main-orange text-main-orange rounded shadow-md px-12 py-4">{{ $page.props.flash.message }}</div>
    </div>

    <main class="min-h-screen space-y-10 bg-gradient-to-tr from-teal-300 to-orange-300 overflow-x-hidden">
        <section class="flex flex-col flex-wrap justify-around items-center px-4 py-6 border-b border-neutral-400 gap-y-4 md:gap-y-0 md:flex-row md:justify-between md:px-16">
            <div class="flex justify-center items-center md:gap-x-0">
                <div class="mr-2">
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57ZM29.8117 17.2729C34.1995 14.5786 41.3072 13.8376 44.8833 13.634C46.0853 13.5659 47.0876 14.4843 47.087 15.6436V37.7585C47.087 38.8209 46.2301 39.7072 45.128 39.7655C41.8997 39.9357 35.3708 40.5576 30.8564 42.8369C30.1614 43.1877 29.3373 42.7099 29.3373 41.9538V18.135C29.3373 17.7894 29.5089 17.4588 29.8117 17.2729ZM11.7044 13.634C15.2804 13.8382 22.3881 14.5786 26.7753 17.2729C27.0787 17.4595 27.2497 17.7769 27.2497 18.1232V41.9584C27.2497 42.7125 26.4281 43.1897 25.7351 42.8395C21.2207 40.5589 14.6885 39.9363 11.459 39.7662C10.3568 39.7085 9.5 38.8222 9.5 37.7592V15.6436C9.5 14.4843 10.5023 13.5659 11.7044 13.634Z" fill="#5465FF"/>
                    </svg>
                </div>
                <div class="flex gap-x-8">
                    <h1 class="text-3xl text-alt-black font-poppins font-bold md:text-4xl">Bookster</h1>
                    <Nav />
                </div>
            </div>

            <div class="flex justify-center items-center gap-x-6">
                <user-icon v-if="auth" />
                <span v-if="auth" class="text-main-black text-sm text-center md:text-left font-poppins">Welcome back, {{ auth.user.username }}</span>
                <AuthButton v-if="!auth" href="/login" :text="'Login'">
                    Login
                </AuthButton>
                <AuthButton v-if="!auth" href="/signup" :text="'Sign up'">
                    Sign up
                </AuthButton>
                <AuthButton v-if="auth" href="/logout" :text="'Sign up'" as="button" method="post">
                    Logout
                </AuthButton>
            </div>
        </section>

        <div>
            <slot />
            <div class="bg-main-blue">
            <section class="mx-auto py-14">
                <Footer />
            </section>
        </div>
        </div>

    </main>
</template>
