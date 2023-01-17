import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Socket = {
  socket: any;
  username: string;
  room: string;
  setUsername: (arg0: string) => void;
};

const Chat = ({ room, username, socket, setUsername }: Socket) => {
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const textareaRef = useRef<any>(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername('');
    navigate('/');
  };

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

    textareaRef.current.value = '';
  };

  useEffect(() => {
    if (username === '') {
      navigate('/');
    }
  }, []);

  return (
    <>
      <div className="h-screen min-w-screen bg-gray-900">
        <div className="w-full h-full px-20 py-48 flex flex-col justify-center items-center">
          <div className="w-full h-full flex flex-col p-3 gap-5 justify-center">
            {/* Header */}
            <div className="h-0 w-full flex justify-between items-center px-4">
              <p className="text-gray-400">Chat Room</p>
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-white"
              >
                Logout
              </button>
            </div>
            {/* Grid Container */}
            <div className="border border-gray-700 p-2 grid grid-cols-12 h-full bg-gray-800 rounded-md">
              <div className="col-start-1 col-span-10 border border-gray-700 p-2 text-gray-200 overflow-y-auto scrollbar-hide">
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
              <div className="col-start-11 col-span-2 border-r border-b border-t border-gray-700 text-gray-400 flex justify-center overflow-y-auto scrollbar-hide">
                <div className="w-full flex flex-col overflow-y-auto scrollbar-hide">
                  <div className="w-full border-b border-gray-700 h-fit flex justify-center pt-2 pb-1 text-sm">
                    Users
                  </div>
                  <div className="py-2 px-2 text-white">
                    &#x2022; Apple Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Adipisci fugiat unde illo beatae eum sed
                    animi deserunt aliquam quasi expedita eveniet voluptates
                    eligendi enim dolores quia dignissimos repudiandae, vero
                    nostrum. Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Voluptatibus doloremque modi iusto in voluptate ex
                    earum aliquid cum, neque id, quae non atque minima ratione
                    mollitia quidem, cupiditate tempore officia! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Labore,
                    necessitatibus. Adipisci cum quo, explicabo, quam itaque
                    officia quas molestiae quae possimus deserunt nisi
                    consectetur, repellendus fugiat voluptates magnam
                    accusantium a? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Natus ipsa et dicta totam aperiam officiis
                    dolore libero enim quae veniam laudantium, quisquam quaerat
                    quis aspernatur minima illum molestiae. Cum, odio! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                    sit, quisquam eveniet eius id officiis quos cupiditate
                    ratione facilis, omnis corrupti mollitia recusandae ab quis
                    quasi modi reiciendis magnam. Magnam. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Rem quis perspiciatis
                    facere porro expedita, recusandae obcaecati placeat aperiam
                    culpa voluptatibus architecto itaque nisi est officiis,
                    voluptatum nesciunt suscipit quas harum? Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Adipisci fugiat unde
                    illo beatae eum sed animi deserunt aliquam quasi expedita
                    eveniet voluptates eligendi enim dolores quia dignissimos
                    repudiandae, vero nostrum. Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Voluptatibus doloremque modi
                    iusto in voluptate ex earum aliquid cum, neque id, quae non
                    atque minima ratione mollitia quidem, cupiditate tempore
                    officia! Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Labore, necessitatibus. Adipisci cum quo, explicabo,
                    quam itaque officia quas molestiae quae possimus deserunt
                    nisi consectetur, repellendus fugiat voluptates magnam
                    accusantium a? Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Natus ipsa et dicta totam aperiam officiis
                    dolore libero enim quae veniam laudantium, quisquam quaerat
                    quis aspernatur minima illum molestiae. Cum, odio! Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                    sit, quisquam eveniet eius id officiis quos cupiditate
                    ratione facilis, omnis corrupti mollitia recusandae ab quis
                    quasi modi reiciendis magnam. Magnam. Lorem ipsum dolor sit
                    amet consectetur, adipisicing elit. Rem quis perspiciatis
                    facere porro expedita, recusandae obcaecati placeat aperiam
                    culpa voluptatibus architecto itaque nisi est officiis,
                    voluptatum nesciunt suscipit quas harum?
                  </div>
                </div>
              </div>
            </div>
            {/* Chat Footer */}
            <div className="grid grid-cols-12">
              <div className="col-start-1 col-span-10 mr-4 border border-gray-700 p-2 bg-gray-800 rounded-md">
                <textarea
                  placeholder="Enter message"
                  className="p-2 px-3 w-full bg-gray-800 border border-gray-700 focus:outline-none text-white placeholder:text-gray-500"
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  ref={textareaRef}
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
