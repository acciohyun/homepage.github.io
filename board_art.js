
    var items = await document.querySelectorAll("[class$='col']");
    var index = Math.floor(Math.random() * items.length);
    items[index].scrollIntoView();