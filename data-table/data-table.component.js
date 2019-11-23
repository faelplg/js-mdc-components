import {MDCDataTable} from '@material/data-table';

export default class DataTable {
  constructor(_id) {
    this.componentElement = document.querySelector(_id);
    this.dataTableComponent = new MDCDataTable(this.componentElement);
  }

  get element() {
    return this.componentElement;
  }
  
  set element(_component) {
    this.componentElement = _component;
  }

  get component() {
    return this.dataTableComponent;
  }

  status() {
    /* eslint-disable no-console */
    console.log('%c--DataTable component status--', 'color: #f4c602; background: #222; padding: 8px;');
    console.log('DataTable - Element', this.element);
    console.log('DataTable - MDC Component', this.component);
    /* eslint-enable no-console */
  }
}