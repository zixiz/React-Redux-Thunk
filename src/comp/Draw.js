import React, { Component } from 'react';
import { connect } from "react-redux";


class Draw extends Component {
  render() {
    return (
      <div className="App">
        <input id={this.props.m.imdbID} value={this.props.m.Title} onChange={this.change.bind(this)} />
        <img src={this.props.m.Poster} />
        <h5>{this.props.m.Runtime}</h5>
      </div>
    );
  }
  change(ev){
    this.props.dispatchChange({ imdbID: ev.target.id, newValue: ev.target.value });
  }
  

 }


 let mapDispatchToProps = function (dispatch) {

  let obj = {

    dispatchChange: function (data) {

      dispatch({
        type: "TITLE_CHANGE",
        data: data
      });

    }

  }

  return obj;

}
let mapStateToProps = function (state) {

  return {  date: state.date  };

}

 const draw = connect(mapStateToProps, mapDispatchToProps)(Draw);



export default draw;
