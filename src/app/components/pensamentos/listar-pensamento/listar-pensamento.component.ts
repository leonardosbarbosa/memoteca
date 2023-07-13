import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    }, 
    {
      conteudo: 'Minha propriedade é decorada com o @input()',
      autoria: 'Componente Filho',
      modelo: 'modelo1'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
