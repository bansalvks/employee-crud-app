
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
            isNew: !employeeID,
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

    submit = () => {
        const {
            submit
        } = this.props

        const {
            isNew,
            employeeID,
            firstName,
            lastName,
            code,
            jobTitle,
            phone,
            email,
            region,
            dob,
        } = this.state;

        submit({
            isNew,
            employeeID,
            firstName,
            lastName,
            code,
            jobTitle,
            phone,
            email,
            region,
            dob: dob.getTime(),
        })
    }

    handleChange = event => {
        const key = event.target.dataset.key
        this.setState({
            [key]: event.target.value
        });
    }

    handleChangeDate = date => {
        this.setState({
            dob: date
        });
    }

    render() {
        const {
            close
        } = this.props;

        const {
            show,
            firstName,
            lastName,
            code,
            jobTitle,
            phone,
            email,
            region,
            dob,
            isNew,
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
                                {isNew ? "Edit" : "Create"} Employee
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={close}
                            >
                                <span aria-hidden="true">×</span>
                            </button>

                        </div>
                        <div className="modal-body">
                            <form className="container" onSubmit={this.submit}>


                                <div className="form-group row">
                                    <div className="col-6">
                                        <label htmlFor="codeInput" className="light-label">ID</label>
                                        <div className="row">
                                            <div className="col-2">EM</div>
                                            <div className="col-10">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="codeInput"
                                                    data-key="code"
                                                    onChange={this.handleChange}
                                                    readOnly
                                                    value={code ? code.slice(2, code.length) : 'auto'}
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
                                            data-key="firstName"
                                            onChange={this.handleChange}
                                            value={firstName}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="lnameInput" className="light-label">Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="lnameInput"
                                            data-key="lastName"
                                            onChange={this.handleChange}
                                            value={lastName}
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
                                            data-key="jobTitle"
                                            onChange={this.handleChange}
                                            value={jobTitle}
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
                                            data-key="email"
                                            onChange={this.handleChange}
                                            value={email}
                                        />
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <div className="col-12">
                                        <label htmlFor="phoneInput" className="light-label">Phone Number</label>
                                        <input
                                            className="form-control"
                                            id="phoneInput"
                                            data-key="phone"
                                            onChange={this.handleChange}
                                            value={phone}
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
                                            data-key="region"
                                            onChange={this.handleChange}
                                            value={region}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="dobInput" className="light-label">DOB</label>
                                        <DatePicker
                                            className="form-control"
                                            selected={dob}
                                            onChange={this.handleChangeDate}
                                            data-key="dob"
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
                                        onClick={close}
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