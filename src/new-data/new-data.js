
export const displayNewData = (element) => {
    element.innerHTML = `
    <main class="container">
        <div class="row">
            <div class="col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">close</i></a>
            </div>
            <div class="vh-40 col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <img class="facture-size" src="images/factureExample.jpg">
            </div>
            <form method="post" action="" class="col s12 m8 offset-m2 l6 offset-l3 xl4 offset-xl4">
                <label>Type</label>
                <select class="browser-default">
                    <option value="" disabled selected>Choose</option>
                    <option value="type1">type 1</option>
                    <option value="type2">type 2</option>
                    <option value="other">other</option>
                </select>
                <label>Category</label>
                <select class="browser-default">
                    <option value="" disabled selected>Choose</option>
                    <option value="category1">category 1</option>
                    <option value="category2">category 2 </option>
                    <option value="other">other</option>
                </select>
        
                <label>Devise conversion</label>
                <select class="browser-default">
                    <option value="" disabled selected>Choose</option>
                    <option value="other">other</option>
                </select>
        
                <label>Save in which folder</label>
                <select class="browser-default">
                    <option value="" disabled selected>Choose</option>
                    <option value="folder1">folder 1</option>
                    <option value="folder2">folder 2 </option>
                    <option value="folder3">folder 3</option>
                </select>
            </form>

        </div>
    </main>
    <footer class="container">
        <div class="row ta-c">
            <div class="col s6 offset-s3 m4 offset-m4 l2 offset-l5">
                <a href="#" class="waves-effect waves-light btn">analyse</a>
            </div>
        </div>
    </footer>
    `;
    M.Sidenav.init(document.querySelectorAll("select"));
};
