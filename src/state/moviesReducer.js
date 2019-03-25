const initialState = {
    movies: [],
    msg: ""
};
 
const moviesReducer = (state = initialState, action) => {
    let newState = {};
    switch (action.type) {

        case 'START_DOWNLOADING': 
            newState = Object.assign({}, state, {
                msg: "start download..."
            });

            return newState;

        case 'MOVIES_LOADED':
            newState = Object.assign({}, state, {
                movies: action.data
            });
            return newState;
            
            case 'ERROR':
            newState = Object.assign({}, state, {
                msg: "ERROR",
                
            });

            case 'FINISH_DOWNLOADING':

            newState = Object.assign({}, state, {
                msg: "done..."
            });
            return newState;

            case 'TITLE_CHANGE':
            newState = Object.assign({}, state);
            
            for (let i = 0; i < newState.movies.length; i++) {

                if (newState.movies[i].imdbID == action.data.imdbID) {

                    newState.movies[i].Title = action.data.newValue;
                }
            }
            newState.date = Date.now();
            return newState;

        default:
            return state;
    }
};
export default moviesReducer;