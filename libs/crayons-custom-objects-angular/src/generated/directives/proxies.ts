/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @angular-eslint/component-class-suffix */
/* eslint-disable @angular-eslint/no-inputs-metadata-property */
/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import * as Components from '@freshworks/crayons-custom-objects';



// import type { AccordionToggleEvent as IAccordionAccordionToggleEvent } from '@freshworks/crayons-custom-objects';


export declare interface DsAvatar extends Components.FwAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'image', 'initials', 'mode', 'name', 'shape', 'size']
})
@Component({
  selector: 'ds-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'image', 'initials', 'mode', 'name', 'shape', 'size']
})
export class DsAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsButton extends Components.FwButton {
  /**
   * Triggered when the button is clicked. 
   */
  fwClick: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when the button comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when the button loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'disabled', 'fileUploaderId', 'loading', 'modalTriggerId', 'showCaretIcon', 'size', 'throttleDelay', 'type'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'fileUploaderId', 'loading', 'modalTriggerId', 'showCaretIcon', 'size', 'throttleDelay', 'type']
})
export class DsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwClick', 'fwFocus', 'fwBlur']);
  }
}


export declare interface DsButtonGroup extends Components.FwButtonGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'ds-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class DsButtonGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsCheckbox extends Components.FwCheckbox {
  /**
   * Triggered when the checkbox state is modified. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the check box comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when the check box loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'description', 'disabled', 'errorText', 'hintText', 'label', 'name', 'required', 'state', 'value', 'warningText'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'description', 'disabled', 'errorText', 'hintText', 'label', 'name', 'required', 'state', 'value', 'warningText']
})
export class DsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwFocus', 'fwBlur']);
  }
}


export declare interface DsCoExport extends Components.FwCoExport {
  /**
   * Triggered whenever the export button is selected 
   */
  fwExport: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered whenever the cancel/close button is selected 
   */
  fwCloseExport: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['isOpen', 'value'],
  methods: ['close', 'open']
})
@Component({
  selector: 'ds-co-export',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isOpen', 'value']
})
export class DsCoExport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwExport', 'fwCloseExport']);
  }
}


export declare interface DsCoExportField extends Components.FwCoExportField {
  /**
   * Triggered whenever the export button is selected 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['value']
})
@Component({
  selector: 'ds-co-export-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class DsCoExportField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsCountryPhone extends Components.FwCountryPhone {
  /**
   * Triggered when phone element is input. 
   */
  fwInput: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when phone element is blur. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when clear icon is clicked. 
   */
  fwInputClear: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when input is focused. 
   */
  fwFocus: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['clearInput', 'disabled', 'errorText', 'hideCountryFlag', 'hideCountryName', 'hintText', 'inputLabel', 'inputPlaceholder', 'name', 'readonly', 'required', 'selectLabel', 'selectPlaceholder', 'state', 'value', 'warningText'],
  methods: ['isValidPhoneNumber', 'parsePhoneNumber']
})
@Component({
  selector: 'ds-country-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clearInput', 'disabled', 'errorText', 'hideCountryFlag', 'hideCountryName', 'hintText', 'inputLabel', 'inputPlaceholder', 'name', 'readonly', 'required', 'selectLabel', 'selectPlaceholder', 'state', 'value', 'warningText']
})
export class DsCountryPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwInput', 'fwBlur', 'fwInputClear', 'fwFocus']);
  }
}


