const balance = document.getElementById('balance');
const transactionForm = document.getElementById('transaction-form');
const transactionsList = document.getElementById('transactions');
const ctx = document.getElementById('expenseChart').getContext('2d');
const themeToggle = document.getElementById('theme-toggle');

let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let chart;

// Theme toggle
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeToggle.checked);
  document.body.classList.toggle('light', !themeToggle.checked);
});

// Update balance
function updateBalance() {
  const total = transactions.reduce((acc, t) => t.type === 'income' ? acc + t.amount : acc - t.amount, 0);
  balance.innerText = total;
}

// Add transaction
function addTransactionToDOM(transaction) {
  const li = document.createElement('li');
  li.className = transaction.type;
  li.innerHTML = `
    ${transaction.description} - ${transaction.category} <span>$${transaction.amount}</span>
    <button onclick="deleteTransaction(${transaction.id})">x</button>
  `;
  transactionsList.appendChild(li);
}

// Delete transaction with animation
function deleteTransaction(id) {
  const li = document.querySelector(`#transactions li button[onclick="deleteTransaction(${id})"]`).parentElement;
  li.classList.add('removing');
  setTimeout(() => {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    renderTransactions();
  }, 500);
}

// LocalStorage
function updateLocalStorage() {
  localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Render transactions
function renderTransactions() {
  transactionsList.innerHTML = '';
  transactions.forEach(addTransactionToDOM);
  updateBalance();
  updateChart();
}

// Form submit
transactionForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const description = document.getElementById('description').value;
  const amount = +document.getElementById('amount').value;
  const type = document.getElementById('type').value;
  const category = document.getElementById('category').value;

  const transaction = {
    id: Date.now(),
    description,
    amount,
    type,
    category
  };

  transactions.push(transaction);
  updateLocalStorage();
  renderTransactions();
  transactionForm.reset();
});

// Chart.js logic
function updateChart() {
  const expenseCategories = transactions.filter(t => t.type === 'expense');
  const categoryTotals = {};
  expenseCategories.forEach(t => {
    if(categoryTotals[t.category]) categoryTotals[t.category] += t.amount;
    else categoryTotals[t.category] = t.amount;
  });

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [{
      label: 'Expenses by Category',
      data: Object.values(categoryTotals),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ]
    }]
  };

  if(chart) chart.destroy();
  chart = new Chart(ctx, { type: 'pie', data: data });
}

// Initial render
renderTransactions();
