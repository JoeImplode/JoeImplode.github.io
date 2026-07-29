const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('glide-in');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

const contactLink = document.getElementById('contactCopy');
const toast = document.getElementById('toast');

contactLink.addEventListener('click', () => {
    const email = "joe_pickering5@hotmail.com"; // 

    navigator.clipboard.writeText(email).then(() => {
        toast.style.opacity = "1";

        setTimeout(() => {
            toast.style.opacity = "0";
        }, 2000);
    });
});

const entries = document.querySelectorAll('.timeline-entry');

const observer2 = new IntersectionObserver((items) => {
    items.forEach(item => {
        if (item.isIntersecting) {
            item.target.classList.remove('opacity-0', 'translate-y-10');
        }
    });
}, { threshold: 0.2 });

entries.forEach(entry => observer2.observe(entry));