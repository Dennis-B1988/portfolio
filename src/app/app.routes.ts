import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./main/main.component").then((m) => m.MainComponent),
  },
  {
    path: "privacy-policy",
    loadComponent: () =>
      import("./privacy-policy/privacy-policy.component").then(
        (m) => m.PrivacyPolicyComponent,
      ),
  },
  {
    path: "imprint",
    loadComponent: () =>
      import("./imprint/imprint.component").then((m) => m.ImprintComponent),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
