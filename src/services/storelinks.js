// Buscando links
export async function getLinksSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// Salvando links no local storage

export async function saveLink(key, newLink){
    let linksStored = await getLinksSave(key);

    // função para não salvar dois itens iguais
    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        console.log('Esse link já existe na sua lista')
        return;
    }

    // adicionar link na lista caso não esteja duplicado
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('Link salvo com sucesso!')
}

// deletar links

export function deleteLink(Links, id){
    let myLinks = Links.filter(item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtador', JSON.stringify(myLinks))
    console.log('Link deletado com sucesso')

    return myLinks;
}