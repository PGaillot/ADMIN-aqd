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

  constructor() {
    this.submitForm = new EventEmitter<Project>()
  }

  sumbmitClick() {
    const project: Project = {
      id: '3',
      title: 'Mon super 3213213232132 titre ! ',
      address: '51 Rue Camille Desmoulins',
      imgId: ['1702419999915'],
      lat: 49.8827005,
      long: 2.2939912,
      description:
        'Integer magna quam, congue quis neque at, hendrerit vulputate est. Morbi ultricies consectetur lorem non blandit. Aliquam nec arcu eu elit sollicitudin vulputate eget quis ipsum. Proin congue mauris sit amet laoreet iaculis. Nunc magna quam, rhoncus nec mi volutpat, dapibus tempor massa. Vestibulum egestas bibendum urna. Curabitur quis tempor nisl, non congue turpis.',
      city: 'Amiens',
      zipcode: '80000',
      district: 'henriville',
      visibility: true,
    }

    this.submitForm.emit(project)
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
