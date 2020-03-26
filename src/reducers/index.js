import updateMeasureUnitsList from './measure-units'

const reducer = (state, action) => {
    console.log('action: ', action.type); //JUSTTEST:

    return {
        measureUnits: updateMeasureUnitsList(state, action),
    }
};

export default reducer;