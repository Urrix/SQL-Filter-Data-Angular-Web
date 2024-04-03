import { Routes } from '@angular/router';
import { BusquedasComponent } from './busquedas/busquedas.component';
import { FechaYHoraComponent } from './fecha-y-hora/fecha-y-hora.component';

export const routes: Routes = [
    {
        path: 'busquedas', component: BusquedasComponent
    },
    {
        path: 'fecha', component: FechaYHoraComponent
    }
];
