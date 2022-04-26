const nodeMailer = require('nodemailer')

const send = async (data) => {
    const transporter = nodeMailer.createTransport({
        service: 'naver',
        host: 'smtp.naver.com',
        port: 587,
        auth: {
            user: `${process.env.SENDER}`,
            pass: `${process.env.PASSWORD}`
        }
    })

    const option = {
        from: `"devmemory" <${process.env.SENDER}>`,
        to: data.email,
        subject: data.title,
        text: data.message
    }

    const info = await transporter.sendMail(option)

    return info
}

const validation = (data) => {
    return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data.email)) && data.title != undefined && data.message != undefined
}

module.exports = {
    send,
    validation
}