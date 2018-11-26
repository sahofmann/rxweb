import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators } from "@angular/forms"
import { SubjectDetails } from './subject-details.model';

@Component({
    selector: 'app-maxNumber-message-template-driven',
    templateUrl: './max-number-message.component.html'
})
export class MaxNumberMessageTemplateDrivenComponent implements OnInit {
    subjectdetails: SubjectDetails

    constructor(
    ) { }

    ngOnInit() {
       this.subjectdetails= new SubjectDetails()
    }
}
