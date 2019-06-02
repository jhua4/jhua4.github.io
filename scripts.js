setEmailTooltip();
router();

function router() {
  const url = window.location.href;
  const route = url.indexOf('#') > -1 ? url.substring(url.indexOf('#'), url.length) : null;

  if (route === '#Experience') {
    navExperience();
  } else if (route === '#About') {
    navAbout();
  } else {
    navHome();
  }
}

function navHome() {
  document.getElementById('main-content').innerHTML = `
    <div class="banner">
      <h5>Nothing to see here! Yet...</h5>
    </div>
  `;
}

function navExperience() {
  document.getElementById('main-content').innerHTML = `
    <div class="timeline-content">
      <div class="timeline color1">
        <div class="item left">
          <div class="content">
            <b>September 2016 - May 2018</b><br>
            Software Engineer, Alpha Connect<br><br>
            Build internal applications for various departments.
            <ul>
              <li>Languages: C#, VB.NET, PHP, HTML, CSS, JavaScript</li>
              <li>Frameworks: ASP.NET, .NET Framework, Laravel, WinForms</li>
              <li>Databases: SQL Server, MySQL</li>
              <li>OS / Cloud: Windows, Ubuntu, AWS, Azure</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="timeline color2">
        <div class="item right">
          <div class="content">
            <b>May 2018</b><br>
            Graduated ASU, B.S. Computer Science
          </div>
        </div>
      </div>
      <div class="timeline color3">
        <div class="item right">
          <div class="content">
            <b>May 2018 - October 2018</b><br>
            Software Developer, Global Payments<br><br>
            Modernize web and desktop client.
            <ul>
              <li>Languages: C#, HTML, CSS, JavaScript</li>
              <li>Libraries: jQuery</li>
              <li>Frameworks: ASP.NET</li>
              <li>Databases: SQL Server</li>
              <li>OS / Cloud: Windows</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="timeline color4">
        <div class="item left">
          <div class="content">
            <b>October 2018 - Present</b><br>
            UI Developer IV, American Airlines<br><br>
            Build full stack application for aircraft maintenance to assist in materials migration.
            <ul>
              <li>Languages: C#, TypeScript, JavaScript, HTML, Less</li>
              <li>Libraries: Kendo UI for Angular, nrwl/nx</li>
              <li>Frameworks: .NET Core, Web API, Angular 6, EF Core, xUnit, Jasmine, Protractor</li>
              <li>Databases: SQL Server, Oracle</li>
              <li>OS / Cloud: Windows, RHEL, PCF, Azure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
}

function navAbout() {
  document.getElementById('main-content').innerHTML = `
    <div class="banner">
      <p>Currently employed full time, looking for additional part time work.</p>
    </div>
  `;
}

/** When user clicks on email, copy email address and change tooltip text */
function onEmailClicked() {
  const text = document.getElementById('email').innerText;
  $('#email').tooltip('dispose').tooltip({ title: 'Copied!' }).tooltip('show');
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text);
}

function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function setEmailTooltip() {
  $('#email').tooltip('dispose').tooltip({ title: 'Best contact method' });
}