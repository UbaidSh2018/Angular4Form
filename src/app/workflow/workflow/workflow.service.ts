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

  /**
   *  If the previous page is validated, return blank. Otherwise, return the invalid page.
   */
  getFirstInvalidPage(page: string): string {
    var found = false;
    var valid = true;
    var redirectToPage = "";

    for (var i = 0; i < this.workflow.length && !found && valid; i++) {
      let item = this.workflow[i];
      if (item.page == page) {
        found = true;
        redirectToPage = "";
      } else {
        valid = item.valid;
        redirectToPage = item.page;
      }
    }
    return redirectToPage;
  }
}
