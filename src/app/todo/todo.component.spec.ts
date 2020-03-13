import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoComponent } from './todo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DataService } from '../#services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        BrowserAnimationsModule
      ],
      declarations: [
        TodoComponent
      ],
    }).compileComponents();
    dataService = TestBed.inject(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.debugElement.componentInstance;
    dataService.todos = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove todo-item', () => {
    dataService.todos.push({ id: 'testId', text: 'testText' });
    expect(dataService.todos.length)
      .toBe(1);
    const leftTodos = component.removeTodo('testId', false);
    expect(leftTodos.length)
      .toBe(0);
  });
});
