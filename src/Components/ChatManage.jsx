import ChatManageStyles from './ChatManage.css'
import Attachphoto from '../attachphoto.svg'
import SendMessage from '../sendmessage.svg'

export default function ChatManage() {
    return (
        <div className="ChatManage__container">
            <div className="chat_tools">
                <a href="#/"><img src={Attachphoto} className='img_chattools' alt="" /></a>
                <input class="input_chattools" type="text" placeholder="Введите текст" />
                <a href="#/"><img src={SendMessage} className='img_chattools' alt="" /></a>
            </div>
            <div className="ChangeDealStatus">
                <button className="ButtonChange">Выставить счет</button>
                <button className="ButtonChange">Перевести на бота</button>
                <button className="ButtonChange">Отключить</button>
            </div>
            <div class="menu-container">
                <input type="checkbox" id="menu-toggle" />
                <label for="menu-toggle" class="menu-button">
                    <div className='ButtonChange_open'>Открыть</div>
                </label>
                <ul class="menu-items">
                    <button className="ButtonChange_small">Выставить счет</button>
                    <button className="ButtonChange_small">Перевести на бота</button>
                    <button className="ButtonChange_small">Отключить</button>
                </ul>
            </div>
        </div>
    )
}