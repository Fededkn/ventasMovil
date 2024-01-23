import { object, string, ref } from 'yup'

export const signupSchema = object({
    email:
        string()
        .email("Ingrese un email válido")
        .required("Ingrese un email"),
    
    password:
        string()
        .min(6,"Mínimo 6 caracteres")
        .required("Ingrese un password"),
    
    confirmPassword:
        string()
        .oneOf([ref("password")], "Las contraseñas no son idénticas.")
        .required("Vuelva a ingresar el email"),
})