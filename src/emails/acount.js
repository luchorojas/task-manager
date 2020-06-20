const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

const sender = 'lucianorojas@plexomedica.com.ar'
const from = 'lucianorojas@plexomedica.com.ar'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWellcomeEmail = (email,name) =>{
    const message = {
        sender,
        to: email,
        from,
        subject: 'Thanks for join us',
        text: `Wellcome to the app, ${name}. Let me know you.`
    }
    
    sgMail.send(message).then(() => {
        console.log('Se envio')
    }).catch(error => {
        console.error(error)
    })
}

const sendGoodbyeEmail = (email,name) =>{
    const message = {
        sender,
        to: email,
        from,
        subject: 'Goodbye',
        text: `Goodbye friend, ${name}. Thanks for all.`
    }
    
    sgMail.send(message).then(() => {
        console.log('Se envio')
    }).catch(error => {
        console.error(error)
    })
}

module.exports = {
    sendWellcomeEmail,
    sendGoodbyeEmail
}