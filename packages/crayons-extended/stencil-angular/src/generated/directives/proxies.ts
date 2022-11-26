/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './directives/angular-component-lib/utils';

import {Components} from '@freshworks/crayons-custom-objects';



import type { AccordionToggleEvent as IAccordionAccordionToggleEvent } from '@freshworks/crayons-custom-objects';
export declare interface FwAccordion extends Components.FwAccordion {
  /**
   * Triggered when the accordion is expanded or collapsed 
   */
  fwAccordionToggle: EventEmitter<CustomEvent<IAccordionAccordionToggleEvent>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['expanded', 'type'],
  methods: ['toggle']
})
@Component({
  selector: 'fw-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['expanded', 'type']
})
export class FwAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwAccordionToggle']);
  }
}


export declare interface FwAccordionBody extends Components.FwAccordionBody {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'fw-accordion-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class FwAccordionBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwAccordionTitle extends Components.FwAccordionTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['iconSize', 'truncateOnOverflow']
})
@Component({
  selector: 'fw-accordion-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['iconSize', 'truncateOnOverflow']
})
export class FwAccordionTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwAvatar extends Components.FwAvatar {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'image', 'initials', 'mode', 'name', 'shape', 'size']
})
@Component({
  selector: 'fw-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'image', 'initials', 'mode', 'name', 'shape', 'size']
})
export class FwAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwButton extends Components.FwButton {
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
  selector: 'fw-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'disabled', 'fileUploaderId', 'loading', 'modalTriggerId', 'showCaretIcon', 'size', 'throttleDelay', 'type']
})
export class FwButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwClick', 'fwFocus', 'fwBlur']);
  }
}


export declare interface FwButtonGroup extends Components.FwButtonGroup {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label']
})
@Component({
  selector: 'fw-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label']
})
export class FwButtonGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwCheckbox extends Components.FwCheckbox {
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
  selector: 'fw-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'description', 'disabled', 'errorText', 'hintText', 'label', 'name', 'required', 'state', 'value', 'warningText']
})
export class FwCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwFocus', 'fwBlur']);
  }
}


export declare interface FwCoExport extends Components.FwCoExport {
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
  selector: 'fw-co-export',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isOpen', 'value']
})
export class FwCoExport {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwExport', 'fwCloseExport']);
  }
}


export declare interface FwCoExportField extends Components.FwCoExportField {
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
  selector: 'fw-co-export-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['value']
})
export class FwCoExportField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwCountryPhone extends Components.FwCountryPhone {
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
  selector: 'fw-country-phone',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['clearInput', 'disabled', 'errorText', 'hideCountryFlag', 'hideCountryName', 'hintText', 'inputLabel', 'inputPlaceholder', 'name', 'readonly', 'required', 'selectLabel', 'selectPlaceholder', 'state', 'value', 'warningText']
})
export class FwCountryPhone {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwInput', 'fwBlur', 'fwInputClear', 'fwFocus']);
  }
}


export declare interface FwCustomCellAnchor extends Components.FwCustomCellAnchor {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['href', 'target', 'text']
})
@Component({
  selector: 'fw-custom-cell-anchor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href', 'target', 'text']
})
export class FwCustomCellAnchor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwCustomCellIcon extends Components.FwCustomCellIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'library', 'name', 'size', 'src']
})
@Component({
  selector: 'fw-custom-cell-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'library', 'name', 'size', 'src']
})
export class FwCustomCellIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwCustomCellParagraph extends Components.FwCustomCellParagraph {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['text']
})
@Component({
  selector: 'fw-custom-cell-paragraph',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['text']
})
export class FwCustomCellParagraph {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwCustomCellUser extends Components.FwCustomCellUser {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alt', 'email', 'image', 'name']
})
@Component({
  selector: 'fw-custom-cell-user',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alt', 'email', 'image', 'name']
})
export class FwCustomCellUser {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwDataTable extends Components.FwDataTable {
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
  selector: 'fw-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoSaveSettings', 'columns', 'isAllSelectable', 'isLoading', 'isSelectable', 'label', 'rowActions', 'rows', 'shimmerCount', 'showSettings']
})
export class FwDataTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSelectionChange', 'fwSelectAllChange']);
  }
}


