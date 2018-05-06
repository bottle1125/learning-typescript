<template>
    <div></div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {

        }
    },
    created() {
        let isDone: boolean = false;

        let decLiteral: number = 6;
        let hexLiteral: number = 0xf00d;
        let binaryLiteral: number = 0b1010;
        let octalLiteral: number = 0o744;

        let name: string = "blob";
        name = 'smith';
        let sentence: string = `Hello, my name is ${ name }`;

        let list1: number[] = [1, 2, 3];

        let list2: Array<number> = [1, 2, 3];

        // 元组Tuple
        // 允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
        let x: [string, number];
        x = ['hello', 10];

        // 当访问一个越界的元素，会使用联合类型替代
        x[3] = 'world'; // OK
        console.log(x[5].toString());  // OK
        x[6] = true;  // Error

        // enum
        enum Color {Red, Green, Blue}
        let c: Color = Color.Green; // 1

        enum Color2 { Red = 1, Green, Blue };
        let d: Color = Color.Green;  //2

        // any
        let notSure: any = 4;

        // void表示没有任何类型,函数没有返回值
        function warnUser(): void {
            alert('This is my warning message');
        }

        let unusable: void = undefined;

        let u: undefined = undefined;
        let n: null = null;
        // 默认情况下null和undefined是所有类型的子类型，然而，当指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自

        // never表示永不存在的值的类型

        // 返回never的函数必须存在无法达到的终点
        function error(message: string): never {
            throw new Error(message);
        }

        // 推断的返回值类型为never
        function fail() {
            return error("Something failed");
        }

        // 返回never的函数必须存在无法达到的终点
        function infiniteLoop(): never {
            while (true) {
            }
        }

        // 类型断言
        let someValue: any = "this is a string";
        let strLength: number = (<string>someValue).length;

        let someValue2: any = "this is a string";
        let strLength2: number = (someValue as string).length;
    }
})
</script>