export declare interface DsCustomCellAnchor extends Components.FwCustomCellAnchor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['href', 'target', 'text']
})
@Component({
  selector: 'ds-custom-cell-anchor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href', 'target', 'text']
})
export class DsCustomCellAnchor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsCustomCellIcon extends Components.FwCustomCellIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'library', 'name', 'size', 'src']
})
@Component({
  selector: 'ds-custom-cell-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'library', 'name', 'size', 'src']
})
export class DsCustomCellIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsCustomCellParagraph extends Components.FwCustomCellParagraph {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['text']
})
@Component({
  selector: 'ds-custom-cell-paragraph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text']
})
export class DsCustomCellParagraph {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsCustomCellUser extends Components.FwCustomCellUser {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'email', 'image', 'name']
})
@Component({
  selector: 'ds-custom-cell-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'email', 'image', 'name']
})
export class DsCustomCellUser {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsDataTable extends Components.FwDataTable {
  /**
   * fwSelectionChange Emits this event when row is selected/unselected. 
   */
  fwSelectionChange: EventEmitter<CustomEvent<any>>;
  /**
   * fwSelectAllChange Emits this event when select all is checked. 
   */
  fwSelectAllChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoSaveSettings', 'columns', 'isAllSelectable', 'isLoading', 'isSelectable', 'label', 'rowActions', 'rows', 'shimmerCount', 'showSettings'],
  methods: ['selectAllRows', 'getSelectedRows', 'getSelectedIds', 'getTableSettings', 'setTableSettings', 'loadTable']
})
@Component({
  selector: 'ds-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoSaveSettings', 'columns', 'isAllSelectable', 'isLoading', 'isSelectable', 'label', 'rowActions', 'rows', 'shimmerCount', 'showSettings']
})
export class DsDataTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSelectionChange', 'fwSelectAllChange']);
  }
}


export declare interface DsDateCondition extends Components.FwDateCondition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'showError', 'value'],
  methods: ['isValid', 'setError', 'refresh']
})
@Component({
  selector: 'ds-date-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'showError', 'value']
})
export class DsDateCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsDatepicker extends Components.FwDatepicker {
  /**
   * Triggered when the update button clicked 
   */
  fwChange: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the input box loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'clearInput', 'disabled', 'displayFormat', 'errorText', 'fromDate', 'hintText', 'label', 'locale', 'maxDate', 'maxYear', 'minDate', 'minYear', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showFooter', 'showTimePicker', 'state', 'timeFormat', 'timeProps', 'toDate', 'updateText', 'value', 'warningText'],
  methods: ['getValue', 'setFocus', 'clearValue']
})
@Component({
  selector: 'ds-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'clearInput', 'disabled', 'displayFormat', 'errorText', 'fromDate', 'hintText', 'label', 'locale', 'maxDate', 'maxYear', 'minDate', 'minYear', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showFooter', 'showTimePicker', 'state', 'timeFormat', 'timeProps', 'toDate', 'updateText', 'value', 'warningText']
})
export class DsDatepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwBlur']);
  }
}


export declare interface DsDragContainer extends Components.FwDragContainer {
  /**
   * Triggered when an draggable item is dropped inside the container. 
   */
  fwDrop: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['acceptFrom', 'addOnDrop', 'copy', 'placeholderClass', 'sortable']
})
@Component({
  selector: 'ds-drag-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['acceptFrom', 'addOnDrop', 'copy', 'placeholderClass', 'sortable']
})
export class DsDragContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDrop']);
  }
}


export declare interface DsDragItem extends Components.FwDragItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'pinned', 'showDragIcon']
})
@Component({
  selector: 'ds-drag-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'pinned', 'showDragIcon']
})
export class DsDragItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsFbFieldDropdown extends Components.FwFbFieldDropdown {
  /**
   * Triggered on data change for error handling on parent 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataProvider', 'isLoading', 'showErrors'],
  methods: ['validateErrors']
})
@Component({
  selector: 'ds-fb-field-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'isLoading', 'showErrors']
})
export class DsFbFieldDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsFbFieldDropdownItem extends Components.FwFbFieldDropdownItem {
  /**
   * Triggered on delete button click 
   */
  fwDelete: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered on choice input blur 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataProvider', 'index', 'isLoading', 'isNewChoice', 'showErrors', 'sortable']
})
@Component({
  selector: 'ds-fb-field-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'index', 'isLoading', 'isNewChoice', 'showErrors', 'sortable']
})
export class DsFbFieldDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDelete', 'fwChange']);
  }
}


