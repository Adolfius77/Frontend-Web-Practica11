
import estilos from '../styles/boton-app.css?inline';

export class BotonApp extends HTMLElement {
  static observedAttributes = ['variante', 'deshabilitado'];

  private boton: HTMLButtonElement;


  constructor() {
    super();

    const sombra = this.attachShadow({ mode: 'open' });

    sombra.innerHTML = `
      <style>${estilos}</style>
      <button><slot></slot></button>
    `;
    this.boton = sombra.querySelector('button')!;
  }

  connectedCallback() {
    this.pintar();
  }

  attributeChangedCallback() {
    this.pintar();
  }


  disconnectedCallback() {
    console.log('boton-app salió de la página');
  }


  adoptedCallback() {
    console.log('boton-app se mudó de documento');
  }

  private pintar() {
    this.boton.className = this.getAttribute('variante') ?? 'primario';
    this.boton.disabled = this.hasAttribute('deshabilitado');
  }
}
customElements.define('boton-app', BotonApp);