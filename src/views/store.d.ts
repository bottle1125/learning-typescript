declare namespace StoreState {

    // 分类
    export interface category {
        id: number,
        title: string,
        url: string
    }

    // 歌单
    export interface songSheet {
        name: string,
        singer: string,
        is_vip: Boolean
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