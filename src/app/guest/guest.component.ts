import { Input, SimpleChanges } from '@angular/core';
import { Component, OnChanges, OnInit } from '@angular/core';
import { Guest } from './guest';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
})
export class GuestComponent implements OnInit, OnChanges {
  constructor() {}

  @Input("current-guest") guest: Guest = {};

  currentGuest: Guest = {};
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    this.guest = changes.guest.currentValue as Guest;
  }
}
