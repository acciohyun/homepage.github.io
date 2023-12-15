const newInterval = setInterval(rotateImages, 5000)
function rotateImages(){
    console.log('changed');
    var myContainer = document.querySelectorAll("[class$='bd']");
    var myArr = document.querySelectorAll("[class$='col']")
    if(!myArr){
        console.log('try again')
        return
    }else{
        var index = Math.floor(Math.random() * myArr.length);
        console.log('rotate'+ index);
        var offsetTop = myArr[index].offsetTop - myContainer[0].offsetTop;
        console.log(offsetTop)
        myContainer[0].scrollTop = offsetTop;
        //myArr[index].scrollIntoView();
    }
}