import { NgModule } from "@angular/core";
import { ButtonsPage } from "./buttons-page/buttons-page.component";
import { SelectorPageComponent } from "./selector-page/selector-page.component";
import { NotificacionesPage } from "./notificaciones-page/notificaciones-page.component";
import { ListPageComponent } from "./list-page/list-page.component";
import { AnCoreModule, NotFoundPage } from "@aduana/an-core";

let components: any[] = [
    ButtonsPage,
    ListPageComponent,
    SelectorPageComponent,
    NotificacionesPage,
    // NotFoundPage
];

@NgModule(
    {
        declarations: components,
        imports: [
            AnCoreModule
        ],
        // exports: components
    }
)
export class DemoPageModule {}