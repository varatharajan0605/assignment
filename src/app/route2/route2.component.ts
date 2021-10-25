import { Component, OnInit } from '@angular/core';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import { RestEndpointService } from '../rest-endpoint.service';
@Component({
  selector: 'app-route2',
  templateUrl: './route2.component.html',
  styleUrls: ['./route2.component.css']
})
export class Route2Component implements OnInit {
  listViewIcon = faList;
  gridViewIcon = faTh;
  viewState: 'list' | 'grid' = 'list';
  products: any = [];
  refProducts: any = [];
  // products = Array<number>(40).fill(0);
  totalProducts = 100;
  loading = true;
  errorMsg = '';
  appliedFilter = '';

  constructor(private apiEndPoint: RestEndpointService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.apiEndPoint.getProducts().subscribe(res => {
      this.errorMsg = '';
      this.loading = false;
      // this result set has only 20 records. so it is being copied for next 20 records. and so on.
      this.products = [...this.products, ...res, ...res];
      // console.log('resp: ', this.products);
      this.refProducts = JSON.parse(JSON.stringify(this.products));
      // filter by
      this.filterBy();
    }, error => {
      this.loading = false;
      this.errorMsg = 'Unexpected error occurred. Please try again later.'
      // console.log('error while fetching: ', error);
    })
  }

  toggleViewState() {
    if (this.viewState === 'grid') {
      this.viewState = 'list';
    } else {
      this.viewState = 'grid';
    }
  }

  filterBy() {
    switch (this.appliedFilter) {
      case 'lowToHigh':
        this.products.sort((a: any, b: any) => {
          if (a.price < b.price) {
            return -1;
          } else if (a.price > b.price) {
            return 1;
          } else {
            return 0;
          }
        })
        break;
      case 'highToLow':
        this.products.sort((a: any, b: any) => {
          if (a.price > b.price) {
            return -1;
          } else if (a.price < b.price) {
            return 1;
          } else {
            return 0;
          }
        })
        break;
      default:
        this.products = JSON.parse(JSON.stringify(this.refProducts));
        break;
    }
  }

  nextPage() {
    this.getProducts();
  }

  prevPage() {
    this.products = this.products.slice(0, this.products.length - 40);
    // this.products.splice(-(this.products.length -1), 40);
    // console.log('after splice: ', this.products)
  }

  showListItems() {
    this.toggleViewState();
  }

  showGridItems() {
    this.toggleViewState();
  }

}
