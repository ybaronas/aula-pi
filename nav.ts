import { Component, OnInit } from '@angular/core';
import { Produtos, ListaProdutos } from '../produto/Produtos';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.html',
    styleUrl: './home.css',
})
export class Home implements OnInit {

    produto: Produtos[] = [];

    ngOnInit(): void {
        this.produto = ListaProdutos.slice(0,3);
    }








}