import { Link } from 'react-router-dom';

const Home = ({
  isConnected,
  lastPong,
  sendPing,
  setUsername,
  joinRoom,
}: any) => {
  return (
    <>
      <div className="text-xs">
        <p>Connected: {'' + isConnected}</p>
        <p>Last pong: {lastPong || '-'}</p>
        <button onClick={sendPing}>Send ping</button>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex flex-col border-red-300 border">
          <label htmlFor="" className="">
            Enter a Username:
          </label>
          <input
            type="text"
            className="border-red-300 border"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <Link
          to={{
            pathname: '/chat',
          }}
        >
          <button className="border border-red-300" onClick={joinRoom}>
            Enter
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
