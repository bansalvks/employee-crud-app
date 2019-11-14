import { capitalizeFirstLetter } from "../CommonUtils";

let mockData = [
    {
        "employeeID": "E1",
        "firstName": "Tiffanie",
        "lastName": "Mastropietro",
        "code": "EM1",
        "jobTitle": "SSE",
        "phone": "2409610894",
        "email": "pontipak@outlook.com",
        "region": "IN",
        "dob": 696729600000
    },
    {
        "employeeID": "E2",
        "firstName": "Pauletta",
        "lastName": "Cantrelle",
        "code": "EM2",
        "jobTitle": "SE",
        "phone": "2384426796",
        "email": "lishoy@yahoo.ca",
        "region": "IN",
        "dob": 704937600000
    },
    {
        "employeeID": "E3",
        "firstName": "Errol",
        "lastName": "Ortis",
        "code": "EM3",
        "jobTitle": "Manager",
        "phone": "2236920047",
        "email": "kohlis@icloud.com",
        "region": "IN",
        "dob": 719712000000
    },
    {
        "employeeID": "E4",
        "firstName": "Stephnie",
        "lastName": "Greve",
        "code": "EM4",
        "jobTitle": "Sr Manager",
        "phone": "7816420271",
        "email": "zeitlin@gmail.com",
        "region": "US",
        "dob": 755740800000
    },
    {
        "employeeID": "E5",
        "firstName": "Shawnta",
        "lastName": "Hornbeck",
        "code": "EM5",
        "jobTitle": "SSE",
        "phone": "4285897746",
        "email": "eegsa@msn.com",
        "region": "CA",
        "dob": 759628800000
    },
    {
        "employeeID": "E6",
        "firstName": "Junior",
        "lastName": "Hoeft",
        "code": "EM6",
        "jobTitle": "SE",
        "phone": "9489806512",
        "email": "whimsy@me.com",
        "region": "US",
        "dob": 780019200000
    },
    {
        "employeeID": "E7",
        "firstName": "Tammie",
        "lastName": "Hollifield",
        "code": "EM7",
        "jobTitle": "Manager",
        "phone": "7228391515",
        "email": "marioph@hotmail.com",
        "region": "US",
        "dob": 780105600000
    },
    {
        "employeeID": "E8",
        "firstName": "Stefania",
        "lastName": "Hamil",
        "code": "EM8",
        "jobTitle": "Sr Manager",
        "phone": "5047598230",
        "email": "andale@gmail.com",
        "region": "CA",
        "dob": 804211200000
    },
    {
        "employeeID": "E9",
        "firstName": "Christoper",
        "lastName": "Featherston",
        "code": "EM9",
        "jobTitle": "SSE",
        "phone": "2025745106",
        "email": "pierce@sbcglobal.net",
        "region": "US",
        "dob": 828921600000
    },
    {
        "employeeID": "E10",
        "firstName": "Giuseppina",
        "lastName": "Contreras",
        "code": "EM10",
        "jobTitle": "SE",
        "phone": "2153908912",
        "email": "cliffordj@msn.com",
        "region": "IN",
        "dob": 829526400000
    },
    {
        "employeeID": "E11",
        "firstName": "Sierra",
        "lastName": "Marchi",
        "code": "EM11",
        "jobTitle": "Manager",
        "phone": "8598507899",
        "email": "fhirsch@yahoo.com",
        "region": "IN",
        "dob": 854582400000
    },
    {
        "employeeID": "E12",
        "firstName": "Skye",
        "lastName": "Tanaka",
        "code": "EM12",
        "jobTitle": "Sr Manager",
        "phone": "5425615230",
        "email": "thrymm@att.net",
        "region": "IN",
        "dob": 858038400000
    },
    {
        "employeeID": "E13",
        "firstName": "Delsie",
        "lastName": "Sellner",
        "code": "EM13",
        "jobTitle": "SSE",
        "phone": "4435640914",
        "email": "podmaster@optonline.net",
        "region": "US",
        "dob": 870307200000
    },
    {
        "employeeID": "E14",
        "firstName": "Blondell",
        "lastName": "Ruehl",
        "code": "EM14",
        "jobTitle": "SE",
        "phone": "9919247447",
        "email": "teverett@gmail.com",
        "region": "CA",
        "dob": 884563200000
    },
    {
        "employeeID": "E15",
        "firstName": "Ezequiel",
        "lastName": "Fraise",
        "code": "EM15",
        "jobTitle": "Manager",
        "phone": "5116853427",
        "email": "fglock@icloud.com",
        "region": "US",
        "dob": 888451200000
    },
    {
        "employeeID": "E16",
        "firstName": "Ross",
        "lastName": "Collie",
        "code": "EM16",
        "jobTitle": "Sr Manager",
        "phone": "3742832934",
        "email": "vertigo@me.com",
        "region": "US",
        "dob": 889142400000
    },
    {
        "employeeID": "E17",
        "firstName": "Audie",
        "lastName": "Schaber",
        "code": "EM17",
        "jobTitle": "SSE",
        "phone": "5555991939",
        "email": "bancboy@aol.com",
        "region": "CA",
        "dob": 894844800000
    },
    {
        "employeeID": "E18",
        "firstName": "Bobbye",
        "lastName": "Lubin",
        "code": "EM18",
        "jobTitle": "SE",
        "phone": "4212662179",
        "email": "elflord@me.com",
        "region": "US",
        "dob": 949017600000
    },
    {
        "employeeID": "E19",
        "firstName": "Bernadine",
        "lastName": "Birkhead",
        "code": "EM19",
        "jobTitle": "Manager",
        "phone": "5793069680",
        "email": "dwendlan@gmail.com",
        "region": "IN",
        "dob": 959040000000
    },
    {
        "employeeID": "E20",
        "firstName": "Paul",
        "lastName": "Kopp",
        "code": "EM20",
        "jobTitle": "Sr Manager",
        "phone": "4808403769",
        "email": "william@optonline.net",
        "region": "IN",
        "dob": 961027200000
    }
];

