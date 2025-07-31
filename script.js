function copyEmail() {
    const email = "govindjiharsh@gmail.com"; // Email to be copied
    navigator.clipboard.writeText(email)
        .then(() => {
            alert("Email copied to clipboard!"); // Optional: Alert the user
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}
