import {SET_NEW_GROUP_LIST} from './types';

export const SetNewListGroups = (data) => async dispatch => {
  try{
    dispatch({
      type: SET_NEW_GROUP_LIST,
      payload: data
    });
  }catch(error){
    console.error('-- SetNewListGroups --');
  }
};