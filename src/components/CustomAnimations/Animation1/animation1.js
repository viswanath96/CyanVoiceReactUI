import React,{ useState, useEffect } from 'react'
import { connect } from "react-redux";
import Wave from './WaveAnimation/wave';
import TypicalAni from './TypicalAnimation/typicalAni'
import * as actions from '../../../Data/Action/ApplicationAction'


function Animation1({...props}) {


    const [toggle, set] = useState(false)

    useEffect(() => void setInterval(() => {set(state => !state);props.getNextText();}, 5000), [])


    return (toggle
        ? (<TypicalAni  content={props.animation1content[props.currentTextIndex]} />)
        : (  <Wave/>))
  
}


const mapActionToProps = {
    getNextText : actions.Ani1GetNextText
}

const mapStateToProps = state =>({
    animation1content : state.Animation1Content,
    currentTextIndex: state.currentText
})


export default connect(mapStateToProps,mapActionToProps) (Animation1)