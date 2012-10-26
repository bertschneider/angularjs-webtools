files = [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'src/main/webapp/lib/jquery-1.8.0.js',
    'src/test/webapp/app/ui/*.spec.js'
];

autoWatch = true;

browsers = [ 'Firefox' ];

urlRoot = '/__testacular/';

proxies = {
    '/': 'http://localhost:8081/'
};