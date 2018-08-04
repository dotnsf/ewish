exports.db_username = '';
exports.db_password = '';
exports.db_name = 'ewish';
exports.app_port = 0;
exports.search_analyzer = 'japanese';
exports.superSecret = 'ThisIsMyWish';
exports.hashchain_api_url = '';
exports.twitter_consumer_key = '';
exports.twitter_consumer_secret = '';
exports.ogp = {
  title: 'eWish',
  url: 'http://localhost:3000',
  image_url: '',
  desc: 'This is my wish.'
};

if( process.env.VCAP_SERVICES ){
  var VCAP_SERVICES = JSON.parse( process.env.VCAP_SERVICES );
  if( VCAP_SERVICES && VCAP_SERVICES.cloudantNoSQLDB ){
    exports.db_username = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.username;
    exports.db_password = VCAP_SERVICES.cloudantNoSQLDB[0].credentials.password;
  }
}
