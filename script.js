let income = 0, expense = 0;
    function addTransaction() {
        let name = document.getElementById("name").value;
        let category = document.getElementById("category").value;
        let type = document.getElementById("type").value;
        let amount = parseFloat(document.getElementById("amount").value);
            
        if (!name || !category || isNaN(amount) || amount <= 0) {
            showPopup("Please enter valid transaction details.");
            return;
        }
            
        let table = document.getElementById("transaction-list");
        let row = table.insertRow();
        row.insertCell(0).innerText = name;
        row.insertCell(1).innerText = category;
        row.insertCell(2).innerText = type.charAt(0).toUpperCase() + type.slice(1);
        row.insertCell(3).innerText = "₱" + amount.toFixed(2);

        if (type === "income") {
            income += amount;
        } else {
            expense += amount;
        }

        document.getElementById("income").innerText = income.toFixed(2);
        document.getElementById("expense").innerText = expense.toFixed(2);
        document.getElementById("balance").innerText = (income - expense).toFixed(2);
            
        showPopup(`Added ${type} of ₱${amount.toFixed(2)} successfully!`);
    }

    function showPopup(message) {
         document.getElementById("popup-message").innerText = message;
        document.getElementById("popup").style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }