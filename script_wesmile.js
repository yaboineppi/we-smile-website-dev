// Get references to HTML elements
const currentMonthElement = document.getElementById('currentMonth');
const calendarElement = document.getElementById('calendar');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

const username_input = document.getElementById('username');
const password_input = document.getElementById('password');
const login_reg_button = document.getElementById('login_reg_button');

var dayCell = '';



// Initialize the calendar with the current month
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth();

// Function to generate the calendar for a specific month and year
function generateCalendar(year, month) {
    // Clear the calendar
    calendarElement.innerHTML = '';

    // Set the current month heading
    currentMonthElement.textContent = new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

    // Get the first day of the month and the total days in the month
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();

    // Create header cells for days of the week
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    daysOfWeek.forEach(day => {
        const headerCell = document.createElement('div');
        headerCell.classList.add('header');
        headerCell.textContent = day;
        calendarElement.appendChild(headerCell);
    });

    // Fill in empty cells before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');    
        emptyCell.classList.add('day');
        calendarElement.appendChild(emptyCell);   
    }

    // Fill in cells with day numbers
    for (let day = 1; day <= lastDayOfMonth; day++) {
        // const dayCell = document.createElement('div');
        dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = day;
        calendarElement.appendChild(dayCell);

        // Highlight the current day
        if (day === currentDate.getDate() && year === currentYear && month === currentMonth) {
            dayCell.classList.add('current-day');
            // console.log(document.getElementsByClassName('current-day').item(currentDate.getDate));
            document.getElementsByClassName('current-day').item(currentDate.getDate).style.backgroundColor = '#ccc';
        }

        // Check if the day is a weekend (Saturday or Sunday)
        if (new Date(year, month, day).getDay() === 0 || new Date(year, month, day).getDay() === 6) {
            // This is a weekend day; add the "weekend" class

            //
            
            //

                

            dayCell.classList.add('weekend');
        }


        // Add an event listener for clicking on a day
        dayCell.addEventListener('click', () => {
            // Check if the day is a weekend (Saturday or Sunday)
            if (new Date(year, month, day).getDay() === 0 || new Date(year, month, day).getDay() === 6) {
                // This is a weekend day, do nothing
                return;
            }
        
            // You can add your logic here to handle the click event for a specific date.
            // alert(`Clicked on ${new Date(year, month, day).toLocaleDateString()}`);
        
            //
            show_hidden_box();
            //
        });
    }
}

// Initial calendar generation
generateCalendar(currentYear, currentMonth);

// Event listener for previous month button
prevMonthButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar(currentYear, currentMonth);
});

// Event listener for next month button
nextMonthButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar(currentYear, currentMonth);
});

function show_hidden_box(){
    document.getElementById('my-hidden-box').style.display = 'flex';
    username_input.focus();
}
function hideModal() {
    document.getElementById('my-hidden-box').style.display = 'none';
}

function login_register(){
    

    if(username_input.value != '' && password_input.value != ''){
        
    }
    else if(username_input.value == '' && password_input.value == ''){
        alert('please enter your username and password');
        username_input.focus();
    }

    else if(username_input.value == ''){
        alert('please enter your username');
        username_input.focus();
    }
    else if(password_input.value == ''){
        alert('please enter your password');
        password_input.focus();
    }
}

function detect_enter_key(event){
    if (event.key === "Enter") {
        login_register();
    }
}

