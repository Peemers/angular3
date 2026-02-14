import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'hidepipe',
})
export class HidepipePipe implements PipeTransform {

  transform(value: string): string {

    if (!value) return '';

    if (value.includes('@')) {
      const [localPart, domain] = value.split('@');
      const visible = localPart.substring(0, 2);
      return `${visible}*******@${domain}`;
    }
    return value.substring(0, 3) + '******'

  }
}
