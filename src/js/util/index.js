/**
 * Aplica máscara ao número de CPF 
 * @param {string} cpf String com o CPF a ser formatado
 * @returns String no formato 999.999.999-99
 */
function maskCPF(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

/**
 * Aplica máscara ao número de CNPJ
 * @param {string} cnpj String com o CNPJ a ser formatado
 * @returns String no formato 99.999.999/9999-99
 */
function maskCNPJ(cnpj) {
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3\/$4-$5');
}

/**
 * Aplica máscara no número de CPF ou de CNPJ
 * do parâmetro cpfCNPJ
 * @param {string} cpfCNPJ String representando o CPF ou o CNPJ
 * @returns String no formato 999.999.999-99 (CPF) ou 99.999.999/9999-99 (CNPJ)
 */
export function maskCPFCNPJ(cpfCNPJ) {
    if (!cpfCNPJ) return ''; // Se o valor for nulo, retorna uma string vazia

    cpfCNPJ = cpfCNPJ.replace(/\D/g, ''); // Remove tudo que não for dígito

    if (cpfCNPJ.length < 12) return maskCPF(cpfCNPJ); // Aplica a máscara de CPF
    else return maskCNPJ(cpfCNPJ); // Aplica a máscara de CNPJ
}

/**
 * Aplica máscara ao número de CEP
 * @param {string} cep String com o CEP a ser formatado
 * @returns String no formato 99999-99
 */
export function maskCEP(cep) {
    if (!cep) return '';

    return cep.replace(/\D/g, '')
        .replace(/(\d{5})(\d{2})/, '$1-$2');
}

// TODO
export function maskTelefone(telefone) {
    if (telefone) {
        telefone = telefone.replace(/\D/g, '');
        if (telefone == '') return telefone;
        telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca parênteses em volta dos dois primeiros dígitos
        telefone = telefone.replace(/(\d)(\d{4})$/, '$1-$2'); //Coloca hífen entre o quarto e o quinto dígitos
        telefone = telefone.substring(0, 15);
    }
    return telefone;
}

// TODO
export function maskData(data) {
    if (data) {
        data = data.replace(/\D/g, "")
        data = data.replace(/(\d{2})(\d)/, "$1/$2")
        data = data.replace(/(\d{2})(\d)/, "$1/$2")
        return data;
    }
    return '';
}

/**
 * Remove a máscara aplicada a uma string
 * @param {string} value String com máscara
 * @returns Uma string sem máscara
 */
export function unmask(stringFormatada) {
    if (stringFormatada) return stringFormatada.replace(/\D/g, ''); // Se não for nulo, remove a máscara.
    else return '';
}