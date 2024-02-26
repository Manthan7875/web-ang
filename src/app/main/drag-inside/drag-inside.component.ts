import { Component, OnInit } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

class DraggableLabel {
  text: string;
  left: number;
  top: number;
  isDragging: boolean;
  offsetX: number;
  offsetY: number;
  fontSize?: number;
  id? // Add fontSize property
  width?
  height?

}

@Component({
  selector: 'app-drag-inside',
  templateUrl: './drag-inside.component.html',
  styleUrls: ['./drag-inside.component.css']
})
export class DragInsideComponent implements OnInit {

  private svgElement: HTMLElement | null = null;
  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;




selectedLabel = new DraggableLabel(); // Track the selected label
currentFontSize: number = 14; // Initial font size


  labels: DraggableLabel[] = [
    {id:1, text: 'Label 1', left: 50, top: 50, isDragging: false, offsetX: 0, offsetY: 0 ,fontSize:10 },
    { id:2 ,text: 'Label 2', left: 150, top: 100, isDragging: false, offsetX: 0, offsetY: 0 ,fontSize:10}
    // Add more labels as needed
  ];

  buttons: any[] = [
    {id:3, text: 'Button 1' },
    {id:4, text: 'Button 2' }
    // Add more buttons as needed
  ];

  svgLeft: number = 0;
  svgTop: number = 0;

  barcodeLabel = new DraggableLabel();

  constructor() { }
  ngOnInit(): void {
    JsBarcode('#barcode', 'sssss', {
      format: 'code128', // default
      height: 10,
      width: 1,
      // displayValue: false,
      background: 'rgb(211,211,211)',
      fontSize: 11,
      displayValue: false,
      // margin: 5 * this.px2mmFactor, // 5mm
      // textMargin: 2 * this.px2mmFactor, // 2mm
      // textAlign: 'right',
      // textPosition: 'top',
      margin:2
    });
    this.barcodeLabel.fontSize = 14;
    this.barcodeLabel.width = 100,
    this.barcodeLabel.height = 50

    this.svgElement = document.getElementById('barcode');
    if (this.svgElement) {
      this.svgElement.addEventListener('mousedown', this.startDrag.bind(this));
    }
  }

   //for barcode svg start

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    const containerRect = document.querySelector('.container')!.getBoundingClientRect();
    this.offsetX = event.clientX - this.svgElement!.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.svgElement!.getBoundingClientRect().top;

