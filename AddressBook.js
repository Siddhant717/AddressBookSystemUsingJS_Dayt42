//UC1 Ability to create a Address Book Contact with first and last names,address, city, state, zip, phone number and email
class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    eMail;

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

        toString(){
            return ("First Name: "+this.firstName+" \nLast Name: "+this.lastName+"\nAddress: "+this.address+"\nCity : "+this.city+"\nState: "+this.state+"\nZip Code : "+this.zip+"\nPhone: "+this.phoneNumber+ "\nE-Mail: "+this.eMail);
        }
}
let contactObj = new Contact("Siddhant","Shrivastava","XYZ","Ujjain","MP",453432,8789876653,"siddhant@gmail.com");
console.log(contactObj.toString());