import TYPES from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
    [TYPES.SET_CATEGORIES](state, categories): void {
        state.categories = categories;
    },
    [TYPES.SET_NEW_MUSIC_LIST](state, musics): void {
        console.log(musics);
        state.newMusics = musics;
    }
}

export default mutations;