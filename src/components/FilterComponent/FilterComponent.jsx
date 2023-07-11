import React from "react";
import { useDispatch } from 'react-redux';
import { statusFavoriteFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/favoriteFilterSlice';
import { setValueFilter } from 'redux/userFilterSlice';
import { LabelEl, InputEl, InputElCheck, LabelCheck, FilterSection } from './FilterComponent.styled';

export const FilterComponent = () => {
    const dispatch = useDispatch();
    function handleCheckboxChange(event){
        const isFavorite = event.target.checked;
        dispatch(setStatusFilter(isFavorite? statusFavoriteFilters.favorites : statusFavoriteFilters.all))
    }
    const showFilteredList = (event) =>{
      switch(event.target.name){
        case "favorites":
          const isFavorite = event.target.checked;
          dispatch(setStatusFilter(isFavorite? statusFavoriteFilters.favorites : statusFavoriteFilters.all))
          break;
        case "filter":
          const filterValue = event.target.value;
          dispatch(setValueFilter(filterValue));
          break;
        default:
          return;    
      }
    }
    return( 
        <FilterSection>     
            <LabelEl>
                Find contacts by name
                <InputEl
                type="text"
                name="filter"
                onChange={showFilteredList}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
            </LabelEl>
            <LabelCheck>Show favorites</LabelCheck>
            <InputElCheck
                type="checkbox"
                name="favorites"
                onChange={handleCheckboxChange}
            />  
        </FilterSection>  
    )
}