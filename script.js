let totalAnualSalary = 0;

function addEmployee(event) {
    event.preventDefault();
    // console.log('the button clicked!.  The form submittted.  The moon is full.  The ritual is ready!');


    // add a row to the table
    // aka: put something on the DOM
    // I need two things: the thing I want to add, and the place I want to add it

    // the thin I want to add, looks like this:

    // `
    // <tr>
    // <td>Jen</td>
    // <td>Barber</td>
    // <td>4521</td>
    // <td>Team Lead</td>
    // <td>$80,000</td>
    // <td><button>Delete</button></td>
    // </tr>
    // `

    // the place I want to add it, is inside, as the last new thing, of the tbody element.
    let tbodyElement = document.querySelector('tbody');

    console.log('table body?', tbodyElement);

    let firstName = document.getElementById('first_name').value;
    let lastName = document.getElementById('last_name').value;
    let id = document.getElementById('id').value;
    let title = document.getElementById('title').value;
    let annualSalary = document.getElementById('annual_salary').value;

    console.log('annualSalary', annualSalary);


    tbodyElement.innerHTML += `
<tr>
<td>${firstName}</td>
<td>${lastName}</td>
<td>${id}</td>
<td>${title}</td>
<td>${annualSalary}</td>
<td><button onclick="deleteEmployee(event)">Delete</button></td>
</tr>
`

    //  ^ TODO: That delete button.... more later in the instructions?

    // update the monthly cost (in the footer)

    // I need the place on the DOM I want to mess with

    // let monthlyTotalElement = document.querySelector('span');
    // console.log('is this the total...element?', monthlyTotalElement);

    // let monthlyTotalText = monthlyTotalElement.innerText;
    // console.log('is this what we expect (0)', monthlyTotalText);

    // you can do this as one step.
    // let monthlyTotalText = document.querySelector('span').innerText;

    // I need the contents I want to put there <- this is the differt/new/hard part of this bit
    // in this case, we are keeping track of one global variable, and updating it each time
    totalAnualSalary += Number(annualSalary);

    console.log('totalAnualSalary:', totalAnualSalary);

    document.querySelector('span').innerText = `${totalAnualSalary / 12}`;

    // reset the input fields

    document.getElementById('first_name').value = '';
    document.getElementById('last_name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('title').value = '';
    document.getElementById('annual_salary').value = '';


    // add an over_budget class to the <footer> when the monthly budget is over 20,000

    if (totalAnualSalary / 12 > 20000) {
        // add the class

        document.querySelector('footer').classList.add('over_budget');
    }


}


// when we click delete - delete the row
// gotchas: delete the row, not just the delete button
// liste for the click, then take action

function deleteEmployee(event) {
    // this works too
    // let theDeleteButtonIClicked = event.target;
    // let tdCell = theDeleteButtonIClicked.parentElement;
    // let theWholeRow = tdCell.parentElement;

    // console.log(event.target.parentElement.parentElement);

    event.target.parentElement.parentElement.remove();
}
