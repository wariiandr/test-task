<template>
    <div class="modal fade" id="editingPostModal" tabindex="-1" aria-labelledby="editingPostModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Название</label>
                        <input v-model="newPost.title" type="text" class="form-control">
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Описание</label>
                        <textarea class="form-control" v-model="newPost.body" rows="5"></textarea>
                    </div>
                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="savePost()">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const newPost = ref({ id: null, title: '', body: '', userId: null });

const editingPost = computed(() => {
    return store.getters.editingPost;
})

watch(editingPost, (value) => {
    if (value.id) newPost.value = { ...value };
})


const emit = defineEmits(['save-post'])

function savePost() {
    emit('save-post', { post: { ...newPost.value }, userIdx: store.getters.userIdx });

    newPost.value = { id: null, title: '', body: '', userId: null };
}
</script>