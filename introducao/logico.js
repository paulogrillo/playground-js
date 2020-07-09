function compras(trabalho1, trabalho2) {
    const comprarSovervete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSovervete

    return { comprarSovervete, comprarTv50, comprarTv50, manterSaudavel }
}