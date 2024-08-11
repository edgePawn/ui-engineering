function showNotification(type, message) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const notifications = document.getElementById('notification-container');
    notifications.appendChild(notification);

   
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    // Hide the notification after 4 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        notification.classList.add('hide');

        setTimeout(() => {
            notifications.removeChild(notification);
        }, 400); 
    }, 4000); 
}


document.querySelector('button').addEventListener('click', () => {
    showNotification('success', 'This is a success message!');
});
