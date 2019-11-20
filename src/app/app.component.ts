import { Component } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs'
import { map, filter } from 'rxjs/operators' 
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  recordsPerPage: number
  data = [
    {id: 1, name: "Michael Scott"},
    {id: 2, name: "Jim Halpert"},
    {id: 3, name: "Pam Beesly"},
    {id: 4, name: "Dwight K Shrute"},
    {id: 5, name: "Oscar"}
  ]
  subject = new BehaviorSubject(this.data)
  sub$ = this.subject.asObservable()
  onSubmit(recordsPerPage: number) {
    this.recordsPerPage = recordsPerPage
  }
  check()
  {
    this.sub$.subscribe(val => console.log(val));
    this.subject.next([{id: 6, name:"Oscar"}])
    console.log(this.recordsPerPage)
  }
  constructor()
  {

  }
}
