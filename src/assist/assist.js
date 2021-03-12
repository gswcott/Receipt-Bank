export const displayAssit = (element) => {
    element.innerHTML = `
    <div class="divider"></div>
    <div class="section">
      <h5>Transfomer une facture papier en données numériques</h5>
      <p>Sur la page principale de votre application, cliquez sur l'icône "Appareil Photo" présente en bas de page puis,
        prenez en photo votre facture de telle sorte que les données soient bien visibles.</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>Envoyer plusieurs sélections de données à un collaborateur</h5>
      <p>Sélectionnez les données concernées (selction multiple) puis appuyez sur l'icone "envoyer" en haut à droite de la
        page. Une popup vous demandera alors le moyen de partage.</p>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h5>D'autres questions ?</h5>
      <a class="waves-effect waves-light btn-large contact">nous contacter</a>
    </div>
    `;
};
