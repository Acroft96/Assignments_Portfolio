import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

// One React component for entire table (Records)
// Another React component for each row of result set (Record)
const Record = (props) => (
    <tr>
        <td>{props.record.name}</td>
        <td>{props.record.position}</td>
        <td>{props.record.level}</td>
        <td><Link to={`/edit/${props.record._id}`}>Edit</Link></td>
    </tr>
);

export default function Records() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        async function getRecords() {
            const response = await fetch('http://localhost:4000/record');
            if (!response.ok) {
                const message = 'An error occurred: ${response.statusText}';
                window.alert(message);
                return;
            }
            const responseRecords = await response.json();
            setRecords(responseRecords);
            return;
        }
        getRecords();
        return;
    },[records.length]);

    function recordList() {
        return records.map((record) => {
            return (
                <Record 
                    record={record}
                    key={record._id}
                />      
            ); 
        });
    }
    return (
        <div>
            <h3>Record List</h3>
            <table style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Level</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>{recordList()}</tbody>
            </table>
        </div>
    );
}