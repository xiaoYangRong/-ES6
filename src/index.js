let a=1;
console.log(a);
// 1.var：它是variable的简写，可以理解成变量的意思。
// 2.let：它在英文中是“让”的意思，也可以理解为一种声明的意思。
// 3.const：它在英文中也是常量的意思，在ES6也是用来声明常量的，常量你可以简单理解为不变的量。
console.log("一.新的声明方式：")
// var全局声明
var a='JSPang';  //var在ES6里是用来升级全局变量的
console.log(a);

//** let局部声明 **
{
  let a=3;
}
console.log(a);//let是局部变量声明，let声明只在区块内起作用，外部是不可以调用的。



for(let i=0;i<10;i++){  //et在防止程序数据污染上用处的
  console.log('循环体中:'+i);
  }


//** const声明常量**
const a="JSPang";
var a='技术胖';  //不可改变
console.log(a); 


console.log("二.变量的解构赋值：")
//数组
letl  [a,b,c]=[1,2,3];
let [a,[b,c],d]=[1,[2,3],4];

let [a,b="JSPang"]=['技术胖']
console.log(a+b); //控制台显示“技术胖JSPang”
 
let [a,b="JSPang"]=['技术胖',undefined];
console.log(a+b); //控制台显示“技术胖JSPang”

let [a,b="JSPang"]=['技术胖',null];
console.log(a+b); //控制台显示“技术胖null”

//对象
let {foo,bar} = {foo:'JSPang',bar:'技术胖'};
console.log(foo+bar); //控制台打印出了“JSPang技术胖”

let foo;
({foo} ={foo:'JSPang'}); //在解构之前就定义了变量，这时候你再解构会出现问题,只要在解构的语句外边加一个圆括号就可以了。
console.log(foo); //控制台输出jspang

//字符串
const [a,b,c,d,e,f]="JSPang";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log("三.扩展运算符和rest运算符：")

//1.对象扩展运算符（…）
// 当编写一个方法时，我们允许它传入的参数是不确定的。这时候可以使用对象扩展运算符来作参数
function jspang(...arg){
  console.log(arg[0]);
  console.log(arg[1]);
  console.log(arg[2]);
  console.log(arg[3]);

}
jspang(1,2,3);

let arr1=['www','jspang','com'];
//let arr2=arr1;
let arr2=[...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr2);
console.log(arr1);

//2.rest运算符 ...
function jspang(first,...arg){
  for(let val of arg){//for…of的循环可以避免我们开拓内存空间，增加代码运行效率，所以建议大家在以后的工作中使用for…of循环
      console.log(val);
  }
}

jspang(0,1,2,3,4,5,6,7);
//字符串拼接
console.log("四.字符串模版：${jspang}")
let jspang='技术胖';
let blog = `非常高兴你能看到这篇文章，我是你的老朋友
${jspang}。这节课我们学习字符串模版。`;
document.write(blog);
//运算支持
let a=1;
let b=2;
let result=`${a+b}`;
document.write(result);
//查找是否存在
let jspang='技术胖';
let blog = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
document.write(blog.includes(jspang));
//**判断开头是否存在： **
blog.startsWith(jspang);
//判断结尾是否存在
blog.endsWith(jspang);
//** 复制字符串**
document.write('jspang|'.repeat(3));

console.log("五.ES6数字操作：")
//二进制的英文单词是Binary,二进制的开始是0（零），然后第二个位置是b（注意这里大小写都可以实现），然后跟上二进制的值就可以了。
let binary = 0B010101;
console.log(binary);
//** 八进制声明： **
// 八进制的英文单词是Octal，也是以0（零）开始的，然后第二个位置是O（欧），然后跟上八进制的值就可以了。
let b=0o666;
console.log(b);

//** 数字判断和转换**

//** 数字验证Number.isFinite( xx )**
let a= 11/4;
console.log(Number.isFinite(a));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false

//NaN验证
// NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
console.log(Number.isNaN(NaN));

// 判断是否为整数Number.isInteger(xx)

let a=123.1;
console.log(Number.isInteger(a)); //false

// 整数转换Number.parseInt(xxx)和浮点型转换Number.parseFloat(xxx)

let a='9.18';
console.log(Number.parseInt(a)); 
console.log(Number.parseFloat(a));

//  ** 整数取值范围操作 **

// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方。我们先用程序来看一下这个数字是什么.

let a = Math.pow(2,53)-1;
console.log(a); //9007199254740991
// 在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。

