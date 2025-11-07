import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransporter({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendPasswordResetEmail(email: string, resetToken: string): Promise<void> {
    const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5173'}/reset-password?token=${resetToken}`;

    const mailOptions = {
      from: `"ÉDEN - Mestre de Si Mesmo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Redefinição de Senha - ÉDEN',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4a7c59; font-size: 28px; margin-bottom: 10px;">🌿 ÉDEN</h1>
            <p style="color: #666; font-size: 16px;">Mestre de Si Mesmo</p>
          </div>

          <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; margin-bottom: 30px;">
            <h2 style="color: #333; margin-bottom: 20px;">Redefinição de Senha</h2>
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Recebemos uma solicitação para redefinir sua senha. Clique no botão abaixo para criar uma nova senha:
            </p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}"
                 style="background: #4a7c59; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
                Redefinir Senha
              </a>
            </div>

            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Este link é válido por 1 hora. Se você não solicitou esta redefinição, ignore este email.
            </p>

            <p style="color: #999; font-size: 14px;">
              Se o botão não funcionar, copie e cole este link no seu navegador:<br>
              <a href="${resetUrl}" style="color: #4a7c59; word-break: break-all;">${resetUrl}</a>
            </p>
          </div>

          <div style="text-align: center; color: #999; font-size: 14px;">
            <p>Atenciosamente,<br>Equipe ÉDEN</p>
          </div>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }

  async sendTestEmail(email: string): Promise<void> {
    const mailOptions = {
      from: `"ÉDEN - Teste" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Teste de Email - ÉDEN',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #4a7c59; font-size: 28px;">🌿 ÉDEN</h1>
            <p style="color: #666;">Sistema de email funcionando!</p>
          </div>

          <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center;">
            <h2 style="color: #333; margin-bottom: 20px;">✅ Email de Teste</h2>
            <p style="color: #666; line-height: 1.6;">
              Este é um email de teste do sistema ÉDEN.<br>
              Se você recebeu este email, a configuração está funcionando corretamente!
            </p>
          </div>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
