import { router } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.tela}>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Distribuidora</Text>
                <Text style={styles.subtitulo}>do seu zé</Text>
            </View>

            <View style={styles.espacoBotao}>
                <Button 
                    title="Listar Produtos" 
                    color="#005b96"
                    onPress={() => router.push('/ListagemProduto')} 
                />
            </View>

            <View style={styles.espacoBotao}>
                <Button 
                    title="Promoções Especiais" 
                    color="#e59a13"
                    onPress={() => router.push('/ListagemPromocoes')} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        flex: 1,
        backgroundColor: '#f4f8fb',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    cabecalho: {
        alignItems: 'center',
        marginBottom: 50,
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#03396c',
    },
    subtitulo: {
        fontSize: 24,
        color: '#005b96',
        fontWeight: 'bold',
    },
    espacoBotao: {
        width: '100%',
        marginVertical: 10,
    }
});