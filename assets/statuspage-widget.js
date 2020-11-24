const scriptElement = document.getElementById('statuspage-widget');
const statusPageUrl = scriptElement.getAttribute('statuspage');

// API request
const apiRequest = new XMLHttpRequest();
apiRequest.responseType = 'json';
apiRequest.open('GET', `${statusPageUrl}/api/v2/summary.json`);
apiRequest.onload = function () {
  if (apiRequest.status === 200) {
    const response = apiRequest.response;
    // Request successful
      const statusbar =
        `<div class="container" id="statuspage">
          <div class="status-banner status-banner-${response.status.indicator}">
            <div class="status-message">
                <strong>Status Update</strong>
              <div>${response.status.description}. <a href="${response.page.url}?utm_source=zendesk&utm_medium=integrations&utm_campaign=guide" target="_blank">View Statuspage</a></div>
            </div>
          </div>
        </div>`;
      scriptElement.insertAdjacentHTML('afterend', statusbar);
    }
}
apiRequest.send();
