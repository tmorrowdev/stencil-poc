import { ChangeDetectorRef, ElementRef, EventEmitter, NgZone } from '@angular/core';
// import type { AccordionToggleEvent as IAccordionAccordionToggleEvent } from '../../../components.d';
export declare interface FwAccordion {
    /**
     * Triggered when the accordion is expanded or collapsed
     */
    fwAccordionToggle: EventEmitter<CustomEvent<IAccordionAccordionToggleEvent>>;
}
export declare class FwAccordion {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwAccordionBody {
}
export declare class FwAccordionBody {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwAccordionTitle {
}
export declare class FwAccordionTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwAvatar {
}
export declare class FwAvatar {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwButton {
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
export declare class FwButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwButtonGroup {
}
export declare class FwButtonGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwCheckbox {
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
export declare class FwCheckbox {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwCoExport {
    /**
     * Triggered whenever the export button is selected
     */
    fwExport: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered whenever the cancel/close button is selected
     */
    fwCloseExport: EventEmitter<CustomEvent<any>>;
}
export declare class FwCoExport {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwCoExportField {
    /**
     * Triggered whenever the export button is selected
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwCoExportField {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwCountryPhone {
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
export declare class FwCountryPhone {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwCustomCellAnchor {
}
export declare class FwCustomCellAnchor {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwCustomCellIcon {
}
export declare class FwCustomCellIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwCustomCellParagraph {
}
export declare class FwCustomCellParagraph {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwCustomCellUser {
}
export declare class FwCustomCellUser {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwDataTable {
    /**
     * fwSelectionChange Emits this event when row is selected/unselected.
     */
    fwSelectionChange: EventEmitter<CustomEvent<any>>;
    /**
     * fwSelectAllChange Emits this event when select all is checked.
     */
    fwSelectAllChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwDataTable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwDateCondition {
}
export declare class FwDateCondition {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwDatepicker {
    /**
     * Triggered when the update button clicked
     */
    fwChange: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered when the input box loses focus.
     */
    fwBlur: EventEmitter<CustomEvent<any>>;
}
export declare class FwDatepicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwDragContainer {
    /**
     * Triggered when an draggable item is dropped inside the container.
     */
    fwDrop: EventEmitter<CustomEvent<void>>;
}
export declare class FwDragContainer {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwDragItem {
}
export declare class FwDragItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwFbFieldDropdown {
    /**
     * Triggered on data change for error handling on parent
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwFbFieldDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFbFieldDropdownItem {
    /**
     * Triggered on delete button click
     */
    fwDelete: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered on choice input blur
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwFbFieldDropdownItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFbFieldLookup {
    /**
     * Triggered on data change for error handling on parent
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwFbFieldLookup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFieldEditor {
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
export declare class FwFieldEditor {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFieldTypeMenuItem {
    /**
     * Triggered when the the add button is clicked.
     */
    fwAddClick: EventEmitter<CustomEvent<any>>;
}
export declare class FwFieldTypeMenuItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFileUploader {
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
export declare class FwFileUploader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFileUploaderFile {
    /**
     * removeFile - event that gets triggered on file removal
     */
    fwRemoveFile: EventEmitter<CustomEvent<any>>;
}
export declare class FwFileUploaderFile {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFileUploaderProgress {
    /**
     * retryUpload event to emit in case of a retry
     */
    fwRetryUpload: EventEmitter<CustomEvent<any>>;
}
export declare class FwFileUploaderProgress {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwFilter {
    /**
     * Triggered whenever the user selects/removes a filter option.
     */
    fwFilterChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwFilter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFilterCondition {
    /**
     * Event Triggered on deleting an filter condition
     */
    fwDelete: EventEmitter<CustomEvent<any>>;
}
export declare class FwFilterCondition {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFilterDropdown {
}
export declare class FwFilterDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwForm {
    /**
     * fwFormValuesChanged - event that gets emitted when values change.
     */
    fwFormValuesChanged: EventEmitter<CustomEvent<any>>;
}
export declare class FwForm {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFormBuilder {
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
export declare class FwFormBuilder {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface  FwFormControl {
}
export declare class FwFormControl {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFormatDate {
}
export declare class FwFormatDate {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwFormatNumber {
}
export declare class FwFormatNumber {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwIcon {
}
export declare class FwIcon {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwInlineMessage {
    /**
     * Triggered when inline message is shown.
     */
    fwShow: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered when inline message is hidden.
     */
    fwHide: EventEmitter<CustomEvent<any>>;
}
export declare class FwInlineMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwInput {
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
export declare class FwInput {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwInputCondition {
}
export declare class FwInputCondition {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwInputRangeCondition {
    /**
     * Triggered when the value in the input box is modified.
     */
    fwInput: EventEmitter<CustomEvent<any>>;
}
export declare class FwInputRangeCondition {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwLabel {
}
export declare class FwLabel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwListOptions {
    /**
     * Triggered when a value is selected or deselected from the list box options.
     */
    fwChange: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered when the options list is in loading state processing the search function.
     */
    fwLoading: EventEmitter<CustomEvent<any>>;
}
export declare class FwListOptions {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwMenu {
}
export declare class FwMenu {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwMenuItem {
}
export declare class FwMenuItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwModal {
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
export declare class FwModal {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwModalContent {
}
export declare class FwModalContent {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwModalFooter {
}
export declare class FwModalFooter {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwModalTitle {
}
export declare class FwModalTitle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwPagination {
    /**
     * Triggered when either previous or next button is clicked.
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwPagination {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwPill {
}
export declare class FwPill {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwPlatformTable {
    /**
     * Triggered on selecting the sort option.
     */
    fwDelete: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered on page navigation button click.
     */
    fwPagination: EventEmitter<CustomEvent<any>>;
}
export declare class FwPlatformTable {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwPopover {
    /**
     * Triggered whenever the popover contents is open/displayed.
     */
    fwShow: EventEmitter<CustomEvent<any>>;
    /**
     * Triggered whenever the popover contents is closed/hidden.
     */
    fwHide: EventEmitter<CustomEvent<any>>;
}
export declare class FwPopover {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwProgressLoader {
}
export declare class FwProgressLoader {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwRadio {
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
export declare class FwRadio {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwRadioGroup {
    /**
     * Triggered when an option in the Radio Group is selected or deselected.
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwRadioGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSearchDropdown {
    /**
     * On Change event
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwSearchDropdown {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSelect {
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
export declare class FwSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSelectCondition {
}
export declare class FwSelectCondition {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSelectOption {
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
export declare class FwSelectOption {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSkeleton {
}
export declare class FwSkeleton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSortSelect {
    /**
     * Triggered on selecting the sort option.
     */
    fwSort: EventEmitter<CustomEvent<any>>;
}
export declare class FwSortSelect {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwSpinner {
}
export declare class FwSpinner {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTab {
}
export declare class FwTab {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTabPanel {
}
export declare class FwTabPanel {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTabs {
    /**
     * Triggered when a the view switches to a new tab.
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwTabs {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTag {
    /**
     * Triggered when the tag is deselected.
     */
    fwClosed: EventEmitter<CustomEvent<any>>;
}
export declare class FwTag {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTextarea {
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
export declare class FwTextarea {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTimepicker {
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
export declare class FwTimepicker {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwToast {
}
export declare class FwToast {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwToastMessage {
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
export declare class FwToastMessage {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwToggle {
    /**
     * Triggered when the input control is selected or deselected.
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwToggle {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwToggleGroup {
    /**
     * Triggered when an option in the Toggle Group is selected or deselected.
     */
    fwChange: EventEmitter<CustomEvent<any>>;
}
export declare class FwToggleGroup {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwToggleGroupButton {
    /**
     * Triggered when the card in focus is selected.
     */
    fwToggled: EventEmitter<CustomEvent<any>>;
}
export declare class FwToggleGroupButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwTooltip {
}
export declare class FwTooltip {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface FwWidgetCustomizeFieldItem {
    /**
     * Triggered when the card in focus is selected.
     */
    fwCheck: EventEmitter<CustomEvent<any>>;
}
export declare class FwWidgetCustomizeFieldItem {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
