<template>
    <div>
        <header class="header">
            <a href="/" class="logo"></a>
            <a href="javascript:;" class="button-listen"></a>
        </header>

        <nav class="navbar">
            <a 
                href="javascript:;"
                class="nav-item"
                :class="{'nav-item-active': activeId === item.id}"
                v-for="(item, inx) in categories" :key="inx"
                @click="onToggleCategory(item)"
            >{{ item.title }}</a>
        </nav>
        
        <new-music></new-music>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";
import { State, Action } from 'vuex-class';

import newMusic from '@/components/new-music.vue';

@Component({
    components: {
        'new-music': newMusic
    }
})
export default class App extends Vue {
    @Action initAjax: () => void;
    @State categories: StoreState.category[];

    activeId: number = 0;

    onToggleCategory(item: StoreState.category) {
        this.activeId = item.id;
    }

    mounted() {
        this.initAjax();
    }
}
</script>

<style lang="less">
.header {
    width: 100%;
    height: 192px;
    background-color: #FF5E00;
    position: relative;
    z-index: 4;
    top: 0;
    left: 0;
    .logo {
        width: 384px;
        margin-left: 30px;
        margin-top: 60px;
        height: 84px;
        display: block;
        float: left;
        background: url(//gw.alicdn.com/tps/TB1VRVNKFXXXXXsXpXXXXXXXXXX-426-84.png) no-repeat;
        background-size: contain;
    }
    .button-listen {
        width: 235.2px;
        height: 192px;
        display: block;
        background: url(//gw.alicdn.com/tps/TB1qd4KKFXXXXb1XpXXXXXXXXXX-216-64.png) no-repeat;
        background-size: contain;
        background-position: center;
        position: absolute;
        right: 30px;
        top: 0;
    }
}

.navbar {
    width: 100%;
    height: 96px;
    background-color: rgba(249,249,249,.6);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .nav-item {
        width: 20%;
        height: 96px;
        line-height: 96px;
        font-size: 32px;
        text-align: center;
        text-decoration: none;
        color: #262b2f;
        transition: box-shadow 0.3s ease-in-out;
    }
    .nav-item-active {
        color: #ff5800;
        box-shadow: inset 0 -4px 0 #ff5800;
    }
}
</style>

