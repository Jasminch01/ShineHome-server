const express = require("express");
const cors = require("cors");
// const nodeoutlook = require("nodejs-nodemailer-outlook");
const nodemailer = require("nodemailer");

const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const app = express();

const port = process.env.PORT || 5001;
// middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.ozshinecleaners.com.au",
      "https://ozshine-cleaners.vercel.app/",
      "https://www.ozshinecleaners.com.",
    ],
    credentials: true,
  })
);
app.use(express.json());

// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.yh8qk3b.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

//db collections
// const quoteInfoCollection = client
//   .db("ShineHome")
//   .collection("quoteInfoCollection");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    //post client qoute into database

    app.post("/quoteInfo", async (req, res) => {
      const quoteInfo = req.body;

      // const result = await quoteInfoCollection.insertOne(quoteInfo);
      //nodemail mail transporter
      const transporter = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });

      //send email to client
      const emailTemplate1 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 20px 0;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #0F5E46 0%, #0a4232 100%); padding: 40px; text-align: center;">
              <a href="https://www.ozshinecleaners.com.au" target="_blank" rel="noopener" style="text-decoration: none; outline: none; display: inline-block;">
                <img src="cid:logo.png" alt="OzShine Cleaners Logo" style="height: 50px; width: auto; display: block;" height="50">
              </a>
              <h1 style="margin: 20px 0 0 0; color: #ffffff; font-size: 28px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                Thank You for Your Request!
              </h1>
            </td>
          </tr>

          <!-- Success Badge -->
          <tr>
            <td style="padding: 0; text-align: center; transform: translateY(-20px);">
              <div style="display: inline-block; background-color: #ffffff; border-radius: 50%; padding: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <span style="font-size: 40px;">✓</span>
              </div>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 0 40px 40px 40px;">
              
              <!-- Greeting -->
              <p style="margin: 0 0 25px 0; color: #2c3e50; font-size: 18px; font-family: 'Segoe UI', Arial, sans-serif;">
                Hi <strong style="color: #0F5E46;">${quoteInfo.name}</strong>,
              </p>

              <!-- Main Message -->
              <p style="margin: 0 0 25px 0; color: #495057; font-size: 16px; line-height: 1.6; font-family: 'Segoe UI', Arial, sans-serif;">
                Thank you for reaching out to us! We have received your request for <strong style="color: #0F5E46;">${
                  quoteInfo.service
                }</strong>, and we're excited to help make your space spotless.
              </p>

              <!-- Info Box -->
              <div style="background: linear-gradient(135deg, #e8f5f1 0%, #d4ede5 100%); padding: 25px; border-radius: 8px; border-left: 4px solid #0F5E46; margin: 30px 0;">
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding-bottom: 15px;">
                      <h3 style="margin: 0 0 15px 0; color: #0F5E46; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                        What Happens Next?
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 40px; vertical-align: top; padding-top: 5px;">
                            <span style="display: inline-block; background-color: #0F5E46; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 600; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">1</span>
                          </td>
                          <td style="padding-bottom: 12px;">
                            <p style="margin: 0; color: #2c3e50; font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif;">
                              Our team will review your request carefully
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 40px; vertical-align: top; padding-top: 5px;">
                            <span style="display: inline-block; background-color: #0F5E46; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 600; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">2</span>
                          </td>
                          <td style="padding-bottom: 12px;">
                            <p style="margin: 0; color: #2c3e50; font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif;">
                              We'll contact you within <strong>24 hours</strong> with a personalized quote
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 40px; vertical-align: top; padding-top: 5px;">
                            <span style="display: inline-block; background-color: #0F5E46; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-weight: 600; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">3</span>
                          </td>
                          <td>
                            <p style="margin: 0; color: #2c3e50; font-size: 15px; font-family: 'Segoe UI', Arial, sans-serif;">
                              Schedule your service at a time that works best for you
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Request Summary -->
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 30px 0;">
                <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                  📋 Your Request Summary
                </h3>
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif; width: 40%;">
                      Service Type:
                    </td>
                    <td style="padding: 8px 0; color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                      ${quoteInfo.service}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">
                      Contact Email:
                    </td>
                    <td style="padding: 8px 0; color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                      ${quoteInfo.email}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #6c757d; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">
                      Phone Number:
                    </td>
                    <td style="padding: 8px 0; color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                      ${quoteInfo.phone || "Not provided"}
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Call to Action -->
              <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 30px 0;">
                <p style="margin: 0 0 10px 0; color: #856404; font-size: 15px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                  ⏰ Need urgent service?
                </p>
                <p style="margin: 0; color: #856404; font-size: 14px; line-height: 1.5; font-family: 'Segoe UI', Arial, sans-serif;">
                  Call us directly at <strong><a href="tel:+61452676982" style="color: #0F5E46; text-decoration: none;">+61 452 676 982</a></strong> for immediate assistance.
                </p>
              </div>

              <!-- Why Choose Us -->
              <div style="margin: 30px 0;">
                <h3 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; text-align: center;">
                  Why Choose OzShine Cleaners?
                </h3>
                <table role="presentation" style="width: 100%;">
                  <tr>
                    <td style="width: 33.33%; text-align: center; padding: 15px 10px;">
                      <div style="font-size: 32px; margin-bottom: 10px;">🌿</div>
                      <div style="color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 5px;">
                        Eco-Friendly
                      </div>
                      <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif;">
                        Non-toxic products
                      </div>
                    </td>
                    <td style="width: 33.33%; text-align: center; padding: 15px 10px; border-left: 1px solid #e9ecef; border-right: 1px solid #e9ecef;">
                      <div style="font-size: 32px; margin-bottom: 10px;">⭐</div>
                      <div style="color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 5px;">
                        Professional
                      </div>
                      <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif;">
                        Trained experts
                      </div>
                    </td>
                    <td style="width: 33.33%; text-align: center; padding: 15px 10px;">
                      <div style="font-size: 32px; margin-bottom: 10px;">💯</div>
                      <div style="color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 5px;">
                        Guaranteed
                      </div>
                      <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif;">
                        100% satisfaction
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Closing -->
              <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #e9ecef;">
                <p style="margin: 0 0 10px 0; color: #495057; font-size: 16px; font-family: 'Segoe UI', Arial, sans-serif;">
                  Best regards,
                </p>
                <p style="margin: 0; color: #2c3e50; font-size: 16px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                  The <a href="https://www.ozshinecleaners.com.au" style="color: #0F5E46; text-decoration: none; font-weight: 600;">OzShine Cleaners</a> Team
                </p>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px 40px; text-align: center; border-top: 1px solid #e9ecef;">
              <!-- Social Links / Contact Info -->
              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 10px 0; color: #2c3e50; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                  Get in Touch
                </p>
                <p style="margin: 0; color: #6c757d; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">
                  📞 <a href="tel:+61452676982" style="color: #0F5E46; text-decoration: none;">+61 452 676 982</a>
                  <span style="color: #dee2e6; margin: 0 8px;">|</span>
                  🌐 <a href="https://www.ozshinecleaners.com.au" style="color: #0F5E46; text-decoration: none;">www.ozshinecleaners.com.au</a>
                </p>
              </div>
              
              <!-- Legal -->
              <p style="margin: 0 0 10px 0; color: #6c757d; font-size: 13px; line-height: 1.5; font-family: 'Segoe UI', Arial, sans-serif;">
                This email was sent because you requested a quote from OzShine Cleaners.
              </p>
              <p style="margin: 0; color: #adb5bd; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif;">
                © ${new Date().getFullYear()} OzShine Cleaners. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</htm
