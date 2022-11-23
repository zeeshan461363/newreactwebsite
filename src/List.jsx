import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

const List = (props)=>{
    const [line,Setline] = useState(false);
const lineThrough = ()=>{
Setline (true)
}

    return(
        <>
        <div className="box">
        <span onClick={lineThrough}>
            <DeleteIcon className = "styledel" onClick= {props.onSelect}/>
            </span>
            <li style={{textDecoration :line ? 'line-through': 'none'}}>{props.text}</li>

        </div>
        </>
    )
}
export default List;