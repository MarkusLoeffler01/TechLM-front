function SignUp(firstName: string, lastName: string, email: string, password: string, passwordConfirm: string)
{
    if(password !== passwordConfirm) throw new Error("Passwords do not match");

    
}