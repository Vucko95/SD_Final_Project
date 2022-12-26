// import { set } from 'cookies-next'
// import cookie from "cookie";
import cookie from "cookie";

export default (req,res ) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("username", req.body.username));
    res.statusCode = 200;
    res.json({ success: true})
  
}

// export const setUsernameCookie = (res, username) => {
//   set(res, 'username', username, {
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//     path: '/',
//   })
// }

// function setCookie(name, value, options, res) {
//   // Set the cookies on the response object if provided,
//   // otherwise use the browser's document.cookie property.
//   if (res) {
//     res.setHeader(
//       "Set-Cookie",
//       cookie.serialize(name, value, options)
//     );
//   } else {
//     document.cookie = cookie.serialize(name, value, options);
//   }
// }



// export const setCookie =(name, value, days) => {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }

const getCookieValue = (name) => (
  document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
)


// export const  getCookie=(name) => {
//   var nameEQ = name + "=";
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// export function getServerSideProps({req, res}) {
//   return { props : {username: req.cookies.token || "" }}
  
// }