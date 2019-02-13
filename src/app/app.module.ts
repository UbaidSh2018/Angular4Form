import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

/* App Root */
import { AppComponent } from "./app.component";

/* Pages Components */
import { PersonalComponent } from "./personal/personal.component";
import { WorkComponent } from "./work/work.component";

/* Routing Module */
import { AppRoutingModule } from "./app-routing.module";

/* Shared Service */
import { FormDataService } from "./data/formData.service";
import { WorkflowService } from "./workflow/workflow.service";
import { ExternalResourcesService } from "./data/externalResources.service";

/* node Packages */
import { Ng2AutoCompleteModule } from "ng2-auto-complete";

/* Http Module*/
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, PersonalComponent, WorkComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2AutoCompleteModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],

  providers: [
    { provide: FormDataService, useClass: FormDataService },
    { provide: WorkflowService, useClass: WorkflowService },
    { provide: ExternalResourcesService, useClass: ExternalResourcesService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
