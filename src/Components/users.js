import React, { useState } from 'react'
import style from './users.module.css'


export const Users = ({user}) => {
    // const [isHover, setIsHover] = useState(false);
    // const style = {
    //     wrapper:{
    //         margin: "30px 0",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         border: "green 1px solid",
    //         boxSyzing: "border-box",
    //         padding: "10px",
    //         borderRadius: "5px",
    //         boxShadow: "0 0 .4em olive",
    //         transform:  isHover ? "scale(1.5)" : ""
            
    //     },
    //     name:{
    //         color: "gray",
    //         size: "24px",
           
    //     }
    // }

//    const handleMouseEnter = () => {
//       setIsHover(true);

//    };
//    const handleMouseLeave = () => {
//       setIsHover(false);
//    };

    return (
        <div className={style.wrapper}
            // style={style.wrapper}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave} 
            >
            <p 
            className={style.name}
            // style={style.name}
            >{user}</p>
        </div>
    )


}