export const displayHome = (element) => {
    element.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col s6 m4">
                <div class="card-panel teal">
                    <a class="waves-effect waves-teal btn-flat" href="my-data.html">Dossier</a>
                </div>
            </div>
            <div class="col s6 m4">
                <div class="card-panel teal">
                    <a class="waves-effect waves-teal btn-flat" href="my-data.html">Dossier</a>
                </div>
            </div>
            <div class="col s6 m4">
                <div class="card-panel teal">
                    <a class="waves-effect waves-teal btn-flat" href="my-data.html">Dossier</a>
                </div>
            </div>
        </div>
    </div>
    <footer>
        <a id="camera" href="camera.html" class="btn-floating btn-large waves-effect waves-light"><i
                class="material-icons">camera</i></a>
    </footer>
    `
}
