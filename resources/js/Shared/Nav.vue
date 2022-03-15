<script setup>
import { Link } from '@inertiajs/inertia-vue3'
import NavLink from '../Shared/NavLink.vue'

</script>

<template>
    <nav>
        <ul class="flex list-disc list-inside space-x-6">
            <li>
                <NavLink href="/" :active="$page.component ==='Home'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/users" :active="$page.component ==='Users'">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink href="/posts" :active="$page.component ==='Posts'">
                    Posts
                </NavLink>
            </li>
            <!-- <li><Link href="/logout" method="post" as="button" :data="{ red: 'sheen' }" class="text-blue-600 hover:underline">Log out</Link></li> -->
        </ul>
    </nav>
</template>
