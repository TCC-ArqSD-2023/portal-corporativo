import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'gisa-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  public valor: string = "";

  onChange = () => {};
  onTouched = () => {};
  touched = false;
  disabled = false;

  constructor() { }

  writeValue(valor: string): void {
    this.valor = valor;
  }

  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  marcarComoTouched(){
    if (!this.touched){
      this.onTouched();
      this.touched = true;
    }
  }

  ngOnInit(): void {
  }

}
