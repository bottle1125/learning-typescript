import { ActionTree } from 'vuex'
import axios from 'axios'
import TYPES from './types'

const actions: ActionTree<any, any> = {

    async initAjax({ dispatch }) {
        console.log(7888);
        dispatch('getCategories')
    },

    async initNewMusic({ dispatch }) {
        dispatch('getNewMusics');
    },

    async getCategories({ state, commit }) {
        const res: Ajax.AjaxResponse = await axios.get('/categories').then(res => res.data).catch((e: string) => console.error(e))
        if (res && res.code == 200) commit(TYPES.SET_CATEGORIES, res.result.list)
    },

    async getNewMusics({ state, commit }) {
        const res: Ajax.AjaxResponse = await axios.get('/new_music_list').then(res => res.data).catch((e: string) => console.error(e))
        if(res && res.code == 200) commit(TYPES.SET_NEW_MUSIC_LIST, res.result)
    }
}

export default actions;