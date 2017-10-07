module.exports = {
    web : {
        host : '0.0.0.0',
        port : '3060'
    },
    mongodb : {
        host : 'localhost',
        port : '12345',
        schema : 'smart-parking'
    },
    defaultRadius : 500,
    mapApiKey : 'AIzaSyCme-ZR0r2QPSqgGjZa09wtux_qwET3gqo',
    appApiKey: 'AAAAuWd2pno:APA91bHdugS-k7ev4AhlfYlqD6dqfQVS93JTLacNpVm6nweqAmjxO7FeRBRLcN_XmsfWmKi3VHxBoqRab2XukKWRdeI5y9zNtazYsaxuH5TRWCoQo3Rv8Q9WZcFaOBJGk062ofYMqGmu',
    admin: [
        {
            email: 'admin@gm.com',
            password: 'p@ssw0rd'
        },
        {
            email: 'admin2@gm.com',
            password: 'p@ssw0rd'
        }
    ],
    pagination: {
        comments: 9,
        filesList: 10
    },
    waitConnectionTimeout: 1,
    mail: {
        templatesDir: "templates",
        templates: {            
            accountVerification: "accountVerification",
            forgotPassword: "forgotPassword"
        },
        mailTransport: 'smtps://collaborate%40globaledgesoft.com:p@ssw0rd@mail.globaledgesoft.com',
        fromAddress: 'Parking Spot Identifier <collaborate@globaledgesoft.com >'
    },
    accountVerification : {
        required: true,
        method: 'email',
        codeRange : [10000, 99999]
    },
    ui: {
        theme: 'skin-blue'
    },
    mainAppSettings: {
        parkedLocInterval: 5 * 60, //5 minutes
        vehicleMovingInterval: 5 * 60, //5 minutes
        locProvider: 'BOTH'
    }
    // mobileLogPath: './log/'
}

