let product_initial_btn = document.querySelector(".product-initial-btn");
//方案區塊
let initial_container = document.querySelector(".initial-container")
//選擇後的日期顯示區塊
let selected_date = document.querySelector(".selected-date")
// console.log(selected_date)
//日期
let date = document.querySelector("label>input")
// console.log(date)
// selected_date.innerHTML = date.value
//選擇
let initial_btn_fles = document.querySelector("#initial-btn-fles");
//已選擇
let initial_btn_true = document.querySelector("#initial-btn-true");
// console.log(initial_container.innerHTML)
//方案標題
let initial_h4 = initial_container.querySelector("h4")
// console.log(initial_h4)
//按下方案中的[選擇]按鈕後
//變為[已選擇]、選擇的方案標題文字要加入顯示區塊
initial_btn_fles.addEventListener("click",()=>{
    initial_btn_fles.setAttribute("class","d-none" )
    initial_btn_true.setAttribute("class"," col-4 text-conent")
})
//按下方案中的[已選擇]按鈕後
//要變為[選擇]、顯示區的方案要去除掉
initial_btn_true.addEventListener("click",()=>{
    initial_btn_fles.setAttribute("class"," col-4 text-conent")
    initial_btn_true.setAttribute("class","d-none " )
})
let xhr = new XMLHttpRequest();
//url資料路徑
let url = "./Product.json";
let productArray = [];
//讀取json
xhr.onload = ()=>{
    productJson  = JSON.parse(xhr.responseText)
    productArray = Object.values(productJson)
    Product(productArray);
    console.log(productArray)
}
xhr.open("Get",url)
xhr.send();
let Template = document.querySelector("#Template");
function Product(productArray){
    productArray.forEach(p => {
        
    });
}