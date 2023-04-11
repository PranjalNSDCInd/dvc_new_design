import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent {
  openModal = false;
  @ViewChild('otp2') otp2!: ElementRef;
  @ViewChild('otp3') otp3!: ElementRef;
  @ViewChild('otp4') otp4!: ElementRef;
  @ViewChild('otp5') otp5!: ElementRef;
  @ViewChild('otp6') otp6!: ElementRef;
  constructor(){}

  ngOnInit(){}

  changeModal(){
    debugger
    this.openModal = !this.openModal;
  }


  changeFocus(id: number){
    debugger
    if(id===1){
      this.otp2.nativeElement.focus();
    } else if (id===2){
      this.otp3.nativeElement.focus();
    }else if (id===3){
      this.otp4.nativeElement.focus();
    }else if (id===4){
      this.otp5.nativeElement.focus();
    }else if (id===5){
      this.otp6.nativeElement.focus();
    }
  }
}
