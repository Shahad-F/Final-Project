<!-- # Final-Project -->
# CALL me
<br/>
<br/>
<!-- image for my website -->

## Description.

***CALL me*** This website is for women who own a car, and sometimes they have a problem when she driving the car, they can't fix it like the fuel runs out,  the wheels are damaged, needs to move her car,  needs an instructor to teach her how to drive.
So this website will help her.

## User Stories.

#### 1. Admin

> ***Login:***
 As an admin, I can log in on the platform so that I can use the website to make edits it.<br/>
> ***Logout:***
As an admin, I can log out from the website.<br/>
> ***Add New Admin:*** 
As an admin, I can add a new admin.<br/>
>***Add New Service:***
As an admin, I can add new services.<br/>
>***Delete Admin:***
 As an admin, I can delete an admin.<br/>
>***Delete Service:***
 As an admin, I can delete a service. <br/>
>***Edit Service:***
As an admin, I can edit the service.<br/>
---
#### 2. Service Provider 

> ***Signup:***
 As a service provider, I can sign up on the platform so that I can use the website.<br/>
> ***Login:***
 As a service provider, I can log in to the website so that I can use the website.<br/>
> ***Logout:***
As a service provider, I can log out from the website.<br/>
>***Add type his service***
As a service provider, I can add my services to the website.<br/>
>***Edit type his service***
As a service provider, I can Edit my services to the website.<br/>
>***Delete type his service***
As a service provider, I can delete my services to the website.<br/>
---
#### 3. User
> ***Signup:***
As a user, I can sign up on the website so that I can use it when I need it.<br/>
> ***Login:***
As a user, I can log in on the website so that I can use it when I need it.<br/>
> ***Logout:***
As a user, I can log out from the website.<br/>

---

 
## Client / frontend
 
### React Router Routes (React App)

| Path     | Component | Permissions | Behavior                |
|----------|-----------|-------------|-------------------------|
|  `/`     | SplashPage| public      | HomePage                |
|`/About`  | AboutPage | public      | what the idea of website|
|`/Service`|ServicePage| puplic     |display all services      |
 
### 1. Admin

| Path            |      Component      |  Permissions  |   Behavior                                        |
|-----------------|---------------------|---------------|---------------------------------------------------|
|`/LoginAdmin`    |Login Admin Page     |  Admin only   | login form ,navigate to admin homepage after login|
|`/AdminHome`     | admin home page     |  admin only   |                                                   |
|`/AddNewAdmin`   |add New Admin Page   |  admin only   | add admin ,list of all admins                     |
|`/AddNewService `|add new servrice Page|  admin only   | add service,list of all service                   |

### 2. Service Provider
| Path                     | Component               |Permissions          | Behavior   |
|--------------------------|-------------------------|---------------------|------------|
|`/ProviderSignUp`         | SignupPage              | Provider only       | signup form,link to login ,navigate to Service Home after signup|
|`/ProviderLogin`          | LoginPage               | Provider only       | login form ,link to signup ,navigate to Service Home after login|
|`/ServiceHome`            | ServiceHomePage         | Provider only       | display all services |
|`/AddProviderService/:_id`| AddProviderServicePage  | Provider only       |provider can add new info about this service.|








### Components 

> Home.<br/>
> About.<br/>


> ***Admin***<br/>
Login.<br/>
AddNewAdmin.<br/>
AddNewService.<br/>
AdminHome.<br/>
 
> ***Provider***<br/>
SignupProvider.<br/>
LoginProvider.<br/>
AddporviderService.<br/>
ServiceHome.<br/>

> ***User***<br/>
LoginUser<br/>
SignUpUser<br/>
Service.<br/>
AllProvider<br/>

<br/>
<br/>
 

## Server / Backend 

### Models 

***Admin model***

```
{ 
    name: { type:String, required:[true,'Admin name should be provided']},
    email:{ type:String,  required:[true,'Admin email should be provided', unique:true },   
    password:{ type:String,  required:[true,'Admin password should be provided']}
}
```
***Provider***

```
{
   fullName:{ type:String, required:[true,'fullName should be provided'},
   userName:{ type:String,},
      phone:{ type:Number, required:[true,'phone should be provided']},
      email:{ type:String,  required:[true,'Admin email should be provided'],unique:true},
      image:{ type:String, default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'},
  password:{ type:String,  required:[true,'provider password should be provided']}
}
 ```
***User***
```
{
 fullName:{ type:String, required:[true,'fullName should be provided'},
   userName:{ type:String,},
      phone:{ type:Number, required:[true,'phone should be provided']},
      email:{ type:String,  required:[true,'Admin email should be provided'],unique:true},
      image:{ type:String, default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'},
  password:{ type:String,  required:[true,'provider password should be provided']}

}
```

***Service***

```
{
  nameOfService: { type:String},
  image: { type:String },
  description:{ type:String,},
  providers:[providerSchema]  
}
```
***TypeOfService***

```
{
price: {type:Number, required:[true,"Price is required ."],},
userId:{type:Schema.Types.ObjectId,ref:'Provider'},
serviceId:{type:Schema.Types.ObjectId,ref:'Service'},
}
```
## Backend router 
### 1. Admin

|HTTP Method | URL         |Request Body           | Success status| Error Status | Description    |
|------------|-------------|-----------------------|---------------|--------------|----------------|
| GET        |`/`          |                       |      200      |     400      | Bring all admin|
| POST       |`/AdSignup`  |{name, email, password}| 201           |     400      |create user with encrypted password, and store user in session|
| POST       |`/AdSignin`  |{email, password}      |  200          |     400      | if user exists (404), and if password matches (404), then stores user in session|
|DELETE      |`/:uid/delete`|                      | 200           |400           | Used to delete one exit point document by uid|

### 2. Provider

|HTTP Method | URL             |Request Body           | Success status| Error Status | Description    |
|------------|-----------------|-----------------------|---------------|--------------|----------------|
|   POST     |`/ProviderSignUp`|{name, email, password}| 201           |  400         |reate user with encrypted password, and store user in session|
|   POST     |`/ProviderLogin` |{email, password}      | 200           |  400         |if user exists (404), and if password matches (404), then stores user in session|
| POST       |`/provider/:uid` |{price ,userId}        | 201           |              |if userId and uid is exists, user enter the price and store it in session|





## Links 

### Terello 
### Git 

[Client repository Link]<br/>
[Server repository Link]<br/>
[Deployed App Link]<br/>

### Slides

[Slides Link]

### Wireframe
[Figma Link]



