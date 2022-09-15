const register = document.querySelector('.register');
const formLogin = document.querySelector('form');

register.addEventListener('click', registerAcc);

function registerAcc() {
    formLogin.innerHTML = '';

    formLogin.insertAdjacentHTML('beforeend', `<form id="signin-form" class="pt-5 px-4 w-100"><div class="form-floating mb-3"><input type="email" class="form-control" placeholder="name@example.com"><label>Email Address</label></div><div class="form-floating mb-3"><input type="password" class="form-control" placeholder="Password"><label>Password</label></div><div class="form-floating mb-3"><input type="text" class="form-control" placeholder="FirstName"><label>First Name</label></div><div class="form-floating mb-3"><input type="text" class="form-control" placeholder="LastName"><label>Last Name</label></div><button type="submit" class="btn btn-lg btn-primary w-100">Sign up</button><div class="mt-5"><p>Already have an account?<a class="text-decoration-none register" style="cursor: pointer;" onclick = "loginAcc()"> Login</a></p></div></form>`);
}

function loginAcc() {
    formLogin.innerHTML = '';

    formLogin.insertAdjacentHTML('beforeend', `<form id="signin-form" class="pt-5 px-4 w-100"><div class="form-floating mb-3"><input type="email" class="form-control" placeholder="name@example.com"><label>Email Address</label></div><div class="form-floating mb-3"><input type="password" class="form-control" placeholder="Password"><label>Password</label></div><button type="submit" class="btn btn-lg btn-primary w-100">Login</button><p class="small pt-3 pb-4"><a class="text-muted text-decoration-none">Forget Password?</a></p><div class="mt-5"><p>Don'y have an account?<a class="text-decoration-none register" style="cursor: pointer;" onclick = "registerAcc()"> Sign up</a></p></div></form>`);
}
