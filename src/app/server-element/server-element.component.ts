import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('srvElement')
  element: {type: string, name: string, content: string};

  constructor() {
    console.log('Constructor called')
  }

  ngOnChanges(changes: SimpleChanges) { //Unico hook che richiede un argomento
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit() { //Viene chiamato quando la pagina viene inizializzata
    console.log('ngOnInit called')
  }

  ngDoCheck() { //Viene triggerato quando viene effettuata una qualsiasi modifica sulla pagina (click di un bottone, scroll, selezione, etc...)
    console.log('DoCheck called')
  }

  ngAfterContentInit() { //Viene triggerato una sola volta quando viene inizializzato il contenuto (ma non la sua vista, ancora non è mostrato a schermo)
    console.log('AfterContentInit called')
  }

  ngAfterContentChecked() { //Viene chiamato più volte
    console.log('AfterContentChecked called')
  }

  ngAfterViewInit() { //Viene chiamato quando viene inizializzata la vista (ma ancora non è stata renderizzata)
    console.log('AfterViewInit called')
  }

  ngAfterViewChecked() { //Viene chiamato quando viene renderizzata la vista
    console.log('AfterViewChecked called')
  }

  ngOnDestroy() { //Viene chiamato quando finisce il ciclo di vita di un componente
    console.log('OnDestroy called')
  }

}
