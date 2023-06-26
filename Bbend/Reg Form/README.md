# Node JS and MongoDB Registration Form
This is a simple registration form created using Node.js and MongoDB. The form allows users to register by providing their name, email address, phone number and password. The form data is then stored in a MongoDB database.

## Getting Started
To use this registration form, follow these steps:  
  1. Clone this repository to your local machine.  
  2. Install the required dependencies by running ```npm install``` in the terminal.  
  3. Start the server by running ```nodemon index.js``` in the terminal.  
  4. Navigate to ```http://localhost:3000``` in your web browser to access the registration form.
    
## Usage
To register using the form, simply fill in your name, email address, phone number and password, then click the "Submit" button. If the registration is successful, you will be redirected to a confirmation page.

## Screenshots
### Registration Page:
![Screenshot from 2023-02-27 22-10-06](https://user-images.githubusercontent.com/62788106/221640696-5b0359c6-ba93-4f4b-8543-1a42b0d383d5.png)
### Confirmation Page:  
![Screenshot from 2023-02-27 22-11-34](https://user-images.githubusercontent.com/62788106/221640810-9fddd7e2-57f7-4773-b76a-ea1ccb371bda.png)

## Database Schema
The registration form stores user data in a MongoDB database using the following schema: 
```
{
  name: String,
  email: String,
  phno: String,
  password: String
}  
```

## Contributing
If you would like to contribute to this project, feel free to submit a pull request. Please make sure to follow the existing coding style and include appropriate tests for any new features or bug fixes.
