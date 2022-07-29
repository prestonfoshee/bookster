<script>
export default {

    props: {
        message: String
    },

    data() {
        return {
            showFlashMessage: true
        }
    },

    watch: {
        message: {
            handler() {
                this.showFlashMessage = true
                setTimeout(() => (this.showFlashMessage = false), 3500)
            },
            deep: true
        }
    },

    mounted() {
        setTimeout(() => (this.showFlashMessage = false), 3000)
    }

}

</script>

<template>
    <div class="flex justify-center relative">
        <div v-if="message && showFlashMessage" class="absolute flex justify-center items-center text-center whitespace-nowrap top-24 text-sm font-poppins bg-stone-200 border-2 border-main-orange text-main-orange rounded shadow-md px-12 py-4">{{ $page.props.flash.message }}</div>
    </div>
</template>
