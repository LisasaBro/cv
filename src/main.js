let html = document.querySelector("#html")
let style = document.querySelector("#style")
let string = `/**你好，我是一名前端新人！
接下来我就要开始展示我的前端功底
我们来做个八卦图**/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
    right:50%;
    transform:translateX(-50%);
    top:0;
}
/**首先我们来将八卦图先变成一个圆**/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/**然后我们将八卦图变成一黑一白**/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/**在八卦图里我们设置两个神秘的圆，
 * 让它能够形成八卦图的形状**/
#div1::before{
    top:0;
    left:50%;
    transform:translateX(-50%);
    width:100px;
    height:100px;
    border-radius:50%;
    background:#000;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background:#fff;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/**接下来我们让八卦图动起来！**/
#div1{
    animation:.5s bagua infinite normal;
}
@keyframes bagua{
    0%{
        transform:rotateZ(0deg);
    }
    100%{
        transform:rotateZ(360deg);
    }
}
`
let string2 = "";
let n = 0;
// demo.innerHTML = string.substring(0,n);

let step = () => {
    setTimeout(()=>{
        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += "&nbsp;"
        }else{
            string2 += string[n];
        }
        html.innerHTML = string2
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,99999)
        html.scrollTo(0,99999)
        if(n < string.length - 1 ){
            n+=1
            step()
        }
    },0)
}
step();

