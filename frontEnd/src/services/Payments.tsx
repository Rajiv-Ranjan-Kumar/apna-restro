import { assets } from "../assets/assets";
import useRequiredEnv from "./base";

interface RazorpayOptions {
    key: string;
    amount: number;
    currency: string;
    name: string;
    description: string;
    order_id: string;
    handler: (response: RazorpayResponse) => void;
    prefill: {
        name: string;
        email: string;
        contact: string;
    };
    theme: {
        color: string;
    };
    image?: string;
}

interface RazorpayResponse {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
}

interface PaymentDetails {
    amount: number;
    name: string;
    description: string;
    prefill: {
        name: string;
        email: string;
        contact: string;
    };
    themeColor: string;
    image?: string;
}

const useRazorpayPayment = () => {

    const {RAZORPAY_KEY, RAZORPAY_SECRET} = useRequiredEnv();

    const createOrder = async (amount: number): Promise<string | null> => {
        const response = await fetch('/api/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${RAZORPAY_KEY}:${RAZORPAY_SECRET}`),
            },
            body: JSON.stringify({
                amount: amount * 100,
                currency: 'INR',
                receipt: 'receipt#1',
                payment_capture: 1,
            }),
        });

        if (!response.ok) {
            const errorResponse = await response.json();
            console.error('Error creating order:', errorResponse.error);
            alert(`Error creating order: ${errorResponse.error}`);
            return null;
        }

        const data = await response.json();
        return data.id;
    };

    const handlePayment = async (paymentDetails: PaymentDetails) => {
        const orderId = await createOrder(paymentDetails.amount);
        if (orderId) {
            const options: RazorpayOptions = {
                key: `${RAZORPAY_KEY}`,
                amount: paymentDetails.amount * 100,
                currency: "INR",
                name: paymentDetails.name,
                description: paymentDetails.description,
                order_id: orderId,
                handler: (response: RazorpayResponse) => {
                    console.log("Payment Response:", response);
                    alert("Payment Successful!");
                    // You can handle post-payment actions here
                },
                prefill: {
                    name: paymentDetails.prefill.name,
                    email: paymentDetails.prefill.email,
                    contact: paymentDetails.prefill.contact,
                },
                theme: {
                    color: paymentDetails.themeColor,
                },
                image: paymentDetails.image,
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open();
        } else {
            alert("Failed to create order. Please try again.");
        }
    };

    const updateOrderData = (data: { [key: string]: string | number }) => {
        const orderData: PaymentDetails = {
            amount: Number(data.amount),
            name: "Food Order Payment",
            description: "Payment for the order placed on Food Delivery App",
            prefill: {
                name: `${data.first_name} ${data.last_name}`,
                email: String(data.user_email),
                contact: String(data.phone),
            },
            themeColor: '#162447',
            image: assets.logo2,
        };
        handlePayment(orderData);
    };

    return {
        updateOrderData,
    };
};

export default useRazorpayPayment;
