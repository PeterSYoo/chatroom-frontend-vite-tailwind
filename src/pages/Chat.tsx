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
      <div className="h-screen min-w-screen bg-gray-900">
        <div className="w-full h-full px-20 py-20 flex flex-col justify-center items-center">
          <div className="w-full h-full flex flex-col p-3 gap-5 justify-center">
            {/* Header */}
            <div className="h-4">
              <p className="text-gray-400">Chat Room</p>
            </div>
            {/* Grid Container */}
            <div className="border border-gray-700 p-2 grid grid-cols-12 h-full bg-gray-800 rounded-md">
              <div className="col-start-1 col-span-10 border border-gray-700 p-2 text-white overflow-y-auto scrollbar-hide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci fugiat unde illo beatae eum sed animi deserunt aliquam
                quasi expedita eveniet voluptates eligendi enim dolores quia
                dignissimos repudiandae, vero nostrum. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Voluptatibus doloremque modi
                iusto in voluptate ex earum aliquid cum, neque id, quae non
                atque minima ratione mollitia quidem, cupiditate tempore
                officia! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Labore, necessitatibus. Adipisci cum quo, explicabo, quam
                itaque officia quas molestiae quae possimus deserunt nisi
                consectetur, repellendus fugiat voluptates magnam accusantium a?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                ipsa et dicta totam aperiam officiis dolore libero enim quae
                veniam laudantium, quisquam quaerat quis aspernatur minima illum
                molestiae. Cum, odio! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil, sit, quisquam eveniet eius id officiis
                quos cupiditate ratione facilis, omnis corrupti mollitia
                recusandae ab quis quasi modi reiciendis magnam. Magnam. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem quis
                perspiciatis facere porro expedita, recusandae obcaecati placeat
                aperiam culpa voluptatibus architecto itaque nisi est officiis,
                voluptatum nesciunt suscipit quas harum? Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Adipisci fugiat unde illo
                beatae eum sed animi deserunt aliquam quasi expedita eveniet
                voluptates eligendi enim dolores quia dignissimos repudiandae,
                vero nostrum. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Voluptatibus doloremque modi iusto in
                voluptate ex earum aliquid cum, neque id, quae non atque minima
                ratione mollitia quidem, cupiditate tempore officia! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Labore,
                necessitatibus. Adipisci cum quo, explicabo, quam itaque officia
                quas molestiae quae possimus deserunt nisi consectetur,
                repellendus fugiat voluptates magnam accusantium a? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Natus ipsa et dicta
                totam aperiam officiis dolore libero enim quae veniam
                laudantium, quisquam quaerat quis aspernatur minima illum
                molestiae. Cum, odio! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nihil, sit, quisquam eveniet eius id officiis
                quos cupiditate ratione facilis, omnis corrupti mollitia
                recusandae ab quis quasi modi reiciendis magnam. Magnam. Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Rem quis
                perspiciatis facere porro expedita, recusandae obcaecati placeat
                aperiam culpa voluptatibus architecto itaque nisi est officiis,
                voluptatum nesciunt suscipit quas harum?
              </div>
              <div className="col-start-11 col-span-2 border-r border-b border-t border-gray-700 p-2 text-gray-400 flex justify-center">
                Users
              </div>
            </div>
            {/* Chat Footer */}
            <div className="grid grid-cols-12">
              <div className="col-start-1 col-span-10 mr-4 border border-gray-700 p-2 bg-gray-800 rounded-md">
                <input
                  type="text"
                  placeholder="Enter message"
                  className="p-2 w-full bg-gray-800 border border-gray-700 focus:outline-none text-white placeholder:text-gray-500"
                  onChange={(e) => setCurrentMessage(e.target.value)}
                />
              </div>
              <div className="col-start-11 col-span-2 border border-gray-700 p-2 bg-gray-800 rounded-md">
                <button
                  className="flex justify-center items-center w-full h-full bg-gray-800 text-white border border-gray-700 hover:bg-gray-900"
                  onClick={sendMessage}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
