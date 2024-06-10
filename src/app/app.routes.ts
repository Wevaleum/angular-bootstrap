import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./features/explore/explore.module')
        .then(m => m.ExploreModule) },
    { path: 'explorers', loadChildren: () => import('./features/explorers/explorers.module')
        .then(m => m.ExplorersModule) },
    { path: '**', redirectTo: '/' }
];
