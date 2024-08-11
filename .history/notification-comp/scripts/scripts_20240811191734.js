

function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className=`notification ${type}`
    const notifications =document.getElementById('notification-container');
    notifications.append(notification);requestAnimationFrame(()=>{
        notification.classList.add('show')
    })
    setTimeout(()=>{
        notification.classList.remove('show')
        notification.classList.add('hide');
        setTimeout(()=>{

        },400)
    },4000)

}
document.querySelector('button').addEventListener('click',()=>{
    showNotification('success',"this is success message")
})