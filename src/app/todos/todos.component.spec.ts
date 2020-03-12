import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodosComponent } from './todos.component';
import { DataService } from '../#services/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let dataService: DataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        TodosComponent
      ],
    }).compileComponents();
    dataService = TestBed.inject(DataService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dataService.todos = [];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display welcome message', () => {
    fixture = TestBed.createComponent(TodosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#noTodosInfo').textContent)
      .toContain('You have no todos 🙂 Enjoy 🏝 Or create new ones 👉');
  });

  it('should display a todo item', () => {
    dataService.todos.push({ id: 'testId', text: 'testText' });
    fixture = TestBed.createComponent(TodosComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('.todoWrapper').length)
      .toBeGreaterThan(0);
  });
});
