var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './directives/angular-component-lib/utils';
let FwAccordion = class FwAccordion {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwAccordionToggle']);
    }
};
FwAccordion = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['expanded', 'type'],
        methods: ['toggle']
    }),
    Component({
        selector: 'fw-accordion',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['expanded', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwAccordion);
export { FwAccordion };
let FwAccordionBody = class FwAccordionBody {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwAccordionBody = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined
    }),
    Component({
        selector: 'fw-accordion-body',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwAccordionBody);
export { FwAccordionBody };
let FwAccordionTitle = class FwAccordionTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwAccordionTitle = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['iconSize', 'truncateOnOverflow']
    }),
    Component({
        selector: 'fw-accordion-title',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['iconSize', 'truncateOnOverflow']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwAccordionTitle);
export { FwAccordionTitle };
let FwAvatar = class FwAvatar {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwAvatar = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['alt', 'image', 'initials', 'mode', 'name', 'shape', 'size']
    }),
    Component({
        selector: 'fw-avatar',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['alt', 'image', 'initials', 'mode', 'name', 'shape', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwAvatar);
export { FwAvatar };
let FwButton = class FwButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwClick', 'fwFocus', 'fwBlur']);
    }
};
FwButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color', 'disabled', 'fileUploaderId', 'loading', 'modalTriggerId', 'showCaretIcon', 'size', 'throttleDelay', 'type'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-button',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['color', 'disabled', 'fileUploaderId', 'loading', 'modalTriggerId', 'showCaretIcon', 'size', 'throttleDelay', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwButton);
export { FwButton };
let FwButtonGroup = class FwButtonGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwButtonGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['label']
    }),
    Component({
        selector: 'fw-button-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['label']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwButtonGroup);
export { FwButtonGroup };
let FwCheckbox = class FwCheckbox {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange', 'fwFocus', 'fwBlur']);
    }
};
FwCheckbox = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['checked', 'description', 'disabled', 'errorText', 'hintText', 'label', 'name', 'required', 'state', 'value', 'warningText'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-checkbox',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['checked', 'description', 'disabled', 'errorText', 'hintText', 'label', 'name', 'required', 'state', 'value', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCheckbox);
export { FwCheckbox };
let FwCoExport = class FwCoExport {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwExport', 'fwCloseExport']);
    }
};
FwCoExport = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['isOpen', 'value'],
        methods: ['close', 'open']
    }),
    Component({
        selector: 'fw-co-export',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['isOpen', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCoExport);
export { FwCoExport };
let FwCoExportField = class FwCoExportField {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwCoExportField = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['value']
    }),
    Component({
        selector: 'fw-co-export-field',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCoExportField);
export { FwCoExportField };
let FwCountryPhone = class FwCountryPhone {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwInput', 'fwBlur', 'fwInputClear', 'fwFocus']);
    }
};
FwCountryPhone = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['clearInput', 'disabled', 'errorText', 'hideCountryFlag', 'hideCountryName', 'hintText', 'inputLabel', 'inputPlaceholder', 'name', 'readonly', 'required', 'selectLabel', 'selectPlaceholder', 'state', 'value', 'warningText'],
        methods: ['isValidPhoneNumber', 'parsePhoneNumber']
    }),
    Component({
        selector: 'fw-country-phone',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['clearInput', 'disabled', 'errorText', 'hideCountryFlag', 'hideCountryName', 'hintText', 'inputLabel', 'inputPlaceholder', 'name', 'readonly', 'required', 'selectLabel', 'selectPlaceholder', 'state', 'value', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCountryPhone);
export { FwCountryPhone };
let FwCustomCellAnchor = class FwCustomCellAnchor {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwCustomCellAnchor = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['href', 'target', 'text']
    }),
    Component({
        selector: 'fw-custom-cell-anchor',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['href', 'target', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCustomCellAnchor);
export { FwCustomCellAnchor };
let FwCustomCellIcon = class FwCustomCellIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwCustomCellIcon = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color', 'library', 'name', 'size', 'src']
    }),
    Component({
        selector: 'fw-custom-cell-icon',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['color', 'library', 'name', 'size', 'src']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCustomCellIcon);
export { FwCustomCellIcon };
let FwCustomCellParagraph = class FwCustomCellParagraph {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwCustomCellParagraph = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['text']
    }),
    Component({
        selector: 'fw-custom-cell-paragraph',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCustomCellParagraph);
export { FwCustomCellParagraph };
let FwCustomCellUser = class FwCustomCellUser {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwCustomCellUser = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['alt', 'email', 'image', 'name']
    }),
    Component({
        selector: 'fw-custom-cell-user',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['alt', 'email', 'image', 'name']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwCustomCellUser);
export { FwCustomCellUser };
let FwDataTable = class FwDataTable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwSelectionChange', 'fwSelectAllChange']);
    }
};
FwDataTable = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['autoSaveSettings', 'columns', 'isAllSelectable', 'isLoading', 'isSelectable', 'label', 'rowActions', 'rows', 'shimmerCount', 'showSettings'],
        methods: ['selectAllRows', 'getSelectedRows', 'getSelectedIds', 'getTableSettings', 'setTableSettings', 'loadTable']
    }),
    Component({
        selector: 'fw-data-table',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['autoSaveSettings', 'columns', 'isAllSelectable', 'isLoading', 'isSelectable', 'label', 'rowActions', 'rows', 'shimmerCount', 'showSettings']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwDataTable);
export { FwDataTable };
let FwDateCondition = class FwDateCondition {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwDateCondition = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['controlProps', 'error', 'showError', 'value'],
        methods: ['isValid', 'setError', 'refresh']
    }),
    Component({
        selector: 'fw-date-condition',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['controlProps', 'error', 'showError', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwDateCondition);
export { FwDateCondition };
let FwDatepicker = class FwDatepicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange', 'fwBlur']);
    }
};
FwDatepicker = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['cancelText', 'clearInput', 'disabled', 'displayFormat', 'errorText', 'fromDate', 'hintText', 'label', 'locale', 'maxDate', 'maxYear', 'minDate', 'minYear', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showFooter', 'showTimePicker', 'state', 'timeFormat', 'timeProps', 'toDate', 'updateText', 'value', 'warningText'],
        methods: ['getValue', 'setFocus', 'clearValue']
    }),
    Component({
        selector: 'fw-datepicker',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['cancelText', 'clearInput', 'disabled', 'displayFormat', 'errorText', 'fromDate', 'hintText', 'label', 'locale', 'maxDate', 'maxYear', 'minDate', 'minYear', 'mode', 'name', 'placeholder', 'readonly', 'required', 'showFooter', 'showTimePicker', 'state', 'timeFormat', 'timeProps', 'toDate', 'updateText', 'value', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwDatepicker);
export { FwDatepicker };
let FwDragContainer = class FwDragContainer {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwDrop']);
    }
};
FwDragContainer = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['acceptFrom', 'addOnDrop', 'copy', 'placeholderClass', 'sortable']
    }),
    Component({
        selector: 'fw-drag-container',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['acceptFrom', 'addOnDrop', 'copy', 'placeholderClass', 'sortable']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwDragContainer);
export { FwDragContainer };
let FwDragItem = class FwDragItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwDragItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['disabled', 'pinned', 'showDragIcon']
    }),
    Component({
        selector: 'fw-drag-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['disabled', 'pinned', 'showDragIcon']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwDragItem);
export { FwDragItem };
let FwFbFieldDropdown = class FwFbFieldDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwFbFieldDropdown = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['dataProvider', 'isLoading', 'showErrors'],
        methods: ['validateErrors']
    }),
    Component({
        selector: 'fw-fb-field-dropdown',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['dataProvider', 'isLoading', 'showErrors']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFbFieldDropdown);
export { FwFbFieldDropdown };
let FwFbFieldDropdownItem = class FwFbFieldDropdownItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwDelete', 'fwChange']);
    }
};
FwFbFieldDropdownItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['dataProvider', 'index', 'isLoading', 'isNewChoice', 'showErrors', 'sortable']
    }),
    Component({
        selector: 'fw-fb-field-dropdown-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['dataProvider', 'index', 'isLoading', 'isNewChoice', 'showErrors', 'sortable']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFbFieldDropdownItem);
export { FwFbFieldDropdownItem };
let FwFbFieldLookup = class FwFbFieldLookup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwFbFieldLookup = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['dataResponse', 'formValues', 'showErrors', 'sourceObjectName', 'targetObjects']
    }),
    Component({
        selector: 'fw-fb-field-lookup',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['dataResponse', 'formValues', 'showErrors', 'sourceObjectName', 'targetObjects']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFbFieldLookup);
export { FwFbFieldLookup };
let FwFieldEditor = class FwFieldEditor {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwExpand', 'fwUpdate', 'fwDelete']);
    }
};
FwFieldEditor = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['dataProvider', 'defaultFieldTypeSchema', 'disabled', 'disabledSort', 'enableFilterable', 'enableUnique', 'entityName', 'expanded', 'formValues', 'index', 'isLoading', 'isPrimaryField', 'lookupTargetObjects', 'name', 'pinned']
    }),
    Component({
        selector: 'fw-field-editor',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['dataProvider', 'defaultFieldTypeSchema', 'disabled', 'disabledSort', 'enableFilterable', 'enableUnique', 'entityName', 'expanded', 'formValues', 'index', 'isLoading', 'isPrimaryField', 'lookupTargetObjects', 'name', 'pinned']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFieldEditor);
export { FwFieldEditor };
let FwFieldTypeMenuItem = class FwFieldTypeMenuItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwAddClick']);
    }
};
FwFieldTypeMenuItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['dataProvider', 'disabled', 'iconBackgroundColor', 'iconName', 'index', 'label', 'name', 'tooltip', 'value']
    }),
    Component({
        selector: 'fw-field-type-menu-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['dataProvider', 'disabled', 'iconBackgroundColor', 'iconName', 'index', 'label', 'name', 'tooltip', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFieldTypeMenuItem);
export { FwFieldTypeMenuItem };
let FwFileUploader = class FwFileUploader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwFilesUploaded', 'fwFileReuploaded', 'fwStageChanged']);
    }
};
FwFileUploader = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['accept', 'acceptError', 'actionParams', 'actionURL', 'description', 'fileUploadError', 'filesLimit', 'hint', 'maxFileSize', 'maxFileSizeError', 'maxFilesLimitError', 'modifyRequest', 'multiple', 'name', 'text'],
        methods: ['getFiles', 'uploadFiles', 'reset']
    }),
    Component({
        selector: 'fw-file-uploader',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['accept', 'acceptError', 'actionParams', 'actionURL', 'description', 'fileUploadError', 'filesLimit', 'hint', 'maxFileSize', 'maxFileSizeError', 'maxFilesLimitError', 'modifyRequest', 'multiple', 'name', 'text']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFileUploader);
export { FwFileUploader };
let FwFileUploaderFile = class FwFileUploaderFile {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwRemoveFile']);
    }
};
FwFileUploaderFile = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['fileId', 'name']
    }),
    Component({
        selector: 'fw-file-uploader-file',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['fileId', 'name']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFileUploaderFile);
export { FwFileUploaderFile };
let FwFileUploaderProgress = class FwFileUploaderProgress {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwRetryUpload']);
    }
};
FwFileUploaderProgress = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['error', 'fileId', 'fileName', 'progress']
    }),
    Component({
        selector: 'fw-file-uploader-progress',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['error', 'fileId', 'fileName', 'progress']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFileUploaderProgress);
export { FwFileUploaderProgress };
let FwFilter = class FwFilter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwFilterChange']);
    }
};
FwFilter = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['conditionSchema', 'filters', 'value'],
        methods: ['getValue', 'clearFilter', 'resetFilter']
    }),
    Component({
        selector: 'fw-filter',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['conditionSchema', 'filters', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFilter);
export { FwFilter };
let FwFilterCondition = class FwFilterCondition {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwDelete']);
    }
};
FwFilterCondition = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['condition', 'conditionSchema', 'controlProps', 'filterOn', 'filterText', 'identifier', 'selectedCondition', 'value', 'valueState'],
        methods: ['isValid']
    }),
    Component({
        selector: 'fw-filter-condition',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['condition', 'conditionSchema', 'controlProps', 'filterOn', 'filterText', 'identifier', 'selectedCondition', 'value', 'valueState']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFilterCondition);
export { FwFilterCondition };
let FwFilterDropdown = class FwFilterDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwFilterDropdown = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['options', 'value']
    }),
    Component({
        selector: 'fw-filter-dropdown',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['options', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFilterDropdown);
export { FwFilterDropdown };
let FwForm = class FwForm {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwFormValuesChanged']);
    }
};
FwForm = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['formId', 'formSchema', 'initialValues', 'validate', 'validateOnBlur', 'validateOnInput', 'validationSchema', 'wait'],
        methods: ['setFieldValue', 'setFieldErrors', 'getValues', 'doSubmit', 'doReset']
    }),
    Component({
        selector: 'fw-form',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['formId', 'formSchema', 'initialValues', 'validate', 'validateOnBlur', 'validateOnInput', 'validationSchema', 'wait']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwForm);
export { FwForm };
let FwFormBuilder = class FwFormBuilder {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwSaveField', 'fwDeleteField', 'fwComposeNewField', 'fwRepositionField', 'fwExpandField', 'fwSearchField', 'fwSaveWidgetFields']);
    }
};
FwFormBuilder = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['customizeWidgetFields', 'emptySearchImage', 'expandedFieldIndex', 'formValues', 'isLoading', 'isSavingCustomizeWidget', 'lookupTargetObjects']
    }),
    Component({
        selector: 'fw-form-builder',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['customizeWidgetFields', 'emptySearchImage', 'expandedFieldIndex', 'formValues', 'isLoading', 'isSavingCustomizeWidget', 'lookupTargetObjects']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFormBuilder);
export { FwFormBuilder };
let FwFormControl = class FwFormControl {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwFormControl = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['choices', 'controlProps', 'error', 'fieldProps', 'hint', 'label', 'name', 'placeholder', 'required', 'touched', 'type'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-form-control',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['choices', 'controlProps', 'error', 'fieldProps', 'hint', 'label', 'name', 'placeholder', 'required', 'touched', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFormControl);
export { FwFormControl };
let FwFormatDate = class FwFormatDate {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwFormatDate = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['date', 'day', 'hour', 'hourFormat', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
    }),
    Component({
        selector: 'fw-format-date',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['date', 'day', 'hour', 'hourFormat', 'locale', 'minute', 'month', 'second', 'timeZone', 'timeZoneName', 'weekday', 'year']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFormatDate);
export { FwFormatDate };
let FwFormatNumber = class FwFormatNumber {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwFormatNumber = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['currency', 'currencyDisplay', 'currencySign', 'locale', 'maximumFractionDigits', 'maximumSignificantDigits', 'minimumFractionDigits', 'minimumIntegerDigits', 'minimumSignificantDigits', 'type', 'useGrouping', 'value']
    }),
    Component({
        selector: 'fw-format-number',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['currency', 'currencyDisplay', 'currencySign', 'locale', 'maximumFractionDigits', 'maximumSignificantDigits', 'minimumFractionDigits', 'minimumIntegerDigits', 'minimumSignificantDigits', 'type', 'useGrouping', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwFormatNumber);
export { FwFormatNumber };
let FwIcon = class FwIcon {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwIcon = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color', 'dataSvg', 'height', 'label', 'lazy', 'library', 'name', 'size', 'src', 'url', 'width', 'xRootMargin']
    }),
    Component({
        selector: 'fw-icon',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['color', 'dataSvg', 'height', 'label', 'lazy', 'library', 'name', 'size', 'src', 'url', 'width', 'xRootMargin']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwIcon);
export { FwIcon };
let FwInlineMessage = class FwInlineMessage {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwShow', 'fwHide']);
    }
};
FwInlineMessage = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['closable', 'duration', 'open', 'type'],
        methods: ['show', 'hide']
    }),
    Component({
        selector: 'fw-inline-message',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['closable', 'duration', 'open', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwInlineMessage);
export { FwInlineMessage };
let FwInput = class FwInput {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwFocus', 'fwBlur', 'fwInput', 'fwInputClear']);
    }
};
FwInput = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['autocomplete', 'clearInput', 'disabled', 'errorText', 'hintText', 'iconLeft', 'iconRight', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'state', 'step', 'type', 'value', 'warningText'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-input',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['autocomplete', 'clearInput', 'disabled', 'errorText', 'hintText', 'iconLeft', 'iconRight', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'state', 'step', 'type', 'value', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwInput);
export { FwInput };
let FwInputCondition = class FwInputCondition {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwInputCondition = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['controlProps', 'error', 'showError', 'value'],
        methods: ['isValid', 'setError', 'refresh']
    }),
    Component({
        selector: 'fw-input-condition',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['controlProps', 'error', 'showError', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwInputCondition);
export { FwInputCondition };
let FwInputRangeCondition = class FwInputRangeCondition {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwInput']);
    }
};
FwInputRangeCondition = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['controlProps', 'error', 'value'],
        methods: ['isValid']
    }),
    Component({
        selector: 'fw-input-range-condition',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['controlProps', 'error', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwInputRangeCondition);
export { FwInputRangeCondition };
let FwLabel = class FwLabel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwLabel = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color', 'value']
    }),
    Component({
        selector: 'fw-label',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['color', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwLabel);
export { FwLabel };
let FwListOptions = class FwListOptions {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange', 'fwLoading']);
    }
};
FwListOptions = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'debounceTimer', 'disabled', 'filterText', 'formatCreateLabel', 'hideTick', 'isCreatable', 'max', 'multiple', 'noDataText', 'notFoundText', 'options', 'search', 'searchText', 'searchable', 'selectedOptions', 'validateNewOption', 'value', 'variant'],
        methods: ['clearFilter', 'scrollToLastSelected', 'getSelectedOptions', 'setSelectedValues', 'setSelectedOptions', 'setFocus']
    }),
    Component({
        selector: 'fw-list-options',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'debounceTimer', 'disabled', 'filterText', 'formatCreateLabel', 'hideTick', 'isCreatable', 'max', 'multiple', 'noDataText', 'notFoundText', 'options', 'search', 'searchText', 'searchable', 'selectedOptions', 'validateNewOption', 'value', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwListOptions);
export { FwListOptions };
let FwMenu = class FwMenu {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwMenu = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined
    }),
    Component({
        selector: 'fw-menu',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwMenu);
export { FwMenu };
let FwMenuItem = class FwMenuItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwMenuItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['selectable', 'selected']
    }),
    Component({
        selector: 'fw-menu-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['selectable', 'selected']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwMenuItem);
export { FwMenuItem };
let FwModal = class FwModal {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwSubmit', 'fwOpen', 'fwClose']);
    }
};
FwModal = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['cancelText', 'description', 'hasCloseIconButton', 'hideFooter', 'icon', 'isOpen', 'size', 'slider', 'submitColor', 'submitDisabled', 'submitText', 'titleText'],
        methods: ['close', 'open']
    }),
    Component({
        selector: 'fw-modal',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['cancelText', 'description', 'hasCloseIconButton', 'hideFooter', 'icon', 'isOpen', 'size', 'slider', 'submitColor', 'submitDisabled', 'submitText', 'titleText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwModal);
export { FwModal };
let FwModalContent = class FwModalContent {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwModalContent = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined
    }),
    Component({
        selector: 'fw-modal-content',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwModalContent);
export { FwModalContent };
let FwModalFooter = class FwModalFooter {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwModalFooter = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['cancelText', 'close', 'submit', 'submitColor', 'submitDisabled', 'submitText']
    }),
    Component({
        selector: 'fw-modal-footer',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['cancelText', 'close', 'submit', 'submitColor', 'submitDisabled', 'submitText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwModalFooter);
export { FwModalFooter };
let FwModalTitle = class FwModalTitle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwModalTitle = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['description', 'icon', 'titleText']
    }),
    Component({
        selector: 'fw-modal-title',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['description', 'icon', 'titleText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwModalTitle);
export { FwModalTitle };
let FwPagination = class FwPagination {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwPagination = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['buttonGroupLabel', 'isLoading', 'nextButtonLabel', 'page', 'perPage', 'previousButtonLabel', 'total'],
        methods: ['previousPage', 'nextPage']
    }),
    Component({
        selector: 'fw-pagination',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['buttonGroupLabel', 'isLoading', 'nextButtonLabel', 'page', 'perPage', 'previousButtonLabel', 'total']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwPagination);
export { FwPagination };
let FwPill = class FwPill {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwPill = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color']
    }),
    Component({
        selector: 'fw-pill',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['color']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwPill);
export { FwPill };
let FwPlatformTable = class FwPlatformTable {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwDelete', 'fwPagination']);
    }
};
FwPlatformTable = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['isSelectable', 'loading', 'order', 'orderBy', 'paginationProps', 'showError', 'sortableColumns', 'tableProps'],
        methods: ['clearTableSelection']
    }),
    Component({
        selector: 'fw-platform-table',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['isSelectable', 'loading', 'order', 'orderBy', 'paginationProps', 'showError', 'sortableColumns', 'tableProps']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwPlatformTable);
export { FwPlatformTable };
let FwPopover = class FwPopover {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwShow', 'fwHide']);
    }
};
FwPopover = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['autoFocusOnContent', 'boundary', 'disableTransition', 'distance', 'fallbackPlacements', 'hasBorder', 'hideOnTab', 'hoist', 'placement', 'sameWidth', 'skidding', 'trigger', 'variant'],
        methods: ['show', 'hide']
    }),
    Component({
        selector: 'fw-popover',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['autoFocusOnContent', 'boundary', 'disableTransition', 'distance', 'fallbackPlacements', 'hasBorder', 'hideOnTab', 'hoist', 'placement', 'sameWidth', 'skidding', 'trigger', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwPopover);
export { FwPopover };
let FwProgressLoader = class FwProgressLoader {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwProgressLoader = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['easing', 'minimum', 'parent', 'show', 'speed', 'template', 'trickle', 'trickleSpeed'],
        methods: ['start', 'done', 'inc', 'set']
    }),
    Component({
        selector: 'fw-progress-loader',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['easing', 'minimum', 'parent', 'show', 'speed', 'template', 'trickle', 'trickleSpeed']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwProgressLoader);
export { FwProgressLoader };
let FwRadio = class FwRadio {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwSelect', 'fwDeselect', 'fwFocus', 'fwBlur', 'fwChange']);
    }
};
FwRadio = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['checked', 'description', 'disabled', 'label', 'name', 'state', 'value'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-radio',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['checked', 'description', 'disabled', 'label', 'name', 'state', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwRadio);
export { FwRadio };
let FwRadioGroup = class FwRadioGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwRadioGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['allowEmpty', 'errorText', 'hintText', 'label', 'name', 'orientation', 'required', 'state', 'value', 'warningText'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-radio-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['allowEmpty', 'errorText', 'hintText', 'label', 'name', 'orientation', 'required', 'state', 'value', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwRadioGroup);
export { FwRadioGroup };
let FwSearchDropdown = class FwSearchDropdown {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwSearchDropdown = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['options']
    }),
    Component({
        selector: 'fw-search-dropdown',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['options']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSearchDropdown);
export { FwSearchDropdown };
let FwSelect = class FwSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange', 'fwFocus', 'fwBlur']);
    }
};
FwSelect = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['allowDeselect', 'boundary', 'caret', 'checkbox', 'creatableProps', 'debounceTimer', 'disabled', 'errorText', 'forceSelect', 'hintText', 'hoist', 'label', 'labelledBy', 'max', 'multiple', 'name', 'noDataText', 'notFoundText', 'options', 'optionsPlacement', 'optionsVariant', 'placeholder', 'readonly', 'required', 'sameWidth', 'search', 'searchable', 'selectedOptions', 'state', 'tagVariant', 'type', 'value', 'variant', 'warningText'],
        methods: ['getSelectedItem', 'setSelectedValues', 'setSelectedOptions', 'setFocus']
    }),
    Component({
        selector: 'fw-select',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['allowDeselect', 'boundary', 'caret', 'checkbox', 'creatableProps', 'debounceTimer', 'disabled', 'errorText', 'forceSelect', 'hintText', 'hoist', 'label', 'labelledBy', 'max', 'multiple', 'name', 'noDataText', 'notFoundText', 'options', 'optionsPlacement', 'optionsVariant', 'placeholder', 'readonly', 'required', 'sameWidth', 'search', 'searchable', 'selectedOptions', 'state', 'tagVariant', 'type', 'value', 'variant', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSelect);
export { FwSelect };
let FwSelectCondition = class FwSelectCondition {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwSelectCondition = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['controlProps', 'error', 'showError', 'value'],
        methods: ['isValid', 'refresh', 'setError']
    }),
    Component({
        selector: 'fw-select-condition',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['controlProps', 'error', 'showError', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSelectCondition);
export { FwSelectCondition };
let FwSelectOption = class FwSelectOption {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwSelectAttempted', 'fwSelected', 'fwFocus', 'fwBlur']);
    }
};
FwSelectOption = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'disabled', 'graphicsProps', 'groupName', 'hideTick', 'html', 'htmlContent', 'optionText', 'selected', 'subText', 'text', 'value', 'variant'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-select-option',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['allowDeselect', 'allowSelect', 'checkbox', 'disabled', 'graphicsProps', 'groupName', 'hideTick', 'html', 'htmlContent', 'optionText', 'selected', 'subText', 'text', 'value', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSelectOption);
export { FwSelectOption };
let FwSkeleton = class FwSkeleton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwSkeleton = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['count', 'customStyles', 'effect', 'height', 'marginBottom', 'variant', 'width']
    }),
    Component({
        selector: 'fw-skeleton',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['count', 'customStyles', 'effect', 'height', 'marginBottom', 'variant', 'width']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSkeleton);
export { FwSkeleton };
let FwSortSelect = class FwSortSelect {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwSort']);
    }
};
FwSortSelect = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['order', 'orderBy', 'sortOptions']
    }),
    Component({
        selector: 'fw-sort-select',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['order', 'orderBy', 'sortOptions']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSortSelect);
export { FwSortSelect };
let FwSpinner = class FwSpinner {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwSpinner = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['color', 'size']
    }),
    Component({
        selector: 'fw-spinner',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['color', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwSpinner);
export { FwSpinner };
let FwTab = class FwTab {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwTab = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['active', 'disabled', 'panel', 'tabHeader', 'tabName']
    }),
    Component({
        selector: 'fw-tab',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['active', 'disabled', 'panel', 'tabHeader', 'tabName']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTab);
export { FwTab };
let FwTabPanel = class FwTabPanel {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwTabPanel = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['active', 'name']
    }),
    Component({
        selector: 'fw-tab-panel',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['active', 'name']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTabPanel);
export { FwTabPanel };
let FwTabs = class FwTabs {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwTabs = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['activeTabIndex', 'activeTabName', 'label', 'variant'],
        methods: ['activateTab']
    }),
    Component({
        selector: 'fw-tabs',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['activeTabIndex', 'activeTabName', 'label', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTabs);
export { FwTabs };
let FwTag = class FwTag {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwClosed']);
    }
};
FwTag = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['closable', 'disabled', 'focusable', 'graphicsProps', 'index', 'isFocused', 'showEllipsisOnOverflow', 'state', 'subText', 'text', 'value', 'variant'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-tag',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['closable', 'disabled', 'focusable', 'graphicsProps', 'index', 'isFocused', 'showEllipsisOnOverflow', 'state', 'subText', 'text', 'value', 'variant']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTag);
export { FwTag };
let FwTextarea = class FwTextarea {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwFocus', 'fwBlur', 'fwInput']);
    }
};
FwTextarea = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['cols', 'disabled', 'errorText', 'hintText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'state', 'value', 'warningText', 'wrap'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-textarea',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['cols', 'disabled', 'errorText', 'hintText', 'label', 'maxlength', 'minlength', 'name', 'placeholder', 'readonly', 'required', 'resize', 'rows', 'state', 'value', 'warningText', 'wrap']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTextarea);
export { FwTextarea };
let FwTimepicker = class FwTimepicker {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange', 'fwBlur', 'fwFocus']);
    }
};
FwTimepicker = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['allowDeselect', 'caret', 'disabled', 'errorText', 'format', 'hintText', 'interval', 'label', 'locale', 'maxTime', 'minTime', 'name', 'optionsPlacement', 'placeholder', 'readonly', 'required', 'sameWidth', 'state', 'value', 'warningText'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-timepicker',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['allowDeselect', 'caret', 'disabled', 'errorText', 'format', 'hintText', 'interval', 'label', 'locale', 'maxTime', 'minTime', 'name', 'optionsPlacement', 'placeholder', 'readonly', 'required', 'sameWidth', 'state', 'value', 'warningText']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTimepicker);
export { FwTimepicker };
let FwToast = class FwToast {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwToast = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['actionLinkText', 'content', 'pauseOnHover', 'position', 'sticky', 'timeout', 'type'],
        methods: ['trigger']
    }),
    Component({
        selector: 'fw-toast',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['actionLinkText', 'content', 'pauseOnHover', 'position', 'sticky', 'timeout', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwToast);
export { FwToast };
let FwToastMessage = class FwToastMessage {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwLinkClick', 'fwRemoveToast']);
    }
};
FwToastMessage = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['actionLinkText', 'content', 'open', 'pauseOnHover', 'sticky', 'timeout', 'type']
    }),
    Component({
        selector: 'fw-toast-message',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['actionLinkText', 'content', 'open', 'pauseOnHover', 'sticky', 'timeout', 'type']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwToastMessage);
export { FwToastMessage };
let FwToggle = class FwToggle {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwToggle = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['checked', 'disabled', 'label', 'name', 'showIcon', 'size']
    }),
    Component({
        selector: 'fw-toggle',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['checked', 'disabled', 'label', 'name', 'showIcon', 'size']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwToggle);
export { FwToggle };
let FwToggleGroup = class FwToggleGroup {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwChange']);
    }
};
FwToggleGroup = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['label', 'multiple', 'name', 'value'],
        methods: ['setSelectedValues']
    }),
    Component({
        selector: 'fw-toggle-group',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['label', 'multiple', 'name', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwToggleGroup);
export { FwToggleGroup };
let FwToggleGroupButton = class FwToggleGroupButton {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwToggled']);
    }
};
FwToggleGroupButton = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['baseClassName', 'description', 'disabled', 'header', 'index', 'isCheckbox', 'name', 'selectable', 'selected', 'type', 'value'],
        methods: ['setFocus']
    }),
    Component({
        selector: 'fw-toggle-group-button',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['baseClassName', 'description', 'disabled', 'header', 'index', 'isCheckbox', 'name', 'selectable', 'selected', 'type', 'value']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwToggleGroupButton);
export { FwToggleGroupButton };
let FwTooltip = class FwTooltip {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
FwTooltip = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['content', 'distance', 'fallbackPlacements', 'hoist', 'placement', 'trigger'],
        methods: ['show', 'hide']
    }),
    Component({
        selector: 'fw-tooltip',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['content', 'distance', 'fallbackPlacements', 'hoist', 'placement', 'trigger']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwTooltip);
export { FwTooltip };
let FwWidgetCustomizeFieldItem = class FwWidgetCustomizeFieldItem {
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
        proxyOutputs(this, this.el, ['fwCheck']);
    }
};
FwWidgetCustomizeFieldItem = __decorate([
    ProxyCmp({
        defineCustomElementFn: undefined,
        inputs: ['dataProvider', 'disabled', 'index', 'isPrimaryField', 'label', 'name', 'pinned', 'selected']
    }),
    Component({
        selector: 'fw-widget-customize-field-item',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        inputs: ['dataProvider', 'disabled', 'index', 'isPrimaryField', 'label', 'name', 'pinned', 'selected']
    }),
    __metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], FwWidgetCustomizeFieldItem);
export { FwWidgetCustomizeFieldItem };
//# sourceMappingURL=proxies.js.map