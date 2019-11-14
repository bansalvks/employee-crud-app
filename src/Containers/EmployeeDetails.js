import React from 'react'
import moment from 'moment'

export function EmployeeDetails({
    show = false,
    employeeID,
    firstName,
    lastName,
    code,
    jobTitle,
    phone,
    email,
    region,
    dob,
    close,
}) {

    return (
        <div
            className={`modal fade ${show ? 'show' : ''}`}
            style={{
                display: show ? 'block' : ''
            }}
            id="employeeDetailsModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button
                        type="button"
                        className="close modal-close-button"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={close}
                    >
                        <span aria-hidden="true">×</span>
                    </button>

                    <div className="container modal-heading">
                        <div className="row">
                            <h6 className="light-label">
                                {employeeID}
                            </h6>
                        </div>
                        <div className="row">
                            <h5 className="modal-title" id="exampleModalLabel">
                                {firstName + " " + lastName}
                            </h5>
                        </div>
                    </div>

                    <div className="modal-body">
                        <div className="container-fluid">
                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">Name</span>
                                </div>
                                <div className="col-6">
                                    <span>{firstName + " " + lastName}</span>
                                </div>
                            </div>

                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">Employee Code</span>
                                </div>
                                <div className="col-6">
                                    <span>{code}</span>
                                </div>
                            </div>

                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">Job Title</span>
                                </div>
                                <div className="col-6">
                                    <span>{jobTitle}</span>
                                </div>
                            </div>

                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">Phone Number</span>
                                </div>
                                <div className="col-6">
                                    <span>{phone}</span>
                                </div>
                            </div>

                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">Email ID</span>
                                </div>
                                <div className="col-6">
                                    <span>{email}</span>
                                </div>
                            </div>

                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">Region</span>
                                </div>
                                <div className="col-6">
                                    <span>{region}</span>
                                </div>
                            </div>

                            <div className="row employee-details-row">
                                <div className="col-6">
                                    <span className="light-label">DOB</span>
                                </div>
                                <div className="col-6">
                                    <span>{moment(dob).format("DD/MM/YYYY")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            onClick={close}
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}