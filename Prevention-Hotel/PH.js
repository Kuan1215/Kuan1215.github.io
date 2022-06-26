let footer_dropdown = document.querySelectorAll(".footer-limit .title-icon");

        let footer_ul = document.querySelectorAll(".footer-limit ul");

        let footer_checked_index;

        footer_dropdown.forEach((item, index) => {

            item.addEventListener("click", () => {

                if (index != footer_checked_index && footer_checked_index != undefined) {

                    footer_ul[footer_checked_index].classList.add("d-none");

                }

                footer_ul[index].classList.toggle("d-none");

                footer_checked_index = index;

            });

        })

let url = "./Product.json"
let ProductList = []
let xhr = new XMLHttpRequest();
let Featured_btn_T = document.querySelector(".Featured-btn>.btn")
console.lo
xhr.onload = ()=>{
    let ProductJson = JSON.parse(xhr.responseText)
    ProductList = Object.values(ProductJson)
    ADDcard(ProductList);
    console.log(ProductList)
}
xhr.open("Get",url)
xhr.send();
function ADDcard(ProductList){
    ProductList.forEach(p=>{
    });
}
