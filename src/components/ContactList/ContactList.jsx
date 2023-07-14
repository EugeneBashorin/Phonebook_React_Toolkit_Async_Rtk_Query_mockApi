import PropTypes from 'prop-types';
import {ReactComponent as FvrSvgRed} from '../heart-red.svg'
import {ReactComponent as FvrSvgWht} from '../heart-white.svg'
import React from "react";
import {ListElement, ListItem, Button, BtnWrapper} from "./ContactList.styled.jsx"
import { useSelector} from "react-redux";
import { getFavoriteFilter, getFilterData } from "../../redux/selectors"
import { useGetUsersQuery, useDeleteUserMutation, useChangeFavoriteStatusMutation } from "../../redux/userSlice"; 
import {getFilteredUsersList} from "./Operations.js"

export const ContactList = () => {

const { data, error, isLoading } = useGetUsersQuery();
const [deleteUser, resultStatusInfo] = useDeleteUserMutation();
const [changeFavoriteStatus, info] = useChangeFavoriteStatusMutation();
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
                        <input type="checkbox" checked={contact.favorites} onChange={ () => changeFavoriteStatus(contact) }/> 
                        <Button type="button" onClick={()=>deleteUser(contact.id)}>Delete</Button>
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