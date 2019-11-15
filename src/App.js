
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { connect } from 'react-redux';
import React from 'react';
import './App.css'
import Navigation from './Components/Navigation';
import { EmployeeDetails } from './Containers/EmployeeDetails';
import { EmployeeDetailsEditor } from './Containers/EmployeeDetailsEditor';
import { getEmployeesAPI, removeEmployeesAPI, updateEmployeesAPI, addEmployeesAPI } from "./services/EmployeeService";
import moment from 'moment';
import _ from 'lodash';

export class App extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      employees: [],
      editEmployeeDetails: null,
      viewEmployeeDetails: null,
      searchMap: {
        employeeID: '',
        firstName: '',
        lastName: '',
        code: '',
        jobTitle: '',
        phone: '',
        email: '',
        region: '',
        dob: '',
      },
      sortBy: '',
      sortOrder: null,
      length: 15,
      startIndex: 0,
      employeeCount: 0,
    };

    this.throttledSearch = _.throttle(this.search, 1000, { trailing: true });
  }

  getEmployees = () => {
    const {
      searchMap,
      sortBy,
      sortOrder,
      length,
      startIndex,
    } = this.state;

    getEmployeesAPI({
      searchMap,
      sortBy,
      sortOrder,
      length,
      startIndex,
    })
      .then(({ employees, count }) => {
        this.setState({
          employees,
          employeeCount: count
        })
      })
  }

  componentDidMount() {
    this.getEmployees();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      searchMap,
      sortBy,
      sortOrder,
      length,
      startIndex,
    } = this.state;

    if (
      searchMap !== prevState.searchMap ||
      sortBy !== prevState.sortBy ||
      sortOrder !== prevState.sortOrder ||
      length !== prevState.length ||
      startIndex !== prevState.startIndex
    ) {
      this.getEmployees();
    }

  }

  onEmployeeDetailsChange = (newDetails, index) => {

  }

  showEmployeeDetails = (e) => {
    e.preventDefault();
    const index = e.target.dataset.index

    const {
      employees
    } = this.state;

    this.setState({
      viewEmployeeDetails: employees[index]
    });
  }

  hideEmployeeDetails = () => {
    this.setState({
      viewEmployeeDetails: null
    })
  }

  showCreateEmployeeDetails = (e) => {
    e.preventDefault();
    this.setState({
      editEmployeeDetails: {}
    });
  }

  showEditEmployeeDetails = (e) => {
    e.preventDefault();

    const index = e.target.dataset.index

    const {
      employees
    } = this.state;

    this.setState({
      editEmployeeDetails: employees[index]
    });
  }

  hideEditEmployeeDetails = () => {
    this.setState({
      editEmployeeDetails: null
    })
  }

  upsertEmployeeDetails = ({
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
  }) => {

    let upsert = isNew ? addEmployeesAPI : updateEmployeesAPI

    if (isNew &&
      !firstName &&
      !lastName &&
      !jobTitle &&
      !phone &&
      !email &&
      !region) {
      this.hideEditEmployeeDetails();
      return
    }

    upsert({
      firstName,
      lastName,
      jobTitle,
      phone,
      email,
      region,
      dob,
    })
      .then(() => {
        this.getEmployees();
        this.hideEditEmployeeDetails();
      })
  }

  removeEmployee = (e) => {
    e.preventDefault();
    const index = e.target.dataset.index
    const {
      employees
    } = this.state;

    removeEmployeesAPI({
      employeeID: employees[index].employeeID
    })
      .then(() => {
        this.getEmployees();
      })
  }

  search = (event) => {
    let newState = {}
    newState[event.target.dataset.searchKey] = event.target.value

    this.setState({
      searchMap: newState
    });
  }

  sort = (event) => {
    const {
      sortOrder,
    } = this.state;

    const newSortBy = event.target.dataset.searchKey;
    let newSortOrder = null;

    if (sortOrder === null) {
      newSortOrder = true;
    }
    else {
      newSortOrder = !sortOrder;
    }

    this.setState({
      sortBy: newSortBy,
      sortOrder: newSortOrder,
    });
  }

  gotoPage = (startIndex) => {
    const {
      length,
      employeeCount
    } = this.state;

    if (startIndex < 0) {
      return;
    }

    if (startIndex > Math.ceil(employeeCount / length)) {
      return;
    }

    this.setState({
      startIndex,
    })
  }

  render() {

    const {
      employees,
      searchMap,
      sortOrder,
      sortBy,
      viewEmployeeDetails,
      editEmployeeDetails,
      employeeCount,
      startIndex,
      length
    } = this.state;

    const pageNumberElements = []
    for (let i = 0; i < Math.ceil(employeeCount / length); i++) {
      console.log(startIndex === i)
      pageNumberElements.push(
        <li onClick={() => {
          this.gotoPage(i)
        }} className={"page-item " + (startIndex === i ? 'active' : '')}><a className="page-link" href="#">{i + 1}</a></li>
      )
    }

    const rowsElements = employees.map(({
      employeeID,
      firstName,
      lastName,
      code,
      jobTitle,
      phone,
      email,
      region,
      dob,
    }, index) => {
      return (
        <tr key={employeeID}>
          <th scope="row">{employeeID}</th>
          <td>{firstName}</td>
          <td>{lastName}</td>
          <td>{code}</td>
          <td>{jobTitle}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{region}</td>
          <td>{moment(dob).format("DD/MM/YYYY")}</td>
          <td>
            <div className="dropdown show">
              <a className="btn dropdown-toggle" href="#" role="button" id="rowActions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                •••
            </a>

              <div className="dropdown-menu" aria-labelledby="rowActions">
                <a className="dropdown-item" data-index={index} onClick={this.removeEmployee} href="#">Remove</a>
                <a className="dropdown-item" data-index={index} onClick={this.showEmployeeDetails} href="#">View</a>
                <a className="dropdown-item" data-index={index} onClick={this.showEditEmployeeDetails} href="#">Edit</a>
              </div>
            </div>
          </td>
        </tr>)
    })

    return (
      <div className="main">
        <Navigation></Navigation>

        <div className="container-fluid main-content">
          <div className="row">
            <div className="col-10">
              <h1>Employees</h1>
            </div>
            <div className="col-2">
              <button type="button" onClick={this.showCreateEmployeeDetails} className="btn btn-primary create-employee-button">Create Employee</button>
            </div>
          </div>

          <div className="row employees-table">
            <table className="table">
              <thead>
                <tr>
                  <th onClick={this.sort} data-search-key="employeeID" scope="col">ID <i className={"fa " + (sortBy === 'employeeID' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th>
                  <th onClick={this.sort} data-search-key="firstName" scope="col">First Name <i className={"fa " + (sortBy === 'firstName' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th>
                  <th onClick={this.sort} data-search-key="lastName" scope="col">Last Name <i className={"fa " + (sortBy === 'lastName' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th>
                  <th onClick={this.sort} data-search-key="code" scope="col">Employee Code <i className={"fa " + (sortBy === 'code' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th>
                  <th onClick={this.sort} data-search-key="jobTitle" scope="col">Job Title <i className={"fa " + (sortBy === 'jobTitle' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th>
                  <th onClick={this.sort} data-search-key="phone" scope="col">Phone Number <i className={"fa " + (sortBy === 'phone' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th>
                  <th onClick={this.sort} data-search-key="email" scope="col">Email ID <i className={"fa " + (sortBy === 'email' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th >
                  <th onClick={this.sort} data-search-key="region" scope="col">Region <i className={"fa " + (sortBy === 'region' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th >
                  <th onClick={this.sort} data-search-key="dob" scope="col">DOB <i className={"fa " + (sortBy === 'dob' ? sortOrder === true ? 'fa-arrow-up' : 'fa-arrow-down' : '')} aria-hidden="true"></i></th >
                  <th scope="col"></th>
                </tr >

                <tr>
                  <th><input value={searchMap.employeeID} onChange={this.search} data-search-key="employeeID" type="text" className="form-control" /></th>
                  <th><input value={searchMap.firstName} onChange={this.search} data-search-key="firstName" type="text" className="form-control" /></th>
                  <th><input value={searchMap.lastName} onChange={this.search} data-search-key="lastName" type="text" className="form-control" /></th>
                  <th><input value={searchMap.code} onChange={this.search} data-search-key="code" type="text" className="form-control" /></th>
                  <th><input value={searchMap.jobTitle} onChange={this.search} data-search-key="jobTitle" type="text" className="form-control" /></th>
                  <th><input value={searchMap.phone} onChange={this.search} data-search-key="phone" type="text" className="form-control" /></th>
                  <th><input value={searchMap.email} onChange={this.search} data-search-key="email" type="text" className="form-control" /></th>
                  <th><input value={searchMap.region} onChange={this.search} data-search-key="region" type="text" className="form-control" /></th>
                  <th>
                    <DatePicker
                      value={searchMap.dob}
                      onChange={this.search}
                      data-search-key="dob"
                      className="form-control"
                      selected={null}
                    />
                  </th>
                  <th></th>
                </tr>
              </thead >
              <tbody className="table-body-overflow">
                {rowsElements}
              </tbody>
            </table >
            <ul className="pagination">
              <li onClick={() => {
                this.gotoPage(startIndex - 1)
              }} className="page-item"><a className="page-link" href="#">Previous</a></li>
              {pageNumberElements}
              <li onClick={() => {
                this.gotoPage(startIndex + 1)
              }} className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </div >
        </div >

        {viewEmployeeDetails ? <EmployeeDetails
          show={true}
          employeeID={viewEmployeeDetails.employeeID}
          firstName={viewEmployeeDetails.firstName}
          lastName={viewEmployeeDetails.lastName}
          code={viewEmployeeDetails.code}
          jobTitle={viewEmployeeDetails.jobTitle}
          phone={viewEmployeeDetails.phone}
          email={viewEmployeeDetails.email}
          region={viewEmployeeDetails.region}
          dob={viewEmployeeDetails.dob}
          close={this.hideEmployeeDetails}
        /> : null}

        {editEmployeeDetails ? <EmployeeDetailsEditor
          show={true}
          employeeID={editEmployeeDetails.employeeID}
          firstName={editEmployeeDetails.firstName}
          lastName={editEmployeeDetails.lastName}
          code={editEmployeeDetails.code}
          jobTitle={editEmployeeDetails.jobTitle}
          phone={editEmployeeDetails.phone}
          email={editEmployeeDetails.email}
          region={editEmployeeDetails.region}
          dob={editEmployeeDetails.dob}
          close={this.hideEditEmployeeDetails}
          submit={this.upsertEmployeeDetails}
        /> : null}
      </div >
    )
  }
}

// function mapStateToProps(state, props) {
//   const {
//   } = state;

//   return {
//   };
// }

// export default connect(mapStateToProps, {
// })(TodoBucketApp);

export default App;