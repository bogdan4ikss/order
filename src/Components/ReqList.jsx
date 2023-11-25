import ReqListStyles from './ReqList.css'
import AvaClient from '../images.jpg'
import Bill from '../Bill.svg'

export default function ReqList() {
    return (
        <div className="reqlist__container">
            <div className="req_date">
                <p>15 сентября</p>
            </div>
            <div className="list_request">
                <div className="req_line1">
                    <div className="req_avatar">
                        <img src={AvaClient} alt="" />
                        <div className="req_text_active">Запрос 1</div>
                    </div>
                </div>
                <div className="req_status">
                    <div className="status_img">
                        <img src={Bill} alt="" />
                        <span className='status_text_active'>HDV</span>
                    </div>
                </div>
            </div>
            <div className="list_request_noactive">
                <div className="req_line1">
                    <div className="req_avatar">
                        <img src={AvaClient} alt="" />
                        <div className="req_text">Запрос 1</div>
                    </div>
                </div>
                <div className="req_status">
                    <div className="status_img">
                        <span className='status_text'>RD</span>
                    </div>
                </div>
            </div>
            <div className="req_date">
                <p>13 сентября</p>
            </div>
            <div className="list_request_noactive">
                <div className="req_line1">
                    <div className="req_avatar">
                        <img src={AvaClient} alt="" />
                        <div className="req_text">Запрос 1</div>
                    </div>
                </div>
                <div className="req_status">
                    <div className="status_img">
                        <img src={Bill} alt="" />
                        <span className='status_text'>HDV</span>
                    </div>
                </div>
            </div>
            <div className="list_request_noactive">
                <div className="req_line1">
                    <div className="req_avatar">
                        <img src={AvaClient} alt="" />
                        <div className="req_text">Запрос 1</div>
                    </div>
                </div>
                <div className="req_status">
                    <div className="status_img">
                        <span className='status_text'>RD</span>
                    </div>
                </div>
            </div>
            <div className="rect_invis"></div>
        </div>
    )
}