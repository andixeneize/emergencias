import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LicenseService } from '../license-service/license.service';

@Component({
  selector: 'app-license-list',
  templateUrl: './license-list.component.html',
  styleUrls: ['./license-list.component.scss']
})
export class LicenseListComponent implements OnInit {

  public licenses: any = [];
  public licenseDetail: any;

  /**
   *  Mapeo de campos para la tabla
   *
   * @memberof LicenseListComponent
   */
  public tableColumns = [
		{ headerName: 'ID', field: 'id' },
		{ headerName: 'Nombre', field: 'name' },
		{ headerName: 'Apellido', field: 'surname' },
		{ headerName: 'ID HR', field: 'tenant' },
		{ headerName: 'CUIL', field: 'cuil' },
		{ headerName: 'Licencia', field: 'typeLicense' },
		{ headerName: 'Unidad Organizativa', field: 'workstation' },
		{ headerName: 'Cargo', field: 'rol' },
		{ headerName: 'Fecha de inicio', field: 'initDate' },
		{ headerName: 'Fecha de fin', field: 'endingDate' },
		{ headerName: 'Estado', field: 'status' },
	];


  constructor(
    private licenseService: LicenseService
  ) { }

  ngOnInit(): void {
    console.log('Licencias: ' + this.licenses);
    
    // Se obtienen las licencias
    this.licenseService.getLicenses().subscribe( data => {
      console.log(data);
      this.licenses = data.content;
    });
  }

  public verDetalle( license: any ) {
    this.licenseDetail = license;
  }
}
