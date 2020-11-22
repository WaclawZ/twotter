import { createStore } from 'vuex'
import { UserModule } from './User'

export default createStore({
    // Global state
    state: {},
    // Mutations are functions that effect the global state
    mutations: {},
    // Actions are functions that you call throughout your application that call mutations
    actions: {},
    modules: {
        User: UserModule
    }
})
