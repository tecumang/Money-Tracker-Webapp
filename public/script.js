// Get transactions from localStorage on load
function getTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    displayTransactions(transactions);
  }
  
  function displayTransactions(transactions) {
    // Loop through and add rows to table
  }
  
  // Handle form submit
  $('#addTransaction').submit(function(e) {
    e.preventDefault();
    
    // Get form values  
    const transaction = {
      date: $('#date').val(),
      description: $('#description').val(),
      // etc
    };
    
    // Add to localStorage
    addTransaction(transaction); 
    
    // Add row to table
    addTransactionToTable(transaction);
  
    // Show confirmation
    $('#confirmation').show();
  
    // Clear form
    $('#addTransaction').trigger('reset');
  });
  
  function addTransaction(transaction) {
    const transactions = getTransactions(); // Gets from localStorage
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }
  
  function addTransactionToTable(transaction) {
    // Add row to #transactions
  }
  
  getTransactions(); // Load on start