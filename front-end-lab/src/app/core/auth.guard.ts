/* Guard bloquea las pantallas de crear y editar si no hay sesión y redirige a /login.
una función que Angular ejecuta antes de entrar a una página para decidir si el usuario puede verla o
no. Es el que mencioné antes como pieza del patrón de autenticación.*/

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
// Protege rutas: si no hay sesión, redirige al login.
export const authGuard: CanActivateFn = () =>
inject(AuthService).autenticado() ? true : inject(Router).createUrlTree(['/login']);