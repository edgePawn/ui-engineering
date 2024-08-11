

function showNotification(type,message){
    const notification = document.createElement('div');
    notification.className=`notification `

}
document.querySelector('button').addEventListener('click',()=>{
    showNotification('success',"this is success message")
})