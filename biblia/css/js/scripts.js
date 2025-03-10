// This file contains JavaScript code for interactive features on the Bible summary webpage.

document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');
    const contents = document.querySelectorAll('.tab-content');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // Remove active class from all links and contents
            links.forEach(link => link.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked link and corresponding content
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});