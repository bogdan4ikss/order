import ChatStyles from './Chat.css'

export default function Chat({ toggleListId, toggleBotId }) {
    return (
        <div className="Chat__container">
            <div className="futurecont"></div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Текст сообщения</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Длинное сообщениие с большой длинной</p>
                </div>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Длинное сообщениие с очень большой длиной, переносящихся сразу на три строки</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Очень длинное сообщениие с еще больше длиной чем в предыдущем сообщении, переносящихся сразу на четыре строки</p>
                </div>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Текст сообщения</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Мое сообщение</p>
                </div>
            </div>
            <div className="message">
                <div className="message_contentc">
                    <span className="sender">Имя</span>
                    <span className="timestampc">10:00</span>
                    <p className="message_text">Текст сообщения</p>
                </div>
            </div>
            <div className="message my_message">
                <div className="message_contento">
                    <span className="sender">Вы</span>
                    <span className="timestampo">10:05</span>
                    <p className="message_text">Мое сообщение</p>
                </div>
            </div>
            <div className="ButtonType__container">
                <div className="ButtonList">
                    <input type="checkbox" id={toggleListId} className='Chat_checkbox' />
                    <label htmlFor={toggleListId}>К списку</label>
                </div>
                <div className="ButtonChat">
                    <input type="checkbox" id={toggleBotId} className='Chat_checkbox' />
                    <label htmlFor={toggleBotId}>Бот</label>
                </div>
            </div>
            <div className="chat_rect_invis"></div>
        </div>

    )
}