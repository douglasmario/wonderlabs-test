import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  /**
   *
   */
  @Input()
  set totalPages(value: number) {
    const pages = Array(value);
    for (let i = 0; i < pages.length; i++){
      pages[i] = i + 1;
    }
    this.pages = pages;
  }

  @Output() pageSelection: EventEmitter<number> = new EventEmitter<number>();

  pages: number[];

  constructor(private smooth: SimpleSmoothScrollService) { }

  ngOnInit(): void {
  }

  /**
   * Handles a page change selection
   *
   * @param page Page Number
   */
  handlePageClick(page: number): void {
    this.pageSelection.emit(page);
    this.smooth.smoothScrollToTop({ duration: 500, easing: 'linear' });
  }


}
