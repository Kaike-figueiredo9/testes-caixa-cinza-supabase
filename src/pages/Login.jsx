import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { supabase } from "../supabase"; // importa o Supabase

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Atualizado para autenticar com Supabase
  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Erro no login: " + error.message);
      console.error(error);
    } else {
      console.log("Usuário logado:", data.user);
      alert("Login realizado com sucesso!");
      navigate("/catalog"); // mantém sua navegação original
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">FoodExpress</div>

      <div className="login-card">
        <h1 className="login-title">Bem-vindo de volta!</h1>
        <p className="login-subtitle">Faça login para pedir sua refeição favorita</p>

        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>

        <p className="login-footer">
          Novo por aqui? <Link to="/signup" className="login-link">Criar conta</Link>
        </p>
      </div>
    </div>
  );
}


// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "./Login.css";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email && password) navigate("/catalog");
//   };

//   return (
//     <div className="login-container">
//       <div className="login-logo">🍔 FoodExpress</div>

//       <div className="login-card">
//         <h1 className="login-title">Bem-vindo de volta!</h1>
//         <p className="login-subtitle">Faça login para pedir sua refeição favorita</p>

//         <form className="login-form" onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="E-mail"
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             className="login-input"
//             required
//           />
//           <input
//             type="password"
//             placeholder="Senha"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             className="login-input"
//             required
//           />
//           <button type="submit" className="login-button">Entrar</button>
//         </form>

//         <p className="login-footer">
//           Novo por aqui? <Link to="/signup" className="login-link">Criar conta</Link>
//         </p>
//       </div>
//     </div>
//   );
// }
