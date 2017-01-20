import {combineReducers} from 'redux';
import SkillReducer from './reducer-skills';
import ProfileReducer from './reducer-profile';
import MenuOptionReducer from './reducer-menu-options';
import ExperienceReducer from './reducer-experience';
import EducationReducer from './reducer-education';
import PortfolioReducer from './reducer-portfolio';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    menuOptions: MenuOptionReducer,
    profile: ProfileReducer,
    portfolio: PortfolioReducer,
    experience: ExperienceReducer,
    education: EducationReducer,
    skills: SkillReducer
});

export default allReducers
