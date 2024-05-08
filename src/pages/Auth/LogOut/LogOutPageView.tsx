import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '../../../models';
import { UserKey, resetUser } from '../../../redux/states/user';
import { LocalStorageKeys, localStorageClear } from '../../../utilities';

function LogOut() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logOut = () => {
        localStorageClear(UserKey);
        localStorageClear(LocalStorageKeys.ACCESS_TOKEN);
        localStorageClear(LocalStorageKeys.REFRESH_TOKEN);
        dispatch(resetUser());
        navigate(PublicRoutes.LOGIN, { replace: true });
    };

    return <button onClick={logOut}>Log Out</button>;
}
export default LogOut;
