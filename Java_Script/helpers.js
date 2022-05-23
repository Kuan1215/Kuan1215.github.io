function $g(selector){
    //nodelist至少包含一個，node - Element Object
    //如果沒有符合的，則會是一個Empty,NodeList
    let nodelist = document.querySelectorAll(selector);//是一個nodelist集合;

    if(nodelist.length==0){
        return null;
    }
    return nodelist.length==1?nodelist[0]:nodelist;
}

function $ce(element, text){
    let el = document.createElement(element);
    if(typeof (text) !== "undefined" && typeof (text) !== "" && typeof (text) !== null){
        el.innerText = text;
    }
    return el;
}
export {$g,$ce};