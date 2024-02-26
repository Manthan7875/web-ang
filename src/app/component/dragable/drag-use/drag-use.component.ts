import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';


@Component({
  selector: 'app-drag-use',
  templateUrl: './drag-use.component.html',
  styleUrls: ['./drag-use.component.css'],
})
export class DragUseComponent implements OnInit {
  //Load array data//
  items: string[] = [];

  displayedItems: string[] = [];

  isLoading = false;
  //end

  HEROES: { id: number; name: string }[] = [];
  @ViewChildren('dap')
  levels!: QueryList<ElementRef>;
  dragEl: any;
  constructor(el: ElementRef) {
    for (let i = 1; i <= 100; i++) {
      this.items.push(`Item ${i}`);
    }
    console.log(this.items);
    // Load the first 10 items
    this.loadItems();
  }

  ngOnInit() {
    this.HEROES = [
      { id: 1, name: 'Superman' },
      { id: 2, name: 'Batman' },
      { id: 5, name: 'BatGirl' },
      { id: 3, name: 'Robin' },
      { id: 4, name: 'Flash' },
    ];
    console.log(document.querySelectorAll('.box'));
  }
  ngAfterViewInit() {
    if (this.levels['_results']) {
      // console.log(this.levels['_results'])
      var items = this.levels['_results'].map(
        (el: { nativeElement: any }) => el.nativeElement
      );
      // console.log(items)
      var dragEl: any = null;

      function handleDragStart(this: any, e: any) {
        this.style.opacity = '0.4';

        dragEl = this;
        console.log('handleDragStart from c', this);
        console.log(this, this.innerHTML);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text', this.innerHTML);
      }

      function handleDragOver(e: any) {
        if (e.preventDefault) {
          e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
      }

      function handleDragEnter(this: any, e: any) {
        this.classList.add('over');
      }

      function handleDragLeave(this: any, e: any) {
        this.classList.remove('over');
      }

      function handleDrop(this: any, e: any) {
        if (e.stopPropagation) {
          e.stopPropagation();
        }

        if (dragEl != this) {
          dragEl.innerHTML = this.innerHTML;
          this.innerHTML = e.dataTransfer.getData('text');
        }

        return false;
      }

      function handleDragEnd(this: any, e: any) {
        this.style.opacity = '1';

        items.forEach(function (item: {
          classList: { remove: (arg0: string) => void };
        }) {
          item.classList.remove('over');
        });
      }

      items.forEach(function (item: {
        addEventListener: (
          arg0: string,
          arg1: {
            (e: any): void;
            (e: any): void;
            (e: any): boolean;
            (e: any): void;
            (e: any): boolean;
            (e: any): void;
          }
        ) => void;
      }) {
        // item.addEventListener('dragstart', handleDragStart);
        // item.addEventListener('dragenter', handleDragEnter);
        // item.addEventListener('dragover', handleDragOver);
        // item.addEventListener('dragleave', handleDragLeave);
        // item.addEventListener('drop', handleDrop);
        // item.addEventListener('dragend', handleDragEnd);
      });
    }
  }

  handleDragStart(e: any) {
    console.log('e', e);
    // e.style.opacity = '0.4';

    // this.dragEl = e;
    // console.log(this, e.innerHTML);

    // e.dataTransfer.effectAllowed = 'move';
    // e.dataTransfer.setData('text', e.innerHTML);
  }

  handleDragOver(e: any) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
  }

  handleDragEnter(e: any) {
    e.classList.add('over');
  }

  handleDragLeave(e: any) {
    e.classList.remove('over');
  }

  handleDrop(e: any) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    if (this.dragEl != e) {
      this.dragEl.innerHTML = e.innerHTML;
      e.innerHTML = e.dataTransfer.getData('text');
    }

    return false;
  }

  handleDragEnd(e: any) {
    e.style.opacity = '1';
  }

  //load data ts //

  loadItems() {
    this.isLoading = true;

    // Simulate an HTTP request with a delay
    setTimeout(() => {
      const startIndex = this.displayedItems.length;
      const endIndex = startIndex + 10;

      // Load the next 10 items
      this.displayedItems = this.displayedItems.concat(
        this.items.slice(startIndex, endIndex)
      );

      this.isLoading = false;
    }, 1000);
  }

  onScroll() {
    const container = document.querySelector('.container');
    if (container) {
      const maxScroll = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;

      if (maxScroll <= currentScroll + 10 && !this.isLoading) {
        this.loadItems();
      }
    }
  }
}
