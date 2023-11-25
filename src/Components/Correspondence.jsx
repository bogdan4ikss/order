import Menu from './Menu'
import Navbar from './Navbar'
import ReqList from './ReqList'
import Chat from './Chat'
import Chatbot from './Chatbot'
import CorrespondenceStyles from './Correspondence.css'
import ChatManage from './ChatManage'
import CloseImg from '../Close.svg'

export default function Correspondence() {
    const toggleListId = "toggleList";
    const toggleBotId = 'toggleChat';
    return (
        <div>
            <Menu />
            <div className="Navbar_item0">
                <Navbar />
            </div>
            <div className="item__container">
                <input type="checkbox" id="toggleList" className='checkbox_ins' />
                <input type="checkbox" id="toggleChat" className='checkbox_ins' />
                <div className="item1">
                    <ReqList toggleId={toggleListId} />
                    <div className="ButtonList_close">
                        <input type="checkbox" id="toggleList" className='Chat_checkbox' />
                        <label htmlFor='toggleList'><img src={CloseImg} alt="" /></label>
                    </div>
                </div>
                <div className="item2">
                    <Chat toggleListId={toggleListId} toggleBotId={toggleBotId} />
                    <ChatManage />
                </div>
                <div className="item3">
                    <Chatbot />
                    <div className="ButtonList_close">
                        <input type="checkbox" id="toggleChat" className='Chat_checkbox' />
                        <label htmlFor='toggleChat'><img src={CloseImg} alt="" /></label>
                    </div>
                </div>
                <label htmlFor="toggleChat"></label>
                <label htmlFor="toggleList"></label>
            </div>
        </div>
    )
}