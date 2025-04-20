import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion',
  standalone: true,
  template: `
    <div class="iframe-container">
      <iframe src="docs/documentacion.pdf" width="100%" height="600px"></iframe>
    </div>
    <div class="buttons">
      <a class="btn" href="docs/documentacion.pdf" download>Descargar documentacion</a>
    </div>
    
  `
})
export class DocumentacionComponent {

}