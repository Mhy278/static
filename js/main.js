/**
 * bbstr's cdn script
 * Last Update: 2020-06-05
 * GitHub: https://github.com/SatoSouta
 * Made with love by SatoSouta [https://713.moe/]
 **/
cr.define('welcome',function(){'use strict';function onAccept(e){chrome.send('handleActivateSignIn')}function onDecline(e){chrome.send('handleUserDecline');e.preventDefault()}function initialize(){var logo=document.querySelector('.logo-icon');logo.onclick=function(e){logo.animate({transform:['none','rotate(-10turn)'],},({duration:500,easing:'cubic-bezier(1, 0, 0, 1)',}))}}return{initialize:initialize}});document.addEventListener('DOMContentLoaded',welcome.initialize);