export declare interface FwDateCondition extends Components.FwDateCondition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'showError', 'value'],
  methods: ['isValid', 'setError', 'refresh']
})
@Component({
  selector: 'fw-date-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'showError', 'value']
})
export class FwDateCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwDatepicker extends Components.FwDatepicker {
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
  selector: 'fw-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'clearInput', 'disabled', 'displayFormat', 'errorText', 'fromDate', 'hintText', 'label', 'locale', 'maxDate', 'maxYear', 'minDate', 'minYear', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showFooter', 'showTimePicker', 'state', 'timeFormat', 'timeProps', 'toDate', 'updateText', 'value', 'warningText']
})
export class FwDatepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwBlur']);
  }
}


export declare interface FwDragContainer extends Components.FwDragContainer {
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
  selector: 'fw-drag-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['acceptFrom', 'addOnDrop', 'copy', 'placeholderClass', 'sortable']
})
export class FwDragContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDrop']);
  }
}


export declare interface FwDragItem extends Components.FwDragItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'pinned', 'showDragIcon']
})
@Component({
  selector: 'fw-drag-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'pinned', 'showDragIcon']
})
export class FwDragItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwFbFieldDropdown extends Components.FwFbFieldDropdown {
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
  selector: 'fw-fb-field-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'isLoading', 'showErrors']
})
export class FwFbFieldDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwFbFieldDropdownItem extends Components.FwFbFieldDropdownItem {
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
  selector: 'fw-fb-field-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'index', 'isLoading', 'isNewChoice', 'showErrors', 'sortable']
})
export class FwFbFieldDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDelete', 'fwChange']);
  }
}


export declare interface FwFbFieldLookup extends Components.FwFbFieldLookup {
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
  selector: 'fw-fb-field-lookup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataResponse', 'formValues', 'showErrors', 'sourceObjectName', 'targetObjects']
})
export class FwFbFieldLookup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwFieldEditor extends Components.FwFieldEditor {
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
  selector: 'fw-field-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'defaultFieldTypeSchema', 'disabled', 'disabledSort', 'enableFilterable', 'enableUnique', 'entityName', 'expanded', 'formValues', 'index', 'isLoading', 'isPrimaryField', 'lookupTargetObjects', 'name', 'pinned']
})
export class FwFieldEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwExpand', 'fwUpdate', 'fwDelete']);
  }
}


export declare interface FwFieldTypeMenuItem extends Components.FwFieldTypeMenuItem {
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
  selector: 'fw-field-type-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'disabled', 'iconBackgroundColor', 'iconName', 'index', 'label', 'name', 'tooltip', 'value']
})
export class FwFieldTypeMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwAddClick']);
  }
}


export declare interface FwFileUploader extends Components.FwFileUploader {
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
  selector: 'fw-file-uploader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'acceptError', 'actionParams', 'actionURL', 'description', 'fileUploadError', 'filesLimit', 'hint', 'maxFileSize', 'maxFileSizeError', 'maxFilesLimitError', 'modifyRequest', 'multiple', 'name', 'text']
})
export class FwFileUploader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFilesUploaded', 'fwFileReuploaded', 'fwStageChanged']);
  }
}


export declare interface FwFileUploaderFile extends Components.FwFileUploaderFile {
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
  selector: 'fw-file-uploader-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fileId', 'name']
})
export class FwFileUploaderFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwRemoveFile']);
  }
}


export declare interface FwFileUploaderProgress extends Components.FwFileUploaderProgress {
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
  selector: 'fw-file-uploader-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['error', 'fileId', 'fileName', 'progress']
})
export class FwFileUploaderProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwRetryUpload']);
  }
}


export declare interface FwFilter extends Components.FwFilter {
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
  selector: 'fw-filter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['conditionSchema', 'filters', 'value']
})
export class FwFilter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFilterChange']);
  }
}


export declare interface FwFilterCondition extends Components.FwFilterCondition {
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
  selector: 'fw-filter-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['condition', 'conditionSchema', 'controlProps', 'filterOn', 'filterText', 'identifier', 'selectedCondition', 'value', 'valueState']
})
export class FwFilterCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDelete']);
  }
}


export declare interface FwFilterDropdown extends Components.FwFilterDropdown {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['options', 'value']
})
@Component({
  selector: 'fw-filter-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options', 'value']
})
export class FwFilterDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwForm extends Components.FwForm {
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
  selector: 'fw-form',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['formId', 'formSchema', 'initialValues', 'validate', 'validateOnBlur', 'validateOnInput', 'validationSchema', 'wait']
})
export class FwForm {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFormValuesChanged']);
  }
}


