const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarinformacoesGlobais () {
    
    const res = fetch (url)

    const dados = await res.json()

    console.log (dados);
}

visualizarinformacoesGlobais()