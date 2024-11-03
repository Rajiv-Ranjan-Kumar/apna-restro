type OfferType = {
    id: string; 
    title: string;
    description: string;
    foodName: string;
    category: string;
    offerCode: string;
    validity: string;
    price: number;
    discount: number;
    active: boolean;
    isUsed: boolean;
};

export const paginate = (items: OfferType[], currentPage: number, itemsPerPage: number) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOffers = items.slice(indexOfFirstItem, indexOfLastItem);

    return {
        currentOffers,
        totalPages,
    };
};
