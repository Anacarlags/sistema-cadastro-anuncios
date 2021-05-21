import { CursoService } from '/home/anacarlags/testeAnaCarlaAllyHub/frontend/src/app/components/cursos/curso.service'
import { Curso } from './../../curso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.css']
})
export class CursoCreateComponent implements OnInit {

  curso: Curso = {
    name: "",
    duracao: null as any,
    inicio: "",
    termino:"" ,
    description: ""
  }

  constructor(private cursosService: CursoService) { }

  ngOnInit(): void {
    
  }
 
 
  createCurso(): void{
    this.cursosService.create(this.curso).subscribe(() => {
      this.cursosService.showMessage("Produto Criado com Sucesso")
    })
   }

  cancel():void{
    
  }


}
