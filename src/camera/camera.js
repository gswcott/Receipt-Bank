export const displayCamera = (element) => {
    element.innerHTML = `
        <video autoplay muted loop id="webcam">
            <source src="assets/wave.mp4" type='video/mp4'>
        </video>
    `;
};
