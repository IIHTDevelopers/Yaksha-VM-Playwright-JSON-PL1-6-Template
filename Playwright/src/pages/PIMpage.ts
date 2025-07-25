import { Page, Locator, expect } from "@playwright/test";
import { assert } from "console";
export default class PIMPage {
  readonly page: Page;
    private PIMLink: Locator;
    private empListbutton: Locator;
    private getEmpId : Locator;
    private fillEmpId: Locator;
    private saveButton: Locator;
  
   
  constructor(page: Page) {
    this.page = page;
    this.PIMLink = page.locator('');
    this.empListbutton = page.locator('');
    this.getEmpId= page.locator("");
    this.fillEmpId= page.locator("");
    this.saveButton = page.locator("");


  }

  /**
 * Searches for an employee by ID and asserts that the result matches the input.
 */
/**
 * Captures an employee ID from the list and searches for it using the Employee ID field.
 * Returns the selected employee ID.
 */
async verifyEmp(): Promise<string> {
  return "";
}



  /**
 * Navigates to the PIM section and returns a trimmed list of employee IDs.
 */
async getEmpList(): Promise<string[]> { 
  return [];
}

  

  

}


//--------------------------------------------
