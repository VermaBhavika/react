import {React} from 'react'

export function PreviewData(props){
    return(
        <>
            <h2 className='heading'>Data Number: {props.i+1}</h2>
            <table border={2} className="dataTable">
                <tr>
                    <th colSpan={2}>BioData</th>
                </tr>
                <tr>
                    <td><strong>Username: </strong><u>{props.name}</u></td>
                    <td rowSpan={5}> <img src={props.image} /></td>
                </tr>
                <tr>
                    <td><strong>First Name: </strong><u>{props.firstName}</u></td>
                </tr>
                <tr>
                    <td><strong>Last Name: </strong><u>{props.lastName}</u></td>
                </tr>
                <tr>
                    <td><strong>Gender: </strong><u>{props.gender}</u></td>
                </tr>
                <tr>
                    <td><strong>Phone Number: </strong><u>{props.phoneNumber}</u></td>
                </tr>
            </table>
        </>
        
    )        
}