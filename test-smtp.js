const nodemailer = require('nodemailer');

async function testSMTP() {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'u3170996315@gmail.com',
      pass: 'ffkqsezyitqraewo'
    }
  });

  try {
    await transporter.verify();
    console.log('✅ SMTP-Verbindung erfolgreich!');
    
    const info = await transporter.sendMail({
      from: '"Test" <u3170996315@gmail.com>',
      to: 'office@ghwbstudio.de',
      subject: 'SMTP Test',
      text: 'Test-E-Mail von der lokalen Entwicklung'
    });
    
    console.log('✅ Test-E-Mail gesendet:', info.messageId);
  } catch (error) {
    console.error('❌ SMTP-Fehler:', error.message);
  }
}

testSMTP();