export declare interface DsFbFieldLookup extends Components.FwFbFieldLookup {
  /**
   * Triggered on data change for error handling on parent 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataResponse', 'formValues', 'showErrors', 'sourceObjectName', 'targetObjects']
})
@Component({
  selector: 'ds-fb-field-lookup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataResponse', 'formValues', 'showErrors', 'sourceObjectName', 'targetObjects']
})
export class DsFbFieldLookup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsFieldEditor extends Components.FwFieldEditor {
  /**
   * Triggered when the field is expanded or collapsed 
   */
  fwExpand: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the field details need to be saved on the server 
   */
  fwUpdate: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the field has to be deleted on the server 
   */
  fwDelete: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataProvider', 'defaultFieldTypeSchema', 'disabled', 'disabledSort', 'enableFilterable', 'enableUnique', 'entityName', 'expanded', 'formValues', 'index', 'isLoading', 'isPrimaryField', 'lookupTargetObjects', 'name', 'pinned']
})
@Component({
  selector: 'ds-field-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'defaultFieldTypeSchema', 'disabled', 'disabledSort', 'enableFilterable', 'enableUnique', 'entityName', 'expanded', 'formValues', 'index', 'isLoading', 'isPrimaryField', 'lookupTargetObjects', 'name', 'pinned']
})
export class DsFieldEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwExpand', 'fwUpdate', 'fwDelete']);
  }
}


export declare interface DsFieldTypeMenuItem extends Components.FwFieldTypeMenuItem {
  /**
   * Triggered when the the add button is clicked. 
   */
  fwAddClick: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataProvider', 'disabled', 'iconBackgroundColor', 'iconName', 'index', 'label', 'name', 'tooltip', 'value']
})
@Component({
  selector: 'ds-field-type-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'disabled', 'iconBackgroundColor', 'iconName', 'index', 'label', 'name', 'tooltip', 'value']
})
export class DsFieldTypeMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwAddClick']);
  }
}


export declare interface DsFileUploader extends Components.FwFileUploader {
  /**
   * filesUploaded - event that gets emitted when files get uploaded 
   */
  fwFilesUploaded: EventEmitter<CustomEvent<any>>;
  /**
   * fileReuploaded - event that gets emitted when file is reuploaded 
   */
  fwFileReuploaded: EventEmitter<CustomEvent<any>>;
  /**
   * stageChanged - event that gets emitted when component stage changes 
   */
  fwStageChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['accept', 'acceptError', 'actionParams', 'actionURL', 'description', 'fileUploadError', 'filesLimit', 'hint', 'maxFileSize', 'maxFileSizeError', 'maxFilesLimitError', 'modifyRequest', 'multiple', 'name', 'text'],
  methods: ['getFiles', 'uploadFiles', 'reset']
})
@Component({
  selector: 'ds-file-uploader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'acceptError', 'actionParams', 'actionURL', 'description', 'fileUploadError', 'filesLimit', 'hint', 'maxFileSize', 'maxFileSizeError', 'maxFilesLimitError', 'modifyRequest', 'multiple', 'name', 'text']
})
export class DsFileUploader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFilesUploaded', 'fwFileReuploaded', 'fwStageChanged']);
  }
}


export declare interface DsFileUploaderFile extends Components.FwFileUploaderFile {
  /**
   * removeFile - event that gets triggered on file removal 
   */
  fwRemoveFile: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['fileId', 'name']
})
@Component({
  selector: 'ds-file-uploader-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fileId', 'name']
})
export class DsFileUploaderFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwRemoveFile']);
  }
}


export declare interface DsFileUploaderProgress extends Components.FwFileUploaderProgress {
  /**
   * retryUpload event to emit in case of a retry 
   */
  fwRetryUpload: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['error', 'fileId', 'fileName', 'progress']
})
@Component({
  selector: 'ds-file-uploader-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['error', 'fileId', 'fileName', 'progress']
})
export class DsFileUploaderProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwRetryUpload']);
  }
}


export declare interface DsFilter extends Components.FwFilter {
  /**
   * Triggered whenever the user selects/removes a filter option. 
   */
  fwFilterChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['conditionSchema', 'filters', 'value'],
  methods: ['getValue', 'clearFilter', 'resetFilter']
})
@Component({
  selector: 'ds-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['conditionSchema', 'filters', 'value']
})
export class DsFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFilterChange']);
  }
}


