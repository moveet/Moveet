import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import funcion1 from './Sagas/Sagas';
import CONSTANTES from './CONSTANTES';

const reducerPrueba = (state = [0],action) => {
    switch (action.type) {
        case 'AUMENTAR_REDUCER_PRUEBA':
            return [...state,1];
        default:
            return state;
    }
};

const reducerSession = (state = null, action) => {
switch (action.type) {
    case CONSTANTES.ESTABLECER_SESSION:
        return action.user;
    case CONSTANTES.CERRAR_SESSION:
        return null;
    default:
        return state;
}
};

const sagaMiddleware = createSagaMiddleware(
);
const Reducers = combineReducers({
    reducerPrueba,
    form,
    reducerSession,
});
const Store = createStore(Reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcion1);
export default Store;