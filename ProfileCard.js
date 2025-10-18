document.addEventListener('DOMContentLoaded', () => {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');

    function updateTime() {
        if (timeElement) {
            const currentTimeInMillis = Date.now();
            timeElement.textContent = `Current Time (ms): ${currentTimeInMillis}`;
        }
    }
    updateTime();
    setInterval(updateTime, 100);

    const avatarUploadInput = document.getElementById('avatar-upload');
    const profileImage = document.querySelector('[data-testid="test-user-avatar"]');

    if (avatarUploadInput && profileImage) {
        avatarUploadInput.addEventListener('change', (event) => {
            const file = event.target.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    profileImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const avatarUrlInput = document.getElementById('avatar-url-input');
    const avatarUrlBtn = document.getElementById('avatar-url-btn');

    if (avatarUrlInput && avatarUrlBtn && profileImage) {
        avatarUrlBtn.addEventListener('click', () => {
            const imageUrl = avatarUrlInput.value.trim();
            if (imageUrl) {
                profileImage.src = imageUrl;
            }
        });
    }
});