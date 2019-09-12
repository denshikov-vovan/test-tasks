<template>
    <div class="app-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'AppContainer'
};
</script>

<style lang="scss" scoped>
    .app-container {
        display: grid;
        grid-template-rows: 55px auto;
        height: 100vh;
        overflow: hidden;
        position: relative;
    }
</style>
