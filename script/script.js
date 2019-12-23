document.addEventListener('DOMContentLoaded', () => {
    
    const customer = document.getElementById('customer'),
        freelancer = document.getElementById('freelancer'),
        blockCustomer = document.getElementById('block-customer'),
        blockFreelancer = document.getElementById('block-freelancer'),
        blockChoice = document.getElementById('block-choice'),
        btnExit = document.getElementById('btn-exit'),
        formCustomer = document.getElementById('form-customer'),
        ordersTable = document.getElementById('orders');
    
    const orders = [];

    const renderOrders = () => {

        orders.forEach((order, i) => {
            console.log(order);
            console.log(i);
        });

        ordersTable.innerHTML += `
        <tr class="order">
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
        </tr>`;
    }



    customer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        blockCustomer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    freelancer.addEventListener('click', () => {
        blockChoice.style.display = 'none';
        renderOrders();
        blockFreelancer.style.display = 'block';
        btnExit.style.display = 'block';
    });

    btnExit.addEventListener('click', () => {
        btnExit.style.display = 'none';
        blockCustomer.style.display = 'none';
        blockFreelancer.style.display = 'none';
        blockChoice.style.display = 'block';
    });

    formCustomer.addEventListener('submit', (e) => {
        e.preventDefault();
        const obj = {};

        const elements = [...formCustomer.elements]
            .filter((elem) => (elem.tagName === 'INPUT' && elem.type !== 'radio') || 
                (elem.type === 'radio' && elem.checked) || elem.tagName === 'TEXTAREA');

        elements.forEach((elem) => {
            obj[elem.name] = elem.value;

        });

        formCustomer.reset();
        
        orders.push(obj);
        console.log(orders);

    });


    



});