import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-requests',
  templateUrl: './order-requests.component.html',
  styleUrls: ['./order-requests.component.css']
})
export class OrderRequestsComponent implements OnInit {
  orderRequests;

  constructor() { }

  // need to pull in from the service order objects and build orderRequests array.

  ngOnInit() {
  }

}
