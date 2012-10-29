basePath = '';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'src/main/webapp/lib/jquery-1.8.0.js',
    'src/main/webapp/lib/angular-1.0.2.js',
    'src/test/webapp/lib/angular-mocks-1.0.2.js',
    'src/main/webapp/lib/core.js',
    'src/main/webapp/lib/md5.js',
    'src/main/webapp/lib/sha1.js',
    'src/main/webapp/app/*.js',
    'src/test/webapp/app/unit/*.spec.js'
];

exclude = [];

reporter = 'dots';

port = 9876;

runnerPort = 9100;

colors = true;

logLevel = LOG_INFO;

autoWatch = true;

browsers = [ 'Firefox' ];

singleRun = false;