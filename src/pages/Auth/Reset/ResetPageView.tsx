import ResetPage from '../../../components/organisms/AuthPage/Reset/ResetPage';
import AuthTemplate from '../../../components/templates/AuthTemplate';

function ResetPageView() {
    return (
        <AuthTemplate>
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-7xl p-5 items-center">
                <ResetPage />
            </div>
        </AuthTemplate>
    );
}

export default ResetPageView;
