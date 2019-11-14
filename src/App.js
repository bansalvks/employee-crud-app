
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { connect } from 'react-redux';
import React from 'react';
import './App.css'
import Navigation from './Components/Navigation';
import { EmployeeDetails } from './Containers/EmployeeDetails';
import { EmployeeDetailsEditor } from './Containers/EmployeeDetailsEditor';
import { getEmployees } from "./services/EmployeeService";
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
      length: 15
    };

    this.throttledSearch = _.throttle(this.search, 1000, { trailing: true });
  }

  getEmployees = () => {
    const {
      searchMap,
      sortBy,
      sortOrder,
      length,
    } = this.state;

    getEmployees({
      searchMap,
      sortBy,
      sortOrder,
      length,
    })
      .then((employees) => {
        this.setState({
          employees,
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
    } = this.state;

    if (
      searchMap !== prevState.searchMap ||
      sortBy !== prevState.sortBy ||
      sortOrder !== prevState.sortOrder ||
      length !== prevState.length
    ) {
      this.getEmployees();
    }

  }

  onEmployeeDetailsChange = (newDetails, index) => {

  }

  showEmployeeDetails = (index) => {

  }

  editEmployeeDetails = (index) => {

  }

  createEmployeeDetails = (index) => {

  }

  removeEmployee = (index) => {

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


  render() {

    const {
      employees,
      searchMap,
      sortOrder,
      sortBy,
    } = this.state;

    const rowsElements = employees.map(function ({
      employeeID,
      firstName,
      lastName,
      code,
      jobTitle,
      phone,
      email,
      region,
      dob,
    }) {
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
                <a className="dropdown-item" href="#">Remove</a>
                <a className="dropdown-item" href="#">View</a>
                <a className="dropdown-item" href="#">Edit</a>
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
              <button type="button" className="btn btn-primary create-employee-button">Create Employee</button>
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
              </thead >
              <tbody>

                <tr>
                  <td><input value={searchMap.employeeID} onChange={this.search} data-search-key="employeeID" type="text" className="form-control" /></td>
                  <td><input value={searchMap.firstName} onChange={this.search} data-search-key="firstName" type="text" className="form-control" /></td>
                  <td><input value={searchMap.lastName} onChange={this.search} data-search-key="lastName" type="text" className="form-control" /></td>
                  <td><input value={searchMap.code} onChange={this.search} data-search-key="code" type="text" className="form-control" /></td>
                  <td><input value={searchMap.jobTitle} onChange={this.search} data-search-key="jobTitle" type="text" className="form-control" /></td>
                  <td><input value={searchMap.phone} onChange={this.search} data-search-key="phone" type="text" className="form-control" /></td>
                  <td><input value={searchMap.email} onChange={this.search} data-search-key="email" type="text" className="form-control" /></td>
                  <td><input value={searchMap.region} onChange={this.search} data-search-key="region" type="text" className="form-control" /></td>
                  <td>
                    <DatePicker
                      value={searchMap.dob}
                      onChange={this.search}
                      data-search-key="dob"
                      className="form-control"
                      selected={null}
                    />
                  </td>
                </tr>

                {rowsElements}
              </tbody>
            </table >
          </div >
        </div >

        <EmployeeDetails
          show={false}
          employeeID={'EM03'}
          firstName={'Vikas Bansal'}
          lastName=""
          code={'E1'}
          jobTitle={'LSE'}
          phone={'8802339189'}
          email={'bansal.vks@gmail.com'}
          region={'IN'}
          dob={'23/02/1991'}
        />

        <EmployeeDetailsEditor
          show={false}
          employeeID={'EM03'}
          firstName={'Vikas Bansal'}
          lastName=""
          code={'E1'}
          jobTitle={'LSE'}
          phone={'8802339189'}
          email={'bansal.vks@gmail.com'}
          region={'IN'}
          dob={new Date()}
        />

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