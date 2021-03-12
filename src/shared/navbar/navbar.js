export const displayNavBar = (element) => {
    element.innerHTML = `
        <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper">
                <a href="index.html" class="brand-logo">Receipt Bank</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="sass.html">Changer email</a></li>
                    <li><a href="badges.html">Préférences</a></li>
                    <li><a href="collapsible.html">Autorisations</a></li>
                    <li><a href="assist.html">Assistance</a></li>
                    <li><a href="mobile.html">A propos</a></li>
                </ul>
                <ul class="right">
                    <li><a href="#"><i class="material-icons">add</i></a></li>
                </ul>
            </div>
        </nav>
    </div>
    <ul class="sidenav" id="mobile-demo">
        <li><a href="sass.html">Changer email</a></li>
        <li><a href="badges.html">Préférences</a></li>
        <li><a href="collapsible.html">Autorisations</a></li>
        <li><a href="assist.html">Assistance</a></li>
        
        <li><a href="mobile.html">A propos</a></li>
    </ul>
    `; 
    M.Sidenav.init(document.querySelectorAll(".sidenav"));
};