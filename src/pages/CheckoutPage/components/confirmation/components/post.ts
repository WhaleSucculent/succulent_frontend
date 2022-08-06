async function createDelivery(
    deliveryCompany: any, 
    deliveryType: any, 
    traceNo: any
) {
    const data = { 
        deliveryCompany: deliveryCompany, 
        deliveryType: deliveryType, 
        traceNo: traceNo
    };
    try {
        // 👇️ const response: Response
        const response = await fetch('/api/checkout/createNewDelivery', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        });
        
        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: 
        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        return result;
    } catch (error) {
        if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
        } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
        }
    }
}

async function createAddress(
    category: any,
    firstName: any,
    lastName: any,
    address: any,
    apartment: any,
    city: any,
    country: any,
    state: any,
    zipcode: any,
    phone1: any,
    phone2: any
) {
    const data = { 
        category: category,
        firstName: firstName,
        lastName: lastName,
        address: address,
        apartment: apartment,
        city: city,
        country: country,
        state: state,
        zipcode: zipcode,
        phone1: phone1,
        phone2: phone2
    };
    try {
        // 👇️ const response: Response
        const response = await fetch('/api/checkout/createNewAddress', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        });
        
        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: 
        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        return result;
    } catch (error) {
        if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
        } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
        }
    }
}

async function createPayment(
    method: any,
    date: any,
    amount: any,
    status: any,
    payMethodId: any
) {
    const data = { 
        method: method,
        date: date,
        amount: amount,
        status: status,
        payMethodId: payMethodId
    };
    try {
        // 👇️ const response: Response
        const response = await fetch('/api/checkout/createNewPayment', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        });
        
        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: 
        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        return result;
    } catch (error) {
        if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
        } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
        }
    }
}

async function createOrder(
    customerId: any,
    customerEmail: any,
    shippingAddressId: any,
    billingAddressId: any,
    orderDate: any,
    orderStatus: any,
    productsInCartIds: any,
    deliveryId: any,
    paymentId: any,
    itemAmount: any,
    totalTax: any,
    totalAmount: any,
) {
    const data = { 
        customerId: customerId,
        customerEmail: customerEmail,
        shippingAddressId: shippingAddressId,
        billingAddressId: billingAddressId,
        orderDate: orderDate,
        orderStatus: orderStatus,
        productsInCartIds: productsInCartIds,
        deliveryId: deliveryId,
        paymentId: paymentId,
        itemAmount: itemAmount,
        totalTax: totalTax,
        totalAmount: totalAmount
    };
    try {
        // 👇️ const response: Response
        const response = await fetch('/api/checkout/createNewOrder', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        });
        
        if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
        }

        // 👇️ const result: 
        const result = await response.json();

        console.log('result is: ', JSON.stringify(result, null, 4));

        return result;
    } catch (error) {
        if (error instanceof Error) {
        console.log('error message: ', error.message);
        return error.message;
        } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
        }
    }
}

async function insertNewOrder(
        customerId: any,
        customerEmail: any,
        shippingAddressId: any,
        billingAddressId: any,
        orderDate: any,
        orderStatus: any,
        productsInCartIds: any,
        deliveryId: any,
        paymentId: any,
        itemAmount: any,
        totalTax: any,
        totalAmount: any,
        deliveryCompany: any, 
        deliveryType: any, 
        traceNo: any,
        category: any,
        firstName: any,
        lastName: any,
        address: any,
        apartment: any,
        city: any,
        country: any,
        state: any,
        zipcode: any,
        phone1: any,
        phone2: any,
        method: any,
        date: any,
        amount: any,
        status: any,
        payMethodId: any
    ) {
        const data = { 
            customerId: customerId,
            customerEmail: customerEmail,
            shippingAddressId: shippingAddressId,
            billingAddressId: billingAddressId,
            orderDate: orderDate,
            orderStatus: orderStatus,
            productsInCartIds: productsInCartIds,
            deliveryId: deliveryId,
            paymentId: paymentId,
            itemAmount: itemAmount,
            totalTax: totalTax,
            totalAmount: totalAmount,
            deliveryCompany: deliveryCompany, 
            deliveryType: deliveryType, 
            traceNo: traceNo,
            category: category,
            firstName: firstName,
            lastName: lastName,
            address: address,
            apartment: apartment,
            city: city,
            country: country,
            state: state,
            zipcode: zipcode,
            phone1: phone1,
            phone2: phone2,
            method: method,
            date: date,
            amount: amount,
            status: status,
            payMethodId: payMethodId
        };
        const delivery_promise = await createDelivery(deliveryCompany,deliveryType,traceNo);
        const address_promise = await createAddress(category, firstName, lastName, address, apartment, city, country, state, zipcode, phone1, phone2);
        const payment_promise = await createPayment(method, date, amount, status, payMethodId);
        const order_promise = await createOrder('', customerEmail, address_promise._id, address_promise._id, orderDate, orderStatus, productsInCartIds, delivery_promise._id, payment_promise._id, itemAmount, totalTax, totalAmount);
        
        return order_promise;
    }

export {  createOrder, insertNewOrder };
