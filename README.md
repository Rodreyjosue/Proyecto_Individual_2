# Proyecto_Individual_2
Repositorio Proeycto Individual 2 _ Byron Josue Rodriguez Reyes

Para generar una **documentación clara y detallada** sobre cómo desplegar y utilizar la aplicación de sistema de ingreso de notas, he estructurado la guía en varias secciones, cubriendo desde la instalación hasta el uso de la interfaz. Además, incluiré sugerencias de imágenes para facilitar la comprensión de los pasos descritos.

# Documentación de Despliegue y Uso del Sistema de Ingreso de Notas

## Índice

1. [Introducción](#introducción)
2. [Requisitos Previos](#requisitos-previos)
3. [Instrucciones de Despliegue](#instrucciones-de-despliegue)
   - [Backend (Java, Spring)](#despliegue-del-backend)
   - [Frontend (React)](#despliegue-del-frontend)
   - [Base de Datos (MySQL)](#configuración-de-la-base-de-datos)
4. [Uso del Sistema](#uso-del-sistema)
   - [Registro de Notas](#Registro-de-Notas)
   - [Edicion de Notas](#Edicion-de-Notas)
   - [Eliminación de Registros](#Eliminación-de-Registros)
   - [Visualización de Notas](#visualización-de-notas)

---

## Introducción

Este sistema de ingreso de notas permite a los catedráticos gestionar las notas de estudiantes para diferentes actividades y evaluaciones. Está desarrollado con un **backend en Java utilizando Spring Framework** y un **frontend en React**, mientras que la **base de datos es MySQL**. Los catedráticos pueden ingresar notas, y los estudiantes pueden visualizarlas mediante una interfaz web amigable.

## Requisitos Previos

Asegúrese de tener instalados los siguientes programas en su sistema:

- **Java 17**
- **Spring Boot**
- **Node.js** y **npm** (para React)
- **MySQL**
- **IDE** (IntelliJ, Eclipse, VSCode, o el de su preferencia)
- **Postman** (opcional, para probar la API REST)

## Instrucciones de Despliegue

### Despliegue del Backend

1. **Clonar el repositorio del backend**:
   ```bash
   git clone <URL del repositorio>
   cd backend
   ```

2. **Configurar las propiedades de la base de datos**:
   En el archivo `application.properties`, debe configurar la conexión a la base de datos MySQL. Modifique los siguientes campos con la información correspondiente:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/nombre_de_base_de_datos
   spring.datasource.username=tu_usuario
   spring.datasource.password=tu_contraseña
   ```

3. **Construir y ejecutar el proyecto**:
   Asegúrese de que Java 17 esté instalado y compile el proyecto usando Maven o Gradle:
   ```bash
   ./mvnw clean install
   ./mvnw spring-boot:run
   ```

4. **API REST**:
   - La API estará disponible en `http://localhost:8080/api`.
   - Endpoints principales:
     - `POST /api/notas` - Agregar notas
     - `GET /api/notas` - Obtener todas las notas

### Despliegue del Frontend

1. **Clonar el repositorio del frontend**:
   ```bash
   git clone <URL del repositorio>
   cd frontend
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```
   
3. **Ejecutar la aplicación de React**:
   ```bash
   npm start
   ```

   La aplicación se ejecutará en `http://localhost:3000`.

### Configuración de la Base de Datos

1. **Crear la base de datos**:
   ```sql
   CREATE DATABASE nombre_de_base_de_datos;
   ```

2. **Crear la tabla de notas**:
   ```sql
   CREATE TABLE notas (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       estudiante VARCHAR(225) NOT NULL,
       actividades INT NOT NULL CHECK (actividades <= 35),
       primer_Parcial INT NOT NULL CHECK (primer_Parcial <= 15),
       segundo_Parcial INT NOT NULL CHECK (segundo_Parcial <= 15),
       examen_Final INT NOT NULL CHECK (examen_Final <= 35),
       puntajeTotal INT NOT NULL
   );
   ```

## Uso del Sistema

### **Registro de Notas**
- Los usuarios pueden ingresar las calificaciones para cada estudiante en las diferentes secciones: actividades, primer parcial, segundo parcial y examen final.
- El sistema calcula automáticamente el puntaje total cuando se registran todas las notas.
- El sistema validara que los valores ingresados sean validos de lo contrario no perimte el registro de la nota.

validacion de valores incorrectos: 

![image](https://github.com/user-attachments/assets/462ee78f-f321-4be3-82e2-e64d1d904dd1)

si los valores son correctos permite grabar nota y al finalizar muestra alerta de operacion exitosa. 

![image](https://github.com/user-attachments/assets/b474ccfa-6bbb-4f4d-9f6f-97042b57e603)
![image](https://github.com/user-attachments/assets/0bf1b85e-e786-4124-8060-dec31a673327)

### **Edicion de Notas**
- El sistema permite la edicion de notas desde el boton "Editar"
- mostrara todos los registros de manera editable para proceder con el cambio requerido
- al finalizar se debe presionar "Actulizar Nota"

![image](https://github.com/user-attachments/assets/0beb2889-4a2c-4153-8e6e-fa9f7223677d)

![image](https://github.com/user-attachments/assets/ed1c4ef5-2738-430b-ac6e-12d8ee275ec1)

### **Eliminación de Registros**
- Para eliminar un registro de un estudiante, se muestra una alerta de confirmación para asegurar que el usuario desea eliminar el registro. Después de confirmar, se notifica al usuario cuando la eliminación ha sido exitosa.

![image](https://github.com/user-attachments/assets/f240d431-d8f3-4a55-9bf4-4cad4eb29f5b)

![image](https://github.com/user-attachments/assets/1cbf2ec8-be2a-47b1-8169-baaf8212f8d3)


### **Visualización de Notas**
- Los registros de notas de los estudiantes se muestran en tablas donde los usuarios pueden ver las calificaciones ingresadas.
- si deseas validar el detalle de las notas de algun estudiante puedes precionar el boton "Ver Detalles"
  
![image](https://github.com/user-attachments/assets/48e042d3-88af-4b3e-8b49-a5257f923de3)

![image](https://github.com/user-attachments/assets/e01c0bdb-0a3a-4980-ad63-2c7a1d4d9f0c)

