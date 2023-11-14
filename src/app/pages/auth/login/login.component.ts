import { Component } from '@angular/core';
import { AuthApi } from 'src/app/core/api/app/auth.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  login: { email: string; password: string } = { email: '', password: '' };
  checkboxValue = false;
  showModal = false;
  isFormValid = false;
  modalMessage = '';

  constructor(private authApi: AuthApi) {}

  /**
   * checkboxChange
   *
   * Função para a mudança no valor do checkbox.
   * @param checked - O novo valor do checkbox.
   */
  checkboxChange(checked: boolean): void {
    this.checkboxValue = checked;
  }

  /**
   * emailValueChange
   *
   * Função para a mudança no valor do campo de e-mail.
   * @param newValue - O novo valor do e-mail.
   */
  emailValueChange(newValue: string): void {
    this.login.email = newValue;
    this.updateFormValidity();
  }

  /**
   * passwordValueChange
   *
   * Função para a mudança no valor do campo de senha.
   * @param newValue - O novo valor da senha.
   */
  passwordValueChange(newValue: string): void {
    this.login.password = newValue;
    this.updateFormValidity();
  }

  /**
   * validateEmail
   *
   * Valida o formato do e-mail.
   * @returns {boolean} retorna true caso o email esteja no formato correto
   */
  validateEmail(): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(this.login.email);
  }

  /**
   * validatePassword

   * Valida o comprimento da senha.
   * @returns {boolean} retorna true caso a senha cumpra tenha mais de 7 caracteres
   */
  validatePassword(): boolean {
    return this.login.password.length >= 8;
  }

  /**
   * updateFormValidity
   *
   * Atualiza o status de validade do formulário(isFormValid) com base na validação do e-mail e senha.
   */
  updateFormValidity(): void {
    this.isFormValid = this.validateEmail() && this.validatePassword();
  }

  /**
   * onSubmit
   *
   * Envia as informações de login do usuário para o service.
   * Se o login for bem-sucedido, exibe uma mensagem de sucesso no modal.
   * Se ocorrer um erro, a mensagem de erro é exibida no modal.
   */
  onSubmit(): void {
    this.authApi
      .authenticateUser(this.login)
      .then(() => {
        this.modalMessage = 'Login efetuado com sucesso!';
        this.showModal = true;
      })
      .catch((error) => {
        this.modalMessage = error.error.data;
        this.showModal = true;
      });
  }

  /**
   * closeModal
   *
   * Fecha o modal de acordo com um evento.
   * @param event - O evento de fechamento do modal.
   */
  closeModal(event: boolean): void {
    this.showModal = event;
  }
}
