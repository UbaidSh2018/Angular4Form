/** 
 * This is a service responsible for controlling the application workflow.
*/

import { Injectable } from "@angular/core";
import { PAGES } from "./workflow.model";

@Injectable()
export class WorkflowService {
  private workflow = [
    { page: PAGES.personal, valid: false },
    { page: PAGES.work, valid: false }
  ];

  validatePage(page: string) {
    var found = false;
    for (var i = 0; i < this.workflow.length && !found; i++) {
      if (this.workflow[i].page == page) {
        found = this.workflow[i].valid = true;
      }
    }
  }

  /**
   * Rest all the pages in Workflow to be invalid
   */
  resetPages() {
    this.workflow.forEach(element => {
      element.valid = false;
    });
  }
}
