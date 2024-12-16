
# Endpoints:

    URL Backend: 

## User:
- Login: 
  - POST - /login
  - Request: Password & Email

- Register: 
    - POST - /user/register
    - Request: Email , Name , LastName , Password

- All users: 
    - GET - /user

- Update User: 
    - PUT - /user/:id
    - Request : id_user
    - Request body: Emai o Name o LastName o Password o Role

- User for ID: 
    - GET - /user/:id 
    - Request: Id_user

- Block user (only Role Admin or Mod):
    - PUT - /user/block/:id
    - Request: Id_user

## User Stats:
- stats for ID: 
    - GET - /stats/:id
    - Request: id_user

- Update Stats:
    - PUT - /stats/:id
    - Request: id_user 
    - Request body: createdInitiatives, sharedInitiatives, joinedInitiatives, solvedMissions, validatedMissions, initiativeLikes o generatedTokens.

- tags for ID:
    - GET - /stats/tags/:id
    - Request: id_user 

- Update tags:
    - PUT - /stats/tags/:id 
    - Request: id_user 
    - Request body: action, idDao, nameDao

## Dao

- All Daos:
    - GET - /dao

- Create DAO:
    - POST - /dao
    - Request body:  name, opportunity , idea, problem, solution, logo , address

- Update state (only Role Admin or Mod):
    - PUT - /dao/:id
    - Request: id_Dao 

## 