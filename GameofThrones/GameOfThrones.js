$('div img').click(function (e) {
    let house_id = $(this).attr('id');
    $('.replace').remove();

    $.get("https://anapioficeandfire.com/api/houses/"+ house_id,
        function (res) {
            $('.house-name').append("<span class='replace'>" + res.name + "</span>");
            $('.house-words').append("<span class='replace'>" + res.words + "</span>");

            for(let i = 0; i < res.titles.length; i++) {
                // the if statment removes the problem of a trailing comma in the JSON array
                if(i == res.titles.length -1) {
                    $('.house-titles').append("<span class='replace'>" + res.titles[i] + "</span>");
                } else {
                    $('.house-titles').append("<span class='replace'>" + res.titles[i] +', ' + "</span>");
                }
            }
        }, "json"
    );
    return false;
} );
