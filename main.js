
let sir1 =  document.getElementsByClassName('go1');
let sir2 =  document.getElementsByClassName('go2');
let sir3 =  document.getElementsByClassName('go3');

let page3 = document.getElementsByClassName('page3H2')


for (let i = 0; i < sir1.length; i++){
    sir1[i].addEventListener('click',function(){
        window.scrollTo(0,0)
        
    } )
}
for (let i = 0; i < sir2.length; i++){
    sir2[i].addEventListener('click',function(){
        window.scrollTo(0,1000)
    } )
}
for (let i = 0; i < sir3.length; i++){
    sir3[i].addEventListener('click',function(){
        window.scrollTo(0,3000)
    } )
}