import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'property-tool-bar',
  templateUrl: './property-tool-bar.component.html',
})
export class PropertyToolBarComponent implements OnInit {
  @Input() totalsMessage: string = "";
  @Input() hasFilter: boolean = false;
  @Output() onSearch = new EventEmitter<void>();
  @Output() onShowFilter = new EventEmitter<boolean>()
  showFilter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    this.onSearch.emit();
  }

  toggleFilter(): void {
    this.showFilter = !this.showFilter;
    this.onShowFilter.emit(this.showFilter)
  }
}
