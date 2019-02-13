import { Injectable } from "@angular/core";
import { FormData, Personal, Work } from "./formData.model";

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;

    constructor() {
    }

    getPersonal(): Personal {
        var personal: Personal = {
            storeType: this.formData.storeType,
            storeMetroDetails: this.formData.storeMetroDetails,
            userLookup: this.formData.userLookup,
            firstName: this.formData.firstName,
            lastName: this.formData.lastName
        };
        return personal;
    }

    setPersonal(data: Personal) {
        this.isPersonalFormValid = true;
        this.formData.storeType = data.storeType;
        this.formData.storeMetroDetails = data.storeMetroDetails;
        this.formData.userLookup = data.userLookup;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
    }

    getWork(): Work {
        var work: Work = {
            userRole: this.formData.userRole,
            dateJoin: this.formData.dateJoin,
            inVictoria: this.formData.inVictoria,
            locationVictoria: this.formData.locationVictoria,
        };
        return work;
    }

    setWork(data: Work) {
        this.isPersonalFormValid = true;
        this.formData.userRole = data.userRole;
        this.formData.dateJoin = data.dateJoin;
        this.formData.inVictoria = data.inVictoria;
        this.formData.locationVictoria = data.locationVictoria;
    }

    getFormData(): FormData {
        return this.formData;
    }

    resetFormData(): FormData {
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = false;
        return this.formData;
    }

    isFormValid() {
        return this.isPersonalFormValid && this.isWorkFormValid;
    }

}