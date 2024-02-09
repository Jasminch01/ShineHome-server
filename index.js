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
      "http://localhost:5173",
      "https://www.ozshinecleaners.com.au",
      "https://comforting-pegasus-72fff5.netlify.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.yh8qk3b.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
//db collections
const quoteInfoCollection = client
  .db("ShineHome")
  .collection("quoteInfoCollection");

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    //post client qoute into database

    app.post("/quoteInfo", async (req, res) => {
      const quoteInfo = req.body;
      const result = await quoteInfoCollection.insertOne(quoteInfo);
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
      const emailTemplate = `<!DOCTYPE html>

      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display"
            rel="stylesheet"
            type="text/css"
          />
          <!--<![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: 0;
            }

            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }

            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }

            p {
              line-height: inherit;
            }

            .desktop_hide,
            .desktop_hide table {
              display: none;
              max-height: 0px;
              overflow: hidden;
            }

            .image_block img + div {
              display: none;
            }

            @media (max-width: 700px) {
              .desktop_hide table.icons-inner,
              .social_block.desktop_hide .social-table {
                display: inline-block !important;
              }

              .icons-inner {
                text-align: center;
              }

              .icons-inner td {
                margin: 0 auto;
              }

              .image_block div.fullWidth {
                max-width: 100% !important;
              }

              .menu-checkbox[type="checkbox"] ~ .menu-links {
                display: none !important;
                padding: 5px 0;
              }

              .menu-checkbox[type="checkbox"]:checked ~ .menu-trigger .menu-open,
              .menu-checkbox[type="checkbox"] ~ .menu-links span.sep {
                display: none !important;
              }

              .menu-checkbox[type="checkbox"]:checked ~ .menu-links,
              .menu-checkbox[type="checkbox"] ~ .menu-trigger {
                display: block !important;
                max-width: none !important;
                max-height: none !important;
                font-size: inherit !important;
              }

              .menu-checkbox[type="checkbox"] ~ .menu-links > a,
              .menu-checkbox[type="checkbox"] ~ .menu-links > span.label {
                display: block !important;
                text-align: center;
              }

              .menu-checkbox[type="checkbox"]:checked ~ .menu-trigger .menu-close {
                display: block !important;
              }

              .mobile_hide {
                display: none;
              }

              .row-content {
                width: 100% !important;
              }

              .stack .column {
                width: 100%;
                display: block;
              }

              .mobile_hide {
                min-height: 0;
                max-height: 0;
                max-width: 0;
                overflow: hidden;
                font-size: 0px;
              }

              .desktop_hide,
              .desktop_hide table {
                display: table !important;
                max-height: none !important;
              }
            }

            #memu-r2c1m0:checked ~ .menu-links {
              background-color: #68a0a9 !important;
            }

            #memu-r2c1m0:checked ~ .menu-links a,
            #memu-r2c1m0:checked ~ .menu-links span {
              color: #ffffff !important;
            }
          </style>
        </head>
        <body
          style="
            background-color: #f2fafc;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-4"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="image_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          width: 100%;
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                      >
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px"
                                        >
                                          <div style="max-width: 272px">
                                            <img
                                              alt="Light blue sphere with flowers"
                                              src="https://i.ibb.co/m6hzGHV/main-image.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                width: 100%;
                                              "
                                              title="Light blue sphere with flowers"
                                              width="272"
                                            />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #44464a;
                                            font-family: 'Playfair Display', Georgia,
                                              serif;
                                            font-size: 30px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 36px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            <span>Hello ${quoteInfo.to_name}</span>
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-3"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #787771;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Thank you for submitting your quote
                                            request. We appreciate your interest in
                                            our services.
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="25"
                                    cellspacing="0"
                                    class="image_block block-4"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          align="center"
                                          class="alignment"
                                          style="line-height: 10px"
                                        >
                                          <div style="max-width: 136px">
                                            <img
                                              alt="Separator"
                                              src="https://i.ibb.co/Y2WBQNz/separator.png"
                                              style="
                                                display: block;
                                                height: auto;
                                                border: 0;
                                                width: 100%;
                                              "
                                              title="Separator"
                                              width="136"
                                            />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-6"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <div
                                    class="spacer_block block-1"
                                    style="
                                      height: 15px;
                                      line-height: 15px;
                                      font-size: 1px;
                                    "
                                  >

                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- items -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-7"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    background-color: #f9feff;
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #c4a07a;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Item
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    background-color: #f9feff;
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #c4a07a;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Quantity
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <!-- <td
                                  class="column column-3"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    background-color: #f9feff;
                                    padding-bottom: 5px;
                                    padding-left: 15px;
                                    padding-right: 15px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #c4a07a;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: right;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Total
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td> -->
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- items -->

            <!-- Bedroom -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-8"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Bedroom
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.bedroom}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- Bedroom -->
            <!-- divider -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-9"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 1px solid #e1ecef;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- divider -->

                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-10"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                           Bathroom
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.bathroom}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

            <!-- devider -->

            <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-11"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 1px solid #e1ecef;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- devider -->

                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-10"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Living Area
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                          ${quoteInfo.livingArea}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

            <!-- divider -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-11"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 1px solid #e1ecef;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- divider -->
            <!-- kitchenArea -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                           Kitchen Area
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.kitchenArea}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- kitchenArea -->
                          <!-- laundryArea -->
            <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
            >
            <tbody>
              <tr>
              <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row-content stack"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  color: #000000;
                  width: 680px;
                  margin: 0 auto;
                "
                width="680"
                >
                <tbody>
                  <tr>
                  <td
                    class="column column-1"
                    style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    font-weight: 400;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    vertical-align: top;
                    border-top: 0px;
                    border-right: 0px;
                    border-bottom: 0px;
                    border-left: 0px;
                    "
                    width="100%"
                  >
                    <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="divider_block block-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                    width="100%"
                    >
                    <tr>
                      <td class="pad">
                      <div align="center" class="alignment">
                        <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                        "
                        width="100%"
                        >
                        <tr>
                          <td
                          class="divider_inner"
                          style="
                            font-size: 1px;
                            line-height: 1px;
                            border-top: 1px solid #e1ecef;
                          "
                          >
                          <span> </span>
                          </td>
                        </tr>
                        </table>
                      </div>
                      </td>
                    </tr>
                    </table>
                  </td>
                  </tr>
                </tbody>
                </table>
              </td>
              </tr>
            </tbody>
            </table>
                  </table>
            <!-- laundryArea -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                           Laundry Area
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.laundryArea}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- laundryArea -->

            <!-- divider -->
            <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
            >
            <tbody>
              <tr>
              <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row-content stack"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  color: #000000;
                  width: 680px;
                  margin: 0 auto;
                "
                width="680"
                >
                <tbody>
                  <tr>
                  <td
                    class="column column-1"
                    style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    font-weight: 400;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    vertical-align: top;
                    border-top: 0px;
                    border-right: 0px;
                    border-bottom: 0px;
                    border-left: 0px;
                    "
                    width="100%"
                  >
                    <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="divider_block block-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                    width="100%"
                    >
                    <tr>
                      <td class="pad">
                      <div align="center" class="alignment">
                        <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                        "
                        width="100%"
                        >
                        <tr>
                          <td
                          class="divider_inner"
                          style="
                            font-size: 1px;
                            line-height: 1px;
                            border-top: 1px solid #e1ecef;
                          "
                          >
                          <span> </span>
                          </td>
                        </tr>
                        </table>
                      </div>
                      </td>
                    </tr>
                    </table>
                  </td>
                  </tr>
                </tbody>
                </table>
              </td>
              </tr>
            </tbody>
            </table>
                  </table>
            <!-- steam-->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Steam
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.steam}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- steam -->
                            <!-- divider -->
            <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
            >
            <tbody>
              <tr>
              <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row-content stack"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  color: #000000;
                  width: 680px;
                  margin: 0 auto;
                "
                width="680"
                >
                <tbody>
                  <tr>
                  <td
                    class="column column-1"
                    style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    font-weight: 400;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    vertical-align: top;
                    border-top: 0px;
                    border-right: 0px;
                    border-bottom: 0px;
                    border-left: 0px;
                    "
                    width="100%"
                  >
                    <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="divider_block block-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                    width="100%"
                    >
                    <tr>
                      <td class="pad">
                      <div align="center" class="alignment">
                        <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                        "
                        width="100%"
                        >
                        <tr>
                          <td
                          class="divider_inner"
                          style="
                            font-size: 1px;
                            line-height: 1px;
                            border-top: 1px solid #e1ecef;
                          "
                          >
                          <span> </span>
                          </td>
                        </tr>
                        </table>
                      </div>
                      </td>
                    </tr>
                    </table>
                  </td>
                  </tr>
                </tbody>
                </table>
              </td>
              </tr>
            </tbody>
            </table>
                  </table>
            <!-- wetwipe blinds -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Number Of Blinds
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.wetWipe}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- wet wipe blinds -->
            <!-- ldivider -->
            <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
            >
            <tbody>
              <tr>
              <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row-content stack"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  color: #000000;
                  width: 680px;
                  margin: 0 auto;
                "
                width="680"
                >
                <tbody>
                  <tr>
                  <td
                    class="column column-1"
                    style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    font-weight: 400;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    vertical-align: top;
                    border-top: 0px;
                    border-right: 0px;
                    border-bottom: 0px;
                    border-left: 0px;
                    "
                    width="100%"
                  >
                    <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="divider_block block-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                    width="100%"
                    >
                    <tr>
                      <td class="pad">
                      <div align="center" class="alignment">
                        <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                        "
                        width="100%"
                        >
                        <tr>
                          <td
                          class="divider_inner"
                          style="
                            font-size: 1px;
                            line-height: 1px;
                            border-top: 1px solid #e1ecef;
                          "
                          >
                          <span> </span>
                          </td>
                        </tr>
                        </table>
                      </div>
                      </td>
                    </tr>
                    </table>
                  </td>
                  </tr>
                </tbody>
                </table>
              </td>
              </tr>
            </tbody>
            </table>
                  </table>
            <!-- spot walls -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Sopt Clean (Walls)
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.spotWalls}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- spot walls -->
            <!-- divider -->
            <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
            >
            <tbody>
              <tr>
              <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row-content stack"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  color: #000000;
                  width: 680px;
                  margin: 0 auto;
                "
                width="680"
                >
                <tbody>
                  <tr>
                  <td
                    class="column column-1"
                    style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    font-weight: 400;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    vertical-align: top;
                    border-top: 0px;
                    border-right: 0px;
                    border-bottom: 0px;
                    border-left: 0px;
                    "
                    width="100%"
                  >
                    <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="divider_block block-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                    width="100%"
                    >
                    <tr>
                      <td class="pad">
                      <div align="center" class="alignment">
                        <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                        "
                        width="100%"
                        >
                        <tr>
                          <td
                          class="divider_inner"
                          style="
                            font-size: 1px;
                            line-height: 1px;
                            border-top: 1px solid #e1ecef;
                          "
                          >
                          <span> </span>
                          </td>
                        </tr>
                        </table>
                      </div>
                      </td>
                    </tr>
                    </table>
                  </td>
                  </tr>
                </tbody>
                </table>
              </td>
              </tr>
            </tbody>
            </table>
                  </table>
            <!-- balcony -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Balcony
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.balcony}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- balcony -->
                            <!-- divider-->
            <table
            align="center"
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="row row-9"
            role="presentation"
            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
            width="100%"
            >
            <tbody>
              <tr>
              <td>
                <table
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                class="row-content stack"
                role="presentation"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  color: #000000;
                  width: 680px;
                  margin: 0 auto;
                "
                width="680"
                >
                <tbody>
                  <tr>
                  <td
                    class="column column-1"
                    style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    font-weight: 400;
                    text-align: left;
                    padding-bottom: 5px;
                    padding-top: 5px;
                    vertical-align: top;
                    border-top: 0px;
                    border-right: 0px;
                    border-bottom: 0px;
                    border-left: 0px;
                    "
                    width="100%"
                  >
                    <table
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="divider_block block-1"
                    role="presentation"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                    "
                    width="100%"
                    >
                    <tr>
                      <td class="pad">
                      <div align="center" class="alignment">
                        <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        role="presentation"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                        "
                        width="100%"
                        >
                        <tr>
                          <td
                          class="divider_inner"
                          style="
                            font-size: 1px;
                            line-height: 1px;
                            border-top: 1px solid #e1ecef;
                          "
                          >
                          <span> </span>
                          </td>
                        </tr>
                        </table>
                      </div>
                      </td>
                    </tr>
                    </table>
                  </td>
                  </tr>
                </tbody>
                </table>
              </td>
              </tr>
            </tbody>
            </table>
                  </table>
            <!-- garage-->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-12"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 10px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: left;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            Garage (sweep and tidy) 
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td
                                  class="column column-2"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="33.333333333333336%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 10px;
                                          padding-left: 5px;
                                          padding-right: 5px;
                                          padding-top: 10px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #393d47;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 120%;
                                            text-align: center;
                                            mso-line-height-alt: 16.8px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            ${quoteInfo.garage}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- garage -->

            <!-- style -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-13"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="divider_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            role="presentation"
                                            style="
                                              mso-table-lspace: 0pt;
                                              mso-table-rspace: 0pt;
                                            "
                                            width="100%"
                                          >
                                            <tr>
                                              <td
                                                class="divider_inner"
                                                style="
                                                  font-size: 1px;
                                                  line-height: 1px;
                                                  border-top: 1px solid #e1ecef;
                                                "
                                              >
                                                <span> </span>
                                              </td>
                                            </tr>
                                          </table>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- style -->

            <!-- total cost -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-18"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              color: #000000;
                              width: 680px;
                              margin: 0 auto;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 5px;
                                    padding-left: 5px;
                                    padding-right: 5px;
                                    padding-top: 5px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div
                                          style="
                                            color: #69BB48;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 22px;
                                            line-height: 120%;
                                            text-align: right;
                                            mso-line-height-alt: 26.4px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            <span
                                              ><strong
                                                ><span
                                                  >Total (including GST) :
                                                  ${quoteInfo.totalCostGst} AUD</span
                                                ></strong
                                              ></span
                                            >
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- total cost -->

            <!-- footer -->
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-20"
                    role="presentation"
                    style="mso-table-lspace: 0pt; mso-table-rspace: 0pt"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              background-color: #ffffff;
                              color: #000000;
                              width: 680px;
                              margin-bottom: 30px;
                            "
                            width="680"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    font-weight: 400;
                                    text-align: left;
                                    padding-bottom: 15px;
                                    padding-top: 15px;
                                    vertical-align: top;
                                    border-top: 0px;
                                    border-right: 0px;
                                    border-bottom: 0px;
                                    border-left: 0px;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="paragraph_block block-1"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      word-break: break-word;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td
                                        class="pad"
                                        style="
                                          padding-bottom: 15px;
                                          padding-left: 35px;
                                          padding-right: 35px;
                                          padding-top: 15px;
                                        "
                                      >
                                        <div
                                          style="
                                            color: #44464a;
                                            font-family: Nunito, Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-size: 14px;
                                            line-height: 150%;
                                            text-align: center;
                                            mso-line-height-alt: 21px;
                                          "
                                        >
                                          <p
                                            style="margin: 0; word-break: break-word"
                                          >
                                            If you have any questions or would like
                                            further clarification, please don't
                                            hesitate to reach out. We are here to
                                            assist you. Thank you again for choosing
                                            our services. <br />
                                            Best wishes, <br />
                                            ozshinecleaners
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="button_block block-2"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                    "
                                    width="100%"
                                  >
                                    <tr>
                                      <td class="pad">
                                        <div align="center" class="alignment">
                                          <a
                                            href="tel:+61452679582"
                                            style="
                                              text-decoration: none;
                                              display: inline-block;
                                              color: #69BB48;
                                              background-color: transparent;
                                              border-radius: 28px;
                                              width: auto;
                                              border-top: 1px solid #69BB48;
                                              font-weight: undefined;
                                              border-right: 1px solid #69BB48;
                                              border-bottom: 1px solid #69BB48;
                                              border-left: 1px solid #69BB48;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              font-family: Nunito, Arial,
                                                Helvetica Neue, Helvetica, sans-serif;
                                              font-size: 16px;
                                              text-align: center;
                                              mso-border-alt: none;
                                              word-break: keep-all;
                                            "
                                            target="_blank"
                                            ><span
                                              style="
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 16px;
                                                display: inline-block;
                                                letter-spacing: normal;
                                              "
                                              ><span
                                                style="
                                                  word-break: break-word;
                                                  line-height: 32px;
                                                "
                                                >Call US : +61452679582</span
                                              ></span
                                            ></a
                                          >
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
            <!-- footer -->
            <!-- separator -->
            <table
            border="0"
            cellpadding="25"
            cellspacing="0"
            class="image_block block-4"
            role="presentation"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
            "
            width="100%"
          >
            <tr>
              <td class="pad">
                <div
                  align="center"
                  class="alignment"
                  style="line-height: 10px"
                >
                  <div style="max-width: 136px">
                    <img
                      alt="Separator"
                      src="https://i.ibb.co/Y2WBQNz/separator.png"
                      style="
                        display: block;
                        height: auto;
                        border: 0;
                        width: 100%;
                      "
                      title="Separator"
                      width="136"
                    />
                  </div>
                </div>
              </td>
            </tr>
          </table>

          <!-- separator -->

            <!-- social icons -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-22" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tbody>
              <tr>
              <td>
              <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 680px; margin: 0 auto;" width="680">
              <tbody>
              <tr>
              <td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
              <table border="0" cellpadding="0" cellspacing="0" class="icons_block block-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad" style="vertical-align: middle; color: #000000; font-family: inherit; font-size: 14px; text-align: center;">
              <table align="center" cellpadding="0" cellspacing="0" class="alignment" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr>
              <td style="vertical-align: middle; text-align: center; padding-top: 5px; padding-bottom: 5px; padding-left: 5px; padding-right: 5px;"> <a href="https://www.ozshinecleaners.com.au"><img align="center" alt="Default" class="icon" height="32" src="https://i.ibb.co/PCSJ0Yw/web.png" style="display: block; height: auto; margin: 0 auto; border: 0;" width="30"/></a></td>
              </tr>
              </table>
              </td>
              </tr>
              </table>
              <table border="0" cellpadding="10" cellspacing="0" class="social_block block-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
              <tr>
              <td class="pad">
              <div align="center" class="alignment">
              <table border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;" width="208px">
              <tr>
              </tr>
              </table>
              </div>
              </td>
              </tr>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              </td>
              </tr>
              </tbody>
              </table>
              <!-- social icons -->
                </td>
              </tr>
            </tbody>
          </table>
        </body>
      </html>
`;
      const mailOptions = {
        from: quoteInfo.form_email,
        to: [quoteInfo.to_email[0], quoteInfo.to_email[1]],
        subject: quoteInfo.subject,
        html: emailTemplate,
        replyTo: quoteInfo.form_email,
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
      console.log(result);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
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
  res.send("ShineHome server is running");
});

app.listen(port, () => {
  console.log(`ShineHome Server is running port : ${port}`);
});
