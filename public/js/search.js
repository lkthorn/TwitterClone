var timer;

$("#searchBox").keydown((event) => {
    clearTimeout(timer);
    var textbox = $(event.target);
    var value = textbox.value();
    var searchType = textbox.data().search;

    console.log(value);
    console.log(searchType);
})