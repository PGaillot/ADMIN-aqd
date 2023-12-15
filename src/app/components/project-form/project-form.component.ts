import { Component, Input, OnInit } from '@angular/core'
import { Project } from 'src/app/models/project.model'

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  
  id: string = ''
  imgId: string[] = ['']
  title: string = ''
  address: string = ''
  city: string = 'Amiens'
  zipcode: string = '80000'
  district: string = ''
  description: string = ''
  lat: number | null = null
  long: number | null = null
  visibility: boolean = false

  coordinates: boolean = false
  @Input() project: Project | undefined
  @Input() formTitle: string = '';

  constructor() {}

  ngOnInit(): void {
    // if (this.project === undefined) {
    //   this.project = {
    //     id: '',
    //     imgId: [''],
    //     title: '',
    //     address: '',
    //     city: '',
    //     zipcode: '',
    //     district: '',
    //     description: '',
    //     lat: null,
    //     long: null,
    //     visibility: false,
    //   }
    // }



  }
}
