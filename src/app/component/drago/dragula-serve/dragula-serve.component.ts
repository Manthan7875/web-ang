import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dragula-serve',
  templateUrl: './dragula-serve.component.html',
  styleUrls: ['./dragula-serve.component.css']
})
export class DragulaServeComponent implements OnInit {
  items: string[] = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  isLoading = false;


   // these are some basics to get you started -- modify as you see fit.

   vamps = [
    { name: "Bad Vamp",marginLeft:10,fontSize:10 },
    { name: "Petrovitch the Slain" },
    { name: "Bob of the Everglades" },
    { name: "The Optimistic Reaper" }
  ];

  vamps2 = [
    { name: "Dracula" },
    { name: "Kurz" },
    { name: "Vladislav" },
    { name: "Deacon" }
  ];
  vamps3 = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" }
  ];
  constructor(private elementRef: ElementRef ,private dragulaService: DragulaService) {
    // use these if you want

    this.dragulaService.createGroup("VAMPIRES", {
      // ...
    });

    this.dragulaService.dropModel("VAMPIRES").subscribe(args => {
      console.log(args);
    });
  }

  drag(event){
    console.log(event ,'dfdff')
  }


  ngOnInit(): void {
    // this.loadData();
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const container = this.elementRef.nativeElement.querySelector('.container');
    const scrollPosition = container?.scrollTop || 0;
    const maxScroll = container?.scrollHeight - container?.clientHeight || 0;

    if ( scrollPosition === maxScroll && !this.isLoading) {
      this.isLoading = true;
      this.loadData();
    }
  }

  loadData(): void {
    const newItems = Array.from({ length: 10 }, (_, i) => `Item ${this.items.length + i + 1}`);
    setTimeout(() => {
      this.items = [...this.items, ...newItems];
      this.isLoading = false;
    }, 1000);
  }




  //////////////////////////////////////////////////
  // isDragging: boolean = false;
  // initialX: number = 0;
  // initialY: number = 0;
  // offsetX: number = 0;
  // offsetY: number = 0;
  // left: number = 50; // Initial position
  // top: number = 50;  // Initial position

  // labels: DraggableLabel[] = [
  //   { text: 'Label 1', left: 50, top: 50, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 },
  //   { text: 'Label 2', left: 150, top: 100, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 },
  //   // Add more labels as needed
  // ];


  // onMouseDown(event: MouseEvent, index: number) {
  //   const label = this.labels[index];
  //   label.isDragging = true;
  //   const labelRect = (event.target as HTMLElement).getBoundingClientRect();
  //   label.offsetX = event.clientX - labelRect.left;
  //   label.offsetY = event.clientY - labelRect.top;
  // }

  // onMouseMove(event: MouseEvent) {
  //   for (const label of this.labels) {
  //     if (label.isDragging) {
  //       event.preventDefault();
  //       const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  //       let newLeft = event.clientX - containerRect.left - label.offsetX;
  //       let newTop = event.clientY - containerRect.top - label.offsetY;

  //       // Limit movement within the container boundaries
  //       newLeft = Math.max(0, Math.min(newLeft, containerRect.width));
  //       newTop = Math.max(0, Math.min(newTop, containerRect.height));

  //       label.left = newLeft;
  //       label.top = newTop;
  //     }
  //   }
  // }

  // onMouseUp(index: number) {
  //   const label = this.labels[index];
  //   label.isDragging = false;
  // }



  // //start 1

  // labels: DraggableLabel[] = [
  //   { text: 'Label 1', left: 50, top: 50, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 },
  //   { text: 'Label 2', left: 150, top: 100, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 },
  //   // Add more labels as needed
  // ];


  // onMouseDown(event: MouseEvent, label: DraggableLabel) {
  //   label.isDragging = true;
  //   const labelRect = (event.target as HTMLElement).getBoundingClientRect();
  //   label.initialX = event.clientX - labelRect.left;
  //   label.initialY = event.clientY - labelRect.top;
  // }

  // onMouseMove(event: MouseEvent) {
  //   for (const label of this.labels) {
  //     if (label.isDragging) {
  //       event.preventDefault();
  //       const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  //       const newLeft = event.clientX - containerRect.left - label.initialX;
  //       const newTop = event.clientY - containerRect.top - label.initialY;

  //       // Get label width and height
  //       const labelElement = document.querySelector('.draggable') as HTMLElement;
  //       const labelWidth = labelElement.offsetWidth;
  //       const labelHeight = labelElement.offsetHeight;

  //       // Limit movement within the container boundaries
  //       label.left = Math.max(0, Math.min(newLeft, containerRect.width - labelWidth));
  //       label.top = Math.max(0, Math.min(newTop, containerRect.height - labelHeight));
  //     }
  //   }
  // }


  // onMouseUp(label: DraggableLabel) {
  //   label.isDragging = false;
  // }

  // //end 1


  //start 2

  labels: DraggableLabel[] = [
    { text: 'Label 1', left: 50, top: 50, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 },
    { text: 'Label 2', left: 150, top: 100, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 },
    // Add more labels as needed
  ];


  onDragStart(event: DragEvent) {
    const text = (event.target as HTMLButtonElement).innerText;
    const newLabel: DraggableLabel = { text: text, left: 0, top: 0, isDragging: false, initialX: 0, initialY: 0, offsetX: 0, offsetY: 0 };
    this.labels.push(newLabel);
  }

  onMouseDown(event: MouseEvent, label: DraggableLabel) {
    label.isDragging = true;
    const labelRect = (event.target as HTMLElement).getBoundingClientRect();
    label.offsetX = event.clientX - labelRect.left;
    label.offsetY = event.clientY - labelRect.top;
  }

  onMouseMove(event: MouseEvent) {
    for (const label of this.labels) {
      if (label.isDragging) {
        event.preventDefault();
        const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        let newLeft = event.clientX - containerRect.left - label.offsetX;
        let newTop = event.clientY - containerRect.top - label.offsetY;

        // Limit movement within the container boundaries
        newLeft = Math.max(0, Math.min(newLeft, containerRect.width));
        newTop = Math.max(0, Math.min(newTop, containerRect.height));

        label.left = newLeft;
        label.top = newTop;
      }
    }
  }

  onMouseUp() {
    for (const label of this.labels) {
      label.isDragging = false;
    }
  }

  //end 2



}


// interface DraggableLabel {
//   text: string;
//   left: number;
//   top: number;
//   isDragging: boolean;
//   initialX: number;
//   initialY: number;
//   offsetX: number;
//   offsetY: number;
// }
interface DraggableLabel {
  text: string;
  left: number;
  top: number;
  isDragging: boolean;
  initialX: number;
  initialY: number;
  offsetX: number;
  offsetY: number;
}
