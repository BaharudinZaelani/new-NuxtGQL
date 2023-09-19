<script setup lang="ts">
let name: string = "default name"
let clicked: boolean = false

function onFunctionClicked(val: string) {
    clicked = true
    console.log("onFunctionClicked")
    console.log(clicked)
}
function onReset() {
    console.log("onReset")
    name = ""
    clicked = false
}
</script>
<template>
    <div>
        <div v-if="clicked">
            {{ name }}
        </div>
        <input type="text" v-model="name"> <br>
        <button @click="onFunctionClicked('clicked')">Click</button>
        <button @click="onReset()">Reset</button>
    </div>
</template>