export declare interface DsFilterCondition extends Components.FwFilterCondition {
  /**
   * Event Triggered on deleting an filter condition 
   */
  fwDelete: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['condition', 'conditionSchema', 'controlProps', 'filterOn', 'filterText', 'identifier', 'selectedCondition', 'value', 'valueState'],
  methods: ['isValid']
})
@Component({
  selector: 'ds-filter-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['condition', 'conditionSchema', 'controlProps', 'filterOn', 'filterText', 'identifier', 'selectedCondition', 'value', 'valueState']
})
export class DsFilterCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDelete']);
  }
}


export declare interface DsFilterDropdown extends Components.FwFilterDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['options', 'value']
})
@Component({
  selector: 'ds-filter-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options', 'value']
})
export class DsFilterDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsForm extends Components.FwForm {
  /**
   * fwFormValuesChanged - event that gets emitted when values change. 
   */
  fwFormValuesChanged: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['formId', 'formSchema', 'initialValues', 'validate', 'validateOnBlur', 'validateOnInput', 'validationSchema', 'wait'],
  methods: ['setFieldValue', 'setFieldErrors', 'getValues', 'doSubmit', 'doReset']
})
@Component({
  selector: 'ds-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['formId', 'formSchema', 'initialValues', 'validate', 'validateOnBlur', 'validateOnInput', 'validationSchema', 'wait']
})
export class DsForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFormValuesChanged']);
  }
}


export declare interface DsFormBuilder extends Components.FwFormBuilder {
  /**
   * Triggered on Add/Save field button click from the field list items 
   */
  fwSaveField: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered on Delete field button click from the field list items 
   */
  fwDeleteField: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when a new field type is dropped / added inside the fields area 
   */
  fwComposeNewField: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the position of a field is changed using drag and drop 
   */
  fwRepositionField: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the field is expanded or collapsed 
   */
  fwExpandField: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered on search 
   */
  fwSearchField: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered on saving the widget fields 
   */
  fwSaveWidgetFields: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['customizeWidgetFields', 'emptySearchImage', 'expandedFieldIndex', 'formValues', 'isLoading', 'isSavingCustomizeWidget', 'lookupTargetObjects']
})
@Component({
  selector: 'ds-form-builder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customizeWidgetFields', 'emptySearchImage', 'expandedFieldIndex', 'formValues', 'isLoading', 'isSavingCustomizeWidget', 'lookupTargetObjects']
})
export class DsFormBuilder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSaveField', 'fwDeleteField', 'fwComposeNewField', 'fwRepositionField', 'fwExpandField', 'fwSearchField', 'fwSaveWidgetFields']);
  }
}


export declare interface DsFormControl extends Components.FwFormControl {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['choices', 'controlProps', 'error', 'fieldProps', 'hint', 'label', 'name', 'placeholder', 'required', 'touched', 'type'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-form-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['choices', 'controlProps', 'error', 'fieldProps', 'hint', 'label', 'name', 'placeholder', 'required', 'touched', 'type']
})
export class DsFormControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsFormatDate extends Components.FwFormatDate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['date', 'day', 'hour', 'hourFormat', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
@Component({
  selector: 'ds-format-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['date', 'day', 'hour', 'hourFormat', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
export class DsFormatDate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsFormatNumber extends Components.FwFormatNumber {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['currency', 'currencyDisplay', 'currencySign', 'locale', 'maximumFractionDigits', 'maximumSignificantDigits', 'minimumFractionDigits', 'minimumIntegerDigits', 'minimumSignificantDigits', 'type', 'useGrouping', 'value']
})
@Component({
  selector: 'ds-format-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currency', 'currencyDisplay', 'currencySign', 'locale', 'maximumFractionDigits', 'maximumSignificantDigits', 'minimumFractionDigits', 'minimumIntegerDigits', 'minimumSignificantDigits', 'type', 'useGrouping', 'value']
})
export class DsFormatNumber {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsIcon extends Components.FwIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'dataSvg', 'height', 'label', 'lazy', 'library', 'name', 'size', 'src', 'url', 'width', 'xRootMargin']
})
@Component({
  selector: 'ds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'dataSvg', 'height', 'label', 'lazy', 'library', 'name', 'size', 'src', 'url', 'width', 'xRootMargin']
})
export class DsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsInlineMessage extends Components.FwInlineMessage {
  /**
   * Triggered when inline message is shown. 
   */
  fwShow: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when inline message is hidden. 
   */
  fwHide: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closable', 'duration', 'open', 'type'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ds-inline-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closable', 'duration', 'open', 'type']
})
export class DsInlineMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwShow', 'fwHide']);
  }
}


