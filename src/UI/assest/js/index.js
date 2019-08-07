const bookSlip = document.querySelector('.book_slip');
bookSlip.style.display = 'none';

document.querySelector('.btn_col').addEventListener('click', function() {
    document.querySelector('.book_slip').style.display = 'block'; 
    const bookSlip = document.querySelector('.booking');
    bookSlip.style.display = 'none';
});