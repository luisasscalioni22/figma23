import {api} from '../../api'
export interface IRegister {
    name?:string
    email?: string
    password?: string
}
export interface IAutenticate {
    email?: string
    password?:string
}
export interface IUser{
    id: number
    name:string
    email:string
}
export interface IUserlogin {
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}
class UserData{
    register(data: IRegister)
    {
        return api.post<IUser>('/reigster',data)
    }
    login(data: IAutenticate){
        return api.post<IUserlogin>('/login',data)
    }
}
export default new UserData()