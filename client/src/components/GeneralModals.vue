<script setup lang="ts">
    import Modal from '@/components/Modal.vue';
    import { ref } from 'vue';
    import { state } from '@/model/generalModals'



</script>

<template>
    <Modal :is-open="state.isModalOpen" :title="state.title">
        <h1 class="title">{{ state.message }}</h1>
        <template #footer>
            <button class="button is-success" @click="state.resolve ">Save changes</button>
            <button class="button" @click="state.reject">Cancel</button>
        </template>
    </Modal>
</template>


<style scoped>

</style>