
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React from 'react'

export class EmployeeDetailsEditor extends React.Component {
    constructor(props) {
        super(props);

        const {
            show,
            employeeID,
            firstName,
            lastName,
            code,
            jobTitle,
            phone,
            email,
            region,
            dob,
        } = props;

        this.state = {
            show,
            employeeID,
            firstName,
            lastName,
            code,
            jobTitle,
            phone,
            email,
            region,
            dob: dob || new Date(),
        }
    }
    handleChange = date => {
        this.setState({
            dob: date
        });
    }

    render() {
        const {
            show = false,
            employeeID,
            FirstName,
            lastName,
            code,
            jobTitle,
            phone,
            email,
            region,
            dob,
            isEdit,
        } = this.state;

        return (
            <div
                className={`modal fade ${show ? 'show' : ''}`}
                style={{
                    display: show ? 'block' : ''
                }}
                id="employeeDetailsModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="EmployeeEditModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="EmployeeEditModalLabel">
                                {isEdit ? "Edit" : "Create"} Employee
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            <form className="container">


                                <div className="form-group row">
                                    <div className="col-6">
                                        <label htmlFor="codeInput" className="light-label">ID</label>
                                        <div className="row">
                                            <div className="col-2">EM</div>
                                            <div className="col-10">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="codeInput"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-6">
                                        <label htmlFor="fnameInput" className="light-label">First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fnameInput"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="lnameInput" className="light-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lnameInput"
                                        />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <div className="col-12">
                                        <label htmlFor="jobTitleInput" className="light-label">Job Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="jobTitleInput"
                                        />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <div className="col-12">
                                        <label htmlFor="emailInput" className="light-label">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="emailInput"
                                        />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <div className="col-12">
                                        <label htmlFor="phoneInput" className="light-label">Phone Number</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="phoneInput"
                                        />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <div className="col-6">
                                        <label htmlFor="regionInput" className="light-label">Region</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="regionInput"
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="dobInput" className="light-label">DOB</label>
                                        <DatePicker
                                            className="form-control"

                                            selected={dob}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>


                                <div>
                                    <button type="submit" className="btn btn-primary employee-details-edit-buttons">
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}