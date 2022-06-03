<script setup>
import NavLink from '../Shared/NavLink.vue'

</script>

<template>
    <nav class="hidden lg:block">
        <ul class="flex gap-x-6 justify-center items-center">
            <li>
                <NavLink href="/" :active="$page.component ==='Home/Index'">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink href="/libraries" :active="$page.component === 'Library'">
                    Libraries
                </NavLink>
            </li>
            <li>
                <NavLink href="/stories" :active="$page.component ==='Stories/Index'">
                    Stories
                </NavLink>
            </li>
            <li>
                <NavLink href="/explore" :active="$page.component ==='Explore/Index'">
                    Explore
                </NavLink>
            </li>
        </ul>
    </nav>
</template>
