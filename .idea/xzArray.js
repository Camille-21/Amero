function rotate(k) {
    if(k < 0 || k === 0 || k === this.length) {
        return this;
    }
    //slice()从数组中返回选定元素，负值表示从数组尾部选取元素
    //用this.slice(-k)把后k位数字截取出来
    //this.slice(0,this.length-k)表示前面数字数组
    //concat()连接两个数组
    return this.slice(-k).concat(this.slice(0,this.length - k));
}
Array.prototype.rotate = rotate;
let arr = [1,2,3,4,5,6,7];
console.log(arr.rotate(3));


