import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router'
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs'
import { Project } from 'src/app/models/project.model'
import { ImagesService } from 'src/app/services/images.service'

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit, AfterViewInit, OnDestroy {
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

  subscriptions: Subscription[] = []
  fileList$: BehaviorSubject<File[]>
  @Input() project: Project | undefined
  @Input() formTitle: string = ''
  @Output() submitForm: EventEmitter<Project>

  @ViewChild('images') imagesInputRef!: ElementRef
  @ViewChild('form') formRef!: ElementRef

  constructor(private imsService: ImagesService) {
    this.submitForm = new EventEmitter<Project>()
    this.fileList$ = new BehaviorSubject<File[]>([])
  }
  
  sumbmitClick(form: NgForm) {
    if (form.valid && this.fileList$.getValue()) {

      let imgList:string[] = []; 
      this.fileList$.getValue().forEach((file:any) => {
        imgList = [...imgList, file.metadata.md5Hash]
      })

      console.log(imgList);
      

      const project: Project = {
        id: this.id,
        title: this.title,
        address: this.address,
        imgId: imgList,
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
        const fileList: any = event.target.files
        for (let i = 0; i < fileList.length; i++) {
          const file = fileList[i]
          this.imsService.uploadImg(file).then(res => {
          this.fileList$.next([...this.fileList$.getValue(), res])
          });
        }
      },
      )
    }
    
    ngOnInit(): void {
      this.subscriptions = [
        this.fileList$.subscribe((res) => {
          console.log(res)
        }),
      ]
      
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
    
    ngOnDestroy(): void {
      this.subscriptions.forEach(sub => sub.unsubscribe())
    }
    
    
  }
