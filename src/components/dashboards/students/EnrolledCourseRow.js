import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class EnrolledCourseRow extends React.Component {

    
    render() {
        const course = this.props.course;

        return (
            <tr className="table-light" disabled={course.rem_seats === 0 ? true : false}>
                <td >{course.sessionId}</td>
                <td >{course.courseId}</td>
                <td >{course.category}</td>
                <td>{course.name}</td>
                <td>{course.start_date}</td>
                <td>{course.end_date}</td>
                <td>{course.credits}</td>
                <td>{course.status}</td>

            </tr>
        );
    }
}

export default EnrolledCourseRow;