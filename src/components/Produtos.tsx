import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Produtos() {


    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [turma, setTurma] = useState('');
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [media, setMedia] = useState(0);
    const [ativado, setAtivado] = useState(false);

    type Aluno = {

        nome: string,
        idade: number,
        turma: string,
        nota1: number,
        nota2: number

    }

    const produto1 = { nome: "Arroz doce", preco: 12, unidadeMedida: 3 }
    const produto2 = { nome: "Feijão", preco: 6, unidadeMedida: 3 }
    const produto3 = { nome: "Batata", preco: 5, unidadeMedida: 3 }
    const produto4 = { nome: "Morango", preco: 2, unidadeMedida: 5 }
    const produto5 = { nome: "Berinjela", preco: 3, unidadeMedida: 3 }
    const produto6 = { nome: "Arame", preco: 50, unidadeMedida: 3 }
    const produto7 = { nome: "Revolver 38", preco: 1000, unidadeMedida: 1 }
    const produto8 = { nome: "Missil anti-aereo", preco: 5000, unidadeMedida: 1 }
    const produto9 = { nome: "Pepino", preco: 12, unidadeMedida: 5 }
    const produto10 = { nome: "Brocolis", preco: 12, unidadeMedida: 9 }
    

    //  const lista: Aluno[] = [produto1]

    // const mostrarAlunos = () => (
    //     <FlatList
    //         data={lista}
    //         renderItem={({ item }) => {
    //             const mediaAluno = (item.nota1 + item.nota2) / 2;

    //             return (
    //                 <View style={[styles.itemContainer, { backgroundColor: '#0b74b1' }]}>
    //                     <Text>Nome: {item.nome}</Text>
    //                     <Text>Turma: {item.turma} | Idade: {item.idade}</Text>
    //                     <Text>Média: {mediaAluno}</Text>
    //                     <Text>
    //                         Status: {mediaAluno >= 7 ? "Aprovado!!" : "Reprovado!!"}
    //                     </Text>
    //                 </View>
    //             );
    //         }}
    //     />
    // );

    // const acionarPopUp = () => {
    //     setMedia((Number(nota1) + Number(nota2)) / 2);
    //     setAtivado(true);
    // };

    return (
        <View>
            {/* 
            <Text>Nome: </Text>
            <TextInput placeholder="Digite seu nome: "
                value={nome}
                onChangeText={(text) => { setNome(text) }}

            />
            <Text>Idade: </Text>
            <TextInput placeholder="Digite sua idade: "
                value={idade}
                onChangeText={(Text) => { setIdade(Text) }}

            />

            <Text>Turma: </Text>
            <TextInput placeholder="Digite seu turma: "
                value={turma}
                onChangeText={(text) => { setTurma(text) }}

            />

            <Text>Primeira nota: </Text>
            <TextInput placeholder="Digite sua primeira nota: "
                value={nota1}
                onChangeText={(text) => { setNota1(text) }}
                keyboardType="numeric"

            />

            <Text>Segunda nota: : </Text>
            <TextInput placeholder="Digite sua segunda nota: "
                value={nota2}
                onChangeText={(text) => { setNota2(text) }}
                keyboardType="numeric"
            />

            // <Pressable onPress={acionarPopUp}>
            //     <Text>Clique aqui para mostrar</Text>
            // </Pressable> */}

            {/* <Text>



                {(ativado) &&
                    ((media > 7) ?
                        <View>

                            <Text>Média: {media}</Text>

                            <Text>Status: Aprovado!!</Text>

                        </View>
                        :
                        <View>

                            <Text>Média: {media}</Text>

                            <Text>Status: Reprovado!!</Text>
                        </View>)

                }


            </Text> */}





            // {ativado && mostrarAlunos()}

            // <Button title="Mostrar alunos"
            //     onPress={acionarPopUp}
            //     color="#007BFF" />

        </View >
    )




}

const styles = StyleSheet.create({
    itemContainer: {
        padding: 15,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    texto: {
        fontSize: 16,
        color: '#333',
        marginBottom: 4,
    }
});