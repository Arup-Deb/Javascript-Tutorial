//Exercise using objects
//item name
//price
//discount
//itemcode


const product = {
    itemName: 'Flower',
    price: 50,
    discount: 20,
    itemcode: 'F40'
}

function createProduct(name, price, discount, itemcode) {
    return {
        itemName: name,
        price: price,
        discount: discount,
        itemcode: itemcode
    }
}

const football = createProduct('football', 400, 10, 'F30');

function Product(name, price, discount, itemcode) {
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemcode = itemcode;
    this.discountValue = function() {
        return price = discount / 100;
    }
}

const mobile = new Product('oneplus nord', 30000, 5, 'op20')