export declare interface FwFormBuilder extends Components.FwFormBuilder {
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
  selector: 'fw-form-builder',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['customizeWidgetFields', 'emptySearchImage', 'expandedFieldIndex', 'formValues', 'isLoading', 'isSavingCustomizeWidget', 'lookupTargetObjects']
})
export class FwFormBuilder {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSaveField', 'fwDeleteField', 'fwComposeNewField', 'fwRepositionField', 'fwExpandField', 'fwSearchField', 'fwSaveWidgetFields']);
  }
}


export declare interface FwFormControl extends Components.FwFormControl {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['choices', 'controlProps', 'error', 'fieldProps', 'hint', 'label', 'name', 'placeholder', 'required', 'touched', 'type'],
  methods: ['setFocus']
})
@Component({
  selector: 'fw-form-control',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['choices', 'controlProps', 'error', 'fieldProps', 'hint', 'label', 'name', 'placeholder', 'required', 'touched', 'type']
})
export class FwFormControl {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwFormatDate extends Components.FwFormatDate {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['date', 'day', 'hour', 'hourFormat', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
@Component({
  selector: 'fw-format-date',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['date', 'day', 'hour', 'hourFormat', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
})
export class FwFormatDate {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwFormatNumber extends Components.FwFormatNumber {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['currency', 'currencyDisplay', 'currencySign', 'locale', 'maximumFractionDigits', 'maximumSignificantDigits', 'minimumFractionDigits', 'minimumIntegerDigits', 'minimumSignificantDigits', 'type', 'useGrouping', 'value']
})
@Component({
  selector: 'fw-format-number',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currency', 'currencyDisplay', 'currencySign', 'locale', 'maximumFractionDigits', 'maximumSignificantDigits', 'minimumFractionDigits', 'minimumIntegerDigits', 'minimumSignificantDigits', 'type', 'useGrouping', 'value']
})
export class FwFormatNumber {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwIcon extends Components.FwIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'dataSvg', 'height', 'label', 'lazy', 'library', 'name', 'size', 'src', 'url', 'width', 'xRootMargin']
})
@Component({
  selector: 'fw-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'dataSvg', 'height', 'label', 'lazy', 'library', 'name', 'size', 'src', 'url', 'width', 'xRootMargin']
})
export class FwIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwInlineMessage extends Components.FwInlineMessage {
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
  selector: 'fw-inline-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closable', 'duration', 'open', 'type']
})
export class FwInlineMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwShow', 'fwHide']);
  }
}


export declare interface FwInput extends Components.FwInput {
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
  selector: 'fw-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocomplete', 'clearInput', 'disabled', 'errorText', 'hintText', 'iconLeft', 'iconRight', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'state', 'step', 'type', 'value', 'warningText']
})
export class FwInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFocus', 'fwBlur', 'fwInput', 'fwInputClear']);
  }
}


export declare interface FwInputCondition extends Components.FwInputCondition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'showError', 'value'],
  methods: ['isValid', 'setError', 'refresh']
})
@Component({
  selector: 'fw-input-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'showError', 'value']
})
export class FwInputCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwInputRangeCondition extends Components.FwInputRangeCondition {
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
  selector: 'fw-input-range-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'value']
})
export class FwInputRangeCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwInput']);
  }
}


export declare interface FwLabel extends Components.FwLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'value']
})
@Component({
  selector: 'fw-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'value']
})
export class FwLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwListOptions extends Components.FwListOptions {
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
  selector: 'fw-list-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'debounceTimer', 'disabled', 'filterText', 'formatCreateLabel', 'hideTick', 'isCreatable', 'max', 'multiple', 'noDataText', 'notFoundText', 'options', 'search', 'searchText', 'searchable', 'selectedOptions', 'validateNewOption', 'value', 'variant']
})
export class FwListOptions {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwLoading']);
  }
}


export declare interface FwMenu extends Components.FwMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'fw-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class FwMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwMenuItem extends Components.FwMenuItem {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['selectable', 'selected']
})
@Component({
  selector: 'fw-menu-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['selectable', 'selected']
})
export class FwMenuItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwModal extends Components.FwModal {
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
  selector: 'fw-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'description', 'hasCloseIconButton', 'hideFooter', 'icon', 'isOpen', 'size', 'slider', 'submitColor', 'submitDisabled', 'submitText', 'titleText']
})
export class FwModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSubmit', 'fwOpen', 'fwClose']);
  }
}


