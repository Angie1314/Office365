import { Component, OnInit } from '@angular/core';
import { GraphApiService } from 'src/services/graph-api.service';
import { Observable } from 'rxjs';
import { Profile } from 'src/ models/profile';
import { Photo }  from 'src/ models/photo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: Observable<Profile>;
  constructor(private graphApi: GraphApiService) { }

  color = 'primary';
  mode = 'determinate';
  value = 50;

  imgAccess = '../../../../assets/images/access.png';

  ngOnInit() {
    this.profile = this.graphApi.getProfile();
    // this.photo=this.graphApi.getPhoto();
  }

}
