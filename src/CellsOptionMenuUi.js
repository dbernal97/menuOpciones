import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsOptionMenuUi-styles.js';
import '@bbva-web-components/bbva-web-header-multistep/bbva-web-header-multistep.js';
import '@bbva-web-components/bbva-web-button-multistep-back/bbva-web-button-multistep-back.js';
import '@bbva-web-components/bbva-web-progress-multistep-bar/bbva-web-progress-multistep-bar.js';
import {bbvaTablet, bbvaBank, bbvaPortfolio, bbvaReceivemoneydollar} from '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons.js';
import '@bbva-web-components/bbva-button-list/bbva-button-list.js';
import '@bbva-web-components/bbva-web-notification-help/bbva-web-notification-help.js';


/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-option-menu-ui></cells-option-menu-ui>
```

##styling-doc

@customElement cells-option-menu-ui
*/
export class CellsOptionMenuUi extends LitElement {
  static get is() {
    return 'cells-option-menu-ui';
  }

  // Declare properties
  static get properties() {
    return {
      name: { type: String, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.name = 'Cells';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-option-menu-ui-shared-styles')
    ];
  }
  _headerSection(){
    return html`
    <div class="header">
        <div class="zone">
          <bbva-web-header-multistep block-title="Transfiere y recibe" id="header-title" closeLabel="Salir">
          </bbva-web-header-multistep>
          <bbva-web-progress-multistep-bar current="1" max="5"></bbva-web-progress-multistep-bar>
          <section>
            <bbva-web-button-multistep-back text="Anterior"></bbva-web-button-multistep-back>
          </section>
        </div>
      </div>
    `
  }


  _mainSection(){
    return html`
      <div class="main">
        <h3>¿Qué deseas hacer hoy?</h3>
        <br>
        <p class="title">Transferir a:</p>
        <div class="section-btn">
          <div class="sec-btn">
            <bbva-button-list icon="${bbvaTablet()}" title-text="Celulares" class="link-btn"></bbva-button-list>
            <bbva-web-notification-help class="notification">Transfiere a números de celular, a través de BBVA o Transfiya.</bbva-web-notification-help>
          </div>
         <div class="sec-btn">
          <bbva-button-list icon="${bbvaBank()}" title-text="Cuentas" class="link-btn"></bbva-button-list>
          <bbva-web-notification-help class="notification">Transfiere a cuentas BBVA, a otros bancos e inscribe nuevas cuentas.</bbva-web-notification-help>
         </div>

          <div class="sec-btn">
            <bbva-button-list icon="${bbvaPortfolio()}" title-text="Mis cuentas BBVA" class="link-btn"></bbva-button-list>
            <bbva-web-notification-help class="notification">Transfiere a tus cuentas que tengas con BBVA.</bbva-web-notification-help>
          </div>
        </div>

      </div>
    `
  }

  _otherSection(){
    return html`
      <div class="other">
        <br>
        <p class="title">Otras opciones:</p>
        <div class="section-btn">
          <div class="sec-btn">
            <bbva-button-list icon="${bbvaReceivemoneydollar()}" title-text="Celulares" class="link-btn"></bbva-button-list>
            <bbva-web-notification-help class="notification">Recibe el dinero que te enviaron por Transfiya.</bbva-web-notification-help>
          </div>

          <div class="sec-btn">
            <bbva-button-list icon="${bbvaReceivemoneydollar()}" title-text="Cuentas" class="link-btn"></bbva-button-list>
            <bbva-web-notification-help class="notification">Pide dinero con Transfiya y acepta las solicitudes pendientes.</bbva-web-notification-help>
          </div>
        </div>
      </div>
    `
  }



  // Define a template
  render() {
    return html`
      ${this._headerSection()}
      <div class="main-container">
        ${this._mainSection()}
        <br>
        ${this._otherSection()}
      </div>
    `;
  }
}
