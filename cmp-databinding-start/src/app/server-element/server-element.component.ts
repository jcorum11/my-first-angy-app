import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  }
	@Input() name: string
	@ViewChild('heading', {static: true}) header: ElementRef
	@ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
		console.log('constructor called!')
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log(changes)
		console.log('ngOnChanges called!')
	}
	
  ngOnInit(): void {
		console.log('text content: ',this.header.nativeElement.textContent)
		console.log('Text Content of paragraph: ', this.paragraph)
  }

	ngDoCheck() {
		console.log('Do check called!')
	}

	ngAfterContentInit() {
		console.log('AfterContentInit called!')
	}

	ngAfterContentChecked() {
		console.log('AfterContentChecked called!')
	}

	ngAfterViewChecked() {
		console.log('AfterViewChecked called!')	
	}

	ngAfterViewInit() {
		console.log('AfterViewInit called!')	
	}

	ngOnDestroy() {
		console.log('OnDestroy called!')
	}
}
