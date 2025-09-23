<script setup>
    const { posts } = useApi();

    const { data, error, refresh } = await posts.fetchPosts();
</script>

<template>
    <div class="api container">
        <div class="api__buttons">
            <UiButton @click="data = null">Удалить посты</UiButton>
            <UiButton @click="() => refresh()">Отправить запрос снова</UiButton>
        </div>
        <div v-if="data && data.length" class="api__posts">
            <div v-for="el in data" :key="el.id" class="api__posts-item">
                <h3>{{ el.title }}</h3>
                <span>{{ el.body }}</span>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
    .api__buttons
    {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 20px;
    }

    .api__posts
    {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 20px;
    }

    .api__posts-item
    {
        padding: 20px;
        border: 2px solid $black;
        border-radius: 4px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 10px;
    }
</style>