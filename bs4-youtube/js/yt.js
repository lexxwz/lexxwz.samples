let yt = {};
window.onload = function(){
    $('#modal').modal('show');
    yt.sub = document.getElementById('sub');
    yt.login = document.getElementById('login');
    yt.password = document.getElementById('password');
    yt.sub.onclick = function(e){
        if(yt.login.value == 'admin' && yt.password.value == 'qwerty'){yt.succes = true; $('#modal').modal('hide'); yt.build(); e.preventDefault()}
    }
    yt.sub.onsubmit = function(e){e.preventDefault()}
    function draw(item){
        yt.page.innerHTML = yt.pageN+' страница из '+Math.ceil(yt.result.pageInfo.totalResults/yt.result.pageInfo.resultsPerPage);
        let verte = document.createElement('div'); //создание карусели
        verte.className = 'carousel-item';
        if(yt.first){verte.className += ' active'; yt.first = false}
        yt.verte.appendChild(verte);
        let imgC = new Image();
        imgC.src = item.snippet.thumbnails.high.url;
        imgC.className = 'd-block w-100';
        verte.appendChild(imgC);
        yt.cInd[1].dataset.slideTo = Math.ceil(yt.list.length/2);
        yt.cInd[2].dataset.slideTo = yt.list.length-1;
        let col = document.createElement('div'); //создание колонок
        col.className = 'col-12 col-md-6 col-lg-4 pb-2';
        yt.out.appendChild(col);
        let card = document.createElement('div'); //создание карточек
        card.className = 'card border-danger';
        col.appendChild(card);
        let cardHeader = document.createElement('div'); //создание хэдэра карты
        cardHeader.className = 'card-header text-center bg-danger';
        card.appendChild(cardHeader);
        let cardBody = document.createElement('div'); //создание тела карты
        cardBody.className = 'card-body text-center';
        let img = new Image(); //рисунок
        img.src = item.snippet.thumbnails.high.url;
        img.className = 'img-fluid';
        card.appendChild(img);
        card.appendChild(cardBody);
        let cardFooter = document.createElement('div'); //создание футера карты
        cardFooter.className = 'card-footer text-center bg-danger';
        card.appendChild(cardFooter);
        let title = document.createElement('h6'); //заголовок
        title.innerHTML = item.snippet.title;
        cardHeader.appendChild(title);
        let description = document.createElement('p'); //описание
        if(item.snippet.description.length >= 200){description.innerHTML = item.snippet.description.slice(0, 200)+'...'}
        else{description.innerHTML = item.snippet.description}
        cardBody.appendChild(description);
        let link = document.createElement('a'); //создание ссылки-кнопки
        link.href = 'https://www.youtube.com/watch?v='+item.id;
        cardFooter.appendChild(link);
        let btn = document.createElement('button');
        btn.className = 'btn col badge-pill btn-outline-dark';
        link.appendChild(btn);
        btn.innerHTML = 'Ссылка';
    }
    yt.div = document.getElementById('control');
    yt.div.style.marginBottom = '20px';
    yt.verte = document.getElementById('verte');
    yt.out = document.getElementById('out');
    yt.page = document.getElementById('page');
    yt.pageN = 1;
    yt.cInd = document.getElementsByClassName('carI');
    yt.btn = document.getElementsByClassName('button');
    yt.btn[0].onclick = function(){if(yt.pageN>1){yt.pageToken = yt.result.prevPageToken; yt.pageN--; yt.build()}}
    yt.btn[1].onclick = function(){if(yt.pageN<Math.ceil(yt.result.pageInfo.totalResults/yt.result.pageInfo.resultsPerPage)){yt.pageToken = yt.result.nextPageToken; yt.pageN++; yt.build()}}
    yt.pageToken = '';
    yt.build = function(){
        if(!yt.succes){return}
        var xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&regionCode=US&maxResults=24&key=AIzaSyA_lpB4JaFX5ycrp4gaGOwOhRgG9qVZsRQ&pageToken="+yt.pageToken);
        xhr.open("GET", "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&chart=mostPopular&videoCategoryId=10&regionCode=UA&maxResults=12&key=AIzaSyA_lpB4JaFX5ycrp4gaGOwOhRgG9qVZsRQ&pageToken="+yt.pageToken);

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    yt.result = JSON.parse(xhr.response);
                    yt.list = yt.result.items;
                    yt.out.innerHTML = '';
                    yt.page.innerHTML = '';
                    yt.verte.innerHTML = '';
                    yt.first = true;
                    for (var i = 0; i < yt.list.length; i++) {
                        draw(yt.list[i]);
                    }
                }
            }
        }
        xhr.send();
    }
}