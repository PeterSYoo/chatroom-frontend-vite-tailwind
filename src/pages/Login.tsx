import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { RiUser3Fill } from 'react-icons/ri';
import { auth, provider } from '../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';

const Login = ({
  isConnected,
  lastPong,
  latency,
  sendPing,
  joinRoom,
  handleGuestLogin,
}: any) => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (joinRoom: any) => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    joinRoom();
  };

  return (
    <>
      <div className="h-screen min-w-screen bg-gray-900">
        <div className="flex flex-col md:grid grid-cols-12 h-full py-48 max-w-[800px] mx-auto px-10">
          <div className="col-start-1 col-span-6 border border-gray-700 bg-gray-800 rounded-md overflow-y-auto scrollbar-hide h-full">
            <div className="w-full border-b border-gray-700 h-fit flex justify-center pt-2 pb-1 text text-gray-400">
              Top Chatters
            </div>
            <div className="text-gray-400 flex justify-center">
              <div className="w-full flex flex-col">
                <ol className="list-decimal px-6 pl-9 text-white my-3">
                  <li>Apple - 1523 characters</li>
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-end gap-6 col-start-7 col-span-6">
            <div className="flex flex-col justify-center items-center mt-10 md:w-[300px] gap-2 w-full">
              {/* Login With Google */}
              <div className="col-start-11 col-span-2 border border-gray-700 p-2 bg-gray-800 rounded-md w-full mt-2">
                <button
                  className="flex justify-center items-center w-full h-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-900 px-2 py-2 gap-2"
                  onClick={() => handleGoogleLogin(joinRoom)}
                >
                  <FcGoogle className="text-lg" />
                  Login With Google
                </button>
              </div>
              {/*  */}
              {/* Login as Guest */}
              <div className="col-start-11 col-span-2 border border-gray-700 p-2 bg-gray-800 rounded-md w-full mt-2">
                <button
                  className="flex justify-center items-center w-full h-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-900 px-2 py-2 gap-2"
                  onClick={handleGuestLogin}
                >
                  <RiUser3Fill className="text-lg" />
                  Login as Guest
                </button>
              </div>
              {/*  */}
            </div>
            <div className="text-xs text-gray-500 md:w-[300px] w-full flex flex-col gap-0.5">
              <p>Connected: {'' + isConnected}</p>
              <p>Latency: {latency ? `${latency} ms` : '-'}</p>
              <p>Last Pong: {lastPong || '-'}</p>
              <button
                className="flex justify-center items-center border border-gray-700 hover:border-gray-600 hover:text-gray-400 px-2 py-1 rounded-sm mt-2"
                onClick={sendPing}
              >
                Send Ping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
