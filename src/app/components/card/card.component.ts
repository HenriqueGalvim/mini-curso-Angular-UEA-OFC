import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() tituloNoticia:string | undefined;
  @Input() nomeAutor:string | undefined;
  @Input() imagemNoticia:string | undefined;
  @Input() descricaoNoticia:string | undefined;
}
