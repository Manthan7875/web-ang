import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  @ViewChild('container') myDiv: ElementRef;
  currentLable = 0
  bx = 0; by = 0;
  dragableLabels = [
    // { value: 'ThinkerSteps', x: 0, y: 0, id: 7 },
  ]
  selectedValue = ''
  isEditing = false;
  labelValue = 'asdf'
  currentId: number
  dropdown = [
    { id: 1, name: 'HID', isSelected: '' },
    { id: 2, name: 'Firm', isSelected: '' },
    { id: 3, name: 'Purity', isSelected: '' },
    { id: 4, name: 'ItemWT', isSelected: '' },
    { id: 5, name: 'ItemNWT', isSelected: '' },
    { id: 6, name: 'ProductId', isSelected: '' },
    { id: 7, name: 'ProductId', isSelected: '' },
    { id: 8, name: 'ProductId', isSelected: '' },
    { id: 9, name: 'ProductId', isSelected: '' },
    { id: 10, name: 'ProductId', isSelected: '' },
    { id: 11, name: 'ProductId', isSelected: '' },
  ]
  selectedList = [
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
    { id: 10, value: '' },
    { id: 11, value: '' },
    { id: 12, value: '' },
  ]
  dropdownList = [
    {
      list: this.dropdown,
      inputValue: { value: 'hid', label: 'hid', x: 0, y: 0, xV: 0, yV: 0, id: 18 },
      labelValue: '',
      selectedDrop: '',
      id: 1
    },
    {
      list: this.dropdown,
      inputValue: { value: 'product', label: 'product', x: 0, y: 0, xV: 0, yV: 0, id: 8 },
      labelValue: '',
      selectedDrop: '',
      id: 2
    },
    {
      list: this.dropdown,
      inputValue: { value: 'itemWT', label: 'itemWT', x: 0, y: 0, xV: 0, yV: 0, id: 9 },
      labelValue: '',
      selectedDrop: '',
      id: 3
    },
    {
      list: this.dropdown,
      inputValue: { value: 'itemNWT', label: 'itemNWT', x: 0, y: 0, xV: 0, yV: 0, id: 10 },
      labelValue: '',
      selectedDrop: '',
      id: 4
    },
    {
      list: this.dropdown,
      inputValue: { value: 'firm', label: 'firm', x: 0, y: 0, xV: 0, yV: 1, id: 11 },
      labelValue: '',
      selectedDrop: '',
      id: 5
    },
    {
      list: this.dropdown,
      inputValue: { value: 'mkgChrg:', label: 'mkgChrg', x: 0, y: 0, xV: 0, yV: 0, id: 12 },
      labelValue: '',
      selectedDrop: '',
      id: 6
    },
    {
      list: this.dropdown,
      inputValue: { value: 'barcNum:', label: 'barcNum', x: 0, y: 0, xV: 0, yV: 0, id: 13 },
      labelValue: '',
      selectedDrop: '',
      id: 7
    },
    {
      list: this.dropdown,
      inputValue: { value: 'caption5:', label: 'caption5', x: 0, y: 0, xV: 0, yV: 0, id: 14 },
      selectedDrop: '',
      id: 8,
      labelValue: ''
    },
    {
      list: this.dropdown,
      inputValue: { value: 'stWtName:', label: 'caption5', x: 0, y: 0, xV: 0, yV: 0, id: 15 },
      selectedDrop: '',
      id: 9,
      labelValue: ''
    },
    {
      list: this.dropdown,
      inputValue: { value: 'purity:', label: 'purity', x: 0, y: 0, xV: 0, yV: 0, id: 16 },
      selectedDrop: '',
      id: 10,
      labelValue: ''
    },
    {
      list: this.dropdown,
      inputValue: { value: 'none:', label: 'none', x: 0, y: 0, xV: 0, yV: 0, id: 17 },
      labelValue: '',
      selectedDrop: '',
      id: 11,
    },
  ]

  inputValue: string = 'Drag and Copy Me!';
  divHeight = 80
  divWidth = 250
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  ngAfterViewInit(): void {
    this.divWidth = this.myDiv.nativeElement.offsetWidth;
    this.divHeight = this.myDiv.nativeElement.offsetHeight;
    this.bx = 80;
    this.by = 20
  }
  ngOnInit(): void {
    this.dropdownList.map(value => {
      this.dragableLabels.push(value.inputValue)
    })

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
    });
  }
  lableWidth
  labelHeight
  changeX(event, data) {
    var element = document?.getElementById(data.id);
    if (element) {
      this.lableWidth = element.offsetWidth;
      let inputValue = event.target.value
      element.style.left = inputValue + 'px';
    }
  }
  changeY(event, data) {
    var element = document.getElementById(data.id);

    if (element) {
      this.labelHeight = element.offsetHeight;
      let inputValue = event.target.value
      element.style.top = inputValue + 'px';
    }
  }



  selectedOption: string;

  isOptionDisabled(option: string): boolean {
    // let data = false
    // this.dropdownList.map(value => {
    //   if(value.labelValue && value.labelValue !== option){
    //     data = true
    //   }
    // })
    // return data;
    return this.selectedOption && this.selectedOption !== option;
  }

  selectedLable: any
  dragged(event, data) {
    this.selectedLable = data.inputValue
  }



  onDrop(event: any) {
    var element = document.getElementById(this.selectedLable.id);
    const data = event.dataTransfer.getData('text/plain');
    var container = document.getElementById('mainContainer');
    const rect = container?.getBoundingClientRect();
    if (!element) {

      // const label = this.renderer.createElement('label');
      const label = document.createElement('label');
      if (container) {
        container.appendChild(label);
      }
      this.renderer.setProperty(label, 'textContent', data);
      this.renderer.setAttribute(label, 'id', this.selectedLable.id);
      console.log('the label  ', label.offsetWidth)

      let labelHeight = label.offsetHeight
      var labelWidth = label.offsetWidth
      this.renderer.listen(label, 'dragend', (event) => {
        let id = event.target.id
        labelWidth = label.offsetWidth;
        labelHeight = label.offsetHeight;
        if (event.clientY - rect.y < this.divHeight - labelHeight && event.clientY - rect.y > 0) {
          label.style.top = event.clientY - rect.y + 'px';
        }
        if (event.clientX - rect.x < this.divWidth - labelWidth && event.clientX - rect.x > 0) {
          label.style.left = event.clientX - rect.x + 'px';
        }
        this.dropdownList.map(value => {
          if (value.inputValue.id == Number(id)) {
            if (event.clientY - rect.y < this.divHeight -labelHeight && event.clientY - rect.y > 0) {
              value.inputValue.y = event.clientY - rect.y
            }
            if (event.clientX - rect.x < this.divWidth - labelWidth && event.clientX - rect.x > 0) {
              value.inputValue.x = event.clientX - rect.x
            }
          }
        })
      });
      label.style.position = 'absolute';
      label.style.fontSize = '10px';
      console.log('the vensd fa', event.clientX - rect.x < this.divWidth - labelWidth)
      if (event.clientY - rect.y < this.divHeight && event.clientY - rect.y > 0) {
        label.style.top = event.clientY - rect.y + 'px';
      }
      if (event.clientX - rect.x < this.divWidth && event.clientX - rect.x > 0) {

        label.style.left = event.clientX - rect.x + 'px';
      }
      label.setAttribute('draggable', 'true');
      this.dropdownList.map(value => {
        if (this.selectedLable.id == value.inputValue.id) {
          if (event.clientY - rect.y < this.divHeight  && event.clientY - rect.y > 0) {
            value.inputValue.y = event.clientY - rect.y
          }
          if (event.clientX - rect.x < this.divWidth  && event.clientX - rect.x > 0) {
            value.inputValue.x = event.clientX - rect.x
          }
        }
      })

    }
    // this.dragableLabels[1].value = 'love'
    this.dragableLabels.map(value => {
      if (value.id == this.selectedLable.id) {
        value.label = data
      }
    })
  }

  allowDrop(event: any) {
    event.preventDefault();
  }

  disableOptions(event, data) {
    this.dropdown.map(value => {
      if (value.id !== data.labelValue && value.isSelected == data.id) {
        value.isSelected = ''
      }
      if (value.id == data.labelValue) {
        value.isSelected = data.id
      }
    })

  }

  returnSelected(): boolean {

    let isSelected
    this.selectedList.map(value => {
      this.dropdown.map(dv => {
        if (value.value == dv.name) {
          isSelected = true
        }
      })
    })
    return isSelected
  }
  changeValue(event, data) {
    let label = data.inputValue
    var lableToChange = document.getElementById(label.id);
    if (lableToChange) {
      lableToChange.innerText = event.target.value
    }
  }

  dragEnd(event) {
    var container = document.getElementById('mainContainer');
    const rect = container?.getBoundingClientRect();
    // this.bx= event.clientX - rect.x
    // console.log('the rect is ', rect)
    // console.log('the x #### ',event.dropPoint.x - rect.x)
    // let xV = event.event.x - rect.x
    let xV = event.event.layerX

    let yV = event.event.y - rect.y
    // let yV = event.event.offsetY

    if (xV < this.divWidth && xV > 0) {
      this.bx = xV
    }
    // if(xV > this.divWidth - 110){
    //   console.log('thes eocn d')
    //   this.bx = xV - 110
    // }
    if (yV < this.divHeight - 30 && yV > 0) {
      this.by = yV
    }
  }




}
