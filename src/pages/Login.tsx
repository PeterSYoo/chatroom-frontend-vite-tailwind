import { Link } from 'react-router-dom';

const Login = ({
  isConnected,
  lastPong,
  sendPing,
  setUsername,
  joinRoom,
}: any) => {
  return (
    <>
      <div className="h-screen min-w-screen bg-gray-900">
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <div className="flex flex-col justify-center items-center mt-10 w-1/3 gap-2">
            <label className="text-gray-400 w-full">Enter a Username:</label>
            <div className="flex flex-col w-full border border-gray-700 p-2 bg-gray-800 rounded-md">
              <input
                type="text"
                className="p-2 px-3 w-full bg-gray-800 border border-gray-700 focus:outline-none text-white placeholder:text-gray-500"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <Link
              to={{
                pathname: '/chat',
              }}
              className="col-start-11 col-span-2 border border-gray-700 p-2 bg-gray-800 rounded-md w-full mt-2"
            >
              <button
                className="flex justify-center items-center w-full h-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-900 px-2 py-1"
                onClick={joinRoom}
              >
                Enter
              </button>
            </Link>
          </div>
          <div className="text-xs text-gray-500 w-1/3">
            <p>Connected: {'' + isConnected}</p>
            <p>Last pong: {lastPong || '-'}</p>
            <button onClick={sendPing}>Send ping</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
