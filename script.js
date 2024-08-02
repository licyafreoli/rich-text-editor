function execCmd(command) {
    document.execCommand(command, false, null);
}

function createLink() {
    let url = prompt("Enter the URL");
    if (url) {
        document.execCommand('createLink', false, url);
    }
}