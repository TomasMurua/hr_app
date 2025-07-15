import {
  browser,
  logging,
  element,
  by,
  ExpectedConditions as EC,
} from 'protractor';

describe('Login E2E Tests', () => {
  beforeEach(() => {
    browser.get('/login');
  });

  it('should display login page', async () => {
    expect(browser.getCurrentUrl()).toContain('/login');
  });

  it('should login with demo credentials and redirect to home', async () => {
    // Wait for the page to load
    await browser.sleep(2000);

    // Find and fill in the RUT field
    const rutInput = element(by.css('ion-input[name="rut"] input'));
    const passInput = element(by.css('ion-input[name="password"] input'));
    await browser.wait(EC.elementToBeClickable(rutInput), 5000);
    await rutInput.sendKeys('23.040.124-1');
    await passInput.sendKeys('demo123');

    // Find and click the login button
    const loginButton = element(by.css('ion-button[type="submit"]'));
    await loginButton.click();

    // Wait for navigation to complete
    await browser.sleep(3000);

    // Expect to be redirected to home page
    expect(browser.getCurrentUrl()).toContain('/home');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
