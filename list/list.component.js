import {MDCList} from '@material/list';

export default class List {
  constructor(_id) {
    this.componentElement = document.querySelector(_id);
    this.listComponent = new MDCList(this.componentElement);
  }

  get element() {
    return this.componentElement;
  }
  
  set element(_component) {
    this.componentElement = _component;
  }

  get component() {
    return this.listComponent;
  }

  status() {
    /* eslint-disable no-console */
    console.log('%c--List component status--', 'color: #f4c602; background: #222; padding: 8px;');
    console.log('List - Element', this.element);
    console.log('List - MDC Component', this.component);
    /* eslint-enable no-console */
  }
}