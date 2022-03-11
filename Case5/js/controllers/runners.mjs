export function dataToHTMLList (array) {
    const HTMLElements = array.map(
        (item) => {
            const row = document.createElement("tr");
            const tdName = document.createElement("td");
            const tdTime = document.createElement("td");

            tdName.innerText=item.name;
            tdTime.innerText=item.time;

            row.append(tdName, tdTime);
            return row;
        }
    )
    document.querySelector("#runnersRows").append(...HTMLElements);
}