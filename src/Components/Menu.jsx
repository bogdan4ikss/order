import MenuStyles from './Menu.css'
import notif from '../notif.svg'

export default function Menu() {
    return (
        <nav class="menu__container navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler_menu navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-menu_span">Menu</span>
                </button>
                <div class="navbar-toggler_menu collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav-menu navbar-nav">
                        <li class="menu__buttonbgc_active nav-item">
                            <a class="nav-link-menu_active nav-link" href="#">ГЛАВНАЯ</a>
                        </li>
                        <li class="menu__buttonbgc nav-item">
                            <a class="nav-link-menu nav-link" href="#">ЗАПРОС</a>
                        </li>
                        <li class="menu__buttonbgc nav-item">
                            <a class="nav-link-menu nav-link" href="#">ВХОДЯЩИЕ</a>
                        </li>
                        <li class="menu__buttonbgc nav-item">
                            <a class="nav-link-menu nav-link" href="#">КЛИЕНТЫ</a>
                        </li>
                        <li class="menu__buttonbgc nav-item">
                            <a class="nav-link-menu nav-link" href="#">СКЛАД</a>
                        </li>
                        <li class="notif menu__buttonbgc nav-item">
                            <a class="nav-link-menu nav-link" href="#"><img src={notif} style={{ width: 20 }} alt="" /><div className='notifications_circle'>8</div></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}