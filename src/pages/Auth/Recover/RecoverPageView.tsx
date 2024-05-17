import RecoverPage from '../../../components/organisms/AuthPage/Recover/RecoverPage';
import AuthTemplate from '../../../components/templates/AuthTemplate';

function RecoverPageView() {
    return (
        <AuthTemplate>
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 items-center">
                <RecoverPage />
            </div>
        </AuthTemplate>
    );
}

export default RecoverPageView;
