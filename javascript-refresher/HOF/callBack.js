console.log("callback functions");
// A callback function is a function that is passed as an argument to another function, to be "called back" at a later time. 


function hello(msg){
    console.log("Hello",msg);
}

var thanks=function(msg){
    console.log("thanks",msg)
}
// here cb is callback function, heCb is also callback
function sum(n1,n2,cb,heCb){
    heCb("Doing!")
    console.log(n1+n2);
    cb("Sum Completed")
}
sum(2,3,thanks,hello)