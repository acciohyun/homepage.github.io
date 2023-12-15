

const myInterval = setInterval(rotateImages, 5000)
function rotateImages(){
    var myArr = document.querySelectorAll("[class$='col']")
    if(!myArr){
        console.log('try again')
        return
    }else{
        console.log('rotate')
        var index = Math.floor(Math.random() * myArr.length);
        myArr[index].scrollIntoView();
    }
}

    