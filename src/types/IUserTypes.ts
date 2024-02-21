export interface IUserResponse {
	id: number
	username: string
	first_name: string
	last_name: string
	email: string
}

export interface ISignBody {
	username: string
	email: string
	password: string
}

export interface ILogInBody {	
	email: string
	password: string
}

export interface ITokens {
	refresh:string
	access:string
}

export interface IUserState extends IUserResponse{
	access? : string
}
export type Isort ='По умолчанию' |'По возрастанию' | 'По убыванию'