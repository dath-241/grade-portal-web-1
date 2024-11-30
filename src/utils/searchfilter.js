export const searchData = (data, searchTerm, fields = []) => {
    if (!searchTerm) {
        return data;
    }

    return data.filter((item) => {
        for (const field of fields) {
            if (item[field].toString().toLowerCase().includes(searchTerm)) {
                return true;
            }
        }

        return false;
    });
};

export const filterData = (data, filter, filterBy) => {
    if (!filter) {
        return data;
    }

    return data.filter((item) => {
        return filter.toLowerCase().includes(item[filterBy].toString().toLowerCase());
    });
};
