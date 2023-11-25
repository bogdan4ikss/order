import MenuStyles from './Menu.css'

export default function Menu() {
    return (
        <nav class="menu__container navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler_menu navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-menu_span">Menu</span>
                </button>
                <div class="navbar-toggler_menu collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav-menu navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link-menu nav-link" href="#">Главная</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-menu nav-link" href="#">Запрос</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-menu nav-link" href="#">Входящие</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-menu nav-link" href="#">Клиенты</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link-menu nav-link" href="#">Склад</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}