import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  name = new FormControl("Sample name")
  radius = new FormControl(10)
  startingBid = new FormControl(250)
  fund = new FormControl(100)
  town = new FormControl("Cracow")

  constructor() { }

  ngOnInit(): void {
  }

}
