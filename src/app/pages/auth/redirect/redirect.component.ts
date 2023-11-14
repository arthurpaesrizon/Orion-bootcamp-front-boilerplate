import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthApi } from 'src/app/core/api/app/auth.api';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  constructor(
    private authApi: AuthApi,
    private router: Router,
  ) {}

  public message = '';

  /**
   * ngOnInit
   *
   * Função que será disparada ao inicializar o componente fazendo o http request GET que pega o status e mensagem após o usuário clicar no link do e-mail de validação.
   */
  ngOnInit(): void {
    this.authApi.checkValidToken().then((dt) => {
      this.message = dt.message;
    });
  }

  /**
   * redirectLogin
   *
   * Função que redireciona o usuário para a tela de login.
   */
  redirectLogin(): void {
    this.router.navigate(['login']);
  }
}
