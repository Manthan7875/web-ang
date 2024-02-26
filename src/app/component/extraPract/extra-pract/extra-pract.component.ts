import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormArray } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-extra-pract',
  templateUrl: './extra-pract.component.html',
  styleUrls: ['./extra-pract.component.css']
})
export class ExtraPractComponent implements OnInit {



  myForm!: FormGroup;
imageUrl:any;
image:any;

//Load Data
items: number[] = [];
  displayedItems: number[] = [];
  isLoading = false;

  private sliceStart = 0;
  private sliceEnd = 10;
// Load data end

// inputFields = [
//   { id: 1, name: "input1", value: "" },
//   { id: 2, name: "input2", value: "" },
//   { id: 3, name: "input3", value: "" }
// ];
inputFields = [
  { id: 1, name: "input1", value: "" }
];

httpImageUrl1:any = 'http://18.221.38.133:5300/Uploads/Events/Cover/4910a3a7-9d18-475e-9dcb-f0a842f9ae24_638114341970714432.png';
httpImageUrl2:any = 'https://th.bing.com/th/id/OIP.M9AsZ7Sm6Qq-LXpY92Tt2AHaEK?pid=ImgDet&rs=1';


//buttons othres pract
buttons = [
  { name: 'Button 1' },
  { name: 'Button 2' },
  { name: 'Button 3' },
  { name: 'Button 4' },
  { name: 'Button 5' },
  { name: 'Button 6' },
  { name: 'Button 7' },
  { name: 'Button 8' },
  { name: 'Button 9' },
  { name: 'Button 10' }
];
//



  constructor(private fb: FormBuilder) { }

   ngOnInit(): void {
    this.items = Array.from({ length: 100 }, (_, i) => i + 1);
    this.displayedItems = this.items.slice(this.sliceStart, this.sliceEnd);

    this.myForm = this.fb.group({
      myFields: this.fb.array([])
    });
    this.addFields()
    // this.image = this.getFileFromUrl(this.httpImageUrl1 ,'example.jpg');
    // console.log( this.image);
    // this.getUrl(this.image);
    // document.getElementById('email')?.focus();



  }


  async  getFileFromUrl(url:any, name:any, defaultType = 'image/jpeg'){
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], name, {
      type: data.type || defaultType,
    });
  }

  async getUrl(a:any){
    console.log(a);
    const reader= new FileReader();
    reader.readAsDataURL(await a);
    reader.onload = (e:any)=>{
      console.log(e.target.result);
      console.log("manthan", e.target.result);
      this.imageUrl = e.target.result
    }

  }

  // `await` can only be used in an async body, but showing it here for simplicity.

  //region start dynamic add clone remove dynamic fields
  //clone fields
  cloneField(field: any) {
    const clonedField = { ...field, id: this.inputFields.length + 1 };
    this.inputFields = [...this.inputFields, clonedField];
  }

  addField() {
    const newField = { id: this.inputFields.length + 1, name: `input${this.inputFields.length + 1}`, value: "" };
    this.inputFields = [...this.inputFields, newField];
  }

  removeField(field: any) {
    if(this.inputFields.length > 1){
      this.inputFields = this.inputFields.filter(f => f !== field);
    }
  }

  Submit(){
    console.log(this.inputFields)
  }
//end


//reactive form dynamic
cloneFields(index: number) {
  const control = this.myForm.get('myFields') as FormArray;
  const field = control.at(index);
  const clone = this.fb.group({
    name: [field.get('name')?.value],
    value: [field.get('value')?.value]
  });
  // this.myForm.get('myFields')?.insert(index + 1, clone);
  control.insert(index + 1, clone)
}

removeFields(index: number) {
  const control = this.myForm.get('myFields') as FormArray;
  if(this.myForm.value.myFields.length > 1){
    control.removeAt(index);

  }
}

addFields() {
  const field = this.fb.group({
    name: [''],
    value: ['']
  });
  const control = this.myForm.get('myFields') as FormArray;

  // this.myForm.get('myFields').push(field);
  control.push(field)
}

formGet(): FormArray {
  return this.myForm.get('myFields') as FormArray;
}
submitForm(){
  console.log(this.myForm.value);
}
//region end

//region startload data to array;
onScroll(): void {
  const container = document.querySelector('.container');
  if (container) { // <-- Add null check here
    const scrolledHeight = container.scrollTop + container.clientHeight;
    const totalHeight = container.scrollHeight;

    // Check if the user has scrolled to the bottom of the container div
    if (scrolledHeight === totalHeight) {
      // Load more data
      this.loadData();
    }
  }
}


  loadData(): void {
    // Set isLoading to true to prevent the function from being called again
    this.isLoading = true;

    // Simulate an API call to load more data
    setTimeout(() => {
      // Push some new data into the array
      const newData = Array.from({ length: 10 }, (_, i) => this.items.length + i + 1);
      this.items.push(...newData);

      // Update sliceStart and sliceEnd to display the new data
      this.sliceStart = this.sliceEnd;
      this.sliceEnd += 10;
      this.displayedItems = this.items.slice(this.sliceStart, this.sliceEnd);

      // Set isLoading to false to allow the function to be called again
      this.isLoading = false;
    }, 1000);
  }


  // buttons show more start
  visibleButtons = this.buttons.slice(0, 2);

  showCount = true;

  addNewButton() {
    const newButton = { name: `Button ${this.buttons.length + 1}` };
    this.buttons.push(newButton);
    if (this.visibleButtons.length < this.buttons.length) {
      this.visibleButtons = this.buttons;
      this.showCount = false;
    } else {
      this.visibleButtons.push(newButton);
    }
  }

  showMore() {
    this.visibleButtons = this.buttons;
    this.showCount = false;
  }

  showLess() {
    this.visibleButtons = this.buttons.slice(0, 2);
    this.showCount = true;
  }

  ///////////////////////////////



  selectedDate: NgbDateStruct | undefined;
  selectedEventDates: Date[] = []; // Array to hold selected event dates

  onSelect(date: NgbDateStruct) {
    this.selectedDate = date;

    // Check if the selected date is already in the array
    if (!this.selectedEventDates.some(d => this.isSameDate(d, this.toDate(date)))) {
      this.selectedEventDates.push(this.toDate(date));
    }
  }

  isEventDate(date: NgbDateStruct): boolean {
    const eventDate = this.toDate(date);
    return this.selectedEventDates.some(selectedDate => this.isSameDate(selectedDate, eventDate));
  }

  isSameDate(date1: Date, date2: Date): boolean {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  toDate(date: NgbDateStruct): Date {
    return new Date(date.year, date.month - 1, date.day);
  }
}


