const formValidationCheck = (name , email, password) =>{
    const isValidName = /^[A-Za-z\s]{2,50}$/.test(name)
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)


    if(!isValidName) return 'Invalid Name' ;
    if(!isValidEmail) return 'Invalid Email' ;
    if(!isValidPassword) return 'Invalid Password' ;

    return null;
}

export default formValidationCheck;