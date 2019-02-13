import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ExternalResourcesService {
  constructor(private http: HttpClient) {}

  autoCompleteUrl: string =
    "https://randomuser.me/api/?results=50&nat=au&exc=login";
  corsUrl: String = "https://cors-anywhere.herokuapp.com/";
  webHookUrl: string =
    "https://webhook.site/a49cce24-6678-4444-a2a0-93677c41f792";

  getStoreData() {
    return this.http.get(this.autoCompleteUrl);
  }

  passDataToWebhook(data) {
    return this.http.post(this.corsUrl + this.webHookUrl, data, {
      responseType: "text"
    });
  }
}
