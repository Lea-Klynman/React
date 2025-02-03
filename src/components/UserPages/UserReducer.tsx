import User from "../../Types/User";

export type action = {
    type: string;
    data: User
  }
 export const UserReducer = (state: User, action: action) => {
     
    switch (action.type) {
      case 'Register':
       return {...state, ...action.data}
      case 'Log in':
        return {...state, ...action.data}
      case 'Update':
        return {...state, ...action.data}
        case 'user':
          return {...state, ...action.data}
          case 'Logout':
            return {} as User     
      default:
        return state
      }
    }
  