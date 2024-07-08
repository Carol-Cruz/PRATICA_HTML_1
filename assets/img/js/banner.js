


function carregarBannerPrivacidade() {


    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'banner.html', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                document.getElementById('bannerPrivacidade').innerHTML = xhr.responseText;
                
                if (!localStorage.getItem('privacyAccepted')) {
                    document.getElementById('privacyBanner').style.display = 'block';
                }

                document.getElementById('acceptPrivacy').addEventListener('click', function() {
                    document.getElementById('privacyBanner').style.display = 'none';
                    
                    localStorage.setItem('privacyAccepted', true);
                });
            } else {
                console.error('Erro ao carregar o banner de privacidade.');
            }
        }
    };

    xhr.send();
}

carregarBannerPrivacidade();