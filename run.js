var casper = require('casper').create({
  verbose: true,
  logLevel: 'INFO',
  pageSettings: {
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36'
  }
});
var moment = require('moment');

casper.start('https://docs.google.com/forms/d/e/1FAIpQLSdW8U5fVLVwz_yapNq38NKGtImfZ4kpCfTBluTUN08SBioqPQ/viewform');

casper.then(function() {
  this.sendKeys('.quantumWizTextinputPaperinputInput[type=date]', moment().format('YYYY-MM-DD'))
});

casper.then(function() {
  this.clickLabel('Backend/Web','span'); // Your department
});

casper.then(function () {
  this.sendKeys('.quantumWizTextinputPaperinputInput[aria-label="Your Last Name"]', 'Kovalenko'); // Your Last Name
});

casper.then(function () {
  this.clickLabel('Worked on project(s)','span')
});

casper.then(function () {
  this.sendKeys('.quantumWizTextinputPaperinputInput[aria-label="NAME OF MAIN PROJECT"]', 'Ernit'); // Your project
});

casper.then(function () {
  this.clickLabel('8','span')
});

casper.then(function () {
  this.click('.quantumWizButtonPaperbuttonLabel')
});

casper.wait(1500);

casper.then(function () {
  this.clickLabel('Надіслати', 'span')
});

casper.wait(1500);

casper.then(function() {
  this.capture('proof' + moment() + '.png', {
        top: 0,
        left: 0,
        width: 500,
        height: 1500
    });
});  // Your proof.

casper.run();
