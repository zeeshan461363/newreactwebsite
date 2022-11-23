import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import List from './List'
import './index.css'


const TodoList = ()=>{

    const [list, Setlist] = useState();
    const ChangeEvent = (val)=>{
        Setlist(val.target.value);
    }
    const [listarr, SetArr] = useState([]);
    const  Clicked = ()=>{
        SetArr((prevalue)=>{
            return ([...prevalue,list])
        })
        Setlist('');
    }
        
    return(
        <>
            <div className="container">
                <div className="content">
                <h1>TODO LIST</h1>
                    <input type="text" placeholder="enter data" onChange={ChangeEvent}
                        value = {list}
                    />
                    <Button className="btn" onClick={Clicked}> + </Button>
                <ol>
                    
                  {  listarr.map((curval,index)=>{
                        return <List
                            key = {index}
                            id =  {index}
                            text = {curval}
                        />
                    })}
                </ol>
                </div>
            </div>
        </>
    )
}


export default TodoList;