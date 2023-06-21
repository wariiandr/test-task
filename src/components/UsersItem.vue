<template>
    <div class="users__item mx-2 d-flex flex-column">
        <div class="users__card p-2 d-flex justify-content-between rounded fs-5 fw-semibold">
            <p> {{ user.username }} </p>

            <p> {{ userPostsCount }} </p>
        </div>

        <draggable
            class="list-group"
            :list="user.posts"
            group="people"
            itemKey="id">

            <template #item="{ element }">
                <users-item-post 
                    :post="element"
                    :userIdx="userIdx"
                />
            </template>

        </draggable>

        <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editingPostModal"
            @click="store.commit('setUserIdx', userIdx)">
            Создать пост +
        </button>
    </div>
</template>

<script setup>
import UsersItemPost from './UsersItemPost.vue';

import draggable from 'vuedraggable';

import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
    user: Object,
    userIdx: Number
})

const store = useStore();

const userPostsCount = computed(() => {
    return props.user.posts?.length;
})

onMounted(async () => {
    await store.dispatch('fetchUserPosts', { userIdx: props.userIdx, user: props.user });
})
</script>

<style lang="scss">
.users {
    &__item {
        min-width: 15%;
    }

    &__card {
        color: white;
        background-image: linear-gradient(45deg,#7df19d, #106aa8);
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
    }
}
</style>