import { Locator, Page, expect } from "@playwright/test";
import path from 'path';
const filePath = path.resolve(__dirname, '../../TestImage.jpg');
const Path = path.resolve(__dirname, '../../');
const data = JSON.parse(JSON.stringify(require('../Data/TestData.json')));


export class MyInfoPage {
  readonly page: Page;
  private Myinfo: Locator;
 
  private downloadBtn : Locator;
  private firstName : Locator;
  private midName : Locator;
  private lastName : Locator;
  private saveBtn : Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.firstName= page.locator("");
    this.midName = page.locator("");
    this.lastName = page.locator("");
    this.saveBtn= page.locator("");
    this.downloadBtn = page.locator("");
    this.Myinfo = page.locator("");
  }
  

/**
 * Downloads the user info file from the My Info tab and returns the filename.
 */
async downloadInfo(): Promise<string> {
  return "";
}


/**
 * Fills in and saves user details (first, middle, last name) under the My Info tab.
 */
async verifyUser() {
}


   
}
