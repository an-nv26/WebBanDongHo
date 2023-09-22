export const convertDollarsToVnd = (dollars) => {
    if(typeof dollars === 'string') {
        return Number((parseFloat(dollars) * 22000)).toLocaleString();
    }

    return Number((dollars * 22000)).toLocaleString();
}