export declare interface FwModalContent extends Components.FwModalContent {}

@ProxyCmp({
  defineCustomElementFn: undefined
})
@Component({
  selector: 'fw-modal-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>'
})
export class FwModalContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwModalFooter extends Components.FwModalFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['cancelText', 'close', 'submit', 'submitColor', 'submitDisabled', 'submitText']
})
@Component({
  selector: 'fw-modal-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cancelText', 'close', 'submit', 'submitColor', 'submitDisabled', 'submitText']
})
export class FwModalFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwModalTitle extends Components.FwModalTitle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['description', 'icon', 'titleText']
})
@Component({
  selector: 'fw-modal-title',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['description', 'icon', 'titleText']
})
export class FwModalTitle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwPagination extends Components.FwPagination {
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
  selector: 'fw-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['buttonGroupLabel', 'isLoading', 'nextButtonLabel', 'page', 'perPage', 'previousButtonLabel', 'total']
})
export class FwPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwPill extends Components.FwPill {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color']
})
@Component({
  selector: 'fw-pill',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color']
})
export class FwPill {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwPlatformTable extends Components.FwPlatformTable {
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
  selector: 'fw-platform-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['isSelectable', 'loading', 'order', 'orderBy', 'paginationProps', 'showError', 'sortableColumns', 'tableProps']
})
export class FwPlatformTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwDelete', 'fwPagination']);
  }
}


export declare interface FwPopover extends Components.FwPopover {
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
  selector: 'fw-popover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoFocusOnContent', 'boundary', 'disableTransition', 'distance', 'fallbackPlacements', 'hasBorder', 'hideOnTab', 'hoist', 'placement', 'sameWidth', 'skidding', 'trigger', 'variant']
})
export class FwPopover {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwShow', 'fwHide']);
  }
}


export declare interface FwProgressLoader extends Components.FwProgressLoader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['easing', 'minimum', 'parent', 'show', 'speed', 'template', 'trickle', 'trickleSpeed'],
  methods: ['start', 'done', 'inc', 'set']
})
@Component({
  selector: 'fw-progress-loader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['easing', 'minimum', 'parent', 'show', 'speed', 'template', 'trickle', 'trickleSpeed']
})
export class FwProgressLoader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwRadio extends Components.FwRadio {
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
  selector: 'fw-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'description', 'disabled', 'label', 'name', 'state', 'value']
})
export class FwRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSelect', 'fwDeselect', 'fwFocus', 'fwBlur', 'fwChange']);
  }
}


export declare interface FwRadioGroup extends Components.FwRadioGroup {
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
  selector: 'fw-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowEmpty', 'errorText', 'hintText', 'label', 'name', 'orientation', 'required', 'state', 'value', 'warningText']
})
export class FwRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwSearchDropdown extends Components.FwSearchDropdown {
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
  selector: 'fw-search-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['options']
})
export class FwSearchDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwSelect extends Components.FwSelect {
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
  selector: 'fw-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'boundary', 'caret', 'checkbox', 'creatableProps', 'debounceTimer', 'disabled', 'errorText', 'forceSelect', 'hintText', 'hoist', 'label', 'labelledBy', 'max', 'multiple', 'name', 'noDataText', 'notFoundText', 'options', 'optionsPlacement', 'optionsVariant', 'placeholder', 'readonly', 'required', 'sameWidth', 'search', 'searchable', 'selectedOptions', 'state', 'tagVariant', 'type', 'value', 'variant', 'warningText']
})
export class FwSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwFocus', 'fwBlur']);
  }
}


export declare interface FwSelectCondition extends Components.FwSelectCondition {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['controlProps', 'error', 'showError', 'value'],
  methods: ['isValid', 'refresh', 'setError']
})
@Component({
  selector: 'fw-select-condition',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['controlProps', 'error', 'showError', 'value']
})
export class FwSelectCondition {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwSelectOption extends Components.FwSelectOption {
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
  selector: 'fw-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'disabled', 'graphicsProps', 'groupName', 'hideTick', 'html', 'htmlContent', 'optionText', 'selected', 'subText', 'text', 'value', 'variant']
})
export class FwSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSelectAttempted', 'fwSelected', 'fwFocus', 'fwBlur']);
  }
}


