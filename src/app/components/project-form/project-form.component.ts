import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'
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
  @Input() formTitle: string = '';
  @ViewChild('images') imagesInputRef!:ElementRef;

  constructor() {}




  ngAfterViewInit(): void {
  this.imagesInputRef.nativeElement.addEventListener('change', (event:any) => {


    //TODO
    this.imgId = [...this.imgId, event.target.files[0].lastModified];

    console.log(event.target.files)

  });

  }
  
  ngOnInit(): void {

    if(this.project !== undefined){
      this.id = this.project.id;
      this.title = this.project.title;
      this.address = this.project.address;
      this.district = this.project.district;
      this.city = this.project.city;
      this.description = this.project.description;
      this.imgId = this.project.imgId;
      this.visibility = this.project.visibility;
      this.lat = this.project.lat;
      this.long = this.project.long;
    }


  }
}
