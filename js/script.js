let currentPage = 1;
let totalPages;

function getUsers(page) {
    function render() {
        let response = this.responseText;
        let responseData = JSON.parse(response);

        var fragment = document.createDocumentFragment();
        
        responseData.data.forEach(item => {
            let li = document.createElement('li');
            li.classList.add('li-users');

            let span = document.createElement('span');
            span.textContent = item.first_name;

            let img = document.createElement('img');
            img.src = item.avatar;
            img.classList.add('image-wraper');

            li.appendChild(img);
            li.appendChild(span);

            fragment.appendChild(li);
        });

        document.getElementById('list').innerHTML = ' ';
        document.getElementById('list').appendChild(fragment);

        totalPages = responseData.total_pages;
        
    }


    let requist = new XMLHttpRequest();
    requist.addEventListener('load',render);
    // requist.addEventListener('error', errorFunction);
    requist.open('GET', 'https://reqres.in/api/users?page=' + page);

    requist.send(); 
}


document.getElementById('previous').addEventListener('click', function() {
    if (currentPage === 1) {
        return;
    }

    currentPage -=1;
    getUsers(currentPage);
});


document.getElementById('next').addEventListener('click', function() {
    if (currentPage === totalPages) {
        return;
    }

    currentPage +=1;
    getUsers(currentPage);
});



getUsers(currentPage);


// .NAVNAR

let navbarLinks = document.getElementById('navbarLinks');
let togglenutton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('active');
})