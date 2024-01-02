const choice = (items) => {
    if (items.length === 0) return undefined;
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};

const remove = (items, item) => {
    // find the index of the item in the array
    const index = items.findIndex(element => element === item);
    // if item was found, use splice to modify/return new array without item,
    // otherwise undefined
    if (index > -1) {
        return items.splice(index, 1)[0];
    } else {
        return undefined;
    }

}

export { choice, remove };