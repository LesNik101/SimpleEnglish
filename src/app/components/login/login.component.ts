import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide: boolean = true;

  constructor(private authServise: AuthService) {}

  signInWithGoogle() {
    this.authServise.signInWithGoogle();
  }
}