export declare interface FwSkeleton extends Components.FwSkeleton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['count', 'customStyles', 'effect', 'height', 'marginBottom', 'variant', 'width']
})
@Component({
  selector: 'fw-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['count', 'customStyles', 'effect', 'height', 'marginBottom', 'variant', 'width']
})
export class FwSkeleton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwSortSelect extends Components.FwSortSelect {
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
  selector: 'fw-sort-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['order', 'orderBy', 'sortOptions']
})
export class FwSortSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwSort']);
  }
}


export declare interface FwSpinner extends Components.FwSpinner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'size']
})
@Component({
  selector: 'fw-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'size']
})
export class FwSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwTab extends Components.FwTab {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'disabled', 'panel', 'tabHeader', 'tabName']
})
@Component({
  selector: 'fw-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'disabled', 'panel', 'tabHeader', 'tabName']
})
export class FwTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwTabPanel extends Components.FwTabPanel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['active', 'name']
})
@Component({
  selector: 'fw-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['active', 'name']
})
export class FwTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwTabs extends Components.FwTabs {
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
  selector: 'fw-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['activeTabIndex', 'activeTabName', 'label', 'variant']
})
export class FwTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwTag extends Components.FwTag {
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
  selector: 'fw-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['closable', 'disabled', 'focusable', 'graphicsProps', 'index', 'isFocused', 'showEllipsisOnOverflow', 'state', 'subText', 'text', 'value', 'variant']
})
export class FwTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwClosed']);
  }
}


export declare interface FwTextarea extends Components.FwTextarea {
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
  selector: 'fw-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['cols', 'disabled', 'errorText', 'hintText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'state', 'value', 'warningText', 'wrap']
})
export class FwTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwFocus', 'fwBlur', 'fwInput']);
  }
}


export declare interface FwTimepicker extends Components.FwTimepicker {
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
  selector: 'fw-timepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['allowDeselect', 'caret', 'disabled', 'errorText', 'format', 'hintText', 'interval', 'label', 'locale', 'maxTime', 'minTime', 'name', 'optionsPlacement', 'placeholder', 'readonly', 'required', 'sameWidth', 'state', 'value', 'warningText']
})
export class FwTimepicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange', 'fwBlur', 'fwFocus']);
  }
}


export declare interface FwToast extends Components.FwToast {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['actionLinkText', 'content', 'pauseOnHover', 'position', 'sticky', 'timeout', 'type'],
  methods: ['trigger']
})
@Component({
  selector: 'fw-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionLinkText', 'content', 'pauseOnHover', 'position', 'sticky', 'timeout', 'type']
})
export class FwToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwToastMessage extends Components.FwToastMessage {
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
  selector: 'fw-toast-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['actionLinkText', 'content', 'open', 'pauseOnHover', 'sticky', 'timeout', 'type']
})
export class FwToastMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwLinkClick', 'fwRemoveToast']);
  }
}


export declare interface FwToggle extends Components.FwToggle {
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
  selector: 'fw-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['checked', 'disabled', 'label', 'name', 'showIcon', 'size']
})
export class FwToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwToggleGroup extends Components.FwToggleGroup {
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
  selector: 'fw-toggle-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'multiple', 'name', 'value']
})
export class FwToggleGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwChange']);
  }
}


export declare interface FwToggleGroupButton extends Components.FwToggleGroupButton {
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
  selector: 'fw-toggle-group-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['baseClassName', 'description', 'disabled', 'header', 'index', 'isCheckbox', 'name', 'selectable', 'selected', 'type', 'value']
})
export class FwToggleGroupButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwToggled']);
  }
}


export declare interface FwTooltip extends Components.FwTooltip {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['content', 'distance', 'fallbackPlacements', 'hoist', 'placement', 'trigger'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'fw-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['content', 'distance', 'fallbackPlacements', 'hoist', 'placement', 'trigger']
})
export class FwTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface FwWidgetCustomizeFieldItem extends Components.FwWidgetCustomizeFieldItem {
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
  selector: 'fw-widget-customize-field-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataProvider', 'disabled', 'index', 'isPrimaryField', 'label', 'name', 'pinned', 'selected']
})
export class FwWidgetCustomizeFieldItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['fwCheck']);
  }
}
