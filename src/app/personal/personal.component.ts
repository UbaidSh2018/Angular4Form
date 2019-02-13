import { Component, OnInit, NgModule } from "@angular/core";
import { Router } from "@angular/router";

import { Personal } from "../data/formData.model";
import { FormDataService } from "../data/formData.service";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Ng2AutoCompleteModule } from "ng2-auto-complete";
import { ExternalResourcesService } from "../data/externalResources.service";

@NgModule({
  imports: [Ng2AutoCompleteModule]
})
@Component({
  selector: "personalSelector",
  templateUrl: "./personal.component.html"
})
export class PersonalComponent implements OnInit {
  personal: Personal;
  form: any;
  display: boolean;
  storeTypes = ["Mall", "Metro", "Arcade", "Centre"];

  constructor(
    private router: Router,
    private formDataService: FormDataService,
    private sanitizer: DomSanitizer,
    private externalResourcesService: ExternalResourcesService
  ) {}

  storeData = [];

  ngOnInit() {
    console.log("Personal page loaded!");
    this.personal = this.formDataService.getPersonal();
    this.checkStoreType(this.personal.storeType);
    this.externalResourcesService.getStoreData().subscribe(
      (response: any) => {
        for (let item of response.results) {
          this.storeData.push({ name: item.name.first + " " + item.name.last });
        }
      },
      error => {
        console.log("Failed to load data");
      }
    );
  }

  // Dropdown List formatter
  autocomplePortListFormatter = (data: any): SafeHtml => {
    let html = `<span>${data.name} </span>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  };

  getSelectedItem(event) {
    const name = event.target.value.split(" ");
    this.personal.firstName = name[0];
    this.personal.lastName = name[1];
  }

  checkStoreType(storeType) {
    if (storeType === "Metro") {
      this.display = true;
    } else {
      this.display = false;
    }
  }
  onChange(args) {
    this.display = false;
    if (args.target.value == "Metro") {
      this.display = true;
    } else {
      this.display = false;
    }
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }
    this.formDataService.setPersonal(this.personal);
    return true;
  }

  goToNext(form: any) {
    console.log("form :", form);
    console.log("data :", form);
    if (this.save(form)) {
      this.router.navigate(["/work"]);
      console.log("Navigated to Work Page");
    }
  }
}
