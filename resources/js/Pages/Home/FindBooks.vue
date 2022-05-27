<template>
    <main class="flex flex-col gap-y-16">
        <div class="flex flex-col gap-y-6 text-center border-b-2 border-main-off-white pb-5 w-full md:flex-row md:justify-between md:items-center md:text-left md:gap-y-0">
            <h1 class="text-main-off-white text-4xl font-bold font-poppins tracking-wide">Find exactly what you're looking for.</h1>
            <Link href="" class="flex items-center gap-x-3 text-main-off-white text-lg font-poppins whitespace-nowrap mt-2">
                <arrow-icon />
                <span>Find a book</span>
            </Link>
        </div>
        <div class="flex justify-between items-center gap-x-24">
            <div class="flex flex-col gap-y-9 text-main-off-white">
                <div class="flex flex-col gap-y-3">
                    <h2 class="text-2xl font-semibold font-poppins tracking-wide">Recommendations</h2>
                    <p class="text-lg font-poppins">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime, fuga at esse illo consequuntur magnam id,
                        voluptate cum nesciunt illum asperiores dicta dolorem quas a nostrum maiores. Quisquam, quia mollitia ipsum temporibus
                        iure voluptate aut deserunt reprehenderit assumenda, voluptatem delectus numquam explicabo, minima tenetur? Praesentium
                        quo delectus facilis aperiam!
                    </p>
                </div>
                <div class="flex flex-col gap-y-3">
                    <h2 class="text-2xl font-semibold font-poppins tracking-wide">Curated Libraries</h2>
                    <p class="text-lg font-poppins">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime, fuga at esse illo consequuntur magnam id,
                        voluptate cum nesciunt illum asperiores dicta dolorem quas a nostrum maiores. Quisquam, quia mollitia ipsum temporibus
                        iure voluptate aut deserunt reprehenderit assumenda, voluptatem delectus numquam explicabo, minima tenetur? Praesentium
                        quo delectus facilis aperiam!
                    </p>
                </div>
                <div class="flex flex-col gap-y-3">
                    <h2 class="text-2xl font-semibold font-poppins tracking-wide">Specific Books</h2>
                    <p class="text-lg font-poppins">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, maxime, fuga at esse illo consequuntur magnam id,
                        voluptate cum nesciunt illum asperiores dicta dolorem quas a nostrum maiores. Quisquam, quia mollitia ipsum temporibus
                        iure voluptate aut deserunt reprehenderit assumenda, voluptatem delectus numquam explicabo, minima tenetur? Praesentium
                        quo delectus facilis aperiam!
                    </p>
                </div>
            </div>

            <radar-icon />
        </div>
    </main>
</template>

<script setup>
import ArrowIcon from '../../Shared/ArrowIcon.vue';
import RadarIcon from '../../Shared/RadarIcon.vue';

</script>
