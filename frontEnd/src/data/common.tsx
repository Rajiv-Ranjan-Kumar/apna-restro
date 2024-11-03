import { menuImages, foodImages }from "../assets/assets";

export const menu_list = [
    {
        id: '1',
        menu_name: "Salad",
        menu_image: menuImages.menu_1,
        is_active: true
    },
    {
        id: '2',
        menu_name: "Rolls",
        menu_image: menuImages.menu_2,
        is_active: false
    },
    {
        id: '3',
        menu_name: "Deserts",
        menu_image: menuImages.menu_3,
        is_active: true
    },
    {
        id: '4',
        menu_name: "Sandwich",
        menu_image: menuImages.menu_4,
        is_active: true
    },
    {
        id: '5',
        menu_name: "Cake",
        menu_image: menuImages.menu_5,
        is_active: false
    },
    {
        id: '6',
        menu_name: "Pure Veg",
        menu_image: menuImages.menu_6,
        is_active: true
    },
    {
        id: '7',
        menu_name: "Pasta",
        menu_image: menuImages.menu_7,
        is_active: true
    },
    {
        id: '8',
        menu_name: "Noodles",
        menu_image: menuImages.menu_8,
        is_active: true
    }]

export const food_list = [
    {
        _id: "1",
        name: "Greek salad",
        image: foodImages.food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        rating: 4.5,
        reviews: 100,
        is_available: true
    },
    {
        _id: "2",
        name: "Veg salad",
        image: foodImages.food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        rating: 4.5,
        reviews: 100,
        is_available: false
    }, {
        _id: "3",
        name: "Clover Salad",
        image: foodImages.food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        rating: 3.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "4",
        name: "Chicken Salad",
        image: foodImages.food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad",
        rating: 2.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "5",
        name: "Lasagna Rolls",
        image: foodImages.food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",rating: 4.5,
        reviews: 500,
        is_available: true
    }, {
        _id: "6",
        name: "Peri Peri Rolls",
        image: foodImages.food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        rating: 4,
        reviews: 100,
        is_available: true
    }, {
        _id: "7",
        name: "Chicken Rolls",
        image: foodImages.food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "8",
        name: "Veg Rolls",
        image: foodImages.food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "9",
        name: "Ripple Ice Cream",
        image: foodImages.food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "10",
        name: "Fruit Ice Cream",
        image: foodImages.food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        is_available: false
    }, {
        _id: "11",
        name: "Jar Ice Cream",
        image: foodImages.food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: foodImages.food_12,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts",
        rating: 4.5,
        reviews: 100,
        is_available: true
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: foodImages.food_13,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        is_available: false
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: foodImages.food_14,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "15",
        name: "Grilled Sandwich",
        image: foodImages.food_15,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "16",
        name: "Bread Sandwich",
        image: foodImages.food_16,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "17",
        name: "Cup Cake",
        image: foodImages.food_17,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "18",
        name: "Vegan Cake",
        image: foodImages.food_18,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        is_available: false
    }, {
        _id: "19",
        name: "Butterscotch Cake",
        image: foodImages.food_19,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "20",
        name: "Sliced Cake",
        image: foodImages.food_20,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "21",
        name: "Garlic Mushroom ",
        image: foodImages.food_21,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "22",
        name: "Fried Cauliflower",
        image: foodImages.food_22,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "23",
        name: "Mix Veg Pulao",
        image: foodImages.food_23,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "24",
        name: "Rice Zucchini",
        image: foodImages.food_24,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pure Veg",
        rating: 4.5,
        reviews: 100,
        is_available: true
    },
    {
        _id: "25",
        name: "Cheese Pasta",
        image: foodImages.food_25,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        rating: 4.5,
        reviews: 100,
        is_available: true
    },
    {
        _id: "26",
        name: "Tomato Pasta",
        image: foodImages.food_26,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "27",
        name: "Creamy Pasta",
        image: foodImages.food_27,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "28",
        name: "Chicken Pasta",
        image: foodImages.food_28,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Pasta",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "29",
        name: "Butter Noodles",
        image: foodImages.food_29,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "30",
        name: "Veg Noodles",
        image: foodImages.food_30,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "31",
        name: "Semen Noodles",
        image: foodImages.food_31,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }, {
        _id: "32",
        name: "Cooked Noodles",
        image: foodImages.food_32,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Noodles",
        rating: 4.5,
        reviews: 100,
        is_available: true
    }
]
