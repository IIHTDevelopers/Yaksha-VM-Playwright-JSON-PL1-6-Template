import { Page, Locator, expect } from "@playwright/test";
import path from 'path';
const filePath = path.resolve(__dirname, '../../CompanyLogo.png');
export default class AdminPage {
  readonly page: Page;
  private localizationBtn :Locator;
  private langDropdown : Locator;
  private logoMsg :Locator;
  private logoInput : Locator ; 
  private ColorAttribute :Locator;
  private colorInput : Locator;
  private publishBtn : Locator;
  private AdminLink: Locator;
  private crpTab : Locator;
  private primaryColorBtn  : Locator;
  private configTab : Locator;
  private option : Locator;
  private langSaveBtn : Locator;
  private optionEng : Locator;



  constructor(page: Page) {
    this.page = page;
    this.langSaveBtn = this.page.locator("")
   this.option = this.page.locator("")
   this.optionEng = this.page.locator("")
    this.langDropdown= this.page.locator("");
    this.localizationBtn= this.page.locator("");
    this.logoMsg= this.page.locator("");
    this.logoInput= this.page.locator("");
    this.publishBtn= this.page.locator("");
    this.ColorAttribute= this.page.locator("");
    this.primaryColorBtn = this.page.locator("");
    this.crpTab= page.locator("");
    this.configTab= page.locator("");
    this.colorInput= this.page.locator("");
    this.AdminLink = page.locator('');   
    
  }
  
  /**
 * Updates the primary corporate branding color and returns the style attribute for validation.
 */
async primaryColor(){
}



  /**
 * Uploads a company logo file and returns the error message if size exceeds limit.
 */
async companyLogo() {
}



  /**
 * Changes the UI language to Chinese (Traditional, Taiwan) - 中文（繁體，台灣 and returns the selected language text.
 */
async changeLanguage(){
}


}


