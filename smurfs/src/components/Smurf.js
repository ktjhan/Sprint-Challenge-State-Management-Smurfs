import React from "react";
import { connect } from "react-redux";
import { getSmurfs, postSmurf } from "../actions/action";
import FormikForm from "../components/Form";

function Smurf(props) {
  const getSmurfs = () => {
    props.getSmurfs();
  };

  return (
    <div className="App">
      <button
        onClick={() => {
          getSmurfs();
        }}
      >
        Click Me to retrive the Smurfs
      </button>
      {props.smurfs ? (
        props.smurfs.map(smurf => (
          <>
            <h3>Name: {smurf.name}</h3>
            <h3>Age: {smurf.age}</h3>
            <h3>Height: {smurf.height}</h3>
          </>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )}
      <FormikForm postSmurf={props.postSmurf} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, postSmurf })(Smurf);
