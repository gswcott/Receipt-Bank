
export const displaySharePopup = (element) => {
    element.innerHTML = `
    <div class="row">
    <div class="col s12 m5">
      <div class="card-panel teal popuptile">
        <span class="material-icons" id="close-icon">cancel</span>
        <h2 class="popup-title">Partager via :</h2>
        <main class="share-butons">
            <br><a class="waves-effect waves-light btn-large" id="fb-buton"><i class="material-icons left" id="fb-icon">cake</i>Facebook</a>
            <br><a class="waves-effect waves-light btn-large"><i class="material-icons left color-icon">email</i>Email</a>
            <br><a class="waves-effect waves-light btn-large"><i class="material-icons left color-icon">get_app</i>Télécharger</a>
        </main>
      </div>
    </div>
  </div>
  `; 
};