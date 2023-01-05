/** To Render tables based on a list of objects **/

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentS: Student = {
  firstName: 'Tamon',
  lastName: 'Elise',
  age: 22,
  location: 'New Jersey',
}

const studentT: Student = {
  firstName: 'Riles',
  lastName: 'Alice',
  age: 21,
  location: 'New Orleans',
}

const studentList = [studentS, studentT];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach((obj) => {
  const row = document.createElement('tr');
  const cellName = document.createElement('td');
  const cellLocation = document.createElement('td');
  cellName.textContent = obj.firstName;
  cellLocation.textContent = obj.location;
  row.appendChild(cellName);
  row.appendChild(cellLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);
