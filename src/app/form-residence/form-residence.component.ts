import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent {

  residenceForm: FormGroup;
  id!:number
  residence : any
  constructor(private rs : ResidenceService, private router:Router,private act:ActivatedRoute) {
    // Initialisation du formulaire avec FormGroup et FormControl
    this.residenceForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      address: new FormControl('', Validators.required),
      image: new FormControl('', [Validators.required]),
      status: new FormControl('../../assets/images/R1.jpg', Validators.required)
    });
  }
  ngOnInit(){
    //1 - recuperer l'id de la residence
    this.id=this.act.snapshot.params['id']
    //2-  recuperer la residence par id
    this.rs.getResidenceById(this.id).subscribe(
      (data)=> {
        this.residence=data
        console.log(this.residence)
        //3- patcher les données dans le formulaire
        this.residenceForm.patchValue(this.residence)
      }
    )
  }
  // Fonction appelée lors de la soumission du formulaire
  save() {

    if (this.id){
      this.rs.updateResidence(this.residenceForm.value, this.id).subscribe(
        ()=> this.router.navigateByUrl('/residence')
      )
    }else {
      this.rs.addResdidence(this.residenceForm.value).subscribe(
        ()=> this.router.navigateByUrl('/residence')
     )
    }


  }
}
