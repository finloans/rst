// Simple function to toggle visibility of project details
function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";  // Show the details
    } else {
        element.style.display = "none";   // Hide the details
    }
}
