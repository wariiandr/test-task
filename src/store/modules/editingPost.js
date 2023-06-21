export default {
    state: () => ({
        editingPost: { id: null, title: '', body: '', userId: null },
        userIdx: null,
    }),
    mutations: {
        setEditingPost(state, post) {
            state.editingPost = post;
        },
        setUserIdx(state, idx) {
            state.userIdx = idx;
        },
    },
    getters: {
        editingPost(state) {
            return state.editingPost;
        },
        userIdx(state) {
            return state.userIdx;
        },
    }
}