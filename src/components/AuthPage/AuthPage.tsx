import { Link } from 'react-router-dom'
import React from 'react'
import * as S from './AuthPage.styles'
import { LoginMode } from './LoginMode/LoginMode'
import RegistrationMode from './RegistrationMode/RegistrationMode'
import { UserContext } from '../../contexts/userContext'

interface IProps {
	isLoginMode: boolean
}

export default function AuthPage({ isLoginMode }: IProps) {
	return (
		<S.PageContainer>
			<S.ModalForm>
				<Link to='/login'>
					<S.ModalLogo>
						<S.ModalLogoImage src='/img/logo_modal.png' alt='logo' />
					</S.ModalLogo>
				</Link>
				<UserContext.Consumer>
					{userProps =>
						isLoginMode ? (
							<LoginMode setIsUser={userProps.setIsUser} />
						) : (
							<RegistrationMode setIsUser={userProps.setIsUser} />
						)
					}
				</UserContext.Consumer>
			</S.ModalForm>
		</S.PageContainer>
	)
}
