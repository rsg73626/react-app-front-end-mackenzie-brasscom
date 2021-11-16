
function Login() {
    return (
        <form>
            <h3>Login</h3>
            <label htmlFor="email">E-mail: </label><br />
            <input type="email" required="required" placeholder="digite seu e-mail" id="email" /><br />
            <label htmlFor="senha">Senha: </label><br />
            <input type="password" required="required" placeholder="digite sua senha" id="senha" /><br />
            <input type="submit" value="Entrar"/><br />
        </form>
    );
}

export default Login;