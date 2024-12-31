const product = {
    name: 'Vanilla Lip Gloss',
    sku: 'w234fg',
    stock: 276,
    getProductInfo: function() {
        // console.log(this)
        console.log(`Stock level for ${this.name} (SKU: ${this.sku}): ${this.stock}`)
    }
}

// product.getProductInfo()

const productDetails = product.getProductInfo.bind(product)

productDetails()