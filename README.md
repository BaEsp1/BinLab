# BinLab
<img src="../frontend/src/assets/LogoLarge.png" alt="BinLab Logo" width="320" />

## Industria o Rubro  
Tecnología e Innovación: Plataforma colaborativa para iniciativas sociales y emprendedoras.

---

## Descripción del Proyecto  

**BinLab** es una plataforma que democratiza la participación en iniciativas sociales y emprendedoras. A través de la creación de DAO’s (Organizaciones Autónomas Descentralizadas) y el uso de tokens, permite que cualquier persona pueda colaborar, invertir y ser parte de proyectos con impacto social.

### Problema que Resuelve  
En el mundo actual, participar en proyectos significativos requiere barreras de entrada altas, como inversiones iniciales elevadas y la falta de transparencia. BinLab elimina estos obstáculos mediante:  
- Inversiones accesibles con pequeñas cantidades de dinero a través de tokens.  
- Gestión descentralizada basada en DAO’s.  
- Herramientas para conectar personas con proyectos de impacto real.  

### Propósito  
Crear un ecosistema inclusivo donde cualquier persona pueda invertir, participar y colaborar en iniciativas de cambio social.

---

## Colaborador 

| Nombre               | Rol                  | LinkedIn                                   | GitHub                   |
|----------------------|----------------------|-------------------------------------------|--------------------------|
|Bárbara Espinola| Full Stack | [LinkedIn](https://linkedin.com/in/...)    | [GitHub](https://github.com/...) |

---

## Tecnologías Utilizadas
### Frontend
<ul>
<li>React con TypeScript para el desarrollo de la interfaz.</li>
<li>TailwindCSS para estilos rápidos y modernos.</li>
<li>Redux y Zustand para la gestión del estado global.</li>
<li>Reowm como billetera de integracíon.</li>
</ul>

### Backend
<ul>
<li>Node.js y Express para la lógica del servidor.</li>
<li>PostgreSQL como base de datos relacional.</li>
<li>Sequelize como ORM para la gestión de datos.</li>
</ul>

### Autenticación y Seguridad
<ul>
<li>Auth0 para la autenticación de usuarios.</li>
<li>JWT para la protección de rutas.</li>
</ul>

### Blockchain y DAO’s
<ul>
<li>Solidity para contratos inteligentes.</li>
<li>Web3.js para la interacción con blockchain.</li>
</ul>

## Funciones Clave
<ul>
    <li>Participación en DAO’s:
        <ul>
        Los usuarios pueden crear, unirse y colaborar en iniciativas mediante Organizaciones Autónomas Descentralizadas.</ul>
    </li>  
    <li>Compra y Venta de Tokens:
        <ul>
        Acceso a un mercado dinámico de tokens asociados a iniciativas.
        Transparencia en transacciones mediante blockchain.
        </ul>
    </li>
    <li>Dashboard Personalizado:
        <ul>
        Balance de tokens, estadísticas y acciones realizadas por el usuario.
        Seguimiento de iniciativas creadas y transacciones de compra/venta.
        </ul>
    </li>
    <li>Interacciones Sociales:
        <ul>Likes, shares y joins para fortalecer la comunidad alrededor de las iniciativas.
        </ul>
    </li>
    <li>Filtros Inteligentes:
        <ul>
        Herramientas avanzadas de búsqueda y filtrado para encontrar proyectos relevantes.
        </ul>
    </li>
</ul>

## Instrucciones para Instalar y Ejecutar Localmente  

### Requisitos Previos  
- **Node.js** v16+  
- **PostgreSQL**  
- **NPM** o **Yarn**  

### 1. Clona el Repositorio  
```bash
git clone https://github.com/usuario/binlab.git
cd binlab
```
### 2. Configura las Variables de Entorno
Crea un archivo .env en la raíz del proyecto con las siguientes variables:

```bash
env
Copiar código
DB_HOST=<tu_host>
DB_USER=<tu_usuario>
DB_PASSWORD=<tu_contraseña>
DB_NAME=<nombre_base_datos>
JWT_SECRET=<tu_secreto_jwt>
AUTH0_DOMAIN=<tu_dominio_auth0>
AUTH0_CLIENT_ID=<tu_cliente_id>
```
### 3. Instala las Dependencias

```bash
npm install
```
### 4. Ejecuta el Proyecto
Inicia el backend:
```bash

npm run dev
```
Inicia el frontend:

```bash
cd client
npm run start
```
## Enlaces relevantes:
