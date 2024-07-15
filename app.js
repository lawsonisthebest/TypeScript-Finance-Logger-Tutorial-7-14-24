import { invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplaate.js';
import { payment } from './classes/payment.js';
const form = document.querySelector(".new-item-form");
const tofrom = document.querySelector("#tofrom");
const type = document.querySelector("#type");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
