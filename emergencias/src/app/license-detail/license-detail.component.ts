import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-license-detail',
  templateUrl: './license-detail.component.html',
  styleUrls: ['./license-detail.component.scss']
})
export class LicenseDetailComponent implements OnInit {

/**
 * Licencia
 *
 * @type {*}
 * @memberof LicenseDetailComponent
 */
@Input('license') license: any;

  constructor() { }

  ngOnInit(): void {
    console.log('License Detail component');
  }  

}
