import React from 'react'

function NotFound() {
  return (
    <section
      class="error-section"
      style="background-image:url(assets/images/background/bg-5.jpg)"
    >
      <div class="auto-container">
        <div class="content">
          <h1>404</h1>
          <h2>Oops! That page can’t be found</h2>
          <div class="text">
            Sorry, but the page you are looking for does not existing
          </div>
          <a href="index.html" class="theme-btn btn-style-one">
            Go to home page
          </a>
        </div>
      </div>
    </section>
  );
}

export default NotFound;

