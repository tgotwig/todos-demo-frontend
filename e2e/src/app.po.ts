import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route: string): Promise<unknown> {
    return browser.get(route) as Promise<unknown>;
  }

  getWelcomeText(): Promise<string> {
    return element(by.css('#noTodosInfo')).getText() as Promise<string>;
  }
}
