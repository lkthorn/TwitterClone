$(document).ready(()=> {
    $.get("/api/postsApi", results => {
        outputPosts(results, $(".postsContainer"))
})
})

function outputPosts(results, container) {
    container.html("");

    results.forEach(result => {
        var html = createPostHtml(result)
        container.append(html);
    });

    if (results.lenght == 0) {
        container.append("<span class='noResults'>Nothing to show yet.</span>")
    }
}
