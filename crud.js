
var productNameInput=document.getElementById('productNameInput');
var productPriceInput=document.getElementById('productPriceInput');
var productCategoryInput=document.getElementById('productCategoryInput');
var productDescriptionInput=document.getElementById('productDescriptionInput');
var productsContainer=[];


if(localStorage.getItem("products")!=null)
{
productsContainer=JSON.parse(localStorage.getItem("products"));
DisplayProducts();

}

function addProduct()
{

var Product={

name:productNameInput.value,
price: productPriceInput.value,
category:productCategoryInput.value,
description: productDescriptionInput.value

}
productsContainer.push(Product);
localStorage.setItem("products",JSON.stringify(productsContainer));

Clear();
DisplayProducts();
}



function Clear(){
    productNameInput.value="";
    productPriceInput.value ="";
    productCategoryInput.value="";
     productDescriptionInput.value="";
    
     }
    


 function DisplayProducts(){

var cartoona=``;

    for (var i=0 ;i<productsContainer.length ;i++){
cartoona +=` <tr>
        <td>${[i]}</td>
        <td>${productsContainer[i].name}</td>
        <td>${productsContainer[i].price}</td>
        <td>${productsContainer[i].category}</td>
        <td>${productsContainer[i].description}</td>
        <td><button onclick="DeleteProduct(${i})" class=" btn btn-sm btn-outline-danger">Delete</td>
         <td><button  class=" btn btn-sm btn-outline-warning">Update</td>
         <td>0</td>
        </tr>
`
    }
    document.getElementById('tableBody').innerHTML=cartoona;
 }


// Delete a product
function DeleteProduct(deleteindex) {
    productsContainer.splice(deleteindex, 1);
    localStorage.setItem("products",JSON.stringify(productsContainer));
  DisplayProducts();
}
