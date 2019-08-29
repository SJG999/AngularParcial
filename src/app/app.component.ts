import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Santiago Jara Gonzalez';
  email = 'santiago-jarag@unilibre.edu.co';

  Elements:any = [
    {Number: 1, Symbol:'H',Name:'Hydrogen', Weight:'1.008', IsMetal:2, Category:'O'},
    {Number: 2, Symbol:'He',Name:'Helium', Weight:'4.0026', IsMetal:2, Category:'NG'},
    {Number: 3, Symbol:'Li',Name:'Lithium', Weight:'6.94', IsMetal:1, Category:'A'},
    {Number: 4, Symbol:'Be',Name:'Beryllium', Weight:'9.0122', IsMetal:1, Category:'A'},
    {Number: 5, Symbol:'B',Name:'Boron', Weight:'10.81', IsMetal:2, Category:'O'},
    {Number: 6, Symbol:'C',Name:'Carbon', Weight:'12.011', IsMetal:2, Category:'O'},
    {Number: 7, Symbol:'N',Name:'Nitrogen', Weight:'14.007', IsMetal:2, Category:'O'},
    {Number: 8, Symbol:'O',Name:'Oxygen', Weight:'15.99', IsMetal:2, Category:'O'},
    {Number: 9, Symbol:'F',Name:'Fluorine', Weight:'18.998', IsMetal:2, Category:'O'}  
  ]
}