export declare interface DsInput extends Components.FwInput {
  /**
   * Triggered when the input box comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when the input box loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when a value is entered in the input box. 
   */
  fwInput: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when clear icon is clicked. 
   */
  fwInputClear: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autocomplete', 'clearInput', 'disabled', 'errorText', 'hintText', 'iconLeft', 'iconRight', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'state', 'step', 'type', 'value', 'warningText'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocomplete', 'clearInput', 'disabled', 'errorText', 'hintText', 'iconLeft', 'iconRight', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'state', 'step', 'type', 'value', 'warningText']
})
export class DsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFocus', 'fwBlur', 'fwInput', 'fwInputClear']);
  }
}


export declare interface DsInputCondition extends Components.FwInputCondition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'showError', 'value'],
  methods: ['isValid', 'setError', 'refresh']
})
@Component({
  selector: 'ds-input-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'showError', 'value']
})
export class DsInputCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsInputRangeCondition extends Components.FwInputRangeCondition {
  /**
   * Triggered when the value in the input box is modified. 
   */
  fwInput: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'value'],
  methods: ['isValid']
})
@Component({
  selector: 'ds-input-range-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'value']
})
export class DsInputRangeCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwInput']);
  }
}


export declare interface DsLabel extends Components.FwLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'value']
})
@Component({
  selector: 'ds-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'value']
})
export class DsLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsListOptions extends Components.FwListOptions {
  /**
   * Triggered when a value is selected or deselected from the list box options. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the options list is in loading state processing the search function. 
   */
  fwLoading: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'debounceTimer', 'disabled', 'filterText', 'formatCreateLabel', 'hideTick', 'isCreatable', 'max', 'multiple', 'noDataText', 'notFoundText', 'options', 'search', 'searchText', 'searchable', 'selectedOptions', 'validateNewOption', 'value', 'variant'],
  methods: ['clearFilter', 'scrollToLastSelected', 'getSelectedOptions', 'setSelectedValues', 'setSelectedOptions', 'setFocus']
})
@Component({
  selector: 'ds-list-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'debounceTimer', 'disabled', 'filterText', 'formatCreateLabel', 'hideTick', 'isCreatable', 'max', 'multiple', 'noDataText', 'notFoundText', 'options', 'search', 'searchText', 'searchable', 'selectedOptions', 'validateNewOption', 'value', 'variant']
})
export class DsListOptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwLoading']);
  }
}


export declare interface DsMenu extends Components.FwMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ds-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DsMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsMenuItem extends Components.FwMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['selectable', 'selected']
})
@Component({
  selector: 'ds-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['selectable', 'selected']
})
export class DsMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsModal extends Components.FwModal {
  /**
   * Triggered when the default action button is clicked. 
   */
  fwSubmit: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when modal is opened. 
   */
  fwOpen: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when modal is closed. 
   */
  fwClose: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'description', 'hasCloseIconButton', 'hideFooter', 'icon', 'isOpen', 'size', 'slider', 'submitColor', 'submitDisabled', 'submitText', 'titleText'],
  methods: ['close', 'open']
})
@Component({
  selector: 'ds-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'description', 'hasCloseIconButton', 'hideFooter', 'icon', 'isOpen', 'size', 'slider', 'submitColor', 'submitDisabled', 'submitText', 'titleText']
})
export class DsModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSubmit', 'fwOpen', 'fwClose']);
  }
}


