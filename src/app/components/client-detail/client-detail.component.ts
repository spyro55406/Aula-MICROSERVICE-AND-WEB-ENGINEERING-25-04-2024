import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css'
})
export class ClientDetailComponent {

  constructor(private route: ActivatedRoute){
    this.getClientbyId
  }

  getClientbyId(){
    const id = this.route.snapshot.paramMap.get('id');
  }

}
