//UC2-Ensure valid contacts are added
let firstNamePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let lastNamePattern = new RegExp('^[A-Z]{1}[a-z]{2,}$');
let addressPattern = new RegExp('^[A-Za-z0-9 /,]{3,}$');
let cityPattern = new RegExp('^[A-Za-z]{4,}$');
let statePattern = new RegExp('^[A-Za-z]{2,}$');
let zipPattern = new RegExp('^[1-9]{1}[0-9]{5}$')
let phoneNoPattern = new RegExp('^[1-9]{2,}[ ][6-9]{1}[0-9]{9}$');
let eMailPattern = new RegExp('^([A-Za-z]{3,}([.a-z]*)[@][a-z]{2,}[.][a-z]{2,3}([.a-z]*))$')

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.eMail = params[7];
    }
    get firstName() {return this._firstName};
    set firstName(firstName){
        if (firstNamePattern.test(firstName)) this._firstName = firstName;
        else throw 'First Name pattern is incorrect';
    }
    get lastName() {return this._lastName};
    set lastName(lastName){
        if (lastNamePattern.test(lastName)) this._lastName = lastName;
        else throw 'Last Name pattern is incorrect';
    }
    get address() {return this._address};
    set address(address){
        if (addressPattern.test(address)) this._address = address;
        else throw 'Address pattern is incorrect';
    }
    get state() {return this._state};
    set state(state){
        if (statePattern.test(state)) this._state = state;
        else throw 'State pattern is incorrect';
    }
    get city() {return this._city};
    set city(city){
        if (cityPattern.test(city)) this._city = city;
        else throw 'City pattern is incorrect';
    }
    get zip() {return this._zip};
    set zip(zip){
        if (zipPattern.test(zip)) this._zip = zip;
        else throw 'Zip pattern is incorrect';
    }
    get phoneNumber() {return this._phoneNumber};
    set phoneNumber(phoneNumber){
        if (phoneNoPattern.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw 'PhoneNumber pattern is incorrect';
    }
    get eMail() {return this._eMail};
    set eMail(eMail){
        if (eMailPattern.test(eMail)) this._eMail = eMail;
        else throw 'Email pattern is incorrect';
    }

    toString(){
        return ("First Name: "+this.firstName+" \nLast Name: "+this.lastName+"\nAddress: "+this.address+"\nCity : "+this.city+"\nState: "+this.state+"\nZip Code : "+this.zip+"\nPhone: "+this.phoneNumber+ "\nE-Mail: "+this.eMail);
    }
}

try{
    let contactObj = new Contact("Siddhant","Shrivastava","XYZ","Ujjain","MP","456333","91 7890909088","siddhant@gmail.com");
    console.log(contactObj.toString());
}
catch (ex){
    console.error(ex);
}

//UC3 Ability to add Contacts into Array
let array = new Array();
function AddContact(firstName,lastName,address,city,state,zip,phoneNumber,Email){
    try{
    let contactobject = new Contact(firstName,lastName,address,city,state,zip,phoneNumber,Email);
    array.push(contactobject);
    }
    catch (ex){
        console.error(ex);
    }
}
AddContact("Siddhant","Shrivastava","XYZ","Ujjain","MP","444444","91 7778888565","siddhant@gmail.com");
AddContact("Riya","Sharma","XYZ","Ajmer","Rajasthan","545454","91 9997775554","riya@gmail.com");
array.forEach(contactsDetails => console.log(contactsDetails.toString()));


function FindandEditContact(){
    try{
        var readline = require('readline-sync');
        let contactNameToBeEdited = readline.question("Enter the name of the Contact you want to edit: ");
        array.forEach(contactsDetails => {
            if (contactsDetails.firstName == contactNameToBeEdited){
                while(true){
                    var readline = require('readline-sync');
                let choice = parseInt(readline.question("Enter choice of the Detail you want to edit:-\n1: First Name \n2: Last Name \n3: Address \n4: City \n5: State \n6: Zipcode \n7: Phone Number \n8: Email Address\n9: Display"));
                switch (choice){
                    case 1:
                        let newFN = readline.question("Enter updated first name: ");
                        contactsDetails.firstName = newFN;
                        break;
                    case 2:
                        let newLN = readline.question("Enter updated last name: ");
                        contactsDetails.lastName = newLN;
                        break;
                    case 3:
                        let newAddress = readline.question("Enter updated address: ");
                        contactsDetails.address = newAddress;
                        break;
                    case 4:
                        let newCity = readline.question("Enter updated city: ");
                        contactsDetails.city = newCity;
                        break;
                    case 5:
                        let newState = readline.question("Enter updated state: ");
                        contactsDetails.state = newState;
                        break;
                    case 6:
                        let newZip = readline.question("Enter updated zip: ");
                        contactsDetails.zip = newZip;
                        break;
                    case 7:
                        let newPhoneNo = readline.question("Enter updated phone number: ");
                        contactsDetails.phoneNumber = newPhoneNo;
                        break;
                    case 8:
                        let newEmail = readline.question("Enter updated email: ");
                        contactsDetails.eMail = newEmail;
                        break;
                    case 9:
                        display();
                    default:
                        console.log("Enter valid choice");
                        break;
                    }
                }
            }
        });
    }
    catch(ex){
        console.error(ex);

    }
}
//FindandEditContact();
//array.forEach(contactsDetails => console.log(contactsDetails.toString()));

function display(){
    for(let i=0;i<array.length;i++){
        console.log(array[i].toString());
    }
}

function DeleteContact(){
    try{
        var readline = require('readline-sync');
        let contactNameToBeDeleted = readline.question("Enter the name of the Contact you want to delete: ");
        const indexOfArray = array.findIndex((contactDetails)=> contactDetails.firstName == contactNameToBeDeleted);
        array.splice(indexOfArray,1);
    }
    catch(ex){
        console.error(ex);
    }
}
//DeleteContact();
//console.log("contact deleted successfully");
//array.forEach(contactsDetails => console.log(contactsDetails.toString()));


//UC6 Finding Number of Contacts 
let noOfContacts = array.reduce((contactsDetails) => contactsDetails + 1,0);
console.log("Number of Contacts = "+noOfContacts);


