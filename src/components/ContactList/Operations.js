export const getFilteredUsersList = (users, statusFavoritesFilter, filterValue) => {
    if(statusFavoritesFilter === "favorites" && (filterValue === "" || filterValue.length < 2)){
            return users.filter(user => user.favorites === true);
        }    
    if(statusFavoritesFilter === "favorites" && (filterValue !== "" || filterValue.length > 1)){
            return users.filter(user => user.favorites === true && user.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
    if(statusFavoritesFilter !== "favorites" && (filterValue !== "" || filterValue.length > 1)){
            return users.filter(user => user.name.toLowerCase().includes(filterValue.toLowerCase()));
        }
    if(filterValue === "" || filterValue.length < 2) {
        return users;
    }
    return users;
}