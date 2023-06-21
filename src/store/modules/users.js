export default {
    state: () => ({
        users: [],
    }),
    actions: {
        async fetchUsers() {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await res.json();
            
            this.commit('setUsers', users);
        },
        async fetchUserPosts({ commit }, { userIdx, user }) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`);
            const posts = await res.json();

            commit('setUserPosts', { userIdx, posts });
        },
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setUserPosts(state, { userIdx, posts }) {
            state.users[userIdx].posts = posts;
        },
        editPost(state, { userIdx, post }) {
            state.users[userIdx].posts = state.users[userIdx].posts.map(item => item.id === post.id ? post : item);
        },
        addPost(state, { userIdx, post }) {
            state.users[userIdx].posts.push(post);
        },
        deletePost(state, { userIdx, id }) {
            state.users[userIdx].posts = state.users[userIdx].posts.filter(item => item.id !== id);
        }
    },
    getters: {
        users(state) {
            return state.users;
        }
    }
}