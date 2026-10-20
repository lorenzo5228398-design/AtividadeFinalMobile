import { StyleSheet, Text, View } from 'react-native';

const produto1 = { nome: "Arroz doce", preco: 12, unidadeMedida: 3 };
const produto2 = { nome: "Feijão", preco: 6, unidadeMedida: 3 };
const produto3 = { nome: "Batata", preco: 5, unidadeMedida: 3 };
const produto4 = { nome: "Morango", preco: 2, unidadeMedida: 5 };
const produto5 = { nome: "Berinjela", preco: 3, unidadeMedida: 3 };
const produto6 = { nome: "Arame", preco: 50, unidadeMedida: 3 };
const produto7 = { nome: "Revolver 38", preco: 1000, unidadeMedida: 1 };
const produto8 = { nome: "Missil anti-aereo", preco: 5000, unidadeMedida: 1 };
const produto9 = { nome: "Pepino", preco: 12, unidadeMedida: 5 };
const produto10 = { nome: "Brocolis", preco: 12, unidadeMedida: 9 };

export const listaDeProdutos = [produto1, produto2, produto3, produto4, produto5,
    produto6, produto7, produto8, produto9, produto10];


type ProdutoProps = {
    nome: string;
    preco: number;
    unidadeMedida: number;
}

export function Produto(props: ProdutoProps) {
    return (
        <View style={estilos.cartao}>
            <Text style={estilos.textoPrincipal}>{props.nome}</Text>
            <View style={estilos.linha}>
                <Text style={estilos.textoDetalhe}>Quantidade/Unidade: {props.unidadeMedida}</Text>
                <Text style={estilos.textoPreco}>R$ {props.preco.toFixed(2)}</Text>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    cartao: {
        padding: 15,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderLeftWidth: 5,
        borderLeftColor: '#005b96',
    },
    linha: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    textoPrincipal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    textoDetalhe: {
        fontSize: 14,
        color: '#666',
    },
    textoPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#005b96',
    }
});