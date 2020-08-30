import { Injectable } from '@angular/core';
import { Git } from '../git';


@Injectable({
  providedIn: 'root'
})
export class GitService {

  getGit(){
    return Git
  }

  constructor() { }
}