`;
      const emailTemplate2 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 20px 0;">
        <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0F5E46 0%, #0a4232 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                New Quote Request Received
              </h1>
              <p style="margin: 10px 0 0 0; color: #e0f2e9; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">
                A potential customer is interested in your services
              </p>
            </td>
          </tr>

          <!-- Alert Banner -->
          <tr>
            <td style="background-color: #fff3cd; padding: 15px 40px; border-left: 4px solid #ffc107;">
              <p style="margin: 0; color: #856404; font-size: 14px; font-family: 'Segoe UI', Arial, sans-serif;">
                ⏰ <strong>Action Required:</strong> Please respond to this inquiry within 24 hours for best results.
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              
              <!-- Customer Information Section -->
              <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; border-bottom: 2px solid #0F5E46; padding-bottom: 10px;">
                  Customer Information
                </h2>
                
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 30px; vertical-align: top;">
                            <span style="color: #0F5E46; font-size: 18px;">👤</span>
                          </td>
                          <td>
                            <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 4px;">
                              FULL NAME
                            </div>
                            <div style="color: #2c3e50; font-size: 16px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                              ${quoteInfo.name}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 30px; vertical-align: top;">
                            <span style="color: #0F5E46; font-size: 18px;">✉️</span>
                          </td>
                          <td>
                            <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 4px;">
                              EMAIL ADDRESS
                            </div>
                            <div style="color: #2c3e50; font-size: 16px; font-weight: 500; font-family: 'Segoe UI', Arial, sans-serif;">
                              <a href="mailto:${
                                quoteInfo.email
                              }" style="color: #0F5E46; text-decoration: none;">
                                ${quoteInfo.email}
                              </a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 30px; vertical-align: top;">
                            <span style="color: #0F5E46; font-size: 18px;">📞</span>
                          </td>
                          <td>
                            <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 4px;">
                              PHONE NUMBER
                            </div>
                            <div style="color: #2c3e50; font-size: 16px; font-weight: 500; font-family: 'Segoe UI', Arial, sans-serif;">
                              <a href="tel:${
                                quoteInfo.phone
                              }" style="color: #0F5E46; text-decoration: none;">
                                ${quoteInfo.phone || "Not provided"}
                              </a>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <tr>
                    <td style="padding: 12px 0;">
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="width: 30px; vertical-align: top;">
                            <span style="color: #0F5E46; font-size: 18px;">🧹</span>
                          </td>
                          <td>
                            <div style="color: #6c757d; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif; margin-bottom: 4px;">
                              SERVICE REQUESTED
                            </div>
                            <div style="color: #ffffff; background-color: #0F5E46; display: inline-block; padding: 6px 12px; border-radius: 20px; font-size: 14px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif;">
                              ${quoteInfo.service}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- Message Section -->
              <div style="margin-bottom: 30px;">
                <h2 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 18px; font-weight: 600; font-family: 'Segoe UI', Arial, sans-serif; border-bottom: 2px solid #0F5E46; padding-bottom: 10px;">
                  Customer Message
                </h2>
                <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 4px solid #0F5E46;">
                  <p style="margin: 0; color: #495057; font-size: 15px; line-height: 1.6; font-family: 'Segoe UI', Arial, sans-serif; white-space: pre-wrap;">
${quoteInfo.message}
                  </p>
                </div>
              </div>

              <!-- Action Buttons -->
              <table role="presentation" style="width: 100%; margin-top: 30px;">
                <tr>
                  <td style="text-align: center; padding: 20px 0;">
                    <a href="mailto:${
                      quoteInfo.email
                    }?subject=Re: Your Quote Request for ${quoteInfo.service}" 
                       style="display: inline-block; background-color: #0F5E46; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; font-family: 'Segoe UI', Arial, sans-serif; margin: 5px;">
                      📧 Reply via Email
                    </a>
                    <a href="tel:${quoteInfo.phone}" 
                       style="display: inline-block; background-color: #FF6500; color: #ffffff; padding: 14px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px; font-family: 'Segoe UI', Arial, sans-serif; margin: 5px;">
                      📞 Call Customer
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="margin: 0 0 10px 0; color: #6c757d; font-size: 13px; font-family: 'Segoe UI', Arial, sans-serif;">
                This is an automated notification from your OzShine Cleaners quote request system.
              </p>
              <p style="margin: 0; color: #adb5bd; font-size: 12px; font-family: 'Segoe UI', Arial, sans-serif;">
                © ${new Date().getFullYear()} OzShine Cleaners. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

      const mailOptions = {
        from: "admin@ozshinecleaners.com",
        to: [quoteInfo.email],
        subject: "We've recive your massage",
        html: emailTemplate1,
        replyTo: "admin@ozshinecleaners.com",
      };

      //send mail
      const sendMailPromise = new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, success) => {
          if (error) {
            console.error("Error sending email:", error);
            reject(error);
          } else {
            console.log("Email sent successfully:", success);
            resolve(success);
          }
        });
      });

      try {
        await sendMailPromise;
      } catch (error) {
        console.log("Error sending email:", error);
      }
      //send email to ozShineCleaners

      const sendMailPromise2 = new Promise((resolve, reject) => {
        const mailOptions2 = {
          from: "admin@ozshinecleaners.com",
          to: "admin@ozshinecleaners.com", // Second recipient ozshineCleaners
          subject: `🔔 New Quote Request: ${quoteInfo.service} - ${quoteInfo.name}`,
          html: emailTemplate2,
          replyTo: "admin@ozshinecleaners.com",
        };

        transporter.sendMail(mailOptions2, (error, success) => {
          if (error) {
            console.error("Error sending second email:", error);
            reject(error);
          } else {
            console.log("Second Email sent successfully:", success);
            resolve(success);
          }
        });
      });

      try {
        await sendMailPromise2;
      } catch (error) {
        console.log("Error sending second email:", error);
      }
      //
      // console.log(result);
      // res.send(result);
      res.send({ success: true });
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Ozshine cleners server is running");
});

app.listen(port, () => {
  console.log(`OZshine cleners Server is running port : ${port}`);
});
