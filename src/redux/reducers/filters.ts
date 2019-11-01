import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { CustomerStatus } from '../../model';
import { setEmailFilter, setStatusFilter, setNameFilter, reset } from '../actions';

export type FilterState = Readonly<{
  name: string;
  email: string;
  statuses: ReadonlyArray<CustomerStatus>;
}>;

const initialState: FilterState = {
  name: '',
  email: '',
  statuses: Object.keys(CustomerStatus).map(e => CustomerStatus[e])
};

const name = createReducer(initialState.name)
  .handleAction(setNameFilter, (state, action) => action.payload)
  .handleAction(reset, (state, action) => initialState.name);

const email = createReducer(initialState.email)
  .handleAction(setEmailFilter, (state, action) => action.payload)
  .handleAction(reset, (state, action) => initialState.email);

const statuses = createReducer(initialState.statuses)
  .handleAction(reset, (state, action) => initialState.statuses)
  .handleAction(setStatusFilter, (state, action) => {
    const status = action.payload.status;
    if (action.payload.checked) {
      return state.concat(status);
    } else {
      return state.filter(i => i !== status);
    }
  });

export default combineReducers({
  name,
  email,
  statuses
});
