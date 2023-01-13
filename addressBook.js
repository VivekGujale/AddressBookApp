class Contact {
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('[A-Z][a-z]{2,}\\s{1,}[A-Z][a-z]{2,}');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('[A-Za-z0-9./_-,]+');
        if (addressRegex.test(address))
            this._address = address;
        else throw 'Address is Incorrect!'
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp("[+]91 [0-9]{10}");
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw 'Phone number is incorrect!'
    }
    toString() {
        return "Name : " + this.name + ", Address : " + this.address + ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone Number : " + this.phoneNumber;
    }
}