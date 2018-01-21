import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationService, ApiService } from '@core/services';
import { Item, NotificationOptions } from '@shared/models';
import { APP_CONFIG, Config } from 'app/config';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewItemComponent implements OnInit {
  public loading = false;
  public newItemForm: FormGroup;

  constructor(
    @Inject(APP_CONFIG) private config: Config,
    private fb: FormBuilder,
    private apiService: ApiService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    // create instance of form
    this.newItemForm = this.createForm();
  }

  sendForm(data) {
    let result: boolean;
    this.loading = true;
    // get form values
    const { name, email, firstValue, multipleValues } = this.newItemForm.value;
    // validate result
    this._validateResult(firstValue, multipleValues) ? (result = true) : (result = false);
    // create new Item
    const item = new Item(name, email, firstValue, multipleValues, result);
    this.createItem(item);
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)],
      ],
      firstValue: ['', [Validators.required, Validators.pattern(/^[\d]+$/)]],
      multipleValues: ['', [Validators.required, Validators.pattern(/^[\d,]+\d+$/)]],
    });
  }

  private createItem(item: Item) {
    this.apiService.post('items', item).subscribe(
      response => {
        this._handleResponse('Item creado con exito', {
          closeText: 'Ver',
          link: `/${this.config.routes.items}`,
          duration: 60000,
        });
      },
      error => {
        this._handleResponse('Ha ocurrido un error', {
          closeText: 'Cerrar',
          link: null,
          duration: 5000,
        });
      }
    );
  }

  private _handleResponse(message: string, options: NotificationOptions) {
    this.loading = false;
    this.notificationService.showMessage(message, options);
  }

  private _validateResult(firstValue, multipleValues): boolean {
    const myValues: string[] = multipleValues.split(',');
    let i = 0;
    let result;
    myValues.forEach(element => {
      if (!result) {
        // add (+) before for transform string to number
        const firstElement = +myValues[i];
        // console.log('indice del primer arreglo', i, 'valor', firstElement);
        myValues.forEach((value, j) => {
          const secondElement = +value;
          // console.log('indice del segundo arreglo', j, 'valor', secondElement);
          if (i !== j) {
            // console.log(i, '<- id first second id ->', j);
            if (firstElement + secondElement === firstValue) {
              /* console.log(
                firstElement,
                'La suma es igual al primer valor',
                secondElement,
                'primer valor: ',
                firstValue
                ); */
              result = true;
            }
          }
        });
        i = i + 1;
      }
    });
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
