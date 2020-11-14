# Running Instructions
In the root directory type 'npm install'

In the root directory type 'npm start'

The server is running on localhost:5000

This API doesn't use database, everything is hardcoded and stored in memory. Data will lose after server restart.

For testing post/patch/delete requests I recommend to use: Insomnia or Postman.

# Used technologies
Node.js

Express

# Routes
/api/patients - all patients.

/api/patients/id - gets specific patient by id  -- MRN is used for ID!

/api/patients/id - with a POST request the user can create a new patient.

{ MRN, firstName, lastName, DOB, address, patientOrders } in JSON format.


/api/patients/id - with a PATCH request the user can edit an existing patient's data.

{ firstName, lastName, DOB, address } in JSON format  --- MRN, DOB, patiendOrders are not editable!

---------------------------------------------------------------------------------------------------------------------------------------
/api/ordertypes - all ordertypes.

/api/ordertypes - with a POST request the user can search in ordertypes.

{ information } in JSON format. For example : { "information": "blood} this will give back to the user every matches with blood.

/api/ordertypes/code - orderCode is used as id. With a DELETE request the user can delete an existing ordertype.

---------------------------------------------------------------------------------------------------------------------------------------
/api/patientorders = all patientorders -- this will be empty, the user has to add patientorders to populate.

/api/patientorders/id = gets specific patientOrder by id.

/api/patientorders - with a POST request the user can create a new patientorder.

{ patientOrderId, creationDate, patientId, orderCode, status }

/api/patientorders/id - with a PATCH request the user can edit an existing patientorder.

{ status } - Status editable only!

/api/patientorders/id - with a DELETE request the user can delete an existing patientorder. -- WARNING: Doesn't remove the patientorder from the patient's data!


# Relaymed Coding Exercise
## Summary  
Relaymed is SAAS middleware, we connect to Point Of Care Testing (POCT) devices from the customer’s In-house Labs and file the results into their Electronic Health Record (EHR). To ensure the patients receive accurate results, these results need to be matched to patients and orders stored in the EHR. There is a large selection of EHRs to choose from and for Relaymed to integrate, as well as a large selection of devices to integrate.  

## The Exercise
At Relaymed we would like to build our own EHR to enter the market. In this exercise, we would like you to build a RESTful API which performs some of the functionality of an EHR.  

Your application should have 3 main objects: *Patient*, *Order Type* and *Patient Order*.
Below we describe the attributes of each object and their relationships. These are our recommendation but your final solution may extend and modify where necessary  

##### Patient
* A *Patient* has:  
  * Medical Record Number (MRN)  
  * First Name  
  * Last Name  
  * Date Of Birth  
  * Address  
* A *Patient* can have multiple *Patient Orders*  

##### Order Type
* A set list of the available *Orders* that can be requested for a *Patient*  
* Initial list can be found in the Github repo  
* An *Order Type* has:  
  * Order Code  
  * Order Name  
  * Specimen Type  

##### Patient Order
* A *Patient Order* has a specific *Order Type* that is assigned to a *Patient* on a given date
* A *Patient Order* has:
  * Patient Order Id
  * Creation Date
  * Patient Id
  * Order Code
  * Status (requested, performed, reviewed, accepted, rejected)

##### Your application should be able to:
* Create, read, and update *Patients*
* Create a set of available *Order Types* which can be requested by a doctor/nurse to be performed on a *Patient*, you will be provided with a list of existing data
* Using the available *Order Types*, create several new *Patient Orders* which are assigned to existing *Patients*
* *Order Types* should be searchable
* Delete and update *Patient Orders*
* Delete *Order Types*

## Coding Practices
As a team we work in a way to ensure code quality, we use the following tools and practices:  
* *Version Control* - we use GitHub  
  * You will be provided a private repository to complete this exercise in
  * We use feature branches and Pull Requests
  * Commits should document your approach
* *Test Driven Development (TDD)* - we believe that tests are first class citizens
  * Code should be covered by tests
* *APIs* - should be documented and testable
* *Vertical Slicing* -  we split tasks into items of work that when complete provide functionality to users (see [here](https://blog.crisp.se/2016/01/25/henrikkniberg/making-sense-of-mvp)).

## The Stack
Relaymed uses a Microsoft Stack hosted in Azure. We program in C#, with .Net Framework and .Net Core. C# would be our preferred language for this exercise, however, we are happy for another language to be used if this will demonstrate your ability better. The following is a list of languages fully supported in Microsoft Azure:
* C#
* Java
* Javascript
* Python

**Please include running instructions for your application.**

**As well as the specification that has been provided we would be especially interested in areas that could be extended and improved as you see fit.**

