const criptografarTexto = document.getElementById('criptografar')
const descriptografarTexto = document.getElementById('descriptografar')


criptografarTexto.onclick = () => {
  const textoParaCriptografar = document.getElementById('codificar').value
  
  const resultadoDoTexto = document.getElementById('saidaDedados')
  
  const area = document.getElementById('retorno')
  
  const texto = textoParaCriptografar.split('')
  const textoCriptografado = []


  for (i = 0; i < texto.length; i++) 
  {
    if (texto[i] === 'a') 
	{
      textoCriptografado.push('ai')
    } else if (texto[i] === 'e') 
	{
      textoCriptografado.push('enter')
    } else if (texto[i] === 'i') 
	{
      textoCriptografado.push('imes')
    } else if (texto[i] === 'o')
		{
      textoCriptografado.push('ober')
    } else if (texto[i] === 'u') 
	{
      textoCriptografado.push('ufat')
    } else 
	{
      textoCriptografado.push(texto[i])
    }
  }

  area.style.display = 'none'
  
  resultadoDoTexto.innerHTML = textoCriptografado.join('')
}


descriptografarTexto.onclick = () => {
  const textoCriptografado = document.getElementById('codificar').value
  
  const resultadoDoTexto = document.getElementById('saidaDedados')
  
  const area = document.getElementById('retorno')

  area.style.display = 'none'
  
  resultadoDoTexto.innerHTML = textoCriptografado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
}