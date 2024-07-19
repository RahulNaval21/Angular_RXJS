import { Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../appServices/design-utility.service';

@Component({
  selector: 'from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent {

  constructor(private _designUtility: DesignUtilityService){

  }

  @ViewChild('addBtn')
  addBtn!: ElementRef;

  ngOnInit() : void {
      
  }

  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = "Video " + count++
      console.log(res)
      this._designUtility.print(countVal, 'elContainer')
      this._designUtility.print(countVal, 'elContainer2')
     
    })
  }


}
