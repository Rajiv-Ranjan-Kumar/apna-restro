export const initialOrders = [
    { 
        id: '1',
        customer: {
            id: '1',
            name: 'John Doe',
            email: 'example@gmail.com',
            mobile: '+918102471858',
            deliveryAdd:{
                flatNo: '01',
                street: 'asr vfsd',
                city: 'gaya',
                state: 'bihar',
                zipCode: '824122',
                country: 'india'
            }
        },
        orderDate: '2023-05-01',
        totalAmount: 150.99,
        items: [
            {category:'Rolls', quantity: 5},
            {category:'Bread', quantity: 2},
            {category:'Pastry', quantity: 3}
        ],
        status: 'Pending'
    },
    {
        id: '2',
        customer: {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            mobile: '+911234567890',
            deliveryAdd:{
                flatNo: '02',
                street: 'street xyz',
                city: 'patna',
                state: 'bihar',
                zipCode: '800001',
                country: 'india'
            }
        },
        orderDate: '2023-05-02',
        totalAmount: 89.50,
        items: [
            {category:'Rolls', quantity: 3},
            {category:'Cake', quantity: 1},
            {category:'Cookies', quantity: 10}
        ],
        status: 'Shipped'
    },
    {
        id: '3',
        customer: {
            id: '3',
            name: 'Bob Johnson',
            email: 'bob@example.com',
            mobile: '+911234567891',
            deliveryAdd:{
                flatNo: '03',
                street: 'street abc',
                city: 'ranchi',
                state: 'jharkhand',
                zipCode: '834001',
                country: 'india'
            }
        },
        orderDate: '2023-05-03',
        totalAmount: 220.75,
        items: [
            {category:'Bread', quantity: 4},
            {category:'Pastry', quantity: 6},
            {category:'Muffins', quantity: 8}
        ],
        status: 'Delivered'
    },
    {
        id: '4',
        customer: {
            id: '4',
            name: 'RK',
            email: 'rk@example.com',
            mobile: '+911234567892',
            deliveryAdd:{
                flatNo: '04',
                street: 'street def',
                city: 'delhi',
                state: 'delhi',
                zipCode: '110001',
                country: 'india'
            }
        },
        orderDate: '2023-05-04',
        totalAmount: 175.50,
        items: [
            {category:'Cake', quantity: 2},
            {category:'Cookies', quantity: 15},
            {category:'Rolls', quantity: 5}
        ],
        status: 'Pending'
    },
    {
        id: '5',
        customer: {
            id: '5',
            name: 'Alice Cooper',
            email: 'alice@example.com',
            mobile: '+919876543210',
            deliveryAdd:{
                flatNo: '05',
                street: 'street ghi',
                city: 'bhopal',
                state: 'madhya pradesh',
                zipCode: '462001',
                country: 'india'
            }
        },
        orderDate: '2023-06-01',
        totalAmount: 120.50,
        items: [
            {category:'Pasta', quantity: 4},
            {category:'Pizza', quantity: 2},
            {category:'Ice Cream', quantity: 5}
        ],
        status: 'Delivered'
    },
    {
        id: '6',
        customer: {
            id: '6',
            name: 'Chris Hemsworth',
            email: 'chris@example.com',
            mobile: '+918765432109',
            deliveryAdd:{
                flatNo: '06',
                street: 'street jkl',
                city: 'mumbai',
                state: 'maharashtra',
                zipCode: '400001',
                country: 'india'
            }
        },
        orderDate: '2023-06-02',
        totalAmount: 300.00,
        items: [
            {category:'Burger', quantity: 3},
            {category:'Fries', quantity: 6},
            {category:'Soda', quantity: 10}
        ],
        status: 'Shipped'
    },
    {
        id: '7',
        customer: {
            id: '7',
            name: 'Scarlett Johansson',
            email: 'scarlett@example.com',
            mobile: '+919123456789',
            deliveryAdd:{
                flatNo: '07',
                street: 'street mno',
                city: 'kolkata',
                state: 'west bengal',
                zipCode: '700001',
                country: 'india'
            }
        },
        orderDate: '2023-06-03',
        totalAmount: 250.75,
        items: [
            {category:'Salad', quantity: 5},
            {category:'Smoothie', quantity: 2},
            {category:'Sandwich', quantity: 3}
        ],
        status: 'Pending'
    },
    {
        id: '8',
        customer: {
            id: '8',
            name: 'Tom Hanks',
            email: 'tom@example.com',
            mobile: '+918543216789',
            deliveryAdd:{
                flatNo: '08',
                street: 'street pqr',
                city: 'chennai',
                state: 'tamil nadu',
                zipCode: '600001',
                country: 'india'
            }
        },
        orderDate: '2023-06-04',
        totalAmount: 180.00,
        items: [
            {category:'Sushi', quantity: 4},
            {category:'Miso Soup', quantity: 3},
            {category:'Green Tea', quantity: 2}
        ],
        status: 'Delivered'
    },
    {
        id: '9',
        customer: {
            id: '9',
            name: 'Emma Stone',
            email: 'emma@example.com',
            mobile: '+918123456789',
            deliveryAdd:{
                flatNo: '09',
                street: 'street stu',
                city: 'hyderabad',
                state: 'telangana',
                zipCode: '500001',
                country: 'india'
            }
        },
        orderDate: '2023-06-05',
        totalAmount: 95.75,
        items: [
            {category:'Tacos', quantity: 5},
            {category:'Burrito', quantity: 2},
            {category:'Nachos', quantity: 10}
        ],
        status: 'Pending'
    },
    {
        id: '10',
        customer: {
            id: '10',
            name: 'Will Smith',
            email: 'will@example.com',
            mobile: '+918234567890',
            deliveryAdd:{
                flatNo: '10',
                street: 'street vwx',
                city: 'pune',
                state: 'maharashtra',
                zipCode: '411001',
                country: 'india'
            }
        },
        orderDate: '2023-06-06',
        totalAmount: 400.50,
        items: [
            {category:'Steak', quantity: 1},
            {category:'Red Wine', quantity: 2},
            {category:'Chocolate Cake', quantity: 3}
        ],
        status: 'Shipped'
    }
];
