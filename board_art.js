
    
    function getElements(){
        return Promise.resolve(document.querySelectorAll("[class$='col']"));
    };
    
    Promise.all(document.querySelectorAll("[class$='col']")).then((items) => {
        var index = Math.floor(Math.random() * items.length);
        items[index].scrollIntoView();  
    })

    