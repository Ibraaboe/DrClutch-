document.getElementById('nextButton').addEventListener('click', function() {
    document.querySelector('.step-1').classList.remove('active');
    document.querySelector('.step-2').classList.add('active');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        age: document.getElementById('age').value,
        carBrand: document.getElementById('carBrand').value,
        carModel: document.getElementById('carModel').value,
        year: document.getElementById('year').value
    };

    console.log('Submitting form data:', formData); // Log form data for debugging

    fetch('https://script.google.com/macros/s/AKfycbyejeVipJscEgFnbHNT--hmwl2yysnmsOT5ELM0KID4am5jb3BKH_yqoPjQzFiZF1Ua/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(result => {
        console.log('Response:', result);
        if (result === 'Success') {
            document.getElementById('contactForm').classList.add('hidden');
            document.getElementById('thankYouMessage').classList.remove('hidden');
        } else {
            console.error('Unexpected response:', result);
        }
    })
    .catch(error => console.error('Error:', error));
});

