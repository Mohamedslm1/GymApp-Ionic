import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilee',
  templateUrl: './profilee.page.html',
  styleUrls: ['./profilee.page.scss'],
})
export class ProfileePage implements OnInit {

  userId: string="";
  email: string="";
  username: string="m";
  age: number= 0;
  weight: number=0;
  height: number=0;
  gender: string="";
  bmi: number=0;
  image : string = "";

  userData: Observable<any>;

  constructor(
    private auth: AngularFireAuth,
    private userDataService: UserService,
    private db: AngularFireDatabase,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.userData = db.object('user-data').valueChanges();
  }
 
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'];
      this.email = params['email'];
    });
    this.auth.user.subscribe(user => {
      if (user) {
        this.userId = user.uid;
        this.getUserData(this.email);
        this.getUserData(this.userId);
        
      }
    });
  }
  logout()
  {
    this.router.navigateByUrl('/onboarding');
  }
  getUserData(email: string) {
    const userRef = this.db.list('/user-data', ref => ref.orderByChild('email').equalTo(email));
  userRef.snapshotChanges().subscribe((data: any) => {
    if (data && data.length > 0) {
      const userData = data[0].payload.val();
      this.username = userData.username;
      this.age = userData.age;
      this.weight = userData.weight;
      this.height = userData.height;
      this.gender = userData.gender;
      if (this.gender === 'male') {
        this.image = '../../assets/img/avatarMen.png';
      } else {
        this.image = '../../assets/img/avatarwomen.png';
      }
    }
  });
  }




}


