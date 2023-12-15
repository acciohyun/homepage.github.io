const newInterval = setInterval(rotateImages, 5000)
function rotateImages(){
    console.log('changed');
    var myContainer = document.querySelectorAll("[class$='bd']");
    var myArr = document.querySelectorAll("[class$='img']")
    if(!myArr){
        console.log('try again')
        return
    }else{
        var index = Math.floor(Math.random() * myArr.length);
        console.log('rotate'+ index);
        myContainer[0].scrollTop = myArr[index].parentElement.offsetTop + myArr[index].offsetTop;
        //myArr[index].scrollIntoView();
    }
}
