const tasksUrl = `http://localhost:3030/jsonstore/tasks`;

const courseListElement = document.getElementById('list');

const loadButtonElement = document.getElementById('load-vacations');
const addSubmitButtonElement = document.getElementById('add-vacation');
const editSubmitButtonElement = document.getElementById('edit-vacation');

const courseNameElement = document.getElementById("name");
const courseDateElement = document.getElementById("from-date");
const courseDaysElement = document.getElementById("num-days");

loadButtonElement.addEventListener('click', loadVacations);
addSubmitButtonElement.addEventListener('click', addCourse);
editSubmitButtonElement.addEventListener('click', editVacation);

let currentCourseId = '';

async function editVacation(e) {
    e.preventDefault();
    
    const name = courseNameElement.value;
    const date = courseDateElement.value;
    const days = courseDaysElement.value;
    
    const course = {
        name,
        date,
        days,
    };

    await fetch(`${tasksUrl}/${currentCourseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
    });

    clearForm();
    
    addSubmitButtonElement.disabled = false;
    editSubmitButtonElement.disabled = true;

    await loadVacations();
} 

async function addCourse(e) {
    e.preventDefault();

    const name = courseNameElement.value;
    const date = courseDateElement.value;
    const days = courseDaysElement.value;

    const course = {
        name,
        date,
        days,
    };

    await fetch(tasksUrl, {
        method: 'POST',
        body: JSON.stringify(course),
    });

    clearForm();

    await loadVacations();
}

async function loadVacations() {
    const response = await fetch(tasksUrl);
    const data = await response.json();

    courseListElement.innerHTML = '';

    const courses = Object.keys(data).map(key => ({_id: key, ...data[key]})); // optional

    for (const course of courses) {
        const courseElement = createVacation(course);
        courseElement.setAttribute('data-course-id', course._id);
        
        courseListElement.appendChild(courseElement);
    }
}

function createVacation(course) {
    const name = document.createElement('h2');
    name.textContent = course.name;

    const days = document.createElement('h3');
    days.textContent = course.days;

    const date = document.createElement('h4');
    date.textContent = course.date;

    const changeButtonElement = document.createElement('button');
    changeButtonElement.className = 'change-btn';
    changeButtonElement.textContent = 'Change';

    const doneButtonElement = document.createElement('button');
    doneButtonElement.className = 'done-btn';
    doneButtonElement.textContent = 'Done';

    const courseContainer = document.createElement('div');
    courseContainer.className = 'container';

    courseContainer.appendChild(name);
    courseContainer.appendChild(days);
    courseContainer.appendChild(date);
    courseContainer.appendChild(changeButtonElement);
    courseContainer.appendChild(doneButtonElement);

    changeButtonElement.addEventListener('click', (e) => {
        courseNameElement.value = course.name;
        courseDateElement.value = course.date;
        courseDaysElement.value = course.days;

        currentCourseId = courseContainer.getAttribute('data-course-id');
        courseContainer.remove();

        addSubmitButtonElement.disabled = true;
        editSubmitButtonElement.disabled = false;
    });

    doneButtonElement.addEventListener('click', async (e) => {
        await fetch(`${tasksUrl}/${course._id}`, {
            method: 'DELETE',
        });

        await loadVacations();
    });

    return courseContainer;
}

function clearForm() {
    courseNameElement.value = '';
    courseDateElement.value = '';
    courseDaysElement.value = '';
}