setEmailTooltip();
router();

function router() {
  const url = window.location.href;
  const route = url.indexOf('#') > -1 ? url.substring(url.indexOf('#'), url.length) : null;

  if (route === '#Experience') {
    navExperience();
  } else {
    navHome();
  }
}

function navHome() {
  document.getElementById('main-content').innerHTML = `
    <div class="banner">
      <h2 class="banner">Full Stack Web Developer</h2>
      <p>Hi, I'm Joshua Hua. If you're looking for examples of my work, you can check out my latest project at <a href="https://github.com/jhua4/needyd" target="_blank">https://github.com/jhua4/needyd</a></p>
    </div>
    <img src="server.png" alt="Code" class="image-center">
  `;
}

function navExperience() {
  document.getElementById('main-content').innerHTML = `
    <div class="timeline-content">
      <div class="timeline color1">
        <div class="item left">
          <div class="content">
            <b class="color1">September 2016 - May 2018</b><br>
            Software Engineer, Alpha Connect<br><br>
            Added new features to .NET desktop application, and built new applications.<br>
            Installed and integrated SQL server for storage.<br>
            Mentored a junior developer.
            <ul>
              <li>Languages: C#, VB.NET</li>
              <li>Frameworks: .NET Framework, WinForms</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="timeline color1">
        <div class="item right">
          <div class="content">
            <b>May 2018</b><br>
            Graduated ASU, B.S. Computer Science
          </div>
        </div>
      </div>
      <div class="timeline color1">
        <div class="item right">
          <div class="content">
            <b>May 2018 - October 2018</b><br>
            Software Developer, Global Payments<br><br>
            Added new features and debugged issues in ASP.NET web application.
            <ul>
              <li>Languages: C#, HTML, CSS, JavaScript</li>
              <li>Libraries: jQuery</li>
              <li>Frameworks: ASP.NET</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="timeline color1">
        <div class="item left">
          <div class="content">
            <b>October 2018 - Present</b><br>
            Senior Software Developer, American Airlines<br><br>
            Built two full stack applications from the ground up including UI, API and data processing job.<br>
            Integrated with other backend services and SQL/Oracle databases.<br>
            Setup CI/CD pipeline.	
            <ul>
              <li>Languages: C#, TypeScript, JavaScript, HTML, Less, GraphQL</li>
              <li>Libraries: Kendo UI for Angular, nrwl/nx</li>
              <li>Frameworks: .NET Core, Angular 7, EF Core, Node.js, xUnit, Jasmine, Protractor</li>
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