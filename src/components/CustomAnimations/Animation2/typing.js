import React from 'react'
import Typical from 'react-typical';
import { connect } from "react-redux";
import * as actions from '../../../../Data/Action/ApplicationAction'




function TypicalAni({props}) {


    return (      
      <div style={{height:150,display: 'flex',alignContent: 'center',flexWrap: 'wrap'}} >
          <Typical
          loop={Infinity}
          wrapper='b'
          steps={props.animation1content}
          />
      </div>  
    )
}

const mapActionToProps = {
  getNextText : actions.Ani1GetNextText
}

const mapStateToProps = state =>({
  animation1content : state.Animation1Content
})

export default connect(mapStateToProps,mapActionToProps) (TypicalAni)