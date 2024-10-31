document.getElementById("removeAlbumButton").addEventListener("click", function() {
    document.getElementById("removeAlbumForm").style.display = "block";
    document.getElementById("albumForm").style.display = "none";
});

function removeAlbumByNumber(event) {
    event.preventDefault();

    const albumNumber = parseInt(document.getElementById("albumNumber").value);

    const rows =document.getElementById('albumTable').querySelectorAll('tr');

    if (albumNumber > 0 && albumNumber < rows.length) {
        rows[albumNumber ].remove();
        document.getElementById("removealbumForm").style.display = "none";
        document.getElementById("removealbumByNumberForm").reset();
    } else {
        alert("Numero album non valido!");
    }
}