    document.addEventListener('mousemove', this.dragMoveHandler.bind(this));
    document.addEventListener('mouseup', this.dragEndHandler.bind(this));
  }

  dragMoveHandler(event: MouseEvent) {
    if (this.isDragging && this.svgElement) {
      event.preventDefault();
      const containerRect = document.querySelector('.container')!.getBoundingClientRect();
      let newLeft = event.clientX - containerRect.left - this.offsetX;
      let newTop = event.clientY - containerRect.top - this.offsetY;

      // Ensure that the element stays within the container boundaries
      newLeft = Math.max(0, Math.min(newLeft, containerRect.width - this.svgElement.clientWidth));
      newTop = Math.max(0, Math.min(newTop, containerRect.height - this.svgElement.clientHeight));

      // this.svgElement.style.left = newLeft + 'px';
      // this.svgElement.style.top = newTop + 'px';

    // this.svgLeft = newLeft;
    // this.svgTop = newTop;

    this.barcodeLabel.left = newLeft;
    this.barcodeLabel.top = newTop;
    }
  }

  dragEndHandler() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.dragMoveHandler.bind(this));
    document.removeEventListener('mouseup', this.dragEndHandler.bind(this));
  }

  selectBarcodeLabel(){
    this.selectedLabel = this.barcodeLabel;
  }

  //for barcode svg end


  onMouseDown(event: MouseEvent, label: DraggableLabel) {
    label.isDragging = true;
    const labelRect = (event.target as HTMLElement).getBoundingClientRect();
    label.offsetX = event.clientX - labelRect.left;
    label.offsetY = event.clientY - labelRect.top;
    this.selectedLabel = label;
  }

  // onMouseMove(event: MouseEvent) {
  //   for (const label of this.labels) {
  //     if (label.isDragging) {
  //       event.preventDefault();
  //       const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  //       let newLeft = event.clientX - containerRect.left - label.offsetX;
  //       let newTop = event.clientY - containerRect.top - label.offsetY;

  //       // Calculate the width and height of the label dynamically based on its content
  //       const labelWidth = label.text.length * 8; // Adjust this value according to your font size and content
  //       const labelHeight = 20; // Adjust this value according to your font size

  //       // Limit movement within the container boundaries
  //       newLeft = Math.max(0, Math.min(newLeft, containerRect.width - labelWidth));
  //       newTop = Math.max(0, Math.min(newTop, containerRect.height - labelHeight));

  //       label.left = newLeft;
  //       label.top = newTop;
  //     }
  //   }
  // }

  // onMouseMove(event: MouseEvent) {
  //   for (const label of this.labels) {
  //     if (label.isDragging) {
  //       event.preventDefault();
  //       const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  //       let newLeft = event.clientX - containerRect.left - label.offsetX;
  //       let newTop = event.clientY - containerRect.top - label.offsetY;

  //       // Calculate the width and height of the label dynamically based on its content
  //       const tempElement = document.createElement('span');
  //       tempElement.textContent = label.text;
  //       tempElement.style.position = 'absolute';
  //       tempElement.style.visibility = 'hidden';
  //       document.body.appendChild(tempElement);
  //       const tempRect = tempElement.getBoundingClientRect();
  //       document.body.removeChild(tempElement);

  //       // Limit movement within the container boundaries
  //       newLeft = Math.max(0, Math.min(newLeft, containerRect.width - tempRect.width));
  //       newTop = Math.max(0, Math.min(newTop, containerRect.height - tempRect.height));

  //       label.left = newLeft;
  //       label.top = newTop;
  //     }
  //   }
  // }



  //MouseEvent
  onMouseMove(event: any) {
    for (const label of this.labels) {
      if (label.isDragging) {
        event.preventDefault();
        const containerRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
        let newLeft = event.clientX - containerRect.left - label.offsetX;
        let newTop = event.clientY - containerRect.top - label.offsetY;

        // Calculate the label's width and height dynamically based on its content and font size
        const labelWidth = label.text.length * label.fontSize / 2; // Adjust this value as needed
        const labelHeight = label.fontSize; // Adjust this value as needed

        // Limit movement within the container boundaries considering the label's width and height
        newLeft = Math.max(0, Math.min(newLeft, containerRect.width - labelWidth));
        newTop = Math.max(0, Math.min(newTop, containerRect.height - labelHeight));

        label.left = Math.round (newLeft);
        label.top = Math.round(newTop);
      }
    }
  }


  onMouseUp() {
    for (const label of this.labels) {
      label.isDragging = false;
    }
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  onDragStart(event: DragEvent, text: string ,id) {
    // Set the data to be transferred during the drag operation
    event.dataTransfer?.setData("text/plain", text);
    event.dataTransfer?.setData("id", id);
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer?.getData("text/plain");
    const id = event.dataTransfer?.getData("id");
    if (data) {
      const containerRect = (event.target as HTMLElement).getBoundingClientRect() as DOMRect;
      const x = Math.max(0, Math.min(event.clientX - containerRect.left, containerRect.width));
      const y = Math.max(0, Math.min(event.clientY - containerRect.top, containerRect.height));

      // Check if the drop occurred within the container boundaries
      if (x >= 0 && y >= 0 && x <= containerRect.width && y <= containerRect.height) {
        const newLabel: DraggableLabel = { text: data,id:Number(id), left: x,fontSize:10, top: y, isDragging: false, offsetX: 0, offsetY: 0 };
        if(!this.labels?.map((x)=>x.id)?.includes(Number(id))){
          this.labels?.push(newLabel);
        }
      }
    }
  }



  selectLabel(label: DraggableLabel) {
    this.selectedLabel = label;
    // this.currentFontSize = label.fontSize;
  }

  adjustFontSize($event) {
    // if (this.selectedLabel) {
    //   this.selectedLabel.fontSize = this.currentFontSize;
    // }
    // console.log($event);
    // this.onMouseMove($event)
  }

  calculateLabelWidth(label: DraggableLabel): number {
    // Assuming each character has an average width equivalent to half of the font size
    const averageCharWidth = 0.5 * label.fontSize;
    // Calculate the width based on the label's text length and average character width
    return label.text.length * averageCharWidth;
  }

  calculateLabelHeight(label: DraggableLabel): number {
    // The height is determined by the font size
    return label.fontSize;
  }

  // updateLeft(event: Event) {
  //   const value = +(event.target as HTMLInputElement).value;
  //   const containerRect = (document.querySelector('.container') as HTMLElement).getBoundingClientRect();
  //   const labelWidth = this.calculateLabelWidth(this.selectedLabel);
  //   this.selectedLabel.left = Math.round( Math.max(0, Math.min(value, containerRect.width - labelWidth)));
  //   console.log(this.selectedLabel)
  // }

  // updateTop(event: Event) {
  //   const value = +(event.target as HTMLInputElement).value;
  //   const containerRect = (document.querySelector('.container') as HTMLElement).getBoundingClientRect();
  //   const labelHeight = this.calculateLabelHeight(this.selectedLabel);
  //   this.selectedLabel.top = Math.round( Math.max(0, Math.min(value, containerRect.height - labelHeight)));
  //   console.log(this.selectedLabel)
  // }

  updateLeft(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const containerRect = (document.querySelector('.container') as HTMLElement).getBoundingClientRect();
    const labelWidth = this.calculateLabelWidth(this.selectedLabel);
    const maxLeft = containerRect.width - labelWidth;
    const inputElement = event.target as HTMLInputElement;

    if (value > maxLeft) {
      // If the input value exceeds the maximum left position, restrict further input
      inputElement.value = Math.round(maxLeft)?.toString();
      event.preventDefault(); // Prevent further input
    }

    this.selectedLabel.left = Math.round(Math.max(0, Math.min(value, maxLeft)));
  }

  updateTop(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const containerRect = (document.querySelector('.container') as HTMLElement).getBoundingClientRect();
    const labelHeight = this.calculateLabelHeight(this.selectedLabel);
    const maxTop = containerRect.height - labelHeight;
    const inputElement = event.target as HTMLInputElement;

    if (value > maxTop) {
      // If the input value exceeds the maximum top position, restrict further input
      inputElement.value =Math.round(maxTop)?.toString();
      event.preventDefault(); // Prevent further input
    }

    this.selectedLabel.top = Math.round(Math.max(0, Math.min(value, maxTop)));
  }


  updateWidth(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const containerRect = (document.querySelector('.container') as HTMLElement).getBoundingClientRect();
    const maxLabelWidth = containerRect.width - this.selectedLabel.left;
    const inputElement = event.target as HTMLInputElement;

    if (value > maxLabelWidth) {
      // If the input value exceeds the maximum label width, restrict further input
      inputElement.value = maxLabelWidth.toString();
      event.preventDefault(); // Prevent further input
    }

    this.selectedLabel.width = Math.max(0, Math.min(value, maxLabelWidth));
  }

  updateHeight(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    const containerRect = (document.querySelector('.container') as HTMLElement).getBoundingClientRect();
    const maxLabelHeight = containerRect.height - this.selectedLabel.top;
    const inputElement = event.target as HTMLInputElement;

    if (value > maxLabelHeight) {
      // If the input value exceeds the maximum label height, restrict further input
      inputElement.value = maxLabelHeight.toString();
      event.preventDefault(); // Prevent further input
    }

    this.selectedLabel.height = Math.max(0, Math.min(value, maxLabelHeight));
  }


}
