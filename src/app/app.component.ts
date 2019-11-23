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
  pageNo: number
  recordsPerPage: number
  data = [
    {id: 1, name: "Michael Scott"},
    {id: 2, name: "Jim Halpert"},
    {id: 3, name: "Pam Beesly"},
    {id: 4, name: "Dwight K Shrute"},
    {id: 5, name: "Creed Bratton"}
  ]
  subject = new BehaviorSubject(this.data)
  sub$ = this.subject.asObservable()
  noOfPages: number = Math.ceil(this.data.length / this.recordsPerPage) 
  current: any[] = [];
  
  onSubmit(recordsPerPage: number) {
    this.recordsPerPage = recordsPerPage
    console.log(this.data.length)
    console.log(this.noOfPages)
  }

  changePage(pageNo)
  {
    if(this.noOfPages != undefined)
    {
    if(pageNo >= this.noOfPages) 
    {
      
      this.pageNo = this.noOfPages
      pageNo = this.noOfPages
    }
    if(pageNo < 1)
    {
      this.pageNo = 1
      pageNo = 1
       this.subject.pipe(
        map(val => (val.forEach(e => console.log(e.id)))),
       )
    }
    }
    else console.log("Wrong Invocation")
  }
  d: {id: number, name: string};
  next()
  {
    this.pageNo++
    console.log(this.pageNo)
    this.changePage(this.pageNo)
    console.log(this.pageNo)
  }
  prev()
  {
    this.pageNo--
    this.changePage(this.pageNo)
    console.log(this.pageNo);
  }
  check()
  {
    this.sub$.subscribe(val => val.forEach(e => console.log(e.name)));
    this.d = {id: 6, name:"Oscar"}
    this.subject.next([this.d]) 
    if(this.recordsPerPage != undefined && this.recordsPerPage <= this.data.length)
      console.log(this.recordsPerPage)
    else
      console.log("Enter Valid size")
  }
  constructor()
  {
    this.pageNo = 1;
    this.data.forEach(obj => {
      this.current.push(obj.id)
    })
  }
}
