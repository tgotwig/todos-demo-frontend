import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateTodoComponent } from './create-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataService } from '../#services/data.service';

describe('CreateTodoComponent', () => {
  let component: CreateTodoComponent;
  let fixture: ComponentFixture<CreateTodoComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule
      ],
      declarations: [
        CreateTodoComponent
      ],
    }).compileComponents();
    dataService = TestBed.inject(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService.todos = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create todo', () => {
    const newTodo = component.createTodo('test :)', false);
    expect(newTodo.text)
      .toEqual('test :)');
  });
});
