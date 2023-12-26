function openModal(modalId, imageSrc) {
    var modal = document.getElementById(modalId);
    var img = document.getElementById("img01");

    img.src = imageSrc;
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
