const {add, mul} = require('./js/mathUtils')
import {name, age, height} from "./js/info";

//以来css 文件
require("./css/normal.css")

console.log(add(20, 30));
console.log(mul(20, 30));

console.log(name);
console.log(age);
console.log(height);

import Vue from 'vue'

new Vue({
    el: '#app',
    message1: 'Hello World'
})