
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
    - Request body: Emai or Name or LastName or Password or Role

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
    - Request body: createdInitiatives, sharedInitiatives, joinedInitiatives, solvedMissions, validatedMissions, initiativeLikes or generatedTokens.

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

- Shared Dao:
    - PUT - /dao/share/:id
    - Request: id_Dao

- Likes Dao:
    - PUT - /dao/likes/:id
    - Request: id_Dao

- Join Dao: 
    - PUT - /dao/join/:id
    - Request: id_Dao

## OrdersBook

- Create Order:
    - POST - /order
    - Request body: id_Dao ,price, quantity, type

- Update Price or Quantity:
    - PUT - /order/:id
    - Request: id_order
    - Rquest body: price or quantity

- Delete Order:
    - DELETE - /order/:id
    - Request: id_order

- Change state order:
    - PUT - /order/state/:id
    - Request : id_order
    - Request body: state

## Operations 

- Create Operation:
    - POST - /operation
    - Request body: id_order, id_user, type, state 

- Operation by Id_user:
    - GET - /operation/user/:id_user
    - Request : id_user

- Operations by id_Dao:
    - GET - /operation/dao/:id_Dao
    - Request : id_Dao

- Operation by id:
    - GET - /operation/:id_operation
    - Request : id_operation

- Change state by id:
    - PUT - /operation/:id_operation
    - Request : id_operation

