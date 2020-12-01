import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convierte los estados de licencia
 *
 * @export
 * @class StatusPipe
 * @implements {PipeTransform}
 */
@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch(value)
		{
			case 'ENTERED':
				return 'Ingresada';
			case 'AUTHORIZE':
				return 'Autorizada';
			case 'REJECTED':
				return 'Rechazada';
		}

  }

}

