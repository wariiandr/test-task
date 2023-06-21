<template>
    <div class="users mt-2 d-flex flex-row overflow-x-scroll">
        <users-item 
            v-for="(user, idx) in users"
            :key="user.id"
            :user="user"
            :userIdx="idx"
        />
    </div>

    <post-modal 
        @save-post="savePost"
    />
</template>

<script setup>
import PostModal from './PostModal.vue';
import UsersItem from './UsersItem.vue';

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const users = computed({
    get() {
        return store.getters.users;
    },
    set(val) {
        return store.commit('setUsers', val);
    }
})

onMounted(async () => {
    await store.dispatch('fetchUsers');
})

function savePost({ post, userIdx }) {
    if (post.id) {
        store.commit('editPost', { userIdx, post });
    } else {
        store.commit('addPost', { userIdx, post });
    }
}
</script>

<style lang="scss">
.users {
    max-height: 99vh;
}
</style>