import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aadhar-verification',
  templateUrl: './aadhar-verification.component.html',
  styleUrls: ['./aadhar-verification.component.css']
})
export class AadharVerificationComponent {
  @ViewChild('ccNumber') ccNumberField!: ElementRef;
  @ViewChild('otp2') otp2!: ElementRef;
  @ViewChild('otp3') otp3!: ElementRef;
  @ViewChild('otp4') otp4!: ElementRef;
  @ViewChild('otp5') otp5!: ElementRef;
  @ViewChild('otp6') otp6!: ElementRef;
  paymentForm !: FormGroup;
  a = true;
  constructor(private fb: FormBuilder){
    this.paymentForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern('^[ 0-9]*$'), Validators.minLength(17)]]
    })
  }
  cardNumberSpacing() {
    debugger
    const input = this.ccNumberField.nativeElement;
    const { selectionStart } = input;
    const { cardNumber } = this.paymentForm.controls;

    let trimmedCardNum = cardNumber.value.replace(/\s+/g, '');

    if (trimmedCardNum.length > 16) {
      trimmedCardNum = trimmedCardNum.substr(0, 16);
    }

     /* Handle American Express 4-6-5 spacing format */
    const partitions = trimmedCardNum.startsWith('34') || trimmedCardNum.startsWith('37') 
                       ? [4,6,5] 
                       : [4,4,4,4];

    const numbers = [] as any;
    let position = 0;
    partitions.forEach(partition => {
      const part = trimmedCardNum.substr(position, partition);
      if (part) numbers.push(part);
      position += partition;
    })

    cardNumber.setValue(numbers.join(' '));

    /* Handle caret position if user edits the number later */
    if (selectionStart < cardNumber.value.length - 1) {
      input.setSelectionRange(selectionStart, selectionStart, 'none');
    }
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
