<template>
    <div class="my-2 p-2 border border-2 rounded">
        <p> {{ post.title }} </p>

        <div class="d-flex justify-content-between">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editingPostModal"
                @click="editPost()">
                Изменить
            </button>

            <button class="btn btn-danger" @click="store.commit('deletePost', { userIdx, id: post.id });">
                Удалить
            </button>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const props = defineProps({
    post: Object,
    userIdx: Number
})

const store = useStore();

function editPost() {
    store.commit('setEditingPost', props.post);
    store.commit('setUserIdx', props.userIdx);
}

const emit = defineEmits(['delete'])
</script>