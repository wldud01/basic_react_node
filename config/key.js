if(process.env.NODE_ENV === 'Production'){
    module.exports = require("./prod");
}else{
    module.exports = require('./dev');
}
//변수가 환경변수입니다 어떤 모드인지 알려줌