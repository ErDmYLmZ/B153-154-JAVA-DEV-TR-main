const getLastPrice = (price, tax, discount) => {
    price ??= 0; // price = price ?? 0;
    tax ??= 0;
    discount ??= 0;

    if(discount <=0) tax = 0;
    if(price>=1500) discount += 10;

    const totalTax = price * tax / 100;
    const totalDiscount = price * discount / 100;
    const result = price  + totalTax - totalDiscount;

    return result;
}

const onGetLastPriceClick = () => {
    // Homework

    // textbox lardan değerleri al
    // bu değerleri getLastPrice fonksiyonuna gönder
    // dönen değeri göster
}