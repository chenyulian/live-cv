let html = document.querySelector("#html");
let style = document.querySelector("#style");
let n = 0;
let string = `/*
* 你好，我是kpt,
* 跟我一起用HTML和CSS画一个八卦太极图吧！
* 首先，我要准备一个div
**/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/*
* 然后，将div1变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个神秘的小球 */
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
`;
let temp = "";

let step = () => {
  if (string[n] === "\n") {
    temp += "<br>";
  } else if (string[n] === " ") {
    temp += "&nbsp;";
  } else {
    temp += string[n];
  }
  html.innerHTML = temp;
  style.innerHTML = string.substring(0, n);

  window.scrollTo(0, 99999);
  html.scrollTo(0, 99999);

  n = n + 1;
  if (n < string.length) {
    setTimeout(step, 10);
  }
};

step();
