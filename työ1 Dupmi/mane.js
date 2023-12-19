
document.getElementById("clickableDiv").addEventListener("click", function() {
    var hiddenDiv = document.getElementById("hiddenDiv");
    hiddenDiv.style.display = (hiddenDiv.style.display === "none") ? "block" : "none";
});
