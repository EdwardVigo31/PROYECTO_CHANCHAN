import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Evento } from 'src/app/Components/models/evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-lista-evento',
  templateUrl: './lista-evento.component.html',
  styleUrls: ['./lista-evento.component.css']
})
export class ListaEventoComponent implements OnInit {
  listEventos: Evento[] = [];

  displayedColumns: string[] = [
    'id',
    'titulo',
    'descripcion',
    'lugar',
    'hora',
    'fecha',
    'foto',
    'botones',
  ];
  dataSource!: MatTableDataSource<any>;

  constructor(private _eventoService: EventoService) {}

  ngOnInit(): void {
    this.cargarEventos();
  }

  cargarEventos() {
    this._eventoService.getEventos().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.listEventos = data;
    });
  }

  eliminarEvento(index: number) {
    this._eventoService.eliminarEvento(index).subscribe(() => {
      this.cargarEventos();
    });
  }
}
