export const handleLogin = (e, email, password, role)=>{
    e.preventDefault()
    try {
        if(!role || !email || !password){
            return alert('Please Provide all Fields');
        }
        console.log("login",e, email, password, role);

        
    } catch (error) {
        console.error(error);
    }
};

export const handleRegister = ( e,
    email,
    password,
    role,
    name,
    organisationName,
    hospitalName,
    website,
    phone,
    address)=>{
        e.preventDefault()
        try {
            console.log("Register",email,password,role,name,organisationName,hospitalName,website,phone,address)
        } catch (error) {
            console.error(error);
        }
    };