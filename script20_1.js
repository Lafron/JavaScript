//1)================================================================

const form = document.createElement("form");

form.classList.add("create-user-form");

form.innerHTML = "<label>Имя <input type='text' name='userName' placeholder='Введите ваше имя'></label>";
form.innerHTML += "<label> Пароль <input type='password' name='password' placeholder='Придумайте Пароль'></label> ";
form.innerHTML += "<button type='submit'>Подтвердить</button>";

document.body.append(form);

const form2 = document.createElement("form");

form2.classList.add("create-user-form");

const label1 = document.createElement("label");
label1.textContent = "Имя ";

const  input1 = document.createElement("input");
input1.type = "text";
input1.name = "userName";
input1.placeholder = "Введите ваше имя";

label1.append(input1);

const label2 = document.createElement("label");
label2.textContent = " Пароль ";

const  input2 = document.createElement("input");
input2.type = "password";
input2.name = "password";
input2.placeholder = "Придумайте Пароль";

label2.append(input2);
label2.innerHTML +=" ";

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Подтвердить";

form2.append(label1);
form2.append(label2);
form2.append(button);

document.body.append(form2);
