(function() {
    const inline = document.querySelectorAll('script[type="text/sass"]');
    const linked = document.querySelectorAll('link[type="text/sass"]');
    const total = inline.length + linked.length;
    let loaded = 0;
    const embed = (tag, data) => {
        fetch('https://sass.henderea.com', {
            method: 'POST',
            body: JSON.stringify({ sass: data }),
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors'
        }).then(response => {
            response.text().then(result => {
                var stag = document.createElement('style');
                stag.textContent = result;
                document.head.appendChild(stag);
                loaded++;
                if(typeof sassEmbed == 'function') {
                    sassEmbed(tag, stag, data, result, loaded, total, tag.nodeName.toLowerCase() == 'script');
                }
            });
        });
    }
    inline.forEach(tag => {
        embed(tag, tag.textContent);
    });
    linked.forEach(tag => {
        fetch(tag.href).then(response => {
            response.text().then((data) => {
                embed(tag, data);
            });
        });
    });
})();