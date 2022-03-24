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
                <NavLink href="/users" :active="$page.component === 'Users/Index' || $page.component === 'Users/Create'">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink href="/posts" :active="$page.component ==='Posts'">
                    Posts
                </NavLink>
            </li>
            <li>
                <NavLink href="/logout" method="post" as="button">
                    Log Out
                </NavLink>
            </li>
        </ul>
    </nav>
</template>
