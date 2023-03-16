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
                    <td><strong>Username: </strong><u>{props?.data?.username}</u></td>
                    <td rowSpan={5}> <img src={props?.data?.avatar} /></td>
                </tr>
                <tr>
                    <td><strong>First Name: </strong><u>{props?.data?.first_name}</u></td>
                </tr>
                <tr>
                    <td><strong>Last Name: </strong><u>{props?.data?.last_name}</u></td>
                </tr>
                <tr>
                    <td><strong>Gender: </strong><u>{props?.data?.gender}</u></td>
                </tr>
                <tr>
                    <td><strong>Phone Number: </strong><u>{props?.data?.phone_number}</u></td>
                </tr>
            </table>
        </>
        
    )        
}