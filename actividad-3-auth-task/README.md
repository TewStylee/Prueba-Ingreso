# Actividad 3: Sistema de Tareas con Autenticación
Este proyecto es una aplicación desarrollada en **Angular** que implementa un flujo completo de autenticación, autorización y protección de rutas, simulando la interacción con un Backend as a Service (BaaS).

## Objetivos Cumplidos
1.  **Autenticación:** Login funcional con validación de credenciales.
2.  **Gestión de Sesión:** Almacenamiento seguro de Token en localStorage y manejo de sesión.
3.  **Seguridad:**
    * **AuthGuard:** Protección de la ruta /tasks para usuarios no autenticados.
    * **HTTP Interceptor:** Inyección automática del header Authorization: Bearer.
    * **Manejo de Error 401:** Cierre de sesión automático si el token expira o es inválido.
4.  **Módulo de Tareas (CRUD):** Listar, crear, editar y eliminar tareas.

## Stack Tecnológico
* **Framework:** Angular 20
* **Estilos:** SCSS 
* **Arquitectura:** Servicios, Guards e Interceptores funcionales.---

## Guía de Instalación y Ejecución

### 1. Clonar e Instalar

# Instalar dependencias
npm installng g c components/login --skip-tests
ng g c components/task-list --skip-tests
ng g s services/auth --skip-tests
ng g s services/task --skip-tests
ng g g guards/auth --implements CanActivate --skip-tests

### 2. Clonar e Instalar
ng serve

### 3. Clonar e Instalar
Navega en tu navegador a: http://localhost:4200/

## Credenciales de Prueba
Email:      jhonny@gmail.com
Password:	jhonny123


