import { Component } from '@angular/core';

@Component({
  selector: 'app-ferrari',
  templateUrl: './ferrari.component.html',
  styleUrls: ['./ferrari.component.scss']
})
export class FerrariComponent {

  isvisib_D:boolean=true;
  isvisib_C:boolean=true;
  isvisib_D_count=0;
  isvisib_C_count=0;
  ngOnInit(): void {
    this.isvisib_D_count=0;
    this.isvisib_D=true;
    this.isvisib_C_count=0;
    this.isvisib_C=true;
  }
  openDInfo(){
    this.isvisib_D_count=this.isvisib_D_count+1;
    if(this.isvisib_D_count%2!=0){
      this.isvisib_D=false;
    }
    else{
      this.isvisib_D=true;
    }
  }
  openCInfo(){
    this.isvisib_C_count=this.isvisib_C_count+1;
    if(this.isvisib_C_count%2!=0){
      this.isvisib_C=false;
    }
    else{
      this.isvisib_C=true;
    }
  }
}
