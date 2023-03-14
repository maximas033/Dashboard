function GetNews() {
  let letApi = "d145f497889e4b729d11b61c744f1561";
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d145f497889e4b729d11b61c744f1561`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      //display the news Data inside newsHeader
      var NewsHeader = document.getElementById("newsHeader");
      // display top 1st news header inside NewsHeader
      NewsHeader.innerHTML = json.articles.slice(0, 1).map(function (news) {
        return news.title;
      });

      // put the description inside currentNews
      var currentNews = document.getElementById("currentNews");
      currentNews.innerHTML = json.articles.slice(1, 3).map(function (news) {
        return news.description;
      });

      //put the url inside currentNewsLink a href tag
      var currentNewsLink = document.getElementById("currentNewsLink");
      currentNewsLink.innerHTML = json.articles
        .slice(1, 3)
        .map(function (news) {
          return (
            '<a href="' + news.url + '" target="_blank">' + news.title + "</a>"
          );
        })
        .join("");
    });
}

window.onload = GetNews();
// reload every 5 minutes
setInterval(GetNews, 300000);
