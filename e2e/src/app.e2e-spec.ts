import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { HttpClient } from 'protractor-http-client';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getWelcomeText()).toEqual(
      'You have no todos 🙂' + '\n' +
      'Enjoy 🏝' + '\n' +
      'Or create new ones 👉');
  });

  it('should add empty todo-item', () => {
    page.navigateTo('/create');
    page.getSubmitTodoBtn().click();
    page.navigateTo('/');
    page.getTextFromTodos().then(todos => {
      expect(todos[0]).toEqual('');
      expect(todos.length).toEqual(1);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));

    new HttpClient('http://localhost:8080').delete('/api/todos');
  });
});
