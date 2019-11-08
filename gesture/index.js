"use strict";
// 几种常用的用法
var Gesture = /** @class */ (function () {
    function Gesture(selector) {
        this.eventMap = {
            tap: [],
            doubleTap: [],
            swipe: [],
            touchstart: [],
            touchend: [],
            touchmove: []
        };
        this.dom = this.$(selector);
        this.bind();
    }
    Gesture.prototype.$ = function (selector) {
        var element = document.querySelector(selector);
        if (element) {
            return element;
        }
        throw 'selector of element not exist';
    };
    Gesture.prototype.bind = function () {
        this.dom.addEventListener('touchstart', this.touchStart.bind(this));
        this.dom.addEventListener('touchend', this.touchEnd.bind(this));
        this.dom.addEventListener('touchmove', this.touchMove.bind(this));
    };
    Gesture.prototype.touchStart = function (e) {
        this.emit('touchstart', e);
    };
    Gesture.prototype.touchEnd = function (e) {
        this.emit('touchend', e);
    };
    Gesture.prototype.touchMove = function (e) {
        this.emit('touchmove', e);
    };
    Gesture.prototype.emit = function (eventType, e) {
        this.eventMap[eventType].forEach(function (handler) {
            handler(e);
        });
    };
    Gesture.prototype.on = function (eventType, handler) {
        this.eventMap[eventType].push(handler);
    };
    return Gesture;
}());
var gesture = new Gesture('.touch');
gesture.on('touchstart', function (e) {
    console.log(e);
});
