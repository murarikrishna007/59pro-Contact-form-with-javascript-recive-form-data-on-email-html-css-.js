console.log("krishna murari");

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "murarikrishna0071994@gmail.com",
    Password: "",
    To: "krishnamurari673@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body: "Name : " + document.getElementById("name").value + " <br> Email: " + document.getElementById("email").value + " <br> Phone no: " + document.getElementById("phone").value  + " <br> Message: " + document.getElementById("Message").value
  }).then((message) => alert("message send Succesfully"));

}









// =======================================

// function sendEmail(){

//     MailMessage msg = new MailMessage();

//     msg.From = new MailAddress("mymailid");
//     msg.To.Add("receipientid");
//     msg.Subject = "test";
//     msg.Body = "Test Content";
//     msg.Priority = MailPriority.High;

//     SmtpClient client = new SmtpClient();

//     client.Credentials = new NetworkCredential("mymailid", "mypassword", "smtp.gmail.com");
//     client.Host = "smtp.gmail.com";
//     client.Port = 587;
//     client.DeliveryMethod = SmtpDeliveryMethod.Network;
//     client.EnableSsl = true;
//     client.UseDefaultCredentials = true;

//     client.Send(msg);
// }
