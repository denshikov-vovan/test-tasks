<template>
    <div v-if="message" class="app-error-container">
        <p>Error: {{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'AppError',
    props: {
        message: String
    }
};
</script>

<style lang="scss" scoped>
    .app-error-container {
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
    p {
        color: red;
        text-align: center;
        padding: 50px;
    }
</style>
