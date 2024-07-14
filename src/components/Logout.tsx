import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../models';
import { resetUser, UserKey } from '../redux/states/user';
import { localStorageClear, LocalStorageKeys } from '../utilities';

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
        localStorageClear(UserKey);
        localStorageClear(LocalStorageKeys.ACCESS_TOKEN);
        dispatch(resetUser());
        navigate(PublicRoutes.LOGIN, { replace: true });
    };

    return <button onClick={logOut}>Log Out</button>;
}

export default Logout;
