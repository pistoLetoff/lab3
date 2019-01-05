function tree(container, space) {
    if(container.childElementCount == 0 && container.innerText) {
        treePlace.lastChild.innerHTML+= ": <p class=\"tree-text\">" + container.innerText + "</p>";
        console.log(": " + container.innerText);
    }
    for(var i = 0; i < container.children.length; i++) {
        var newLine = document.createElement("p");
        var text = document.createTextNode(space + container.children[i].localName)
        newLine.appendChild(text);
        treePlace.appendChild(newLine);
        console.log(text);
        // Avoid indinity recursion
        if(container.children[i].id != 'tree-place') tree(container.children[i], '|--' + space);
    }
}

function treeShow(){
    document.getElementById("tree-btn").outerHTML = "";
    document.getElementById("tree-header").innerHTML = "Дерево элементов страницы";
    tree(document, '> ');
}

function init() {
    treePlace = document.getElementById("tree-place");
    var btn = document.getElementById("tree-btn");
    btn.addEventListener("click", function(){ treeShow() });
    btn.addEventListener("click", function(){ document.getElementById('container').style.display = 'block' });
}
