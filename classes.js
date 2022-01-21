class Product {
    constructor(itemName, price, discount, productcode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productcode = productcode;

    }
}

let pencil = new Product('pencil', 20, 2, 'p10');

const Product1 = class Product {

    /*   constructor(itemName, price, discount, productcode) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.productcode = productcode;

    }
    get getDiscountValue() {
        return this.discount;
    }
    set setDiscountValue(value) {
        this.discount = value;
    }
    discountValue() {
        return this.discount * this.price / 100
    }
};

let chair = new Product1('Chair', 2000, 15, 'h10');
*/
};