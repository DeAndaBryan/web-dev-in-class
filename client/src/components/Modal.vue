<script setup lang="ts">

    const props = defineProps<{
        title?: string;
        isOpen: boolean;
    }>();

    const emit = defineEmits<{
        (e: 'update:isOpen', value: boolean): void;
    }>();

</script>

<template>
    <div class="modal" :class="{ 'is-active' : props.isOpen }">
        <div class="modal-background"></div>

        <div class="modal-card">
            <header class="modal-card-head">
                <slot name="header">
                    <p class="modal-card-title">{{ props.title }}</p>
                    <button class="delete" aria-label="close" @click="emit('update:isOpen', false)"></button>
                </slot>
            </header>
            <section class="modal-card-body">
            
                <slot></slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <button class="button is-success">Save changes</button>
                    <button class="button">Cancel</button>
                </slot>
            </footer>
        </div>
    </div>
</template>


<style scoped>

</style>