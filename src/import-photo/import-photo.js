export const displayImportPhoto = (element) =>{
    element.innerHTML = `
    <label for="image">Import an invoice image</label>
    <br>
    <input type="file" name="image" id="image" accept="image/png, image/jpeg">
    <br>
    `;
};