import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/Components/models/noticia';
import { NewsService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.css']
})
export class CrearNoticiaComponent implements OnInit {
  acto = 'Crear';

  constructor(
    private _newsService: NewsService,
    private rutaNews: ActivatedRoute,
    private _router: Router
  ) {}

  index: number = this.rutaNews.snapshot.params['id'];

  news: Noticia[] = [];

  ngOnInit(): void {
    //get data from news
    this._newsService.getNews().subscribe((data) => {
      data.forEach((newsData) => {
        if (newsData.id_noticia == this.index) {
          this.newMostrar = newsData;
        }
      });
    });

    this.esEditar;
    if (this.index) {
      this.acto = 'Editar';
    }
  }

  //para identificar 'editarNew'
  accion: boolean = this.news[this.index - 1] ? false : true;

  esEditar() {
    if (this.index === 0) {
      this.acto = 'Agregar';
    }
  }

  newMostrar: Noticia = {
    title: '',
    description: '',
    autor: '',
    id_noticia: 0
  };

  crearNoticia() {
    if (this.newMostrar.title) {
      this._newsService.crearNoticia(this.newMostrar).subscribe();
      this._router.navigate(['lista/noticia']);
    }
  }

  editarNoticia() {
    this._newsService.editarNoticia(this.newMostrar).subscribe();
    this._router.navigate(['lista/noticia']);
  }
}
