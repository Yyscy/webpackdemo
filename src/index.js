import './banner.js';
import './tabs.js';

import './style/index.css'
import './style/index.less'
// 引入jquery
import $ from 'jquery'
$('#swiper').css('background-color', 'red')

// index.js
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// 引入图片-使用
import imgUrl1 from './assets/1.gif'
const theImg = document.createElement("img")
theImg.src = imgUrl1
document.body.appendChild(theImg)