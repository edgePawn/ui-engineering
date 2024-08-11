

function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className=`notification ${type}`
    const notifications =document.getElementById('notification-container');
    notifications.append(notification);req

}
document.querySelector('button').addEventListener('click',()=>{
    showNotification('success',"this is success message")
})