export declare interface DsModalContent extends Components.FwModalContent {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'ds-modal-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class DsModalContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsModalFooter extends Components.FwModalFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'close', 'submit', 'submitColor', 'submitDisabled', 'submitText']
})
@Component({
  selector: 'ds-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'close', 'submit', 'submitColor', 'submitDisabled', 'submitText']
})
export class DsModalFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsModalTitle extends Components.FwModalTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['description', 'icon', 'titleText']
})
@Component({
  selector: 'ds-modal-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'icon', 'titleText']
})
export class DsModalTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsPagination extends Components.FwPagination {
  /**
   * Triggered when either previous or next button is clicked. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['buttonGroupLabel', 'isLoading', 'nextButtonLabel', 'page', 'perPage', 'previousButtonLabel', 'total'],
  methods: ['previousPage', 'nextPage']
})
@Component({
  selector: 'ds-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonGroupLabel', 'isLoading', 'nextButtonLabel', 'page', 'perPage', 'previousButtonLabel', 'total']
})
export class DsPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsPill extends Components.FwPill {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'ds-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class DsPill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsPlatformTable extends Components.FwPlatformTable {
  /**
   * Triggered on selecting the sort option. 
   */
  fwDelete: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered on page navigation button click. 
   */
  fwPagination: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['isSelectable', 'loading', 'order', 'orderBy', 'paginationProps', 'showError', 'sortableColumns', 'tableProps'],
  methods: ['clearTableSelection']
})
@Component({
  selector: 'ds-platform-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isSelectable', 'loading', 'order', 'orderBy', 'paginationProps', 'showError', 'sortableColumns', 'tableProps']
})
export class DsPlatformTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDelete', 'fwPagination']);
  }
}


export declare interface DsPopover extends Components.FwPopover {
  /**
   * Triggered whenever the popover contents is open/displayed. 
   */
  fwShow: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered whenever the popover contents is closed/hidden. 
   */
  fwHide: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autoFocusOnContent', 'boundary', 'disableTransition', 'distance', 'fallbackPlacements', 'hasBorder', 'hideOnTab', 'hoist', 'placement', 'sameWidth', 'skidding', 'trigger', 'variant'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ds-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocusOnContent', 'boundary', 'disableTransition', 'distance', 'fallbackPlacements', 'hasBorder', 'hideOnTab', 'hoist', 'placement', 'sameWidth', 'skidding', 'trigger', 'variant']
})
export class DsPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwShow', 'fwHide']);
  }
}


export declare interface DsProgressLoader extends Components.FwProgressLoader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['easing', 'minimum', 'parent', 'show', 'speed', 'template', 'trickle', 'trickleSpeed'],
  methods: ['start', 'done', 'inc', 'set']
})
@Component({
  selector: 'ds-progress-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['easing', 'minimum', 'parent', 'show', 'speed', 'template', 'trickle', 'trickleSpeed']
})
export class DsProgressLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsRadio extends Components.FwRadio {
  /**
   * 
/**
  Triggered when the radio button in focus is selected. 
   */
  fwSelect: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the radio button in focus is cleared. 
   */
  fwDeselect: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the radio button comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when the radio button loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the radio button is toggled. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'description', 'disabled', 'label', 'name', 'state', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'description', 'disabled', 'label', 'name', 'state', 'value']
})
export class DsRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSelect', 'fwDeselect', 'fwFocus', 'fwBlur', 'fwChange']);
  }
}


