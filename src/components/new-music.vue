<template>
    <div class="new-music">
        <img :src="newMusics.preview.url" alt="">
        <ul class="music-list">
            <li 
                v-for="(item,inx) in newMusics.list" :key="inx" 
                class="music-list-item"
            >
            <p class="item-name" :class="{'vip': item.is_vip}">{{ item.name }}</p>
                <p class="item-singer">{{ item.singer }}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action, State } from 'vuex-class';

@Component
export default class newMusic extends Vue {
    @Action initNewMusic: () => void;
    @State newMusics: StoreState.newMusic;

    mounted() {
        this.initNewMusic();
    }
}
</script>

<style lang="less">
.new-music {
    img {
        width: 100%;
    }
    .music-list {
        .music-list-item {
            border-bottom: 2px solid #eee;
            height: 126.4px;
            padding-left: 24px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .item-name {
                font-size: 30px;
            }
            .vip {
                &::after {
                    content: '付费';
                    display: inline-block;
                    font-size: 20px;
                    background-color: #ff5800;
                    color: #fff;
                    padding: 0 10px;
                    margin-left: 14px;
                    border-radius: 4px;
                }
            }
            .item-singer {
                font-size: 24px;
                color: #afafb0;
            }
        }
    }
}
</style>

