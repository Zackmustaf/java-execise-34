const products = document.querySelector('#products')

function addProduct(){
    const newProduct = document.createElement('li')
    newProduct.textContent = 'newProduct'
    products.appendChild(newProduct)
}

function removeProduct(){

    if(products.lastChild){
        products.removeChild(products.lastChild)
    }else{
        alert('remove products')
    }

}
