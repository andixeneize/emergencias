import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
	selector: 'reusable-table',
	templateUrl: './reusable-table.component.html',
	styleUrls: ['./reusable-table.component.scss']
})
export class ReusableTableComponent implements OnInit {

	public pageIndex = 1;
	public beforePageIndex = 0;
	public indexIndicator: number[] = [];
	public auxData: any[] = [];
	@Input() data: any[]  = [];
	@Input() dataChange!: Observable<any>;
	@Input() dataSource: string = '';
	@Input() columns: any = [];
	@Input() filters: any = [];
	@Input() defaults: any = [];
	@Input() paginator = true;
	@Input() resultLength = 0;
	@Input() typeLicense = 'admin';
	@Input() action = true;
	@Output() returnActions = new EventEmitter();
	@Output() returnData = new EventEmitter();
	@Output() returnModal = new EventEmitter();
	@Output() returnSortable = new EventEmitter();


	constructor(private router: Router) { }


	ngOnInit() {
		this.columns = this.columns;
		this.buildIndexPaginado();
	}
	
	ngOnChanges() {
		if (this.dataChange) {
			this.dataChange.subscribe((res: any) => {
				console.log(res);
				this.data = res;
				this.buildIndexPaginado();
			});
		}
	}

// Paginado

	buildIndexPaginado() {
		let value = this.resultLength;
		if (this.paginator) { // pregunto si el paginado lo hace el Front o back
			value = this.data.length;
		}
		if (value > 10 && value <= 20) {
			this.indexIndicator = [1, 2];
		} else if (value > 20 && value <= 30) {
			this.indexIndicator = [1, 2, 3];
		} else if (value > 30) {
			this.indexIndicator = [1, 2, 3, 4];
		}
	}


	customIndex(customIndex: number) {
		this.pageIndex = customIndex;
		this.beforePageIndex = (this.pageIndex * 10) - 10;
	}

	sortable(column: any) {
		const direction = (column.split(',')[1] === '' || column.split(',')[1] === 'desc') ? 'desc' : 'asc';
		const orderBy = `${column},${direction}`;
		this.returnSortable.emit(orderBy);
	}


	/**
	 * Muestra el cuil por consola
	 *
	 * @param {*} cuil
	 * @memberof ReusableTableComponent
	 */
	public historial( cuil: any) {
		console.log('Cuil: ' + cuil);
	}

	/**
	 * Muestra el doctor en consola
	 *
	 * @param {*} cuil
	 * @memberof ReusableTableComponent
	 */
	public getDoctor( doctor: any) {
		console.log('Doctor: ' + doctor.medicalUser.doctorRegisterNumber);
	}

	/**
	 * Emite el evento para ver el detalle de una solicitud
	 *
	 * @param {*} id
	 * @memberof ReusableTableComponent
	 */
	detail(license: any) {
		console.log('Ver detalle');
		this.returnActions.emit(license);
	}

}