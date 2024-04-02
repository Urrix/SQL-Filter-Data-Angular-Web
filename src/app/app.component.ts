import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule, MatButtonModule, MatIconModule,MatMenuModule,RouterOutlet,MatSidenavModule,MatCardModule,MatDividerModule, MatButtonModule, MatProgressBarModule],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sqlWeb';
  @ViewChild('drawer') drawer!: ElementRef<HTMLElement>;
  longText = `..............................................................................
  .......................`;
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
