const SUPABASE_URL = "https://bqjvpxzqfydxjvwxwzq.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_I41Le4xxqwB_UzhpKOTXCw_KQmP7a1F";


// Verifica se a biblioteca carregou
if (typeof supabase === "undefined") {

    document.getElementById("resultado").innerHTML =
        "<p style='color:red'>ERRO: Supabase não carregou.</p>";

} else {

    console.log("Biblioteca Supabase carregada!");

    const banco = supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );

    document.getElementById("resultado").innerHTML =
        "<p style='color:green'>Supabase carregado com sucesso!</p>";
}
