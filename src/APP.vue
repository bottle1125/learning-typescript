<template>
    <div id="app">
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Action } from 'vuex-class';

@Component
export default class App extends Vue {}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
</style>

