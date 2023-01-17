import { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';
import Chat from './pages/Chat';
import Login from './pages/Login';

const Router = () => {
  const [socket, setSocket] = useState<any>(io(import.meta.env.VITE_APP));
  const [isConnected, setIsConnected] = useState<any>(socket.connected);
  const [lastPong, setLastPong] = useState<any>(null);
  const [latency, setLatency] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [room, setRoom] = useState<string>('1');

  const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', room);
    }
  };

  const handleGuestLogin = () => {
    setUsername('GuestUser');
    socket.emit('join_room', room);
    navigate('/chat');
  };

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', (latency: any) => {
      setLatency(latency.toString());
      setLastPong(new Date().toISOString());
    });

    /* Clean up Function - Removes Event Listeners Added to the Socket Object When the Component Mounted */
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping', Date.now());
  };

  return (
    <Routes>
      <Route
        index
        element={
          <Login
            isConnected={isConnected}
            lastPong={lastPong}
            latency={latency}
            sendPing={sendPing}
            joinRoom={joinRoom}
            handleGuestLogin={handleGuestLogin}
          />
        }
      />
      <Route
        path="/chat"
        element={
          <Chat
            socket={socket}
            username={username}
            room={room}
            setUsername={setUsername}
          />
        }
      />
    </Routes>
  );
};

export default Router;
