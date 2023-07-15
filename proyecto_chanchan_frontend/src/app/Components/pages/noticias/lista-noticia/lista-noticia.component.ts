import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Noticia } from 'src/app/Components/models/noticia';
import { NewsService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-lista-noticia',
  templateUrl: './lista-noticia.component.html',
  styleUrls: ['./lista-noticia.component.css']
})
export class ListaNoticiaComponent implements OnInit {
  listNews: Noticia[] = [];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'description',
    'autor',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;
  

  constructor(private _newsService: NewsService) {}

  ngOnInit(): void {
    this.cargarNoticias();
  }
  crearNoticia(news: Noticia) {
    this._newsService.crearNoticia(news);
  }

  cargarNoticias() {
    this._newsService.getNews().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  eliminarNoticia(index: number) {
    this._newsService.eliminarNoticia(index).subscribe(() => {
      this.cargarNoticias();
    });
  }
}
