import { Injectable, inject } from '@angular/core'
import { Storage, ref, uploadBytesResumable } from '@angular/fire/storage'
import { error } from 'console'

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private readonly storage: Storage = inject(Storage)

  constructor() {}

  uploadImg(file: File):Promise<any> {
    return new Promise((resolve, reject) => {
      if (!file) reject('no file to upload.');
      const storageRef = ref(this.storage, file.name)
      uploadBytesResumable(storageRef, file)
        .then(res => resolve(res))
        .catch((error: Error) => console.error(error))
    })
  }
}
