import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-currencies-converter',
  templateUrl: './currencies-converter.component.html',
  styleUrls: ['./currencies-converter.component.scss']
})
export class CurrenciesConverterComponent implements OnInit {

  /*these are values by default during connection to Api*/
  key:string = "75d08d30-840b-11ec-9471-790f793e395e";
  currencyByDefault: string = "EUR";

  /*these are values concerning user inputs*/
  userInput!:number;
  convertedCurrency!:number

  /*these are values concerning currency to convert and currency in which to convert*/
  currencyToConvert!: string;
  currencyInWhichToConvert!: string;

  /*these are values in order to keep data entered*/
  currencies!: any;
  goal!:any;

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.registerDatas(this.key, this.currencyByDefault);
  }

  /*this function returns the url to connect to the api with the necessary parameters*/
  registerUrl(key: string, currency: string) {
    return `https://freecurrencyapi.net/api/v2/latest?apikey=${key}&base_currency=${currency}`;
  }

  /*this function register all the data about currencies name from api*/
  registerDatas(key:string, currency:string) {
    this.httpClient.get(this.registerUrl(key, currency))
      .subscribe(response=> {
        /*we assign to the variable currencies the value of the response*/
        this.currencies = response;
        this.goal = this.currencies;
        /*we assign to the variable currencies all the values of the keys of the data*/
        this.currencies = Object.keys(this.currencies.data);
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

  /*this function displays the converted result of the user input*/
  displayConvertedInput() {

    console.log('Hello World!')
  }
}
