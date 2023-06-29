function rot90Clock(strng) {
  const rows = strng.split("\n");
  const counter = rows.length;

  let newRows = [];
  let newCols = [];
  for (let i = 0; i < counter; i++) {
    for (let j = counter - 1; j >= 0; j--) {
      newCols.push(rows[j][i]);
    }
    newRows.push(newCols.join(""));
    newCols = [];
  }

  return newRows.join("\n");
}

function diag1Sym(strng) {
  const rows = strng.split("\n");
  const counter = rows.length;

  let newRows = [];
  let newCols = [];
  for (let i = 0; i < counter; i++) {
    for (let j = 0; j < counter; j++) {
      newCols.push(rows[j][i]);
    }
    newRows.push(newCols.join(""));
    newCols = [];
  }

  return newRows.join("\n");
}

function selfieAndDiag1(strng) {
  const rows = strng.split("\n");
  const symetryRows = diag1Sym(strng).split("\n");
  const counter = rows.length;

  let newRows = [];
  for (let i = 0; i < counter; i++) {
    newRows.push(`${rows[i]}|${symetryRows[i]}`);
  }

  return newRows.join("\n");
}

function oper(fct, s) {
  return fct(s);
}
