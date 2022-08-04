import { DeliveryDiningRounded } from "@mui/icons-material";

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

// function getDeliveryId(
//     deliveryCompany: any, 
//     deliveryType: any, 
//     traceNo: any,
//     callback: (arg0: any) => void
//     ){
//     const delivery = createDelivery(deliveryCompany,deliveryType,traceNo).then(value => {
//         callback(value._id);
//     } )
// }

export default createDelivery;
