import React from "react";
const list = ({people})=>{
    return (
        <>
        {people.map((person)=>{
            const {id, name, age, image} = person;
            return (
                <>
                <div key = {id} className="person">
                    <img src={image} alt={image}></img>
                </div>
                <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>
                </>
            )
        })}
        </>
    )
}
export default list;;