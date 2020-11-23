import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest/guest';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {

  guestList: Guest[] = []
  constructor() { }

  ngOnInit(): void {
    this.guestList = [
      {
        id: 1,
        name: "Miguel",
        online: false
      },
      {
        id: 2,
        name: "Toto",
        online: true
      },
      {
        id: 3,
        name: "Miguel",
        online: false
      }
    ]
  }

  changeStatus() {
   this.guestList.forEach(guest => guest.online = !guest.online)
  }

  trackGuestById = (index: number, guest: Guest) => guest.id == index

}
