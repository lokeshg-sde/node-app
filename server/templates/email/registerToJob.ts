export const getMessageBody = (from: string, message: string): string =>
  `<h1> Hey Lokesh, this email is regarding the job opportunity from <strong> ${from} </strong><h1>
   <h3 style="margin-bottom: 15px;margin-top: 15px;"> <code>${message}</code></h3>
   <p> Lokesh this Email has been sent from your Express App, as request from <strong> ${from} </strong>. 
   <br> </br> Please feel free to add your feedback on this opportunity.</p>
   <p> And make sure to reply this to Email on your availability for the interview.
   </p>`
