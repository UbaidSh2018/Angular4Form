export class FormData {
  storeType: any = "";
  storeMetroDetails: string = "";
  userLookup: string = "";
  firstName: string = "";
  lastName: string = "";
  userRole: string = "";
  dateJoin: string = "";
  inVictoria: boolean = null;
  locationVictoria: string = "";

  public clear() {
    this.storeType = "";
    this.storeMetroDetails = "";
    this.userLookup = "";
    this.firstName = "";
    this.lastName = "";
    this.userRole = "";
    this.dateJoin = "";
    this.inVictoria = null;
    this.locationVictoria = "";
  }
}

export class Personal {
  storeType: any = "";
  storeMetroDetails: string = "";
  userLookup: string = "";
  firstName: string = "";
  lastName: string = "";
}

export class Work {
  userRole: string = "";
  dateJoin: string = "";
  inVictoria: boolean = null;
  locationVictoria: string = "";
}
