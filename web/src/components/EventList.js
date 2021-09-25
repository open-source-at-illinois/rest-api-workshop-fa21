import React, { useEffect } from 'react';
import { Table } from "react-bootstrap";
import '../App.css';
import APIService from '../services/APIService';

const EventList = ({events, setEvents}) => {

    useEffect(() => {
        APIService.getEvents()
            .then(eventList => {
                console.log(eventList)
                setEvents(eventList)
            })
    }, [setEvents]);
    if(!events) {
        return  <></>
    }
    const ids = Object.keys(events);
    return (
        <div>
            <Table striped hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Date / Time</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ids.map(id => events[id])
                            .map(event =>
                                <tr key={event.id}>
                                    <td>{event.name}</td>
                                    <td>{event.location}</td>
                                    <td>{event.date}</td>
                                    <td>{event.category}</td>
                                </tr>
                            )
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default EventList;