function copyCode(button) {
    var codeBlock = button.previousElementSibling.textContent;
    var tempTextarea = document.createElement("textarea");
    tempTextarea.value = codeBlock;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextarea);

    // Change button text to show success message
    button.innerText = "Copied!";
    setTimeout(() => {
        button.innerText = "Copy";
    }, 2000);
}