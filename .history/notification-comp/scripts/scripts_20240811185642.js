



function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className =`notification ${type}`;
    notification.textContent=message;
const notifications =document.getElementById('notification')
}