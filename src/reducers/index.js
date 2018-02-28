import { combineReducers } from 'redux';
import authorized from '../components/Authorized/reducer';

export default combineReducers({
    //集成所有reducer，通过定义的状态名称counter到mapStateToProps访问引入的reducer；
    authorized:authorized
})