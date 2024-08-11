



function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className =`notification ${type}`;
    notification.textContent=message;
const notifications =document.getElementById('notification-container');
notifications.append(notification);
requestAnimationFrame(()=>{
    notification.classList.add('show');


})
setTimeout(()=>{
    notification.classList.remove(;show)
})
}