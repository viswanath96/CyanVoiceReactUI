import api from "./api"

export const ACTION_TYPES = {
    NAVIGATION_BUTTON_CLICK:'NAVIGATION_BUTTON_CLICK',
    DOWNLOAD_BUTTON_CLICK:'DOWNLOAD_BUTTON_CLICK',
    ANI_1_GET_NEXT_TEXT:'ANI_1_GET_NEXT_TEXT',
    USER_DATA_WITH_ID: 'USER_DATA_WITH_ID'
}

export const NavigationButtonClick = () => dispatch =>{

    dispatch(
        {
            type:ACTION_TYPES.NAVIGATION_BUTTON_CLICK
        }
    )
}


export const DownloadButtonClick = (link) => dispatch =>{
    window.open(link);    
}

export const SignupButtonClick = (link) => dispatch =>{
    var openlink = window.location.origin + link;
    window.location = openlink;    
}


export const Ani1GetNextText = () => dispatch =>{

    dispatch(
        {
            type:ACTION_TYPES.ANI_1_GET_NEXT_TEXT
        }
    )
}

export const GetUserDetailsFromGuid = (guid) => dispatch =>
{
    api.ApplicationApi().fetchById(guid)
    .then(response => {
        dispatch({
            type: ACTION_TYPES.USER_DATA_WITH_ID,
            payload: response.data
        })
    })
    .catch(err => console.log(err))
}