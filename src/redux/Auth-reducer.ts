type authStateType = {
	remember: boolean
	isAuth: boolean,
	error: null | string,
	login: string,
	password: string
}
const initialState = {
	remember: false,
	isAuth: false,
	error: null,
	login: '',
	password: ''
}

enum authData {
	login = 'steve.jobs@example.com',
	password = 'password'
}

export const authReducer = (state: authStateType = initialState, action: authType) => {
	switch (action.type) {
		case 'SET-AUTH': {
			if (authData.login === action.login && authData.password === action.password) {
				if (action.remember) {
					localStorage.setItem('login', action.login);
					localStorage.setItem('password', action.password);
				}
				return {
					...state,
					isAuth: true,
					login: action.login,
					password: action.password,
					error: null,
					remember: action.remember
				}
			}
			if (authData.login !== action.login) {
				return {
					...state, error: `Пользователя ${action.login} не существует`
				}
			} else {
				if (authData.password !== action.password) {
					return {
						...state, error: `Неверные данные`
					}
				}
			}
			return state
		}
		case 'SET-OUT': {
			localStorage.clear()
			return initialState
		}
		default:
			return state
	}

};
type authType = ReturnType<typeof authAC> | ReturnType<typeof outAC>

export const authAC = (login: string, password: string, remember: boolean) => ({
	type: 'SET-AUTH',
	login,
	password,
	remember
} as const)
export const outAC = () => ({type: 'SET-OUT'} as const)


