export const displayInformations = (element) => {
    element.innerHTML = `
    <div>
        <div class="row facture">
            <img class="img-facture" src="https://via.placeholder.com/200" alt="facture">
        </div>

        <div class="row details">
            <ul class="collection">
                <li class="collection-item">
                    <div class="row">
                        <div class="col s6 m6">
                            Type
                        </div>
                        <div class="col s6 m6">
                            Lorem Ipsum
                        </div>
                    </div>
                </li>
                <li class="collection-item">
                    <div class="row">
                        <div class="col s6 m6">
                            Catégorie
                        </div>
                        <div class="col s6 m6">
                            Lorem Ipsum
                        </div>
                    </div>
                </li>
                <li class="collection-item">
                    <div class="row">
                        <div class="col s6 m6">
                            Dossier
                        </div>
                        <div class="col s6 m6">
                            Lorem Ipsum
                        </div>
                    </div>
                </li>
                <li class="collection-item">
                    <div class="row">
                        <div class="col s6 m6">
                            Devise
                        </div>
                        <div class="col s6 m6">
                            Lorem Ipsum
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    `; 
}; 
