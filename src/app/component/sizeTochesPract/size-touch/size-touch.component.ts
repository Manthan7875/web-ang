import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-size-touch',
  templateUrl: './size-touch.component.html',
  styleUrls: ['./size-touch.component.css']
})
export class SizeTouchComponent implements OnInit , AfterViewInit {

  sampleArray = ['Button1', 'Button2', 'Button3','Button4444444','Button5','Button6','Button7', 'Button8', 'Button9','Button10','Button11','Button12',
  'Button13', 'Button14', 'Button15','Button16','Button17','Button18'];
  arrayContain:any[]=[];
  arr:any[]=[];
  show:any;
toggle:boolean=false;
showValfirst:any
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.ngAfterView();
    this.ngAfterView();

  }
  // ngAfterViewInit() {
  //   console.log("size")
  //   //const containerWidth = 200; // or you can use this.elRef.nativeElement.querySelector('.arrayContainer').offsetWidth;
  //   const containerWidth =  this.elRef.nativeElement.querySelector('.arrayContainer').offsetWidth;

  //   const buttonElements = this.elRef.nativeElement.querySelectorAll('.arrayContainer button');

  //   for (let i = 0; i < buttonElements.length; i++) {
  //     const buttonPosition = buttonElements[i].offsetLeft;
  //     const buttonWidth = buttonElements[i].offsetWidth;
  //     const buttonRight = buttonPosition + buttonWidth;

  //     if (buttonRight > containerWidth) {
  //       console.log(`Button ${i+1} touches the right border of the container`);
  //     }
  //   }
  // }

  ngAfterViewInit() {
    // setTimeout(() => {

    //   //const containerWidth = 200; // or you can use this.elRef.nativeElement.querySelector('.arrayContainer').offsetWidth;
    //   const containerWidth = this.elRef.nativeElement.querySelector('.arrayContainer').offsetWidth;

    //   const buttonElements = this.elRef.nativeElement.querySelectorAll('.arrayContainer button');
    //   // const containerWidth = 200 - (2 * 10) - (buttonElements.length - 1) * 5;


    //   for (let i = 0; i < buttonElements.length; i++) {
    //     const buttonPosition = buttonElements[i].offsetLeft;
    //     const buttonWidth = buttonElements[i].offsetWidth;
    //     const buttonRight = buttonPosition + buttonWidth;

    //     if (buttonRight > containerWidth) {
    //       console.log(`Button ${i+1} touches the right border of the container`);
    //     }
    //   }
    // }, 0);
  }

  ngAfterView() {
    this.arrayContain = this.sampleArray;

    setTimeout(() => {
      //const containerWidth = 200; // or you can use this.elRef.nativeElement.querySelector('.arrayContainer').offsetWidth;
      const containerWidth = this.elRef.nativeElement.querySelector('.arrayContainer').offsetWidth;

      const buttonElements = this.elRef.nativeElement.querySelectorAll('.arrayContainer button');
      // const containerWidth = 200 - (2 * 10) - (buttonElements.length - 1) * 5;


      for (let i = 0; i < buttonElements.length; i++) {
        const buttonPosition = buttonElements[i].offsetLeft;
        const buttonWidth = buttonElements[i].offsetWidth;
        const buttonRight = buttonPosition + buttonWidth;

        if (buttonRight > containerWidth) {
          let a = i-1;
          this.arr.push(a);
          this.show = this.arr[0];
          this.showValfirst = this.arr[0];
          console.log(this.show)
          console.log(`Button ${i+1} touches the right border of the container`);
        }
      }
    }, 0);
  }

  showOther(){
    this.show=this.arrayContain.length;
    console.log(this.show)
  }
  seeAllorLess(){
    if(this.toggle){
      this.show=this.arrayContain.length;
    }else{
      this.show = this.showValfirst;
    }

  }
}
