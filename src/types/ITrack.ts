interface IstaredUser {
	id: number
	username: string
	first_name: string
	last_name: string
	email: string
}

// export interface Itrack {
// 	album: string
// 	author: string
// 	duration_in_seconds: number
// 	genre: string
// 	id: number
// 	logo: string | null
// 	name: string
// 	release_date: string
//     stared_user: Array<IstaredUser>
//     track_file: string
// }

export interface IInit {
	id: number
	name: string
	author: string
	album: string
	duration_in_seconds: number
	isLiked:boolean
}

export interface ItrackResponse {
	album: string//----------------------
	author: string//-------------------
	duration_in_seconds: number//----------------------
	genre: string//----------------------
	id: number//-------------------
	logo: string | null//---------------------------
	name: string//--------------------
	release_date: string//--------------------
	stared_user: Array<IstaredUser>
	track_file: string//----------------------------
}

export interface Itrack  {
	album: string//----------------------
	author: string//-------------------
	duration_in_seconds: number//----------------------
	genre: string//----------------------
	id: number//-------------------
	logo: string | null//---------------------------
	name: string//--------------------
	release_date: string//--------------------
	// stared_user: Array<IstaredUser>
	track_file: string//----------------------------
	isLiked: boolean
}

export interface ICategoryProps{
	categoryId: string
	userID: number
}


export interface ICategoryResponse{
	id:number
	items:ItrackResponse[]
}

export interface IFavoriteResponse {
	album: string//----------------------
	author: string//-------------------
	duration_in_seconds: number//----------------------
	genre: string//----------------------
	id: number//-------------------
	logo: string | null//---------------------------
	name: string//--------------------
	release_date: string//--------------------
	
	track_file: string//----------------------------
}