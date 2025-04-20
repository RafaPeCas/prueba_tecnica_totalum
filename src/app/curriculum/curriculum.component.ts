import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  template: `
    <div class="iframe-container">
      <iframe src="docs/curriculum.pdf" width="100%" height="600px"></iframe>
    </div>
    <div class="buttons">
      <a class="btn" href="docs/curriculum.pdf" download>Descargar curriculum</a>
    </div>
  `
})
export class CurriculumComponent {}