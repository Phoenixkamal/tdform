import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {
  title="Template driven form"
  isSubmitted:boolean=false

  contact!:Contact

  courseList:Course[] = [
    new Course('1','BE-Computer Science and Engineering'),
    new Course('2','BE-Civil Engineering'),
    new Course('3','BE-Mechanical Engineering'),
    new Course('4','BE-Electrical and Electronics Engineering'),
    new Course('5','BE-Electronics and Communication Engineering')
  ]

  ngOnInit(): void {
    this.contact= {
      firstName:"kamalesh",
      lastName:"sundharmoorthy",
      email:"kamalji791@gmail.com",
      gender:"male",
      qualification:"1",
      skills:{
        html:true,
        css:false
      },
      address:{
        country:"India",
        state:"Tamilnadu",
        district:"Sivagangai"
      }
    }
    // this.contact= {
    //   firstName:"",
    //   lastName:"",
    //   email:"",
    //   gender:"",
    //   qualification:"",
    //   skills:{
    //     html:false,
    //     css:false
    //   },
    //   address:{
    //     country:"",
    //     state:"",
    //     district:""
    //   }
    // }
  }

  handleSubmit(form:NgForm){
    console.log(form)
    console.log(this.contact)
  }
}

interface Contact{
  firstName:string,
  lastName:string,
  email:string,
  gender:string,
  qualification:string,
  skills:{
    html:boolean,
    css:boolean
  }
  address:{
    country:string,
    state:string,
    district:string
  }
}

class Course{
  id:string
  name:string

  constructor(id:string,name:string){
    this.id=id
    this.name=name
  }
}