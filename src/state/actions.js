export const LoadMovies = (searchWord) => {
   
    return async function (dispatch) {
       
        dispatch({
            type: "START_DOWNLOADING",
            data: null
        });

    
        let word = searchWord.name;
        let res = await fetch(`http://www.omdbapi.com/?s=${word}&apikey=3ebba7f8`);
        let res1 = await res.json();
        if(res1.Response != 'False'){
            let allMoviesArr = res1.Search;
            dispatch({
                type: "MOVIES_LOADED",
                data: allMoviesArr
            });
        }else{
            dispatch({
                type: "ERROR",
                data: null
            });
        }
        
        dispatch({
            type: "FINISH_DOWNLOADING",
            data: null
        });
    };
}

