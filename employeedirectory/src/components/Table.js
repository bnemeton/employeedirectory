import React, {useReducer} from 'react'

// function reducer(state, action) {
//     switch(action.type) {
//         case 'sort':

//     }
// }

function Table(props) {
    return (
        <table className="table is-bordered">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col" onClick={props.handleSort} column="name" >Name</th>
                    <th scope="col" onClick={props.handleSort} column="phone" >Phone</th>
                    <th scope="col" onClick={props.handleSort} column="email" >Email</th>
                    <th scope="col">DOB</th>
                </tr>
            </thead>
            {props.results.map(emp => { 
            const {first, last} = emp.name;
            const fullName = `${first} ${last}`
            const date = new Date(emp.dob.date);
            const formattedDate = date.toLocaleDateString()
            return(
                <tr>
                    <td><img src={emp.picture.medium}></img></td>
                    <td>{fullName}</td>
                    <td>{emp.phone}</td>
                    <td>{emp.email}</td>
                    <td>{formattedDate}</td>
                </tr>
                
            )
        
        })}
        </table>

    )
}

export default Table