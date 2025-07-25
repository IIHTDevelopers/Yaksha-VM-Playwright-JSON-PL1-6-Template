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
async verifyLeaveField(): Promise<string> {
  return "";
}


  

}
const startDate = new Date("2025-01-01");
const endDate = new Date("2025-12-31");

//--------------------------------------------
function getRandomDate(start: Date, end: Date): string {
  const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
  const randomDate = new Date(randomTime);

  // Format to YYYY-MM-DD
  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, '0');
  const day = String(randomDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
