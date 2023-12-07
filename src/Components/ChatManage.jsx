import ChatManageStyles from './ChatManage.css'
import Attachphoto from '../attachphoto.svg'
import SendMessage from '../sendmessage.svg'
import Rename from '../rename.svg'

export default function ChatManage() {
    return (
        <div className="ChatManage__container">

            <div class="modal fade" id="putbot" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title-cm modal-title mt-2 fs-5" id="staticBackdropLabel">Перевод на бота</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label htmlFor="#dropdown_cm" class="form-label-cm form-label">ТИП КЛИЕНТ</label>
                            <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                <button class="dropdown_chatmanage btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Выберите
                                </button>
                                <ul class="dd_cm dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                            <label htmlFor="#dropdown_cm" class="form-label-cm form-label">СТАТУС СДЕЛКИ</label>
                            <div class="dropdown d-flex justify-content-center mb-4" id='dropdown_cm'>
                                <button class="dropdown_chatmanage btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Выберите
                                </button>
                                <ul class="dd_cm dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="ButtonAccept mb-5">Перевод</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal fade" id="putcheck" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title-cm modal-title mt-2 fs-5" id="staticBackdropLabel">Выставление счета</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="basic-url" class="form-label-cm form-label">ИНН</label>
                                <div className="input_rename">
                                    <div class=" input-group">
                                        <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <img src={Rename} className='rename_icon_inn' alt="" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="basic-url" class="form-label-cm form-label">Имя клиента</label>
                                <div className="input_rename">
                                    <div class=" input-group">
                                        <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <img src={Rename} className='rename_icon_inn' alt="" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="basic-url" class="form-label-cm form-label">Телефон</label>
                                <div className="input_rename">
                                    <div class=" input-group">
                                        <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <img src={Rename} className='rename_icon_inn' alt="" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="basic-url" class="form-label-cm form-label">Почта</label>
                                <div className="input_rename">
                                    <div class=" input-group">
                                        <input type="text" class="clientlist_modal__input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                    </div>
                                    <img src={Rename} className='rename_icon_inn' alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="ButtonAccept mb-5">Выставить</button>
                        </div>
                    </div>
                </div>

            </div>
            <div class="modal fade" id="userdisable" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title-cm modal-title mt-2 fs-5" id="staticBackdropLabel">Отключение</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <label for="basic-url" class="form-label-cm form-label mb-2 ">Причина</label>
                                <div class="input-group-cm input-group">
                                    <input type="text" class="chatmanage_modal_input form-control" id="basic-url" aria-describedby="basic-addon3 basic-addon4" />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex justify-content-center">
                            <button type="button" class="ButtonAccept mb-5">Отключить</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="chat_tools">
                <input class="input_chattools" type="text" placeholder="Введите текст" />
                <a href="#/"><img src={Attachphoto} className=' img_sendmessage' alt="" /></a>
                <a href="#/"><img src={SendMessage} className='img_chattools img_attachphoto' alt="" /></a>
            </div>
            <div className="ChangeDealStatus">
                <button className="ButtonChange" type='button' data-bs-toggle="modal" data-bs-target="#putcheck">Выставить счет</button>
                <button className="ButtonChange" type='button' data-bs-toggle="modal" data-bs-target="#putbot">Перевести на бота</button>
                <button className="ButtonChange" type='button' data-bs-toggle="modal" data-bs-target="#userdisable">Отключить</button>
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