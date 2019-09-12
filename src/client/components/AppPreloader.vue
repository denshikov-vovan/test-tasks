<template>
    <div v-if="visible" class="app-container">
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppPreloader',
    props: {
        visible: Boolean
    }
};
</script>

<style lang="scss" scoped>
    .app-container {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(white, 0.75);
    }
</style>
