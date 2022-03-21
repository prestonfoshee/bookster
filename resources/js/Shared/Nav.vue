<script setup>
import NavLink from '../Shared/NavLink.vue'

</script>

<template>
    <nav>
        <ul class="flex space-x-6">
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
        </ul>
    </nav>
</template>
