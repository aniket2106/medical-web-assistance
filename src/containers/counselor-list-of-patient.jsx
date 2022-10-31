import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FooterComponent from '../components/footer/footer';
import ListOfPatient from '../components/list-of-patient/list-of-patient';
import { RequestState, UserRole } from '../lib/types';
import { fetchPatientList } from '../store/actions/couselor';
import Header from './header';

export default function CounselorLOP(props) {
    const dispatch = useDispatch();

    const patientListState = useSelector(state => state.counselor.patientListState);

    useEffect(() => {
        if (patientListState === RequestState.NULL) {
            dispatch(fetchPatientList());
        }
    }, [dispatch, patientListState]);

    const patientList = useSelector(state => state.counselor.patientList);

    return (
        <>
            <Header />
            <ListOfPatient role={UserRole.COUNSELOR} patientList={patientList} />
            <FooterComponent />
        </>
    );
}