import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const promocao1 = { nome: 'Leite Integral', tipo: 'Leve 12 Pague 11', precoPromo: 49.50, foto: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=200&auto=format&fit=crop' };
const promocao2 = { nome: 'Queijo Mussarela', tipo: 'Acima de 2kg pague', precoPromo: 32.00, foto: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=200&auto=format&fit=crop' };
const promocao3 = { nome: 'Iogurte Natural', tipo: 'Pagando no cartão da loja', precoPromo: 2.99, foto: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=200&auto=format&fit=crop' };
const promocao4 = { nome: 'Requeijão Tradicional', tipo: 'Leve 3 Pague 2', precoPromo: 17.80, foto: 'https://images.unsplash.com/photo-1628815870980-f416105d89b3?q=80&w=200&auto=format&fit=crop' };
const promocao5 = { nome: 'Creme de Leite', tipo: 'Acima de 5 unidades', precoPromo: 2.80, foto: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=200&auto=format&fit=crop' };
const promocao6 = { nome: 'Manteiga Extra', tipo: 'Pagando no cartão da loja', precoPromo: 10.00, foto: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=200&auto=format&fit=crop' };

const promocoes = [promocao1, promocao2, promocao3, promocao4, promocao5, promocao6];

type PromocaoProps = {
    nome: string;
    tipo: string;
    precoPromo: number;
    foto: string;
}

function PromocaoCartao(props: PromocaoProps) {
    return (
        <View style={estilos.cartaoPromocao}>
            <Image source={{ uri: props.foto }} style={estilos.imagem} />
            <View style={estilos.informacao}>
                <Text style={estilos.textoPrincipal}>{props.nome}</Text>
                <View style={estilos.etiqueta}>
                    <Text style={estilos.textoEtiqueta}>{props.tipo}</Text>
                </View>
                <Text style={estilos.textoPreco}>Por: R$ {props.precoPromo.toFixed(2)}</Text>
            </View>
        </View>
    );
}

export default function ListagemPromocoes() {
    return (
        <View style={estilos.tela}>
            <FlatList
                data={promocoes}

                renderItem={({ item }) => (
                    <PromocaoCartao
                        nome={item.nome}
                        tipo={item.tipo}
                        precoPromo={item.precoPromo}
                        foto={item.foto}
                    />
                )}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#f4f8fb',
        padding: 15,
    },
    cartaoPromocao: {
        padding: 15,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagem: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 15,
    },
    informacao: {
        flex: 1,
    },
    textoPrincipal: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    etiqueta: {
        backgroundColor: '#ffeaa7',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 5,
        marginVertical: 5,
        alignSelf: 'flex-start',
    },
    textoEtiqueta: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#d63031',
    },
    textoPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27ae60',
        marginTop: 5,
    }
});