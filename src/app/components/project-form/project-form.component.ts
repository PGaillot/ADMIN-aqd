import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { Project } from 'src/app/models/project.model'

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit, AfterViewInit {
  id: string = ''
  imgId: string[] = []
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
  @Input() formTitle: string = ''
  @Output() submitForm: EventEmitter<Project>

  @ViewChild('images') imagesInputRef!: ElementRef
  @ViewChild('form') formRef!: ElementRef

  constructor() {
    this.submitForm = new EventEmitter<Project>()
  }

  sumbmitClick(form: NgForm) {
    if (form.valid) {
      const project: Project = {
        id: this.id,
        title: this.title,
        address: this.address,
        imgId: ['1702419999915'],
        lat: this.lat,
        long: this.long,
        description: this.description,
        city: this.city,
        zipcode: this.zipcode,
        district: this.district,
        visibility: this.visibility,
      }
      this.submitForm.emit(project)
    } else {
      console.error('formulaire non valide !')
    }
  }

  ngAfterViewInit(): void {
    this.imagesInputRef.nativeElement.addEventListener(
      'change',
      (event: any) => {
        console.log(event.target.files)
        event.target.files.forEach((file: any) => {
          this.imgId = [...this.imgId, file.lastModified]
        })
        console.log(this.imgId)
      },
    )
  }

  ngOnInit(): void {
    if (this.project !== undefined) {
      this.id = this.project.id
      this.title = this.project.title
      this.address = this.project.address
      this.district = this.project.district
      this.city = this.project.city
      this.description = this.project.description
      this.imgId = this.project.imgId
      this.visibility = this.project.visibility
      this.lat = this.project.lat
      this.long = this.project.long
    }
  }
}
