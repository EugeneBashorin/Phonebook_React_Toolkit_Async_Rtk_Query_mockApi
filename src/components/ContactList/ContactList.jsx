import PropTypes from 'prop-types';
import {ReactComponent as FvrSvgRed} from '../heart-red.svg'
import {ReactComponent as FvrSvgWht} from '../heart-white.svg'
import React from "react";
import {ListElement, ListItem, Button, BtnWrapper} from "./ContactList.styled.jsx"
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, editFavorite} from "../../redux/userSlice"
import { getFavoriteFilter, getFilterData } from "../../redux/selectors"
import { useGetUsersQuery } from "../../redux/userSlice";

const getFilteredUsersList = (users, statusFavoritesFilter, filterValue) => {
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

export const ContactList = () => {

const { data, error, isLoading } = useGetUsersQuery();

const dispatch = useDispatch();
const namesList = data;
const statusFilter = useSelector(getFavoriteFilter);
const filterValue = useSelector (getFilterData);
const filteredUsers = getFilteredUsersList(namesList, statusFilter, filterValue);
    return (
    <>

    {isLoading? (<b>Loading...</b>):(
        <ListElement>
            {filteredUsers.map( contact => (
                <ListItem key={contact.id}>
                    {contact.name}: {contact.phoneNumber} 
                    <BtnWrapper>
                        {contact.favorites===true?<FvrSvgRed/>:<FvrSvgWht/>}
                        <input type="checkbox" checked={contact.favorites} onChange={() => dispatch(editFavorite(contact.id))}/>
                        <Button type="button" onClick={()=> dispatch(deleteUser(contact.id))}>Delete</Button>
                    </BtnWrapper>
                </ListItem>
            ))}
        </ListElement>)}
    </>
    )
}
ContactList.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    phoneNumber: PropTypes.number,
}