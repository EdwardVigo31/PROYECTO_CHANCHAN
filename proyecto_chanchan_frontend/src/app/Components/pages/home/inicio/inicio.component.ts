import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Noticia } from 'src/app/Components/models/noticia';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    listNews: Noticia[] = [];

    displayedColumns: string[] = [
      'id',
      'titulo',
      'description',
      'autor',
      'botones',
    ];
    dataSource!: MatTableDataSource<any>;

}
