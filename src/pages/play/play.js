import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import useTeam from '../../hooks/useTeam';
import ChallengeCard from '../../components/challengeCard/challengeCard';

import styles from './play.module.css';
import LoadingAnimation from '../../components/loadingAnimation/loadingAnimation';

export default function Play() {
    const { apiPostGetJsonAsTeam } = useFetch();
    const { fetchTeam } = useTeam();

    const [formValues, setFormValues] = useState({
        username: '',
        password: ''
    });

    const handleChange = field => e => {
        setFormValues({ ...formValues, [field]: e.target.value });
        // console.log(formValues);
    };

    const submit = e => {
        e.preventDefault();
        apiPostGetJsonAsTeam('/bugbounty/login1', formValues);
        fetchTeam();
    };

    return (
        <>
            <form className='lug-form' onSubmit={submit}>
                <div className='form-start'>Bug Bounty: Login</div>
                <div className='form-field'>
                    User: <input onChange={handleChange('username')} />
                </div>
                <div className='form-field'>
                    Password: <input onChange={handleChange('password')} />
                </div>
                <div className='form-end'>
                    <button className='form-nav-button'>Submit</button>
                </div>
                <div style={{ display: 'none' }}>
                    username: secret_administrator
                </div>
                <div style={{ display: 'none' }}>
                    password: there-are-so-many-ways-to-inspect
                </div>
            </form>
        </>
    );
}

