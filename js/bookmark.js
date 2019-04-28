function addBookmark(bookmark) {

    var bookmarks = loadStorage('bookmarks');
    bookmarks.push(bookmark);
    saveStorage('bookmarks', bookmarks);
}

function deleteBookmark(url) {

    var bookmarks = loadStorage('bookmarks');
    bookmarks = bookmarks.filter(function (bookmark) {
        return bookmark.url != url;
    });
    saveStorage('bookmarks', bookmarks);
}

function displayBookmarks() {

    $('#bookmarks-list').html('');

    var bookmarks = loadStorage('bookmarks');
    $.each(bookmarks, function (i, bookmark) {

        var html =
            '<li>' +
            '<button class="delete-bookmark-btn" data-url="' + bookmark.url + '"><i class="fa fa-close"></i></button>' +
            '<a href="' + bookmark.url + '" target="_blank">' + bookmark.title + '</a>' +
            '</li>';
        $('#bookmarks-list').append(html);
    });

    $('.delete-bookmark-btn').click(function () {
        var url = $(this).data('url');
        deleteBookmark(url);
        displayBookmarks();
    });
}

function registerBookmark(title, url) {

    var bookmark = {
        url: url,
        title: title
    };
    addBookmark(bookmark);
    displayBookmarks();
}