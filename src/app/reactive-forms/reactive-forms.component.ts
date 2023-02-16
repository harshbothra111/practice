import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  regForm:FormGroup;
  isSubmited: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    
    this.regForm = this.initForm();
  }

  ngOnInit(): void {
  }

  initForm() : FormGroup{
    return this.formBuilder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      startDate: ['',[Validators.required]],
      endDate: ['',[Validators.required]],
    }); 
  }

  onSubmit(){
    this.isSubmited = true;
    if(this.isSubmited && this.regForm.valid){
      alert("Registered");
      this.reset();
    }
  }
  updateEndDate(){
    let startDate = new Date(this.regForm.controls["startDate"].value);
    let endDate = new Date(startDate.getFullYear()+1, startDate.getMonth(), startDate.getDate());
    this.regForm.controls["endDate"].setValue(formatDate(endDate,"yyyy-MM-dd","en-US"));
  }
  reset(){
    this.regForm.reset();
    this.isSubmited = false;
  }
}
