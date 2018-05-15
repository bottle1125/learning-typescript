declare namespace StoreState {

    // 分类
    export interface category {
        title: string,
        url: string
    }

    // 歌单
    export interface music {
        name: string,
        singer: string,
        is_vip: Boolean
    }

    // 预览图
    export interface preview {
        url: string,
        width: number,
        height: number
    }

    // 新歌
    export interface newMusic {
        list: music[],
        preview: preview
    }


    // 排行榜
    export interface leaderBoard {
        title: string,
        preview: {
            url: string,
            width: number,
            height: number
        }
    }
}