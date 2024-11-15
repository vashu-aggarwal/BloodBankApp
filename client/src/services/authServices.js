import { userLogin } from '../redux/reducers/auth/authActions';
import store from '../redux/store'
export const handleLogin = (e, email, password, role)=>{
    e.preventDefault()
    try {
        if(!role || !email || !password){
            return alert('Please Provide all Fields');
        }
        store.dispatch(userLogin({role,email,password}));
    } catch (error) {
        console.error(error);
    }
};

export const handleRegister = ( e,
    name,
    role,
    email,
    password,
    phone,
    organisationName,
    address,
    hospitalName,
    website)=>{
        e.preventDefault()
        try {
            console.log("Register",email,password,role,name,organisationName,hospitalName,website,phone,address)
        } catch (error) {
            console.error(error);
        }
    };