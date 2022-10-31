import React from 'react'
import { Link } from 'react-router-dom'
import { PathConstants } from '../../lib/path-constants'
import { UserRole } from '../../lib/types'
import './header.css'

export default function HeaderComponent({
    userRole,
    loginPath,
    onLogout
}) {
    return (
        <div className="header" >
            <Link to={PathConstants.Home} className="logo">Lifeline</Link>
            <div className="header-right">
                {/* <a className="active" href="#home">Home</a> */}
                {userRole === UserRole.NULL && <Link to={loginPath}>Log In</Link>}
                {userRole !== UserRole.NULL && <button onClick={onLogout}>Log out</button>}
                {userRole === UserRole.PATIENT && <Link to={PathConstants.AssessmentPage}>Take Assesement</Link>}
                {userRole === UserRole.PATIENT && <a href="#about">Status</a>}
                {userRole === UserRole.COUNSELOR && <Link to={PathConstants.CounselorLOP}>List of Patients</Link>}
                {userRole === UserRole.DOCTOR && <Link to={PathConstants.DoctorLOP}>List of Patients</Link>}
            </div>
        </div>
    )
}