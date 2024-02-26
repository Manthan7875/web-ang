import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SubServiceService } from './sub-service.service';

@Component({
  selector: 'app-extra-sub',
  templateUrl: './extra-sub.component.html',
  styleUrls: ['./extra-sub.component.css']
})
export class ExtraSubComponent implements OnInit {
  maxDate: string | undefined;
  constructor(private subServiceService : SubServiceService,private el: ElementRef) { }
  private childDivs: Element[] = [];
  private mainDiv: Element | null = null;


  ngAfterViewInit() {
    // Get the reference to the main div and its child divs
    this.mainDiv = this.el.nativeElement.querySelector('#mainDiv');
    if (this.mainDiv === null) return;
    this.childDivs = Array.from(this.mainDiv.querySelectorAll('.childDiv'));
  }


  // @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    // if (!this.mainDiv) return;

    // // Get the scroll position of the main div
    // const mainDivScrollTop = this.mainDiv.scrollTop;

    // // Find the child div that is on top inside the main div
    // let topChildDiv: Element | null = null;
    // let topChildDivTop = Number.MAX_SAFE_INTEGER;

    // for (const childDiv of this.childDivs) {
    //   const childDivRect = childDiv.getBoundingClientRect();
    //   const childDivTopRelativeToMainDiv = childDivRect.top + mainDivScrollTop;

    //   if (childDivTopRelativeToMainDiv >= 0 && childDivTopRelativeToMainDiv < topChildDivTop) {
    //     topChildDiv = childDiv;
    //     topChildDivTop = childDivTopRelativeToMainDiv;
    //   }
    // }

    // // Do something with the topChildDiv (e.g., apply styles or update content)
    // if (topChildDiv) {
    //   // Here, you can implement your logic to handle the topChildDiv.
    //   // For example, you can add a class to it to highlight it.
    //   console.log('Top Child Div inside Main Div:', topChildDiv);
    // }

    // if (!this.mainDiv) return;

    // // Get the scroll position of the main div
    // const mainDivScrollTop = this.mainDiv.scrollTop;

    // // Find the child divs that are visible inside the main div
    // const visibleChildDivs: Element[] = [];

    // for (const childDiv of this.childDivs) {
    //   const childDivRect = childDiv.getBoundingClientRect();
    //   const childDivTopRelativeToMainDiv = childDivRect.top + mainDivScrollTop;

    //   if (childDivTopRelativeToMainDiv >= 0 && childDivTopRelativeToMainDiv < this.mainDiv.clientHeight) {
    //     visibleChildDivs.push(childDiv);
    //   }
    // }

    // // Do something with the visibleChildDivs (e.g., apply styles or update content)
    // if (visibleChildDivs.length > 0) {
    //   // Here, you can implement your logic to handle the visibleChildDivs.
    //   // For example, you can log all visible child divs in the console.
    //   console.log('Visible Child Divs inside Main Div:', visibleChildDivs);
    // }

    // if (!this.mainDiv) return;

    // // Get the scroll position of the main div
    // const mainDivBottom = this.mainDiv.getBoundingClientRect().bottom;

    // // Find the first child div below the main div
    // let firstChildDivBelowMain: Element | null = null;

    // for (const childDiv of this.childDivs) {
    //   const childDivTop = childDiv.getBoundingClientRect().top;

    //   if (childDivTop > mainDivBottom) {
    //     firstChildDivBelowMain = childDiv;
    //     break;
    //   }
    // }

    // // Do something with the firstChildDivBelowMain
    // if (firstChildDivBelowMain) {
    //   // Here, you can implement your logic to handle the firstChildDivBelowMain.
    //   // For example, you can add a class to it to highlight it.
    //   console.log('First Child Div Below Main Div:', firstChildDivBelowMain);
    // }


    if (!this.mainDiv) return;
    // Get the top position of the main div
    const mainDivTop = this.mainDiv.getBoundingClientRect().top;

    // Find the first child div inside the main div
    let firstChildDivInsideMain: Element | null = null;
    let firstChildDivTop = Number.POSITIVE_INFINITY;

    for (const childDiv of this.childDivs) {
      const childDivTop = childDiv.getBoundingClientRect().top;

      if (childDivTop >= mainDivTop && childDivTop < firstChildDivTop) {
        firstChildDivInsideMain = childDiv;
        firstChildDivTop = childDivTop;
      }
    }

    // Do something with the firstChildDivInsideMain
    if (firstChildDivInsideMain) {
      // Here, you can implement your logic to handle the firstChildDivInsideMain.
      // For example, you can add a class to it to highlight it.
      console.log('First Child Div Inside Main Div:', firstChildDivInsideMain);
    }


  }





  ngOnInit(): void {
    // this.getData();

this.disabledDate()

  }

  getData(){
    this.subServiceService.getAllaccount().subscribe({
      next:res=>{
        console.log(res)
      },error:err=>{
        console.log(err)
      }
    })
  }

  disabledDate(){
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1); // Disable current day as well
    this.maxDate = currentDate.toISOString().split("T")[0];
  }

}
