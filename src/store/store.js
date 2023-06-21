import { createStore } from 'vuex'

import users from './modules/users';
import editingPost from './modules/editingPost';

export default createStore({
    modules: {
        users, editingPost
    }
})