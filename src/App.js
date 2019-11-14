import { connect } from 'react-redux';
import React from 'react';
import './App.css'
import Navigation from './Components/Navigation';
import { EmployeeDetails } from './Containers/EmployeeDetails';
import { EmployeeDetailsEditor } from './Containers/EmployeeDetailsEditor';
export class TodoBucketApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
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

          <div className="row search-bar">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle search-filter-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Name
  </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">ID</a>
                <a className="dropdown-item" href="#">Full Name</a>
                <a className="dropdown-item" href="#">Employee Code</a>
                <a className="dropdown-item" href="#">Job Title</a>
                <a className="dropdown-item" href="#">Phone Number</a>
                <a className="dropdown-item" href="#">Email Id</a>
                <a className="dropdown-item" href="#">Region</a>
              </div>
              <form className="form-inline my-lg-0 search-form">
                <input
                  className="form-control mr-sm-2 search-text-box"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>

          <div className="row employees-table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Employee Code</th>
                  <th scope="col">Job Title</th>
                  <th scope="col">Phone Number</th>
                  <th scope="col">Email ID</th>
                  <th scope="col">Region</th>
                  <th scope="col">DOB</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Vikas Bansal</td>
                  <td>E1</td>
                  <td>LSE</td>
                  <td>8802339189</td>
                  <td>bansal.vks@gmail.com</td>
                  <td>IN</td>
                  <td>23/02/1991</td>
                  <td>...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <EmployeeDetails
          show={false}
          employeeID={'EM03'}
          fullName={'Vikas Bansal'}
          code={'E1'}
          jobTitle={'LSE'}
          phone={'8802339189'}
          email={'bansal.vks@gmail.com'}
          region={'IN'}
          dob={'23/02/1991'}
        />
        
        <EmployeeDetailsEditor
          show={true}
          employeeID={'EM03'}
          fullName={'Vikas Bansal'}
          code={'E1'}
          jobTitle={'LSE'}
          phone={'8802339189'}
          email={'bansal.vks@gmail.com'}
          region={'IN'}
          dob={new Date()}
        />

      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const {
  } = state;

  return {
  };
}

export default connect(mapStateToProps, {
})(TodoBucketApp);