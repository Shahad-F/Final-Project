# Final-Project
# CALL me

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
|`/Contact`|ContactPage| public      | social media of website |
|`/Service`|ServicePage|  puplic     |display all services     |
 
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
 >Contact.<br/>

> ***Admin***<br/>
Login.<br/>
AddNewAdmin.<br/>
AddNewService.<br/>
AdminHome.<br/>
 
> ***Provider***<br/>
SignupProvider.<br/>
LoginProvider.<br/>
AddorividerService.<br/>
ServiceHome.<br/>

> ***User***<br/>
Service.<br/>

 

## Server / Backend 

### Models 

***Admin model***

```
{ 
    name:{ type:String, required:[true,'Admin name should be provided']},
    email:{ type:String,  required:[true,'Admin email should be provided', unique:true },   
}
```
***Provider***

```
{
   firstName:{ type:String, required:[true,'firstName should be provided']},
   lastName:{ type:String, required:[true,'lasttName should be provided']},
   phone:{ type:Number, required:[true,'phone should be provided']},
   email:{type:String, required:[true,'Admin email should be provided'],unique:true},
   image:{ type:String, required:[true,'image should be provided']},
   city:{ type:String, required:[true,'city should be provided'],},
}
```
***Service***

```
{
  nameOfService:{ type:String, required:[true,"Name of service is required ."],},
  image:{ type:String, required:[true,"Image is required"],},
  providers:[providerSchema]  
}
```
***TypeOfService***

```
{
userName: { type:String,required:[true,"userName is required ."],},
phone: {type:Number,required:[true,"Phone is required ."],},
price: { type:String,required:[true,"Price is required ."],},
userId:{  type:Schema.Types.ObjectId,ref:'Provider'},
}
```
## Backend router 

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



