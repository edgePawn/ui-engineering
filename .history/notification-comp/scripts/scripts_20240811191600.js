

function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className=`notification ${type}`
    const notifications =document.getElementById('notification-container');
    no

}
document.querySelector('button').addEventListener('click',()=>{
    showNotification('success',"this is success message")
})