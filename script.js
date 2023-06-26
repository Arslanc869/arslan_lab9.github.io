// Function to fetch the API response
async function fetchData() {
  try {
    const response = await fetch(
      "https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=7&apikey=a5608f33bc9726c9d88071bb65a6c44e"
    );
    const data = await response.json();

    const elements = document.querySelectorAll(".w3-quarter");

    for (let i = 0; i < 1; i++) {
      const element = elements[i];
      const heading = element.querySelector("h3");
      const image = element.querySelector("img");
      const description = element.querySelector("p");

      const article = data.articles[i];
      const articleTitle = article.title;
      const articleImage = article.image;
      const articleDescription = article.description;

      heading.textContent = articleTitle;
      image.src = articleImage;
      description.textContent = articleDescription;
    }
  } catch (error) {
    console.log("Error fetching API data:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchData);
