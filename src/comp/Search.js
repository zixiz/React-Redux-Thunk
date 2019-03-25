import React, { Component } from 'react';
import { connect } from "react-redux";
import {LoadMovies} from '../state/actions';
import Draw from './Draw';

class Search extends Component {
    state={
        name:'',
        movies:[]
    }
  render() {
    return (
      <div className="App">
        <h1>Search Movie</h1>
        <div className="alert alert-success" role="alert">
            {this.props.msg}
         </div>
        <input onChange={this.handleText.bind(this)} placeholder="Movie Name" name="name" />
        <button  onClick={this.sendToSearch.bind(this)} >Search</button>
        {this.props.movies.map(m=> <Draw key={m.imdbID} m={m} />)}
      </div>
    );
  }

  handleText(ev)
  {
    this.setState({ [ev.target.name]:ev.target.value  })
  }

  async sendToSearch(){
    this.props.loadMovies(this.state)
  }
}
const mapStateToProps = state => { 
    return { movies: state.movies  , msg: state.msg };
  }; 

const mapDispatchToProps = dispatch => {  
    return  { 
        //every field change new action will dispatch 
          loadMovies: function(searchWord) { 
              
             return  dispatch(LoadMovies(searchWord));
            // return  dispatch({type:"LOAD_MOVIES", data:[]});
          }
        }
    }; 

const search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default search;
