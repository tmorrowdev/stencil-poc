import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RemoteEntryComponent } from "./entry.component";
import { UI_ROUTES } from "./entry.routing";

NgModule({
    declarations:[RemoteEntryComponent],
    imports:[RouterModule.forChild(UI_ROUTES), CommonModule],
    exports:[RemoteEntryComponent]})
export class RemoteEntryModule{}