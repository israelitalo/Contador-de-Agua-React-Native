import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default class ContadorDeAgua extends Component {

    constructor(props){
      super(props);
      this.state = {consumido: 0, status: 'Ruim', pct: 0};

      this.addCopo = this.addCopo.bind(this);
      this.atualizar = this.atualizar.bind(this);
    }

    atualizar(){
      let estado = this.state;
      estado.pct = Math.floor((estado.consumido/2000)*100);
      if(estado.pct < 50){
        estado.status = 'Ruim';
      }
      else if(estado.pct >= 50 && estado.pct < 100){
        estado.status = 'Regular';
      }
      else if(estado.pct >= 100 && estado.pct <= 150){
        estado.status = 'Bom';
      }
      else if(estado.pct > 150){
        estado.status = 'Ótimo';
      }
      
    }
    
    addCopo(){
      let estado = this.state;
      estado.consumido += 200;
      
      this.atualizar();

      this.setState(estado);
    }

    render(){

      return(
        <View style={styles.body}>
          <ImageBackground source={require('./images/waterbg.png')} style={styles.bgImage}>

            <View>

              <View style={styles.viewInfo}>
                  <View style={styles.area}>
                    <Text style={styles.textoTitulo}>Meta Diária</Text>
                    <Text style={styles.texto}>2000 ml</Text>
                  </View>

                  <View style={styles.area}>
                    <Text style={styles.textoTitulo}>Consumido</Text>
                    <Text style={styles.texto}>{this.state.consumido} ml</Text>
                  </View>

                  <View style={styles.area}>
                    <Text style={styles.textoTitulo}>Status</Text>
                    <Text style={styles.texto}>{this.state.status}</Text>
                  </View>
              </View>

              <View style={styles.pctArea}>
                  <Text style={styles.pctTexto}>{this.state.pct}%</Text>
              </View>

              <View style={styles.btnArea}>
                  <Button title='Beber 200 ml de água' color='green' onPress={this.addCopo}></Button>
              </View>

            </View>

          </ImageBackground>
        </View>
      );

    }

}

const styles = StyleSheet.create({
  body:{
    flex:1,
  },
  bgImage:{
    flex: 1,
    width: null
  },
  viewInfo:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 70
  },
  area:{
    flex:1,
    alignItems: 'center'
  },
  textoTitulo:{
    fontSize: 20,
    color: '#45b2fc',
    fontWeight: 'bold'
  },
  texto:{
    fontSize: 20,
    color:'#2b4274',
    fontWeight: 'bold'
  },
  pctArea:{
    marginTop: 230,
    alignItems: 'center'
  },
  pctTexto:{
    fontSize: 70,
    color: '#FFFFFF',
    backgroundColor: 'transparent'
  },
  btnArea:{
    alignItems: 'center',
    marginTop: 100
  }
});