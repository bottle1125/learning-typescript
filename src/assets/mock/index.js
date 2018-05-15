import Mock from 'mockjs';
import categories from './category';
import newMusics from './new_music_list';
import leaderboards from './leader_board';

Mock
    .mock('/categories', 'get', () => {
        return {
            code: 200,
            result: categories
        }
    })

    .mock('/new_music_list', 'get', () => {
        return {
            code: 200,
            result: newMusics
        }
    })

    .mock('/leader_board', 'get', () => {
        return {
            code: 200,
            result: leaderboards
        }
    })