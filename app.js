<head>

  <title>Dashboard by Thura</title>

  <style>
      body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          color: #333;
          margin: 0;
          padding: 0;
          line-height: 1.6;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
      }

      /* Banner styling */
      .banner {
          background-color: #007bff;
          color: #fff;
          text-align: center;
          padding: 15px 0;
          font-size: 24px;
          font-weight: bold;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }

      h1 {
          text-align: center;
          margin-top: 20px;
          color: #444;
      }

      p {
          text-align: center;
          font-size: 18px;
          margin: 20px auto;
          max-width: 800px;
      }

      iframe {
          display: block;
          margin: 20px auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 800px; /* Set width in pixels */
          height: 600px; /* Set height in pixels */
      }

      /* Footer styling */
      .footer {
          background-color: #007bff;
          color: #fff;
          text-align: center;
          padding: 10px 0;
          margin-top: auto;
      }

      .footer a {
          color: #fff;
          text-decoration: none;
          margin-right: 10px;
      }

      .footer a:hover {
          text-decoration: underline;
      }

  </style>

</head>

<body>

  <!-- Top Banner -->
  <div class="banner">Dashboard by Thura</div>

  <h1>COVID 19 Dashboard</h1>

  <p>This dashboard provides insights from COVID-19 data from eight countries: Thailand, Mexico, Japan, Germany, Egypt, Brazil, highlighting the number of confirmed cases, recovered cases, deaths from 22 January 2020 to 16 April 2022. Combination of timeseries chart and score card can ensure better visibility of the trends with number.</p>

  <!-- Embed Looker Studio iframe -->
 <iframe width="800" height="600" src="https://lookerstudio.google.com/embed/reporting/6d890109-00c6-4138-846b-0bdf4232b020/page/HrD4D" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>

  <!-- Footer Banner -->
<div class="footer">
    <a href="mailto:data@thura.info">Contact Me</a>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <span>Copyright © Thura</span>
    <span>&nbsp;&nbsp;&nbsp;</span>
    <a href="https://www.datascienceportfol.io/aungthurahtoo" target="_blank">Thura Portfolio</a>
</div>

  <script src="./app.js"></script>

</body>
