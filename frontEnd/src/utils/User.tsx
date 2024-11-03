type UserType = {
    id: string; 
    name: string;
    email: string;
    phone: string;
};

export const paginate = (items: UserType[], currentPage: number, itemsPerPage: number) => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = items.slice(indexOfFirstItem, indexOfLastItem);

    return {
        currentUsers,
        totalPages,
    };
};