export declare interface DsRadioGroup extends Components.FwRadioGroup {
  /**
   * Triggered when an option in the Radio Group is selected or deselected. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowEmpty', 'errorText', 'hintText', 'label', 'name', 'orientation', 'required', 'state', 'value', 'warningText'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmpty', 'errorText', 'hintText', 'label', 'name', 'orientation', 'required', 'state', 'value', 'warningText']
})
export class DsRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsSearchDropdown extends Components.FwSearchDropdown {
  /**
   * On Change event 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['options']
})
@Component({
  selector: 'ds-search-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options']
})
export class DsSearchDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsSelect extends Components.FwSelect {
  /**
   * Triggered when a value is selected or deselected from the list box options. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the list box comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the list box loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowDeselect', 'boundary', 'caret', 'checkbox', 'creatableProps', 'debounceTimer', 'disabled', 'errorText', 'forceSelect', 'hintText', 'hoist', 'label', 'labelledBy', 'max', 'multiple', 'name', 'noDataText', 'notFoundText', 'options', 'optionsPlacement', 'optionsVariant', 'placeholder', 'readonly', 'required', 'sameWidth', 'search', 'searchable', 'selectedOptions', 'state', 'tagVariant', 'type', 'value', 'variant', 'warningText'],
  methods: ['getSelectedItem', 'setSelectedValues', 'setSelectedOptions', 'setFocus']
})
@Component({
  selector: 'ds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'boundary', 'caret', 'checkbox', 'creatableProps', 'debounceTimer', 'disabled', 'errorText', 'forceSelect', 'hintText', 'hoist', 'label', 'labelledBy', 'max', 'multiple', 'name', 'noDataText', 'notFoundText', 'options', 'optionsPlacement', 'optionsVariant', 'placeholder', 'readonly', 'required', 'sameWidth', 'search', 'searchable', 'selectedOptions', 'state', 'tagVariant', 'type', 'value', 'variant', 'warningText']
})
export class DsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwFocus', 'fwBlur']);
  }
}


export declare interface DsSelectCondition extends Components.FwSelectCondition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'showError', 'value'],
  methods: ['isValid', 'refresh', 'setError']
})
@Component({
  selector: 'ds-select-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'showError', 'value']
})
export class DsSelectCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsSelectOption extends Components.FwSelectOption {
  /**
   * Triggered when an option is clicked when allowSelect is false. 
   */
  fwSelectAttempted: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when an option is selected. 
   */
  fwSelected: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when an option is focused. 
   */
  fwFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when an option loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'disabled', 'graphicsProps', 'groupName', 'hideTick', 'html', 'htmlContent', 'optionText', 'selected', 'subText', 'text', 'value', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'disabled', 'graphicsProps', 'groupName', 'hideTick', 'html', 'htmlContent', 'optionText', 'selected', 'subText', 'text', 'value', 'variant']
})
export class DsSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSelectAttempted', 'fwSelected', 'fwFocus', 'fwBlur']);
  }
}


export declare interface DsSkeleton extends Components.FwSkeleton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['count', 'customStyles', 'effect', 'height', 'marginBottom', 'variant', 'width']
})
@Component({
  selector: 'ds-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'customStyles', 'effect', 'height', 'marginBottom', 'variant', 'width']
})
export class DsSkeleton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsSortSelect extends Components.FwSortSelect {
  /**
   * Triggered on selecting the sort option. 
   */
  fwSort: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['order', 'orderBy', 'sortOptions']
})
@Component({
  selector: 'ds-sort-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['order', 'orderBy', 'sortOptions']
})
export class DsSortSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSort']);
  }
}


export declare interface DsSpinner extends Components.FwSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'size']
})
@Component({
  selector: 'ds-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'size']
})
export class DsSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTab extends Components.FwTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'disabled', 'panel', 'tabHeader', 'tabName']
})
@Component({
  selector: 'ds-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'panel', 'tabHeader', 'tabName']
})
export class DsTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTabPanel extends Components.FwTabPanel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'name']
})
@Component({
  selector: 'ds-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'name']
})
export class DsTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTabs extends Components.FwTabs {
  /**
   * Triggered when a the view switches to a new tab. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['activeTabIndex', 'activeTabName', 'label', 'variant'],
  methods: ['activateTab']
})
@Component({
  selector: 'ds-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeTabIndex', 'activeTabName', 'label', 'variant']
})
export class DsTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsTag extends Components.FwTag {
  /**
   * Triggered when the tag is deselected. 
   */
  fwClosed: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['closable', 'disabled', 'focusable', 'graphicsProps', 'index', 'isFocused', 'showEllipsisOnOverflow', 'state', 'subText', 'text', 'value', 'variant'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closable', 'disabled', 'focusable', 'graphicsProps', 'index', 'isFocused', 'showEllipsisOnOverflow', 'state', 'subText', 'text', 'value', 'variant']
})
export class DsTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwClosed']);
  }
}


export declare interface DsTextarea extends Components.FwTextarea {
  /**
   * Triggered when the input box comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Triggered when the input box loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when a value is entered in the input box. 
   */
  fwInput: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cols', 'disabled', 'errorText', 'hintText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'state', 'value', 'warningText', 'wrap'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cols', 'disabled', 'errorText', 'hintText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'state', 'value', 'warningText', 'wrap']
})
export class DsTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFocus', 'fwBlur', 'fwInput']);
  }
}


