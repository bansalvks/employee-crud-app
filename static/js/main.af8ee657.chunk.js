(this["webpackJsonptodo-bucket"]=this["webpackJsonptodo-bucket"]||[]).push([[0],{104:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(18),r=t.n(n),i=(t(55),t(19)),s=t(20),m=t(31),c=t(21),d=t(32),p=t(23),h=t.n(p),u=(t(46),t(56),function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"ABC Bank"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",href:"#"},"CONTROL CENTER ",o.a.createElement("span",{className:"sr-only"},"(current)"))))))}),E=t(22),N=t.n(E);function b(e){var a=e.show,t=void 0!==a&&a,l=e.employeeID,n=e.firstName,r=e.lastName,i=e.code,s=e.jobTitle,m=e.phone,c=e.email,d=e.region,p=e.dob,h=e.close;return o.a.createElement("div",{className:"modal fade ".concat(t?"show":""),style:{display:t?"block":""},id:"employeeDetailsModal",tabIndex:-1,role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("button",{type:"button",className:"close modal-close-button","data-dismiss":"modal","aria-label":"Close",onClick:h},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")),o.a.createElement("div",{className:"container modal-heading"},o.a.createElement("div",{className:"row"},o.a.createElement("h6",{className:"light-label"},l)),o.a.createElement("div",{className:"row"},o.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},n+" "+r))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"Name")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,n+" "+r))),o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"Employee Code")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,i))),o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"Job Title")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,s))),o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"Phone Number")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,m))),o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"Email ID")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,c))),o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"Region")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,d))),o.a.createElement("div",{className:"row employee-details-row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("span",{className:"light-label"},"DOB")),o.a.createElement("div",{className:"col-6"},o.a.createElement("span",null,N()(p).format("DD/MM/YYYY")))))),o.a.createElement("div",{className:"modal-footer"},o.a.createElement("button",{onClick:h,type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close")))))}var g=t(10);function y(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function f(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?y(t,!0).forEach((function(a){Object(g.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var v=function(e){function a(e){var t;Object(i.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).submit=function(){var e=t.props.submit,a=t.state;e({isNew:a.isNew,employeeID:a.employeeID,firstName:a.firstName,lastName:a.lastName,code:a.code,jobTitle:a.jobTitle,phone:a.phone,email:a.email,region:a.region,dob:a.dob.getTime()})},t.handleChange=function(e){var a=e.target.dataset.key;t.setState(Object(g.a)({},a,e.target.value))},t.handleChangeDate=function(e){t.setState({dob:e})},t.validateInput=function(e){var a=e.target.dataset.key,l=t.state.errors;t.state[a]?(delete l[a],t.setState({errors:f({},l)})):t.setState({errors:f({},l,Object(g.a)({},a,!0))})};var l=e.show,o=e.employeeID,n=e.firstName,r=e.lastName,s=e.code,d=e.jobTitle,p=e.phone,h=e.email,u=e.region,E=e.dob;return t.state={isNew:!o,show:l,employeeID:o,firstName:n,lastName:r,code:s,jobTitle:d,phone:p,email:h,region:u,dob:E,errors:{}},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.close,a=this.state,t=a.show,l=a.firstName,n=a.lastName,r=a.code,i=a.jobTitle,s=a.phone,m=a.email,c=a.region,d=a.dob,p=a.isNew,u=a.errors;return o.a.createElement("div",{className:"modal fade ".concat(t?"show":""),style:{display:t?"block":""},id:"employeeDetailsModal",tabIndex:-1,role:"dialog","aria-labelledby":"EmployeeEditModalLabel","aria-hidden":"true"},o.a.createElement("div",{className:"modal-dialog",role:"document"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("div",{className:"modal-header"},o.a.createElement("h5",{className:"modal-title",id:"EmployeeEditModalLabel"},p?"Edit":"Create"," Employee"),o.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:e},o.a.createElement("span",{"aria-hidden":"true"},"   \xd7"))),o.a.createElement("div",{className:"modal-body"},o.a.createElement("form",{className:"container",onSubmit:this.submit},o.a.createElement("div",{className:"form-group row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("label",{htmlFor:"codeInput",className:"light-label"},"ID"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{class:"input-group-prepend col-3"},o.a.createElement("span",{class:"input-group-text"},"EM")),o.a.createElement("div",{className:"col-9 nopadding"},o.a.createElement("input",{type:"text",className:"form-control",id:"codeInput","data-key":"code",onChange:this.handleChange,readOnly:!0,value:r?r.slice(2,r.length):"auto"}))))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("label",{htmlFor:"fnameInput",className:"light-label"},"First Name"),o.a.createElement("input",{type:"text",className:"form-control "+(u.firstName?"error-input":""),id:"fnameInput","data-key":"firstName",onChange:this.handleChange,value:l,onBlur:this.validateInput,required:!0})),o.a.createElement("div",{className:"col-6"},o.a.createElement("label",{htmlFor:"lnameInput",className:"light-label"},"Last Name"),o.a.createElement("input",{type:"text",className:"form-control "+(u.lastName?"error-input":""),id:"lnameInput","data-key":"lastName",onChange:this.handleChange,onBlur:this.validateInput,value:n,required:!0}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("label",{htmlFor:"jobTitleInput",className:"light-label"},"Job Title"),o.a.createElement("input",{type:"text",className:"form-control "+(u.jobTitle?"error-input":""),id:"jobTitleInput","data-key":"jobTitle",onBlur:this.validateInput,onChange:this.handleChange,value:i,required:!0}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("label",{htmlFor:"emailInput",className:"light-label"},"Email"),o.a.createElement("input",{type:"email",className:"form-control "+(u.email?"error-input":""),id:"emailInput","data-key":"email",onBlur:this.validateInput,onChange:this.handleChange,value:m,required:!0}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("div",{className:"col-12"},o.a.createElement("label",{htmlFor:"phoneInput",className:"light-label"},"Phone Number"),o.a.createElement("input",{className:"form-control "+(u.phone?"error-input":""),id:"phoneInput","data-key":"phone",onBlur:this.validateInput,onChange:this.handleChange,value:s,required:!0}))),o.a.createElement("div",{className:"form-group row"},o.a.createElement("div",{className:"col-6"},o.a.createElement("label",{htmlFor:"regionInput",className:"light-label"},"Region"),o.a.createElement("input",{type:"text",className:"form-control "+(u.region?"error-input":""),id:"regionInput",onBlur:this.validateInput,"data-key":"region",onChange:this.handleChange,value:c,required:!0})),o.a.createElement("div",{className:"col-6"},o.a.createElement("label",{htmlFor:"dobInput",className:"light-label"},"DOB"),o.a.createElement(h.a,{className:"form-control "+(u.dob?"error-input":""),selected:d,onBlur:this.validateInput,onChange:this.handleChangeDate,"data-key":"dob",required:!0}))),o.a.createElement("div",null,o.a.createElement("button",{type:"submit",disabled:u.length,className:"btn btn-primary employee-details-edit-buttons"},"Submit"),o.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:e},"Close")))))))}}]),a}(o.a.Component);function w(e){return e.charAt(0).toUpperCase()+e.slice(1)}var D=[{employeeID:"E1",firstName:"Tiffanie",lastName:"Mastropietro",code:"EM1",jobTitle:"SSE",phone:"2409610894",email:"pontipak@outlook.com",region:"IN",dob:6967296e5},{employeeID:"E2",firstName:"Pauletta",lastName:"Cantrelle",code:"EM2",jobTitle:"SE",phone:"2384426796",email:"lishoy@yahoo.ca",region:"IN",dob:7049376e5},{employeeID:"E3",firstName:"Errol",lastName:"Ortis",code:"EM3",jobTitle:"Manager",phone:"2236920047",email:"kohlis@icloud.com",region:"IN",dob:719712e6},{employeeID:"E4",firstName:"Stephnie",lastName:"Greve",code:"EM4",jobTitle:"Sr Manager",phone:"7816420271",email:"zeitlin@gmail.com",region:"US",dob:7557408e5},{employeeID:"E5",firstName:"Shawnta",lastName:"Hornbeck",code:"EM5",jobTitle:"SSE",phone:"4285897746",email:"eegsa@msn.com",region:"CA",dob:7596288e5},{employeeID:"E6",firstName:"Junior",lastName:"Hoeft",code:"EM6",jobTitle:"SE",phone:"9489806512",email:"whimsy@me.com",region:"US",dob:7800192e5},{employeeID:"E7",firstName:"Tammie",lastName:"Hollifield",code:"EM7",jobTitle:"Manager",phone:"7228391515",email:"marioph@hotmail.com",region:"US",dob:7801056e5},{employeeID:"E8",firstName:"Stefania",lastName:"Hamil",code:"EM8",jobTitle:"Sr Manager",phone:"5047598230",email:"andale@gmail.com",region:"CA",dob:8042112e5},{employeeID:"E9",firstName:"Christoper",lastName:"Featherston",code:"EM9",jobTitle:"SSE",phone:"2025745106",email:"pierce@sbcglobal.net",region:"US",dob:8289216e5},{employeeID:"E10",firstName:"Giuseppina",lastName:"Contreras",code:"EM10",jobTitle:"SE",phone:"2153908912",email:"cliffordj@msn.com",region:"IN",dob:8295264e5},{employeeID:"E11",firstName:"Sierra",lastName:"Marchi",code:"EM11",jobTitle:"Manager",phone:"8598507899",email:"fhirsch@yahoo.com",region:"IN",dob:8545824e5},{employeeID:"E12",firstName:"Skye",lastName:"Tanaka",code:"EM12",jobTitle:"Sr Manager",phone:"5425615230",email:"thrymm@att.net",region:"IN",dob:8580384e5},{employeeID:"E13",firstName:"Delsie",lastName:"Sellner",code:"EM13",jobTitle:"SSE",phone:"4435640914",email:"podmaster@optonline.net",region:"US",dob:8703072e5},{employeeID:"E14",firstName:"Blondell",lastName:"Ruehl",code:"EM14",jobTitle:"SE",phone:"9919247447",email:"teverett@gmail.com",region:"CA",dob:8845632e5},{employeeID:"E15",firstName:"Ezequiel",lastName:"Fraise",code:"EM15",jobTitle:"Manager",phone:"5116853427",email:"fglock@icloud.com",region:"US",dob:8884512e5},{employeeID:"E16",firstName:"Ross",lastName:"Collie",code:"EM16",jobTitle:"Sr Manager",phone:"3742832934",email:"vertigo@me.com",region:"US",dob:8891424e5},{employeeID:"E17",firstName:"Audie",lastName:"Schaber",code:"EM17",jobTitle:"SSE",phone:"5555991939",email:"bancboy@aol.com",region:"CA",dob:8948448e5},{employeeID:"E18",firstName:"Bobbye",lastName:"Lubin",code:"EM18",jobTitle:"SE",phone:"4212662179",email:"elflord@me.com",region:"US",dob:9490176e5},{employeeID:"E19",firstName:"Bernadine",lastName:"Birkhead",code:"EM19",jobTitle:"Manager",phone:"5793069680",email:"dwendlan@gmail.com",region:"IN",dob:95904e7},{employeeID:"E20",firstName:"Paul",lastName:"Kopp",code:"EM20",jobTitle:"Sr Manager",phone:"4808403769",email:"william@optonline.net",region:"IN",dob:9610272e5}];function I(e){var a=e.employeeID,t=e.firstName,l=e.lastName,o=e.code,n=e.jobTitle,r=e.phone,i=e.email,s=e.region,m=e.dob;return new Promise((function(e){var c=D.find((function(e){return e.employeeID===a}));c.firstName=w(t),c.lastName=w(l),c.code=o,c.jobTitle=w(n),c.phone=r,c.email=i,c.region=s,c.dob=m,localStorage.mockDataFromLocal=JSON.stringify(D),e(!0)}))}function C(e){var a=e.employeeID,t=e.firstName,l=e.lastName,o=e.code,n=e.jobTitle,r=e.phone,i=e.email,s=e.region,m=e.dob;return new Promise((function(e){var c,d=D.length+1;D.push((c={employeeID:a,firstName:w(t),lastName:w(l),code:o,jobTitle:w(n),phone:r,email:i,region:s,dob:m},Object(g.a)(c,"employeeID","E"+d),Object(g.a)(c,"code","EM"+d),c)),localStorage.mockDataFromLocal=JSON.stringify(D),e(!0)}))}localStorage.mockDataFromLocal&&(D=JSON.parse(localStorage.mockDataFromLocal));var k=t(44),S=t.n(k),j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(c.a)(a).call(this,e))).getEmployees=function(){var e=t.state;(function(e){var a=e.sortBy,t=void 0===a?"":a,l=e.searchMap,o=void 0===l?{}:l,n=e.sortOrder,r=void 0===n?null:n,i=e.pageSize,s=void 0===i?10:i,m=e.startIndex,c=void 0===m?0:m;return new Promise((function(e){var a=D,l=Object.keys(o);l.length>0&&(a=a.filter((function(e){for(var a=0;a<l.length;a++){var t=l[a];if(o[t]&&e[t]){var n=o[t].toString().toLowerCase();if(e[t].toString().toLowerCase().indexOf(n)<0)return!1}}return!0}))),t&&(a=a.sort((function(e,a){var l=isNaN(e)?e:Number(e),o=isNaN(a)?a:Number(a);return l[t]<o[t]?-1:l[t]>o[t]?1:0}))),!1===r&&(a=a.reverse());var n=c*s;e({employees:a=a.slice(n,n+s),count:D.length})}))})({searchMap:e.searchMap,sortBy:e.sortBy,sortOrder:e.sortOrder,pageSize:e.pageSize,startIndex:e.startIndex}).then((function(e){var a=e.employees,l=e.count;t.setState({employees:a,employeeCount:l})}))},t.onEmployeeDetailsChange=function(e,a){},t.showEmployeeDetails=function(e){e.preventDefault();var a=e.target.dataset.index,l=t.state.employees;t.setState({viewEmployeeDetails:l[a]})},t.hideEmployeeDetails=function(){t.setState({viewEmployeeDetails:null})},t.showCreateEmployeeDetails=function(e){e.preventDefault(),t.setState({editEmployeeDetails:{}})},t.showEditEmployeeDetails=function(e){e.preventDefault();var a=e.target.dataset.index,l=t.state.employees;t.setState({editEmployeeDetails:l[a]})},t.hideEditEmployeeDetails=function(){t.setState({editEmployeeDetails:null})},t.upsertEmployeeDetails=function(e){var a=e.isNew,l=(e.employeeID,e.firstName),o=e.lastName,n=(e.code,e.jobTitle),r=e.phone,i=e.email,s=e.region,m=e.dob;!a||l||o||n||r||i||s?(a?C:I)({firstName:l,lastName:o,jobTitle:n,phone:r,email:i,region:s,dob:m}).then((function(){t.getEmployees(),t.hideEditEmployeeDetails()})):t.hideEditEmployeeDetails()},t.removeEmployee=function(e){e.preventDefault();var a=e.target.dataset.index;(function(e){var a=e.employeeID;return new Promise((function(e){D=D.filter((function(e){return e.employeeID!==a})),localStorage.mockDataFromLocal=JSON.stringify(D),e(!0)}))})({employeeID:t.state.employees[a].employeeID}).then((function(){t.getEmployees()}))},t.search=function(e){var a={};a[e.target.dataset.searchKey]=e.target.value,t.setState({searchMap:a})},t.sort=function(e){var a=t.state.sortOrder,l=e.target.dataset.searchKey,o=null;o=null===a||!a,t.setState({sortBy:l,sortOrder:o})},t.gotoPage=function(e){var a=t.state,l=a.pageSize,o=a.employeeCount;e<0||e>Math.ceil(o/l)||t.setState({startIndex:e})},t.pageLengthChanged=function(e){e.target&&t.setState({pageSize:e.target.value,startIndex:0})},t.state={employees:[],editEmployeeDetails:null,viewEmployeeDetails:null,searchMap:{employeeID:"",firstName:"",lastName:"",code:"",jobTitle:"",phone:"",email:"",region:"",dob:""},sortBy:"",sortOrder:null,pageSize:15,startIndex:0,employeeCount:0},t.throttledSearch=S.a.throttle(t.search,1e3,{trailing:!0}),t.throttledPageLengthChanged=S.a.throttle(t.pageLengthChanged,1e3,{trailing:!0}),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getEmployees()}},{key:"componentDidUpdate",value:function(e,a){var t=this.state,l=t.searchMap,o=t.sortBy,n=t.sortOrder,r=t.pageSize,i=t.startIndex;console.log(r),l===a.searchMap&&o===a.sortBy&&n===a.sortOrder&&r===a.pageSize&&i===a.startIndex||this.getEmployees()}},{key:"render",value:function(){for(var e=this,a=this.state,t=a.employees,l=a.searchMap,n=a.sortOrder,r=a.sortBy,i=a.viewEmployeeDetails,s=a.editEmployeeDetails,m=a.employeeCount,c=a.startIndex,d=a.pageSize,p=[],E=function(a){p.push(o.a.createElement("li",{onClick:function(){e.gotoPage(a)},className:"page-item "+(c===a?"active":"")},o.a.createElement("a",{className:"page-link",href:"#"},a+1)))},g=0;g<Math.ceil(m/d)&&d>0;g++)E(g);var y=t.map((function(a,t){var l=a.employeeID,n=a.firstName,r=a.lastName,i=a.code,s=a.jobTitle,m=a.phone,c=a.email,d=a.region,p=a.dob;return o.a.createElement("tr",{key:l},o.a.createElement("th",{scope:"row"},l),o.a.createElement("td",null,n),o.a.createElement("td",null,r),o.a.createElement("td",null,i),o.a.createElement("td",null,s),o.a.createElement("td",null,m),o.a.createElement("td",null,c),o.a.createElement("td",null,d),o.a.createElement("td",null,N()(p).format("DD/MM/YYYY")),o.a.createElement("td",null,o.a.createElement("div",{className:"dropdown show"},o.a.createElement("a",{className:"btn dropdown-toggle",href:"#",role:"button",id:"rowActions","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"\u2022\u2022\u2022"),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"rowActions"},o.a.createElement("a",{className:"dropdown-item","data-index":t,onClick:e.removeEmployee,href:"#"},"Remove"),o.a.createElement("a",{className:"dropdown-item","data-index":t,onClick:e.showEmployeeDetails,href:"#"},"View"),o.a.createElement("a",{className:"dropdown-item","data-index":t,onClick:e.showEditEmployeeDetails,href:"#"},"Edit")))))}));return o.a.createElement("div",{className:"main"},o.a.createElement(u,null),o.a.createElement("div",{className:"container-fluid main-content"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-10"},o.a.createElement("h1",null,"Employees")),o.a.createElement("div",{className:"col-2"},o.a.createElement("button",{type:"button",onClick:this.showCreateEmployeeDetails,className:"btn btn-primary create-employee-button"},"Create Employee"))),o.a.createElement("div",{className:"row employees-table"},o.a.createElement("table",{className:"table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{onClick:this.sort,"data-search-key":"employeeID",scope:"col"},"ID ",o.a.createElement("i",{className:"fa "+("employeeID"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"firstName",scope:"col"},"First Name ",o.a.createElement("i",{className:"fa "+("firstName"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"lastName",scope:"col"},"Last Name ",o.a.createElement("i",{className:"fa "+("lastName"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"code",scope:"col"},"Employee Code ",o.a.createElement("i",{className:"fa "+("code"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"jobTitle",scope:"col"},"Job Title ",o.a.createElement("i",{className:"fa "+("jobTitle"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"phone",scope:"col"},"Phone Number ",o.a.createElement("i",{className:"fa "+("phone"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"email",scope:"col"},"Email ID ",o.a.createElement("i",{className:"fa "+("email"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"region",scope:"col"},"Region ",o.a.createElement("i",{className:"fa "+("region"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{onClick:this.sort,"data-search-key":"dob",scope:"col"},"DOB ",o.a.createElement("i",{className:"fa "+("dob"===r?!0===n?"fa-arrow-up":"fa-arrow-down":""),"aria-hidden":"true"})),o.a.createElement("th",{scope:"col"})),o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement("input",{value:l.employeeID,onChange:this.search,"data-search-key":"employeeID",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.firstName,onChange:this.search,"data-search-key":"firstName",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.lastName,onChange:this.search,"data-search-key":"lastName",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.code,onChange:this.search,"data-search-key":"code",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.jobTitle,onChange:this.search,"data-search-key":"jobTitle",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.phone,onChange:this.search,"data-search-key":"phone",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.email,onChange:this.search,"data-search-key":"email",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement("input",{value:l.region,onChange:this.search,"data-search-key":"region",type:"text",className:"form-control"})),o.a.createElement("th",null,o.a.createElement(h.a,{value:l.dob,onChange:this.search,"data-search-key":"dob",className:"form-control",selected:null})),o.a.createElement("th",null))),o.a.createElement("tbody",{className:"table-body-overflow"},y)),o.a.createElement("ul",{className:"pagination"},o.a.createElement("li",null,o.a.createElement("input",{value:d,onChange:this.throttledPageLengthChanged,"data-search-key":"region",type:"text",className:"form-control page-size-input"})),o.a.createElement("li",{onClick:function(){e.gotoPage(c-1)},className:"page-item"},o.a.createElement("a",{className:"page-link",href:"#"},"Previous")),p,o.a.createElement("li",{onClick:function(){e.gotoPage(c+1)},className:"page-item"},o.a.createElement("a",{className:"page-link",href:"#"},"Next"))))),i?o.a.createElement(b,{show:!0,employeeID:i.employeeID,firstName:i.firstName,lastName:i.lastName,code:i.code,jobTitle:i.jobTitle,phone:i.phone,email:i.email,region:i.region,dob:i.dob,close:this.hideEmployeeDetails}):null,s?o.a.createElement(v,{show:!0,employeeID:s.employeeID,firstName:s.firstName,lastName:s.lastName,code:s.code,jobTitle:s.jobTitle,phone:s.phone,email:s.email,region:s.region,dob:s.dob,close:this.hideEditEmployeeDetails,submit:this.upsertEmployeeDetails}):null)}}]),a}(o.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},50:function(e,a,t){e.exports=t(104)},55:function(e,a,t){},56:function(e,a,t){}},[[50,1,2]]]);
//# sourceMappingURL=main.af8ee657.chunk.js.map