// 最大安全整数

consolec .log(Number.MAX_SAFE_INTEGER);
// ** 最小安全整数 **

console.log(Number.MIN_SAFE_INTEGER);
//安全整数判断isSafeInteger( )

let a= Math.pow(2,53)-1;
console.log(Number.isSafeInteger(a));//false

console.log("六.ES6中新增的数组知识：")
// ** JSON数组格式转换 **

// JSON的数组格式就是为了前端快速的把JSON转换成数组的一种格式，我们先来看一下JSON的数组格式怎么写。

let  json = {
  '0': 'jspang',
  '1': '技术胖',
  '2': '大胖逼逼叨',
  length:3
}

let arr=Array.from(json);//ES6中绝大部分的Array操作都存在于Array对象里。我们就用Array.from(xxx)来进行转换
console.log(arr)

//Array.of()方法：
//它负责把一堆文本或者变量转换成数组
let arr =Array.of(3,4,5,6);
console.log(arr);

let arr =Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr);

//find( )实例方法:
// value：表示当前查找的值。
// index：表示当前查找的数组索引。
// arr：表示当前数组
let arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.find(function(value,index,arr){
    return value > 5;
}))

// fill( )实例方法：

// fill()也是一个实例方法，它的作用是把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。

let arr=[0,1,2,3,4,5,6,7,8,9];
arr.fill('jspang',2,5);
console.log(arr);

// for…of循环：

// 这种形式比ES5的for循环要简单而且高效。先来看一个最简单的for…of循环

let arr=['jspang','技术胖','大胖逼逼叨']
 
for (let item of arr){
    console.log(item);
}
//打印索引

let arr=['jspang','技术胖','大胖逼逼叨']
for (let index of arr.keys()){
    console.log(index);
}
// **同时输出数组的内容和索引：**我们用entries()这个实例方法，配合我们的for…of循环就可以同时输出内容和索引了。

// entries( )实例方法：

// entries()实例方式生成的是Iterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。我们来看下面的代码：

let arr=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr.entries()){
    console.log(index+':'+val);
}
let arr=['jspang','技术胖','大胖逼逼叨']
let list=arr.entries();
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);

console.log("七.ES6中的箭头函数和扩展：")
// ** 默认值 **

// 在ES6中给我们增加了默认值的操作，我们修改上边的代码，可以看到现在只需要传递一个参数也是可以正常运行的。

function add(a,b=1){
    return a+b;
}
console.log(add(1));

// 主动抛出错误

// 在使用Vue的框架中，可以经常看到框架主动抛出一些错误，比如v-for必须有:key值。那尤大神是如何做到的那？其实很简单，ES6中我们直接用throw new Error( xxxx ),就可以抛出错误。

function add(a,b=1){
   
    if(a == 0){
        throw new Error('This is error')
    }
     return a+b;
}
 
console.log(add(0));

** 函数中的严谨模式 **

我们在ES中就经常使用严谨模式来进行编程，但是必须写在代码最上边，相当于全局使用。在ES6中我们可以写在函数体中，相当于针对函数来使用。

function add(a,b=1){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
 
console.log(add(1));
上边的代码如果运行的话，你会发现浏览器控制台报错，这是ES6中的一个坑，如果没人指导的话，可能你会陷进去一会。这个错误的原因就是如果你使用了默认值，再使用严谨模式的话，就会有冲突，所以我们要取消默认值的操作，这时候你在运行就正常了。

function add(a,b){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
 
console.log(add(1,2));
// ** 获得需要传递的参数个数 **

// 如果你在使用别人的框架时，不知道别人的函数需要传递几个参数怎么办？ES6为我们提供了得到参数的方法(xxx.length).我们用上边的代码看一下需要传递的参数个数。

function add(a,b){
    'use strict'
    if(a == 0){
        throw new Error('This is error');
    }
     return a+b;
}
 
console.log(add.length);
// 这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。

// 箭头函数

// 在学习Vue的时候，我已经大量的使用了箭头函数，因为箭头函数真的很好用，我们来看一个最简单的箭头函数。也就是上边我们写的add函数，进行一个改变，写成箭头函数。

var add =(a,b=1) => a+b;
console.log(add(1));
{}的使用

// 在箭头函数中，方法体内如果是两句话，那就需要在方法体外边加上{}括号。例如下边的代码就必须使用{}.

var add =(a,b=1) => {
    console.log('jspang')
    return a+b;
};
console.log(add(1));
//第十集了