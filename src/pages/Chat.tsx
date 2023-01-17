import { useContext, useState } from 'react';

type Socket = {
  socket: any;
  username: string;
  room: string;
};

const Chat = ({ room, username, socket }: Socket) => {
  const [currentMessage, setCurrentMessage] = useState<string>('');

  const sendMessage = async () => {
    if (currentMessage !== '') {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ':' +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit('send_message', messageData);
    }
  };

  return (
    <>
      <div className="border border-red-300 mt-10">
        {/* Header */}
        <div className="border border-red-300 p-2">
          <p>Chat Room</p>
        </div>
        {/* Grid Container */}
        <div className="border border-red-300 p-2 grid grid-cols-12">
          <div className="col-start-1 col-span-9 border border-red-300">
            Body
          </div>
          <div className="col-start-10 col-span-2 border border-red-300">
            Users
          </div>
        </div>
        {/* Chat Footer */}
        <div className="grid grid-cols-12">
          <div className="col-start-1 col-span-9 border border-red-300">
            <input
              type="text"
              placeholder="Enter message"
              className="p-2"
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
          </div>
          <div className="col-start-10 col-span-2 border border-red-300">
            <button className="" onClick={sendMessage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
