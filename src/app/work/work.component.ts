import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

import { FormDataService } from "../data/formData.service";
import { Work } from "../data/formData.model";
import { FormData } from "../data/formData.model";
import { ExternalResourcesService } from "../data/externalResources.service";

@Component({
  selector: "workSelector",
  templateUrl: "./work.component.html"
})
export class WorkComponent implements OnInit {
  work: Work;
  form: any;
  display: boolean;
  userRoles: any[] = ["Dev", "Manager", "Student"];
  @Input() formData: FormData;

  data = new FormData();
  constructor(
    private router: Router,
    private formDataService: FormDataService,
    private externalResourcesService: ExternalResourcesService
  ) {}

  ngOnInit() {
    this.work = this.formDataService.getWork();
    console.log("Work page loaded!");
    this.checkLocation(this.work.inVictoria);
  }

  checkLocation(location) {
    if (location === "Yes") {
      this.display = true;
    } else {
      this.display = false;
    }
  }

  onChange(args) {
    if (args.target.value == "Yes") {
      this.display = true;
    } else {
      this.display = false;
    }
  }

  goToPrevious(form: any) {
    this.formDataService.setWork(this.work);
    this.router.navigate(["/personal"]);
  }

  submit(form: any) {
    if (this.save(form)) {
      console.log("Successfully Submitted");
    }
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setWork(this.work);
    this.submitDataToWebhook(
      this.formDataService.getPersonal(),
      this.formDataService.getWork()
    );
    return true;
  }

  submitDataToWebhook(personalData, workData) {
    console.log("personalData :", personalData, " wok :", workData);

    const data = {
      storeType: personalData.storeType,
      storeMetroDetails: personalData.storeMetroDetails,
      userLookup: personalData.userLookup.name,
      firstName: personalData.firstName,
      lastName: personalData.lastName,
      userRole: workData.userRole,
      dateJoin: workData.dateJoin,
      inVictoria: workData.inVictoria,
      locationVictoria: workData.locationVictoria
    };
    console.log("data :", data);

    this.externalResourcesService
      .passDataToWebhook(data)
      .subscribe((response: any) => {
        console.log("reponse :", response);
        this.formDataService.resetFormData();
        this.router.navigate(["/personal"]);
      });
  }
}
