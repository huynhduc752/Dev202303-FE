var product1 = {
    id : 1,
    name : "Sản phẩm 1",
    sales: "-20%",
    category: "Sản phẩm nam",
    avatar : "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-den-600x600.jpg",
    priceBefore : "10.000.000",
    priceAfter : "8.000.000" 
};
var product2 = {
    id : 2,
    name : "Sản phẩm 2",
    sales: "-20%",
    category: "Sản phẩm nam",
    avatar : "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-den-600x600.jpg",
    priceBefore : "10.000.000",
    priceAfter : "8.000.000" 
};
var product3 = {
    id : 3,
    name : "Sản phẩm 3",
    sales: "-20%",
    category: "Sản phẩm nam",
    avatar : "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-den-600x600.jpg",
    priceBefore : "10.000.000",
    priceAfter : "8.000.000" 
};
var product4 = {
    id : 4,
    name : "Sản phẩm 4",
    sales: "-20%",
    category: "Sản phẩm nam",
    avatar : "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-den-600x600.jpg",
    priceBefore : "10.000.000",
    priceAfter : "8.000.000" 
}

var listProduct = [product1, product2, product3];
listProduct.push(product4);


// yêu cầu: log ra màn hình ra thông tin "Sản phẩm 3" từ listProduct : listProduct[2].name
//          log ra màn hình tất cả giá trị từng thuộc tính của từng đối tượng trong mảng listProduct
var arr = [1, 2, 3,4 ,5]

for(var i = 0; i < listProduct.length ; i++){
    console.log("thông tin sản phẩm thứ " + i + " là: ");
    console.log(listProduct[i].id)
    console.log(listProduct[i].name)
    console.log(listProduct[i].priceAfter)
    console.log(listProduct[i].category)
    console.log(listProduct[i].sales)
}