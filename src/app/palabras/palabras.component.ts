import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
@Component({
  selector: 'app-palabras',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,MatCardModule,MatDividerModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './palabras.component.html',
  styleUrl: './palabras.component.css'
})
export class AppComponent {
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