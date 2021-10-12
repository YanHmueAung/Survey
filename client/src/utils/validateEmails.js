//JS syntax more acturate
//const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//html5 Syntax
const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default (emails) => {
    const invalidEmailsArray = emails
        .split(',')
        .map(email => email.trim())
        //emailregex.com for 
        .filter(email => re.test(email) === false)

    if (invalidEmailsArray.length) {
        return `these emails are invalid: ${invalidEmailsArray}`;
    }

    return;
}