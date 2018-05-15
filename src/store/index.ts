import Vue from 'vue'
import Vuex, { ActionTree, MutationTree } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

interface State {
    categories: StoreState.category[],
    newMusics: StoreState.newMusic,
    leaderBoards: StoreState.leaderBoard[]
}

let state: State = {
    categories: [],
    newMusics: {
        list: [],
        preview: {
            url: '',
            width: 0,
            height: 0
        }
    },
    leaderBoards: []
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations
})
