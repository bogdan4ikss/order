import ClientListStyles from './ClientList.css'
import ChatIcon from '../ChatIcon.svg'
import Dollar from '../Dollar.svg'
import AWord from '../A.svg'
import WWord from '../W.svg'
import AvaClient from '../images.jpg'
import Convert from '../Convert.svg'

export default function ClientList({ toggleId }) {
    return (
        <div class="clientlist__container" id='clientlist_oflow'>
            <div class="Client">
                <div class="Client_avatar">
                    <a href="#"><img src={AvaClient} alt="" /></a>
                </div>
                <div class="Client_data">
                    <div class="Client_data_line1">
                        <span class="Client_name">NAME</span>
                        <span class="Client_marka">MARKA</span>
                        <span class="Client_model">MODEL</span>
                        <span class="Client_type">TYPE</span>
                    </div>
                    <div class="Client_data_line2">
                        <span class="Client_CompanyName">NAME OF COMPANY</span>
                        <span class="Client_shop">SHOP</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_telephone">TELEPHONE</span>
                        <span class="Client_email">EMAIL</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_date">1D/0A/20TE</span>
                    </div>
                    <div class="Client_buttons">
                        <a href="#/" class='RateUp'>-Прошу расценить</a>
                        <a href="#/" class='RateUp'>-Запрос на звезды</a>
                        <div class="Buttons_right">
                            <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
                            <label htmlFor={toggleId}><img src={ChatIcon} alt="" className='img_checkbox' /></label>
                            <a href="#/"><img src={Dollar} alt="" /></a>
                            <a href="#/"><img src={AWord} alt="" /></a>
                            <a href="#/"><img src={WWord} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Client">
                <div class="Client_avatar">
                    <img src={AvaClient} alt="" />
                </div>
                <div class="Client_data">
                    <div class="Client_data_line1">
                        <span class="Client_name">NAME</span>
                        <span class="Client_marka">MARKA</span>
                        <span class="Client_model">MODEL</span>
                        <span class="Client_type">TYPE</span>
                    </div>
                    <div class="Client_data_line2">
                        <span class="Client_CompanyName">NAME OF COMPANY</span>
                        <span class="Client_shop">SHOP</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_telephone">TELEPHONE</span>
                        <span class="Client_email">EMAIL</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_date">1D/0A/20TE</span>
                    </div>
                    <div className="Client_buttons">
                        <a href="#/" className='RateUp'>-Прошу расценить</a>
                        <a href="#/" className='RateUp'>-Запрос на звезды</a>
                        <div className="Buttons_right">
                            <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
                            <label htmlFor={toggleId}><img src={ChatIcon} alt="" className='img_checkbox' /></label>
                            <a href="#/"><img src={Dollar} alt="" /></a>
                            <a href="#/"><img src={AWord} alt="" /></a>
                            <a href="#/"><img src={WWord} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Client">
                <div class="Client_avatar">
                    <img src={AvaClient} alt="" />
                </div>
                <div class="Client_data">
                    <div class="Client_data_line1">
                        <span class="Client_name">NAME</span>
                        <span class="Client_marka">MARKA</span>
                        <span class="Client_model">MODEL</span>
                        <span class="Client_type">TYPE</span>
                    </div>
                    <div class="Client_data_line2">
                        <span class="Client_CompanyName">NAME OF COMPANY</span>
                        <span class="Client_shop">SHOP</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_telephone">TELEPHONE</span>
                        <span class="Client_email">EMAIL</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_date">1D/0A/20TE</span>
                    </div>
                    <div class="Client_buttons">
                        <a href="#/" class='RateUp'>-Прошу расценить</a>
                        <a href="#/" class='RateUp'>-Запрос на звезды</a>
                        <div class="Buttons_right">
                            <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
                            <label htmlFor={toggleId}><img src={Convert} alt="" /></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Client">
                <div class="Client_avatar">
                    <img src={AvaClient} alt="" />
                </div>
                <div class="Client_data">
                    <div class="Client_data_line1">
                        <span class="Client_name">NAME</span>
                        <span class="Client_marka">MARKA</span>
                        <span class="Client_model">MODEL</span>
                        <span class="Client_type">TYPE</span>
                    </div>
                    <div class="Client_data_line2">
                        <span class="Client_CompanyName">NAME OF COMPANY</span>
                        <span class="Client_shop">SHOP</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_telephone">TELEPHONE</span>
                        <span class="Client_email">EMAIL</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_date">1D/0A/20TE</span>
                    </div>
                    <div class="Client_buttons">
                        <a href="#/" class='RateUp'>-Прошу расценить</a>
                        <a href="#/" class='RateUp'>-Запрос на звезды</a>
                        <div class="Buttons_right">
                            <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
                            <label htmlFor={toggleId}><img src={Convert} alt="" /></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Client">
                <div class="Client_avatar">
                    <img src={AvaClient} alt="" />
                </div>
                <div class="Client_data">
                    <div class="Client_data_line1">
                        <span class="Client_name">NAME</span>
                        <span class="Client_marka">MARKA</span>
                        <span class="Client_model">MODEL</span>
                        <span class="Client_type">TYPE</span>
                    </div>
                    <div class="Client_data_line2">
                        <span class="Client_CompanyName">NAME OF COMPANY</span>
                        <span class="Client_shop">SHOP</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_telephone">TELEPHONE</span>
                        <span class="Client_email">EMAIL</span>
                    </div>
                    <div class="Client_data_line3">
                        <span class="Client_date">1D/0A/20TE</span>
                    </div>
                    <div class="Client_buttons">
                        <a href="#/" class='RateUp'>-Прошу расценить</a>
                        <a href="#/" class='RateUp'>-Запрос на звезды</a>
                        <div class="Buttons_right">
                            <input type="checkbox" id={toggleId} className='ClientList_checkbox' />
                            <label htmlFor={toggleId}><img src={Convert} alt='' /></label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Scrollbar_rect"></div>
        </div>
    )
}