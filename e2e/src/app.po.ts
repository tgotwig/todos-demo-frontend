import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route: string): Promise<unknown> {
    return browser.get(route) as Promise<unknown>;
  }

  getWelcomeText(): Promise<string> {
    return element(by.css('#noTodosInfo')).getText() as Promise<string>;
  }

  getTextFromTodo() {
    return element(by.css('.todoText'));
  }

  getTextFromTodos() {
    return element.all(by.css('.todoText')).map((elm) => elm.getText());
  }

  getSubmitTodoBtn() {
    return element(by.css('.fa-plus-circle'));
  }

  getRemoveTodoBtn() {
    return element(by.css('.fa-times'));
  }

  getInputForTodosText() {
    return element(by.css('#inputForTodosText'));
  }

  getEditTodoBtn() {
    return element(by.css('.fa-edit'));
  }

  getSubmitTodoBtn2() {
    return element(by.css('#submitBtn'));
  }
}
