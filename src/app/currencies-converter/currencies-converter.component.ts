import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-currencies-converter',
  templateUrl: './currencies-converter.component.html',
  styleUrls: ['./currencies-converter.component.scss']
})

export class CurrenciesConverterComponent implements OnInit {

  /*these are values by default concerning connection to Api*/
  key = 'e616e9a0-8429-11ec-9faa-ed54d6e4af3f';
  currencyByDefault = "EUR";

  /*these are values concerning user inputs*/
  userInput!: number;
  convertedCurrency!: number;

  /*these are values concerning currency to convert and currency in which to convert*/
  currencyToConvert!: string;
  currencyInWhichToConvert!: string;

  /*these are values in order to keep data entered*/
  currentValues!: any;
  finalValues!: any;

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.registerDatas(this.key, this.currencyByDefault);
  }

  /*this function returns the url to connect to the api with the necessary parameters*/
  registerUrl(key: string, currencyByDefault: string) {
    return `https://freecurrencyapi.net/api/v2/latest?apikey=
    ${key}&base_currency=${currencyByDefault}`;
  }

  /*this function register all the data about currencies name from api*/
  registerDatas(key:string, currency:string) {
    this.httpClient.get(this.registerUrl(key, currency))
      .subscribe(response=> {
        /*we assign to the variable currencies the value of the response*/
        this.currentValues = response;
        this.finalValues = this.currentValues;

        /*we assign to the variable currencies all the values of the keys of the data*/
        this.currentValues = Object.keys(this.currentValues.data);
      })
  }

  /*this function gets the currency to convert, selected by the user*/
  getCurrencyToConvert(event: any) {
    this.currencyToConvert = event.target.value;
    if(this.currencyToConvert != this.currencyByDefault) {
      this.registerDatas(this.key, this.currencyToConvert);
    }
    console.log("la devise selectionnée est : " + this.currencyToConvert);
  }

  /*this function gets the currency in which to convert, selected by the user*/
  getCurrencyInWhichToConvert(event:any) {
    this.currencyInWhichToConvert = event.target.value;
  }

  /*this function displays the button only if currencies have been chosen and amount inputted*/
  enableButton() {
    return !(this.currencyToConvert && this.userInput && this.currencyInWhichToConvert);
  }

  /*this function displays the converted result of the user input*/
  displayConvertedInput() {
    this.convertedCurrency =
      this.finalValues.data[this.currencyInWhichToConvert]
      *this.userInput
    console.log('Hello World!')
  }
}
