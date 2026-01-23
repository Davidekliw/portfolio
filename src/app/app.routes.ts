import { Routes } from '@angular/router';

/**
 * Application routes.
 * Uses lazy-loaded standalone components for main content and legal pages.
 */
export const routes: Routes = [
    { path: '', loadComponent: () => import('./content/content.component').then(m => m.ContentComponent) },
    { path: 'impressum', loadComponent: () => import('./share/imprint/imprint.component').then(m => m.ImprintComponent) },
    { path: 'privacy-policy', loadComponent: () => import('./share/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent) },

    /** Fallback route for unknown paths. */
    { path: '**', redirectTo: '' },
];