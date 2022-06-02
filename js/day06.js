function sum(a, b) {
    //kiem tra
    if (typeof a !== "number" || typeof b !== "number") return -1;
    //xử lý
    const result = a + b;
    //trả kết quả
    return result;

}
console.log(sum(10, 20));
//ví dụ 2
const productlist = [
    { id: 1, name: "Duc" },
    { id: 2, name: "lewlew" },
];

function xuatproductlist(productlist) {
    if (Array.isArray(productlist) || productlist.lenght == 0) return -1;
    let mang = "";
    let i = 0;
    for (i = 0; i < productlist.lenght; i++) {
        mang += productlist[i].name;
        return productlist;
    }
    
}
console.log(xuatproductlist(productlist));