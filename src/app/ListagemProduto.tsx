import { FlatList, StyleSheet, View } from 'react-native';
import { listaDeProdutos, Produto } from '../components/Produtos';

export default function ListagemProduto() {
    return (
        <View style={estilos.tela}>
            <FlatList 
                data={listaDeProdutos} 
                keyExtractor={(item, index) => index.toString()} 
                renderItem={({ item }) => (
                    <Produto 
                        nome={item.nome} 
                        preco={item.preco} 
                        unidadeMedida={item.unidadeMedida} 
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
    }
});