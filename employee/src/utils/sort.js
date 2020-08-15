// var employArr = [{
//         "id": 1,
//         "firstName": "Aaron",
//         "lastName": "Smith",
//         "image": "https://randomuser.me/api/portraits/men/25.jpg",
//         "email": "Aaron_Smith3241@gmail.com",
//         "phone": "(218)-316-2655"
//     },
//     {
//         "id": 2,
//         "firstName": "Alyssa",
//         "lastName": "Chiang",
//         "image": "https://randomuser.me/api/portraits/women/70.jpg",
//         "email": "AlyChiang77@yahoo.com",
//         "phone": "(478-488-3724)"
//     },
//     {
//         "id": 3,
//         "firstName": "Jane",
//         "lastName": "Wills",
//         "image": "https://randomuser.me/api/portraits/women/81.jpg",
//         "email": "JaneWillWin@me.com",
//         "phone": "(775)-338-0991"
//     },
//     {
//         "id": 4,
//         "firstName": "Lenny",
//         "lastName": "Stafford",
//         "image": "https://randomuser.me/api/portraits/men/71.jpg",
//         "email": "L_Stafford77@yahoo.com",
//         "phone": "(212)-572-0559"
//     },
//     {
//         "id": 5,
//         "firstName": "Ethan",
//         "lastName": "Chen",
//         "image": "https://randomuser.me/api/portraits/men/67.jpg",
//         "email": "Chen[Ethan]@gmail.com",
//         "phone": "(620) 454-1799"
//     }
// ]

 //  ---------------- Sorts Alphabetically -------------- //
  //Comparer Function    
  function GetSortOrder(prop) {
    return function (a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
  }

  // sorts the array by first name A-Z 
  function sortFirstName(Arr) {
    Arr.sort(this.GetSortOrder("firstName")); //Pass the attribute to be sorted on       
    for (var item in Arr) {
        console.log(JSON.stringify(Arr[item].firstName));
        this.setState({
          firstNameCheck: false,
        })
    }
  }

  // sorts the array by last name A-Z
  function sortLastName(Arr) {
    Arr.sort(this.GetSortOrder("lastName")); //Pass the attribute to be sorted on       
    for (var item in Arr) {
        console.log(JSON.stringify(Arr[item].lastName));
    }
  }


  //  ---------------- Sorts Reverse Alphabetically -------------- //
  //Comparer Function    
  function GetSortOrderBackwards(prop) {
    return function (a, b) {
        if (b[prop] > a[prop]) {
            return 1;
        } else if (b[prop] < a[prop]) {
            return -1;
        }
        return 0;
    }
  }

  // sorts the array by first name Z-A 
  function sortFirstNameBackwards(Arr) {
    Arr.sort(this.GetSortOrderBackwards("firstName")); //Pass the attribute to be sorted on       
    for (var item in Arr) {
        console.log(JSON.stringify(Arr[item].firstName));
    }
  }

  // sorts the array by last name Z-A
  function sortLastNameBackwards(Arr) {
    Arr.sort(this.GetSortOrderBackwards("lastName")); //Pass the attribute to be sorted on       
    for (var item in Arr) {
        console.log(JSON.stringify(Arr[item].lastName));
    }
  }


// sortFirstNameBackwards(employArr);