const login_template = (name, time, date) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" lang="en">
    <head>
      <link rel="preload" as="image" href="https://react-email-demo-hbzssj3q3-resend.vercel.app/static/koala-logo.png" />
      <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
      <meta name="x-apple-disable-message-reformatting" />
    </head>
    <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">
      You've successfully logged in.
    </div>

    <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif">
      <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
        <tbody>
          <tr style="width:100%">
            <td>
              <img alt="App Logo" height="50" src="https://react-email-demo-hbzssj3q3-resend.vercel.app/static/koala-logo.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="170" />
              <p style="font-size:16px;line-height:26px;margin:16px 0">Hi ${name},</p>
              <p style="font-size:16px;line-height:26px;margin:16px 0">You have successfully logged into your account at ${time} on ${date}.</p>
              <p style="font-size:16px;line-height:26px;margin:16px 0">If this wasn't you, please contact our support team immediately.</p>
              <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center">
                <tbody>
                  <tr>
                    <td>
                      <a href="https://yourwebsite.com/support" style="line-height:100%;text-decoration:none;display:block;max-width:100%;mso-padding-alt:0px;background-color:#5F51E8;border-radius:3px;color:#fff;font-size:16px;text-align:center;padding:12px 12px 12px 12px" target="_blank">
                        <span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Contact Support</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style="font-size:16px;line-height:26px;margin:16px 0">Best regards,<br />The Koala Team</p>
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
              <p style="font-size:12px;line-height:24px;margin:16px 0 0 0;color:#8898aa">167-169 Great Portland Street 5th Floor, London, W1W 5PF London (West End) Office</p>
              <p style="font-size:12px;line-height:24px;margin:0;color:#8898aa">London (West End) Office</p>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>`;
}

module.exports = login_template;
