import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Noticia } from "../Components/models/noticia";

@Injectable({
    providedIn: 'root',
})
export class NewsService {
    private apiUrl = `${environment.API}/news`;

    constructor(private http: HttpClient) { }

    getNews() {
        return this.http.get<Noticia[]>(`${this.apiUrl}`);
    }

    crearNoticia(dto: Noticia) {
        return this.http.post<Noticia>(`${this.apiUrl}`, dto);
    }

    editarNoticia(dto: Noticia) {
        return this.http.put<Noticia>(`${this.apiUrl}`, dto);
    }

    eliminarNoticia(id: number) {
        return this.http.delete<string>(`${this.apiUrl}/${id}`);
    }
}
