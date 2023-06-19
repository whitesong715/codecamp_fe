const email = "code@gmail.com"
// undefined
email.includes("@")
// true
email.split("@")
// (2) ['code', 'gmail.com']
email.split("@")[0]
// 'code'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
userMail
// 'code'
company
// 'gmail.com'
let maskingMail = []
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail.join("-")
// 'c-o-d-e-*-*-*-*'
maskingMail.join("")
// 'code****'
maskingMail.join("")+"@"+company
// 'code****@gmail.com'