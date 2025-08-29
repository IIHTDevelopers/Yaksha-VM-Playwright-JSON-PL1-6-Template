import { Page, Locator, expect } from "@playwright/test";
const HolidayName = "National Holiday123"; // Define the holiday name
export default class LeavePage {
  readonly page: Page;
  private assignBtn: Locator;
  private assignLeaveTab : Locator;
  private leave: Locator;
  private leaveAssignMsg : Locator;
  constructor(page: Page) {
    this.page = page;
    this.leaveAssignMsg= page.locator("");
    this.assignBtn= page.locator("");
    this.assignLeaveTab= page.locator("");
    this.leave = page.locator("");
  }


  /**
 * Triggers leave assignment without input and returns the required field error message.
 */
async verifyLeaveField() {
}


  

}
