document.addEventListener('DOMContentLoaded', () => {
    
    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');

    customer.addEventListener('contextmenu', () => {
        console.log('что-то произошло')
    })
});