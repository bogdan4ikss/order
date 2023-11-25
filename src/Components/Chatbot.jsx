import ChatBotStyles from './Chatbot.css'
import ChatBotSend from '../ChatBotSend.svg'
import Images from '../images.jpg'

export default function Chatbot() {
    return (
        <div>
            <div className="ChatBot__container">
                <div className="message my_message">
                    <div className="message_content_chatbot">
                        <span className="sender">Вы</span>
                        <span className="timestampo">10:05</span>
                        <p className="message_text_chatbot">Lorem ipsum dolor sit amet elit.</p>
                    </div>
                    <div className="ChatBotButtonSend">
                        <img src={ChatBotSend} alt="" />
                    </div>
                </div>
                <div className="message my_message">
                    <div className="message_content_chatbot">
                        <span className="sender">Вы</span>
                        <span className="timestampo">10:05</span>
                        <p className="message_text_chatbot">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ipsum</p>
                    </div>
                    <div className="ChatBotButtonSend">
                        <img src={ChatBotSend} alt="" />
                    </div>
                </div>
                <div className="message my_message">
                    <div className="message_content_chatbot">
                        <span className="sender">Вы</span>
                        <span className="timestampo">10:05</span>
                        <p className="message_text_chatbot"><img src={Images} alt="" /></p>
                    </div>
                    <div className="ChatBotButtonSend">
                        <img src={ChatBotSend} alt="" />
                    </div>
                </div>
                <div class="Scrollbar_rect1"></div>
            </div>
        </div>
    )
}