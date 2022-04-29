import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { AvisServiceService } from 'src/app/services/avis.service';
export interface Maladie{
  id : number ; 
  nom : string ; 
}
export interface Niveau{
  id : number ; 
  niv : number ; 
}
@Component({
  selector: 'app-ajout-gauche',
  templateUrl: './ajout-gauche.component.html',
  styleUrls: ['./ajout-gauche.component.css']
})
export class AjoutGaucheComponent implements OnInit {

formGroup1: FormGroup;
formGroup2: FormGroup;
isLinear = false;
name  = '';
imagePath :string=null;
imagePathhh : string ; 
user :any={};
expert : any={};
retrieveResponse: any={};
base64Data: any;
test : string = "rahma" ; 
nom_Expert : string="" ; 
id : number ; 
idConsultation:number ;
consultation: any ;
demandeD : number ; 
demandeG : number ; 
images: any[] = [];
ress : any ; 
avisExpertAjouter : any ;
autoDetection: any ;
allDemandes : any ; 
lengthAllDemande: number ; 
maladieGaucheDeAutoDetection : string ; 
graviteGaucheDeAutodetection : number
testMaladieDroite : string ; 
testMaladieGauche : string ; 
testGraviteDroite : number ;
testGraviteGauche : number ; 
maladies : Maladie[]=[
  {id :1, nom:"maladie 1"},
  {id :2, nom:"maladie 2"},
  {id :3, nom:"maladie 3"},
  {id :4, nom:"maladie 4"},
  {id :5, nom:"maladie 5"},
  {id :6, nom:"maladie 6"},
];
niveaux : Niveau[]=[
  {id :1, niv:1},
  {id :2, niv:2},
  {id :3, niv:3},
];
  constructor(private _formBuilder: FormBuilder , private service : UserServiceService ,
     private router : Router , private ar : ActivatedRoute , private serviceAvis : AvisServiceService)
  {
    ar.params.subscribe(val => {
      this.ngOnInit();
    })
  }
  ngOnInit() {
    this.serviceAvis.lengthDemandePrincipale ; 
    this.getAllDemandes(); 
    this.ar.paramMap.subscribe((x)=>{
      this.idConsultation =+ x.get('idConsultation');  }) ; 
   
      console.log( "idd consultationnnn:",this.idConsultation)
     this.getConsultation();
    this.id=parseInt(localStorage.getItem("id")) ; 
    this.service.getData(parseInt(localStorage.getItem('id'))).subscribe(data=>{
      this.user=data
            if(this.user.image ==null){
              this.imagePath="./assets/imagesD/faces/user1.png"
            }
            else{
              this.imagePath=this.imagePath ; 
            
            this.retrieveResponse = this.user;
            this.base64Data = this.retrieveResponse.image;
            this.imagePath = 'data:image/jpeg;base64,' + this.base64Data; }
    
  }) ;
    // mtaa dropdown 
    $( "#menu" ).on( "click", function()
    {
      $( "#menu23" ).fadeToggle( "fast" );
    });
    this.formGroup1 = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.formGroup2 = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
  confimerOperation(){
    Swal.fire({
     
      icon: 'success',
      title: 'Votre avis a  bien ajouter',
      showConfirmButton: false,
      timer: 2000
    })
    this.router.navigate(['/accueil'])
  }
  getConsultation(){
    this.serviceAvis.getConsultationID( this.idConsultation).subscribe((params => {
    this.consultation = params;
    this.demandeD = this.consultation.demandeAvisD ; 
    this.demandeG = this.consultation.demandeAvisG
   /* this.maladieGaucheDeAutoDetection=this.consultation.autoDetection.maladieGauche ; 
    this.graviteGaucheDeAutodetection = this.consultation.autoDetection.graviteGauche ; 
    this.testMaladieDroite= this.consultation.autoDetection.avisExpert.maladieDroite ; 
    this.testMaladieGauche= this.consultation.autoDetection.avisExpert.maladieGauche ; 
    this.testGraviteDroite= this.consultation.autoDetection.avisExpert.graviteDroite ; 
    this.testGraviteGauche= this.consultation.autoDetection.avisExpert.graviteGauche ; 
    console.log("consultationnnnnnnn " , this.consultation)*/
   if (this.consultation.image1_Gauche  == null) {
   }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image1_Gauche;
      this.imagePathhh = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[0] = this.imagePathhh;
      console.log("lulaa", this.images[0]);
    }

    if (this.consultation.image2_Gauche == null) {
  
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image2_Gauche;
      this.imagePathhh = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[1] = this.imagePathhh;
      console.log("lqqsulaa", this.images[1]);
    }

    if (this.consultation.image3_Gauche == null) {
   
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image3_Gauche;
      this.imagePathhh = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[2] = this.imagePathhh;
      console.log("lqqsulaa", this.images[2]);
    }
    if (this.consultation.image4_Gauche == null) {
    
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image4_Gauche;
      this.imagePathhh = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[3] = this.imagePathhh;
      console.log("lqqsulaa", this.images[3]);
    }
    if (this.consultation.image5_Gauche == null) {
   
    }
    else {

      this.retrieveResponse = this.consultation;
      this.base64Data = this.retrieveResponse.image5_Gauche;
      this.imagePathhh = 'data:image/jpeg;base64,' + this.base64Data;
      this.images[4] = this.imagePathhh;
      console.log("lqqsulaa", this.images[4]);
    }
}));
  }
  addAvisGauche(value){
    value ={
      "maladieGauche" :value.maladieGauche ,
      "graviteGauche" :value.graviteGauche ,
      "commentaireGauche":value.commentaireGauche } 
if(this.consultation.autoDetection.avisExpert === null){
  this.serviceAvis.addAvisExpert(this.id).subscribe(parms=>{
    this.avisExpertAjouter=parms
    this.serviceAvis.updateAvisExpertGaucheQuiCreerAInstant(this.avisExpertAjouter.id , value).subscribe(parms=>{
      this.autoDetection=this.consultation.autoDetection; 
    this.serviceAvis.putAvisExpert(this.autoDetection.id , this.idConsultation , this.avisExpertAjouter.id).subscribe(res=>{
      this.serviceAvis.updateAttributDemandeGaucheDansConsultation(this.idConsultation).subscribe(rep=>{
        this.ress=rep
       });
      }); });
  } , err=>{
  console.log(err);
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    background :'#f8bb86',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })
 Toast.fire({
    icon: 'warning',
    title: 'il yaa probléme !!!!'
  }) 
  })
  
}
else{
  this.serviceAvis.updateAvisExpertGaucheQuiCreerAInstant(this.consultation.autoDetection.avisExpert.id , value).subscribe(parms=>{
    this.autoDetection=this.consultation.autoDetection.id ;  

  this.serviceAvis.putAvisExpert(this.autoDetection , this.idConsultation , this.consultation.autoDetection.avisExpert.id).subscribe(res=>{
    this.getAllDemandes() ; 
    }); } , err=>{
console.log(err);
const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  background :'#f8bb86',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})
Toast.fire({
  icon: 'warning',
  title: 'il yaa probléme !!!!'
})
});
}
 this.ngOnInit() ; 
this.getAllDemandes() ; 

Swal.fire({
  icon: 'success',
  title: 'votre avis bien a ajouter  ',
  showClass: {
    popup: 'animate__animated animate__fadeInDown' },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
})
this.ngOnInit() ; 

}
getAllDemandes(){
    /*this.avisService.getAllDemandes().subscribe(data=>{
    this.allDemandes=data ; 
    this.lengthAllDemande=this.allDemandes.length ; 
    console.log("tessssssssssst", this.allDemandes)
    console.log("lengrhhh", this.lengthAllDemande)
    })*/
    this.serviceAvis.getAllDemandesLastVersion().subscribe(data=>{
      this.allDemandes=data ; 
      this.serviceAvis.lengthDemandePrincipale=this.allDemandes.length ; 
      console.log("tessssssssssst", this.allDemandes)
      console.log("lengrhhh", this.serviceAvis.lengthDemandePrincipale) })
}
   logout() {
    localStorage.removeItem('name');
    this.service.islogin = false;
  this.router.navigate(['']);
      ///location.reload();
  }

  reouterrr(){
    this.router.navigate(['/demande_gauche/'+this.idConsultation])
  }
}