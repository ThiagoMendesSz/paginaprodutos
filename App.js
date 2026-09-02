import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView 
} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  return (
    <SafeAreaView style={principal}>
      <View style={conteudo}>
        
        <View style={cabecalho}>
          <AntDesign name="inbox" size={24} color="black" />
          <Text style={titulo}>Novo Produto</Text>
        </View>

        <View style={formulario}>
          
          <View style={grupoentrada}>
            <View style={caixaentrada}>
              <Entypo name="price-tag" size={24} color="black" />
              <TextInput 
                style={entrada} 
                placeholder="Nome do Produto" 
                placeholderTextColor="#888"
              />
            </View>
            <View style={fundorotulo}>
              <Text style={rotulo}>Nome</Text>
            </View>
          </View>

          <View style={grupoentrada}>
            <View style={[caixaentrada, caixasemfoco]}>
              <FontAwesome5 name="money-bill" size={24} color="black" />

              <TextInput 
                style={entrada} 
                placeholder="R$ 0,00" 
                placeholderTextColor="#888"
                keyboardType="numeric"
              />
            </View>
            <View style={fundorotulo}>
              <Text style={[rotulo, rotulosemfoco]}>Preço</Text>
            </View>
          </View>

          <View style={grupoentrada}>
            <View style={caixaentrada}>
              <MaterialCommunityIcons name="inbox-outline" size={28} color="#666" style={icone} />
              <TextInput 
                style={entrada} 
                placeholder="0" 
                placeholderTextColor="#888"
                keyboardType="numeric"
              />
            </View>
            <View style={fundorotulo}>
              <Text style={rotulo}>Quantidade de Entrada</Text>
            </View>
          </View>

        </View>

        <TouchableOpacity style={botao} activeOpacity={0.8}>
          <Text style={textobotao}>CADASTRAR PRODUTO</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const { 
  principal, 
  conteudo, 
  cabecalho, 
  titulo, 
  formulario, 
  grupoentrada, 
  caixaentrada, 
  caixasemfoco, 
  icone, 
  entrada, 
  fundorotulo, 
  rotulo, 
  rotulosemfoco, 
  botao, 
  textobotao 
} = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#F5F8FF', 
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginLeft: 12,
  },
  formulario: {
    marginBottom: 40,
  },
  grupoentrada: {
    marginBottom: 24,
    position: 'relative',
  },
  caixaentrada: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#1A5FAD', 
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: 'transparent',
  },
  caixasemfoco: {
    borderColor: '#888', 
  },
  icone: {
    marginRight: 12,
  },
  entrada: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    height: '100%',
  },
  fundorotulo: {
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: '#F5F8FF', 
    paddingHorizontal: 6,
  },
  rotulo: {
    color: '#1A5FAD',
    fontSize: 14,
    fontWeight: '500',
  },
  rotulosemfoco: {
    color: '#666',
  },
  botao: {
    backgroundColor: '#1A5FAD', 
    borderRadius: 6,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textobotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});