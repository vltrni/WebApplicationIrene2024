console.log('HELLO JS');

document.getElementById("addAlbumButton").addEventListener("click", function()
{
    document.getElementById("albumForm").style.display = "block";
    document.getElementById("removeAlbumForm").style.display = "none";
});

document.getElementById("newAlbumForm").addEventListener("submit", function(event)
{
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;

    const tableBody = document.getElementById("albumTable").getElementsByTagName('tbody')[0];

    addNewRowV2(tableBody , title , year);

    document.getElementById("albumForm").style.display = "none";
    document.getElementById("newAlbumForm").reset();
});

/*function addNewRowV1(tableBody , title, year)
{
    const newRowHTML = `
        <tr>
            <td>${title}</td>
            <td>${year}</td>
            <td><button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;

    console.log('Adding new Row , with method 1');
}*/


function addNewRowV2(tableBody , title, year)
{

    const newRow = tableBody.insertRow();

    const titleCell = newRow.insertCell(0);
    const yearCell = newRow.insertCell(1);
    const deleteButtonCell = newRow.insertCell(2);

    titleCell.textContent = title;
    yearCell.innerHTML = `<span class="badge bg-success">${year}</span>`;
    deleteButtonCell.innerHTML =`<button class="btn btn-danger btn-sm deleteButton"><i class="fa-solid fa-trash"></i></button>`

    console.log('Adding new Row , with method 2');
}