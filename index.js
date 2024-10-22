document.addEventListener("DOMContentLoaded", () => {
    const All = document.getElementById('all');

    // Store the HTML content of each button as a string
    const createButtonHTML = document.getElementById('Create').outerHTML;
    const editButtonHTML = document.getElementById('Edit').outerHTML;
    const deleteButtonHTML = document.getElementById('Delete').outerHTML;

    const displayDynamicOne = (dynamicOne) => {
        console.log(dynamicOne, 'dynamicOne');

        // Update the `innerHTML` of `All` based on the selected value
        switch (dynamicOne) {
            case "Create":
                All.innerHTML = createButtonHTML;
                break;
            case "Edit":
                All.innerHTML = editButtonHTML;
                break;
            case "Delete":
                All.innerHTML = deleteButtonHTML;
                break;
            default:
                All.innerHTML = ''; // Clear the content if the input is not valid
                break;
        }
    };

    // Example usage: calling the function initially
    displayDynamicOne('Create');

    // Event listeners for buttons to change displayed content
    document.getElementById('createButton').addEventListener('click', () => displayDynamicOne('Create'));
    document.getElementById('editButton').addEventListener('click', () => displayDynamicOne('Edit'));
    document.getElementById('deleteButton').addEventListener('click', () => displayDynamicOne('Delete'));
});
