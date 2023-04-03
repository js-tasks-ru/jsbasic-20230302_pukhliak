function highlight(table) {
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const status = row.cells[3].getAttribute("data-available");
    if (status === "true") {
      row.classList.add("available");
    } else if (status === "false") {
      row.classList.add("unavailable");
    } else {
      row.hidden = true;
    }
    const gender = row.cells[2].textContent;
    if (gender === "m") {
      row.classList.add("male");
    } else if (gender === "f") {
      row.classList.add("female");
    }
    const age = row.cells[1].textContent;
    if (age < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
