import {ACTION_TYPES} from '../Action/ApplicationAction';
import {RouteNavigationSeed,HomepageContentSeed,FaqpageContentSeed,DownloadpageContentSeed,FeaturespageContentSeed,SecuritypageContentSeed,Animation1Seed,HowtousepageContentSeed,SignuppageContentSeed,UserDataSeed,SuccesspageContentSeed} from '../Seed/ApplicationSeed';

const initialState = {
    NavigationMobileOpen:false,
    RouteNavigation: RouteNavigationSeed,
    HomepageContent: HomepageContentSeed,
    FaqpageContent:FaqpageContentSeed,
    DownloadpageContent:DownloadpageContentSeed,
    FeaturespageContent:FeaturespageContentSeed,
    SecuritypageContent:SecuritypageContentSeed,
    Animation1Content:Animation1Seed,
    HowtousepageContent:HowtousepageContentSeed,
    SignuppageContent:SignuppageContentSeed,
    currentText:0,
    UserData : UserDataSeed,
    SuccesspageContent : SuccesspageContentSeed,
}

export const ApplicationReducer = (state = initialState,action) =>{
    switch (action.type) {
        case ACTION_TYPES.NAVIGATION_BUTTON_CLICK:
            return {
                ...state,
                NavigationMobileOpen : !state.NavigationMobileOpen
            }
            break;
        case ACTION_TYPES.ANI_1_GET_NEXT_TEXT:
            return {
                ...state,
                currentText : ((state.currentText + 1)%state.Animation1Content.length)
            }
            break;    
        case ACTION_TYPES.USER_DATA_WITH_ID:
            return {
                ...state,
               UserData: action.payload 
            }
        default:
            return state
            break;
    }
}