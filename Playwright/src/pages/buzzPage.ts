import { Page, Locator, expect } from "@playwright/test";
import path from 'path';
const filePath = path.resolve(__dirname, '../../TestImage.jpg');
const commentText = "this is test comment";
const editPostText = "this is edit post comment";


export default class buzzPage {
  readonly page: Page;
  private buzzLink: Locator; 
  private firstPostFooter: Locator;
  private deleteToggle : Locator;
  private deleteButton: Locator;
  private verifyCmnt: Locator;
  private deleteConfirmation: Locator ;
  constructor(page: Page) {
    this.page = page;
    this.buzzLink = page.locator('');
    this.deleteToggle = page.locator("");
    this.deleteButton = page.locator("");
    this.firstPostFooter = page.locator('').first();
    this.deleteConfirmation = page.locator("");
    this.verifyCmnt = this.page.locator(""); 
  }


/**
 * Deletes the first post on the Buzz page and returns the confirmation message.
 */
public async delete() {
}

}