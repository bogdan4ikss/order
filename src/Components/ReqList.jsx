import ReqListStyles from './ReqList.css'
import Bill from '../Bill.svg'
import AvaClient from '../images.svg'
import DropDownIcon from '../DropDownIcon.svg'
import Plus from '../Plus.svg'
import Rename from '../rename.svg'

export default function ReqList() {
    return (
        <div className="reqlist__container">
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title-cl modal-title mt-3 fs-5" id="exampleModalLabel">Настройка данных пользователя</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="modalclient_stroke row">
                                <div class="col">
                                    <div class="mb-3">
                                        <label for="basic-url" class="form-label-cl form-label">ИНН</label>
                                        <div className="input_rename">
                                            <div class="input_forrename input-group">
                                                <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                            </div>
                                            <img src={Rename} className='rename_icon_inn' alt="" />
                                        </div>
                                    </div>
                                    <div class="modalinput_3 mb-3">
                                        <div>
                                            <label for="basic-url" class="form-label-cl form-label">ИМЯ КОНТАКТА</label>
                                            <div className="input_rename">
                                                <div class=" input-group">
                                                    <input type="text" class="clientlist_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                                </div>
                                                <img src={Rename} className='rename_icon' alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="basic-url" class="form-label-cl form-label">ТЕЛЕФОН</label>
                                            <div className="input_rename">
                                                <div class=" input-group">
                                                    <input type="text" class="clientlist_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                                </div>
                                                <img src={Rename} className='rename_icon' alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label for="basic-url" class="form-label-cl form-label">ПОЧТА</label>
                                            <div className="input_rename">
                                                <div class=" input-group">
                                                    <input type="text" class="clientlist_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                                </div>
                                                <img src={Rename} className='rename_icon' alt="" />
                                            </div>
                                        </div>
                                        <img src={Plus} alt="" style={{ marginTop: 23, width: 40 }} />
                                    </div>
                                    <div class="modaldropwown-2 mb-3">
                                        <div>
                                            <label htmlFor="#dropdown_cm" class="form-label-cm form-label">МАРКА</label>
                                            <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                                <button class="dropdown_chatmanage btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Выберите
                                                    <img src={DropDownIcon} alt="" />
                                                </button>
                                                <ul class="dd_cm dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="#dropdown_cm" class="form-label-cm form-label">МОДЕЛЬ</label>
                                            <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                                <button class="dropdown_chatmanage btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Выберите
                                                    <img src={DropDownIcon} alt="" />
                                                </button>
                                                <ul class="dd_cm dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img src={Plus} alt="" />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="#dropdown_cm" class="form-label-cm form-label">ТИП КОМПАНИИ</label>
                                        <div class="dropdown mb-4" id='dropdown_cm'>
                                            <button class="dropdown_chatmanage_long btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Выберите
                                                <img src={DropDownIcon} alt="" />
                                            </button>
                                            <ul class=" dropdown-menu">
                                                <li><a class="dropdown-item" href="#">Action</a></li>
                                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="modal_button_cl">Добавить</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="req_date">
                <p>15 сентября</p>
            </div>
            <div className="list_request">
                <div className="req_line1">
                    <div className="req_avatar">
                        <button type="button" class="modal_button_clientlist" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={AvaClient} alt="" />
                        </button>
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
            <div className="list_request">
                <div className="req_line1">
                    <div className="req_avatar">
                        <button type="button" class="modal_button_clientlist" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={AvaClient} alt="" />
                        </button>
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
            <div className="list_request">
                <div className="req_line1">
                    <div className="req_avatar">
                        <button type="button" class="modal_button_clientlist" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={AvaClient} alt="" />
                        </button>
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
            <div className="list_request">
                <div className="req_line1">
                    <div className="req_avatar">
                        <button type="button" class="modal_button_clientlist" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <img src={AvaClient} alt="" />
                        </button>
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