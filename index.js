window.customerName = 'bob';

function upperCaseCustomerName() {
 window.customerName = window.customerName.toUpperCase();
}

// window.bestCustomer = 'not bob'

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

 // bestCustomer = 'not bob'

function overwriteBestCustomer(newBestCustomer) {
   window.bestCustomer = newBestCustomer;   
}

// const  leastFavoriteCustomer = 'other bob';

function changeLeastFavoriteCustomer() {
    try {
        const leastFavoriteCustomer = 'start value';
        leastFavoriteCustomer = 'new value'; 
    } catch (error) {
        throw new Error('Assignment to constant variable.');
    }
}
try {
    changeLeastFavoriteCustomer();
} catch (error) {
    console.log(error.message); 
}
