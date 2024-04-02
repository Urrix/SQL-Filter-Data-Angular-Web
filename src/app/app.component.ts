import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

interface State {
  abbreviation: string;
  name: string;
  population: number;
  area: number;
}

const STATES_DATA: State[] = [
  {name: 'Aguascalientes', abbreviation: 'AGS', population: 1309755, area: 5471},
  {name: 'Baja California', abbreviation: 'BC', population: 3953765, area: 71058},
  {name: 'Baja California Sur', abbreviation: 'BCS', population: 716865, area: 73475},
  {name: 'Campeche', abbreviation: 'CAMP', population: 914730, area: 55364},
  {name: 'Coahuila de Zaragoza', abbreviation: 'COAH', population: 3016697, area: 151571},
  {name: 'Colima', abbreviation: 'COL', population: 735620, area: 5455},
  {name: 'Chiapas', abbreviation: 'CHIS', population: 5602042, area: 73416},
  {name: 'Chihuahua', abbreviation: 'CHIH', population: 3753700, area: 247455},
  {name: 'Distrito Federal', abbreviation: 'DF', population: 8919106, area: 1499},
  {name: 'Durango', abbreviation: 'DGO', population: 1786756, area: 123122},
  {name: 'Guanajuato', abbreviation: 'GTO', population: 6170342, area: 30591},
  {name: 'Guerrero', abbreviation: 'GRO', population: 3688446, area: 63792},
  {name: 'Hidalgo', abbreviation: 'HGO', population: 3013516, area: 20815},
  {name: 'Jalisco', abbreviation: 'JAL', population: 8000567, area: 80136},
  {name: 'México', abbreviation: 'MEX', population: 17024682, area: 197255},
  {name: 'Michoacán de Ocampo', abbreviation: 'MICH', population: 4615166, area: 58219},
  {name: 'Morelos', abbreviation: 'MOR', population: 1918372, area: 4895},
  {name: 'Nayarit', abbreviation: 'NAY', population: 1259576, area: 27822},
  {name: 'Nuevo León', abbreviation: 'NL', population: 5267977, area: 64271},
  {name: 'Oaxaca', abbreviation: 'OAX', population: 4093362, area: 93757},
  {name: 'Puebla', abbreviation: 'PUE', population: 6142784, area: 34036},
  {name: 'Querétaro de Arteaga', abbreviation: 'QRO', population: 2225694, area: 11683},
  {name: 'Quintana Roo', abbreviation: 'QROO', population: 1537905, area: 42526},
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule, RouterOutlet, MatSidenavModule,
    MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule
    , MatFormFieldModule, MatInputModule, MatTableModule],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sqlWeb';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(STATES_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @ViewChild('drawer') drawer!: ElementRef<HTMLElement>;
  longText = `check`;
  showFiller: boolean = false;

  toggleExtraText() {
    this.showFiller = !this.showFiller;
    if (this.showFiller) {
      // Adjust the sidenav's width when the extra text is shown
      const sidenavElement = this.drawer.nativeElement;
      sidenavElement.style.width = '400px';
    } else {
      // Reset the sidenav's width when the extra text is hidden
      // Set the width to the original value (250px)
      const sidenavElement = this.drawer.nativeElement;
      sidenavElement.style.width = '250px';
    }
  }
}

