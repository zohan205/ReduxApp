import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor,resetColor } from '../features/theme';

const ChangeColor = () => {
    const [color, setColor] = useState("")
    const dispatch = useDispatch();
    return (
        <div className="extra content" >
            {/* <input type="text"  /> */}
            <div className="ui left icon input" style={{marginBottom:"10px"}} >
                <i className="paint brush icon"></i>
                <input type="text" onChange={ (e)=>{ setColor(e.target.value)} } placeholder="Enter colors"/>
                {/* <div className="ui tag label">
                    Change Color
                </div> */}
            </div>
            <button className="ui primary button" onClick={()=>{dispatch(changeColor(color))}} >Change Color</button>
            <button className="ui button" onClick={()=>{dispatch(resetColor())}} >Reset Color</button>
        </div>
    )
}

export default ChangeColor