if (localStorage.mockDataFromLocal) {
    mockData = JSON.parse(localStorage.mockDataFromLocal)
}

export function getEmployeesAPI({
    sortBy = "",
    searchMap = {},
    sortOrder = null,
    length = 10,
}) {

    // MOCKING API
    return new Promise(function (resolve) {
        let result = mockData;
        //search
        const searchKeys = Object.keys(searchMap);
        if (searchKeys.length > 0) {
            result = result.filter(record => {
                for (let i = 0; i < searchKeys.length; i++) {
                    const key = searchKeys[i];
                    if (searchMap[key] && record[key]) {
                        const searchData = searchMap[key].toString().toLowerCase();
                        const targetData = record[key].toString().toLowerCase();
                        if (targetData.indexOf(searchData) < 0) {
                            return false;
                        }
                    }
                }

                return true;
            });
        }

        if (sortBy) {
            result = result.sort(function compare(a, b) {
                const aValue = isNaN(a) ? a : Number(a);
                const bValue = isNaN(b) ? b : Number(b);

                if (aValue[sortBy] < bValue[sortBy]) {
                    return -1;
                }
                if (aValue[sortBy] > bValue[sortBy]) {
                    return 1;
                }
                return 0;
            })
        }

        if (sortOrder === false) {
            result = result.reverse();
        }

        result = result.slice(0, length);

        resolve(result);
    })
}


export function removeEmployeesAPI({
    employeeID
}) {
    // MOCKING API
    return new Promise(function (resolve) {
        mockData = mockData.filter(employee => employee.employeeID !== employeeID)
        localStorage.mockDataFromLocal = JSON.stringify(mockData)
        resolve(true);
    })
}

export function updateEmployeesAPI({
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
    // MOCKING API
    return new Promise(function (resolve) {
        const employee = mockData.find(e => e.employeeID === employeeID)
        employee.firstName = capitalizeFirstLetter(firstName);
        employee.lastName = capitalizeFirstLetter(lastName);
        employee.code = code;
        employee.jobTitle = capitalizeFirstLetter(jobTitle);
        employee.phone = phone;
        employee.email = email;
        employee.region = region;
        employee.dob = dob;

        localStorage.mockDataFromLocal = JSON.stringify(mockData)
        resolve(true);
    })
}

export function addEmployeesAPI({
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
    // MOCKING API
    return new Promise(function (resolve) {
        const id = mockData.length + 1
        mockData.push({
            employeeID,
            firstName: capitalizeFirstLetter(firstName),
            lastName: capitalizeFirstLetter(lastName),
            code,
            jobTitle: capitalizeFirstLetter(jobTitle),
            phone,
            email,
            region,
            dob,
            employeeID: "E" + id,
            code: "EM" + id,
        })
        localStorage.mockDataFromLocal = JSON.stringify(mockData)
        resolve(true);
    })
}