export declare interface DsTimepicker extends Components.FwTimepicker {
  /**
   * Triggered when a value is selected or deselected from the list box options. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the list box loses focus. 
   */
  fwBlur: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered when the list box comes into focus. 
   */
  fwFocus: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['allowDeselect', 'caret', 'disabled', 'errorText', 'format', 'hintText', 'interval', 'label', 'locale', 'maxTime', 'minTime', 'name', 'optionsPlacement', 'placeholder', 'readonly', 'required', 'sameWidth', 'state', 'value', 'warningText'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-timepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'caret', 'disabled', 'errorText', 'format', 'hintText', 'interval', 'label', 'locale', 'maxTime', 'minTime', 'name', 'optionsPlacement', 'placeholder', 'readonly', 'required', 'sameWidth', 'state', 'value', 'warningText']
})
export class DsTimepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwBlur', 'fwFocus']);
  }
}


export declare interface DsToast extends Components.FwToast {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actionLinkText', 'content', 'pauseOnHover', 'position', 'sticky', 'timeout', 'type'],
  methods: ['trigger']
})
@Component({
  selector: 'ds-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionLinkText', 'content', 'pauseOnHover', 'position', 'sticky', 'timeout', 'type']
})
export class DsToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsToastMessage extends Components.FwToastMessage {
  /**
   * Triggered when the action link clicked. 
   */
  fwLinkClick: EventEmitter<CustomEvent<any>>;
  /**
   * Triggered on closing the toast message.
This event gets used by the parent container to remove the toast message from itself 
   */
  fwRemoveToast: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actionLinkText', 'content', 'open', 'pauseOnHover', 'sticky', 'timeout', 'type']
})
@Component({
  selector: 'ds-toast-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionLinkText', 'content', 'open', 'pauseOnHover', 'sticky', 'timeout', 'type']
})
export class DsToastMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwLinkClick', 'fwRemoveToast']);
  }
}


export declare interface DsToggle extends Components.FwToggle {
  /**
   * Triggered when the input control is selected or deselected. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['checked', 'disabled', 'label', 'name', 'showIcon', 'size']
})
@Component({
  selector: 'ds-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'name', 'showIcon', 'size']
})
export class DsToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsToggleGroup extends Components.FwToggleGroup {
  /**
   * Triggered when an option in the Toggle Group is selected or deselected. 
   */
  fwChange: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'multiple', 'name', 'value'],
  methods: ['setSelectedValues']
})
@Component({
  selector: 'ds-toggle-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'multiple', 'name', 'value']
})
export class DsToggleGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface DsToggleGroupButton extends Components.FwToggleGroupButton {
  /**
   * Triggered when the card in focus is selected. 
   */
  fwToggled: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['baseClassName', 'description', 'disabled', 'header', 'index', 'isCheckbox', 'name', 'selectable', 'selected', 'type', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'ds-toggle-group-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['baseClassName', 'description', 'disabled', 'header', 'index', 'isCheckbox', 'name', 'selectable', 'selected', 'type', 'value']
})
export class DsToggleGroupButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwToggled']);
  }
}


export declare interface DsTooltip extends Components.FwTooltip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['content', 'distance', 'fallbackPlacements', 'hoist', 'placement', 'trigger'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ds-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['content', 'distance', 'fallbackPlacements', 'hoist', 'placement', 'trigger']
})
export class DsTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsWidgetCustomizeFieldItem extends Components.FwWidgetCustomizeFieldItem {
  /**
   * Triggered when the card in focus is selected. 
   */
  fwCheck: EventEmitter<CustomEvent<any>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['dataProvider', 'disabled', 'index', 'isPrimaryField', 'label', 'name', 'pinned', 'selected']
})
@Component({
  selector: 'ds-widget-customize-field-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'disabled', 'index', 'isPrimaryField', 'label', 'name', 'pinned', 'selected']
})
export class DsWidgetCustomizeFieldItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwCheck']);
  }
}
