import ForgotPassForm from '@/app/components/ForgotPassForm';
import LoginLogo from '../../components/LoginLogo';

function ForgotPassPage() {
  return (
    <div className="flex items-center bg-gray-100 flex-col sm:flex-row"> 
      <div className="w-full sm:w-1/3 m-8 px-5 sm:ml-[10%]">
        <ForgotPassForm />
      </div>
      <div className="hidden sm:block sm:w-1/2">
        <LoginLogo />
      </div>
    </div>
  );
}

export default ForgotPassPage;