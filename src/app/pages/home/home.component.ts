import { Component, OnInit } from '@angular/core'
import { HouseRequest } from 'src/app/models/house-request.model'
import { Project } from 'src/app/models/project.model'

@Component({
  selector: 'app-house',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  projects: Array<Project> = [
    {
      id: '1',
      title: 'Mon super titre ! ',
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
    },
    {
      id: '2',
      title: 'Mon  autre super titre. ',
      address: '22 Rue Camille Desmoulins',
      imgId: ['1702419999915'],
      lat: 49.6827005,
      long: 2.2939912,
      description:
        'Integer magna quam, congue quis neque at, hendrerit vulputate est. Morbi ultricies consectetur lorem non blandit. Aliquam nec arcu eu elit sollicitudin vulputate eget quis ipsum. Proin congue mauris sit amet laoreet iaculis. Nunc magna quam, rhoncus nec mi volutpat, dapibus tempor massa. Vestibulum egestas bibendum urna. Curabitur quis tempor nisl, non congue turpis.',
      city: 'Amiens',
      zipcode: '80000',
      district: 'henriville',
      visibility: false,
    },
  ]

  houseRequests: HouseRequest[] = [
    {
      mail: 'pr.gaillot@gmail.com',
      address: '13 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'approuved',
      zipcode:'80000',
      city:'Amiens',
    },
    {
      mail: 'camImmo@gmail.com',
      address: '13 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'reject',
      zipcode:'80000',
      city:'Amiens',
    },
    {
      mail: 'superTest@gmail.com',
      address: '34 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'pending',
      zipcode:'80000',
      city:'Amiens',
    },
    {
      mail: 'testtesttest@yahoo.fr',
      address: '56 Rue Camille Desmoulins',
      lat: 49.8827005,
      long: 2.2939912,
      status: 'pending',
      zipcode:'80000',
      city:'Amiens',
    },
  ]

  ngOnInit(): void {}
}
