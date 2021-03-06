
const myLibrary = [
  {
    title: 'Book-1',
    author: 'Author-1',
    pages: 300,
    status: true,
  },
  {
    title: 'Book-2',
    author: 'Author-2',
    pages: 400,
    status: false,
  },
  {
    title: 'Book-3',
    author: 'Author-3',
    pages: 500,
    status: true,
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

const renderLibrary = () => {
  let entries = '';
  let i = 0;
  myLibrary.forEach(
    (record) => {
      entries += `<tr><td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-500">${record.title}</div></td>`;
      entries += `<td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-500">${record.author}</div></td>`;
      entries += `<td class="px-6 py-4 whitespace-nowrap"><div class="text-sm text-gray-500">${record.pages}</div></td>`;
      entries += `<td class="px-6 py-4 whitespace-nowrap text-center"><button onclick="statusToggle(${i})" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${record.status ? 'Read' : 'Unread'}</button></td>`;
      entries += `<td class="px-6 py-4 whitespace-nowrap text-center"><button onclick="dropRecord(${i})" class="bg-transparent hover:bg-red-500 text-red-700 hover:text-white px-4 border border-red-500 hover:border-transparent rounded">Drop</button></td></tr>`;
      i += 1;
    },
  );
  document.getElementById('library-entries').innerHTML = entries;
};

const resetFields = (e) => {
  e.title.value = '';
  e.author.value = '';
  e.pages.value = null;
  e.status.checked = false;
};

const addBookToLibrary = (e) => {
  e.preventDefault();
  const formElements = e.target.elements;
  const newBook = new Book(
    formElements.title.value,
    formElements.author.value,
    formElements.pages.value,
    formElements.status.checked,
  );
  myLibrary.push(newBook);
  resetFields(formElements);
  renderLibrary();
};

const dropRecord = (index) => {
  myLibrary.splice(index, 1);
  renderLibrary();
};

const statusToggle = (index) => {
  myLibrary[index].status = !myLibrary[index].status;
  renderLibrary();
};

const renderForm = () => {
  const x = document.getElementById('newRecordForm').style.display;
  document.getElementById('newRecordForm').style.display = ((x === 'none') ? 'block' : 'none');
};

document.getElementById('newRecordForm').addEventListener('submit', addBookToLibrary);

renderLibrary();