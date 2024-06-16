import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MainComponent } from './main/main.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
    },
    {
        path: 'imprint',
        component: ImprintComponent
    }
];
