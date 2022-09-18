

import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Text, ScrollView, Image, TouchableHighlight } from 'react-native';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { findname: '', itemnumber: '', color: '', stockroomname: '', tal: '' };
  }
  ayada = () => {
    var findname = this.state.findname;
    if (findname.length === 0) {
      alert("The Search bar is empty");
    }


    else {
      var searchapiurl = "http://192.168.0.150/api/search.php?findname=" + findname

      var header = {
        'accept': 'application/json',
        'content-type': 'application/json'
      };
      var Data = {
        findname: findname
      };
      fetch(
        searchapiurl, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(Data)
      }
      )
        .then((Response) => Response.json())
        .then((Response) => {
          this.setState({ itemnumber: Response[0].itemnumber });
          this.setState({ color: Response[0].color });
          this.setState({ stockroomname: Response[0].stockroomname });
          this.setState({ tal: Response[0].tal });
        })
        .catch((error) => {
          alert("error" + error)
        })
    }
  }






  render() {

    return (<ScrollView style={styles.ViewStyle}>

      <View style={styles.logo}><View style={styles.logocontainer}><Image style={styles.logoStyle} source={require('./src/logo.png')} /></View></View>
      <View style={styles.thatStyle}>
        <View style={styles.firstdiv}>
          <Text style={styles.titleText}>THAT ITEM FINDER</Text>
          <TextInput
            placeholder={"Search"}
            placeholderTextColor={"#909090"}
            KeyboardTye={"numeric"}
            style={styles.txtstyle}
            onChangeText={findname => this.setState({ findname })}
          />

          <TouchableHighlight style={styles.button} onPress={this.ayada}>
            <View >
              <Text style={styles.but} >FIND ITEM</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.mainvv}>
          <View style={styles.flixa1}>
            <Text style={styles.tx} onChangeText={itemnumber => this.setState({ itemnumber: itemnumber })}>productcode:</Text>

            <Text style={styles.tx} onChangeText={stockroomname => this.setState({ stockroomname: stockroomname })}>Stockroom :</Text>
            <Text style={styles.tx} >Shelve num :</Text></View>
          <View style={styles.flixa2}>
            <Text style={styles.tx} onChangeText={itemnumber => this.setState({ itemnumber: itemnumber })}>{this.state.itemnumber}</Text>

            <Text style={styles.tx} onChangeText={stockroomname => this.setState({ stockroomname: stockroomname })}>{this.state.stockroomname}</Text>
            <Text style={styles.tx} onChangeText={tal => this.setState({ tal: tal })}>{this.state.tal}</Text></View>

        </View>

        <View style={styles.logo}><View style={styles.logocontainer2}><Image style={styles.logoStyle} source={require('./src/MAF.png')} /></View></View></View></ScrollView>);
  }

}

const styles = StyleSheet.create({
  ViewStyle:
  {
    paddingTop: 50,
    flex: 1,
    padding: 10,
    marginTop: 1,
    backgroundColor: '#ffc819',

  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40
  },
  logocontainer: {
    width: '50%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logocontainer2: {
    width: '70%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoStyle: {
    width: '90%',
    height: '100%',
  },
  logo: {
    height: '100%',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'

  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  thatStyle:
  {
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 30,

  },
  firstdiv: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50
  },

  BTNStyle: {
    width: '50%'
  },
  mainvv:
  {
    flexDirection: "row",
    marginBottom: 140,
    padding: 5,
    marginTop: 40,
    paddingBottom: 20,
    width: '100%'

  },
  tx:
  {
    borderColor: 'black',
    padding: 5,
    width: '100%',
    fontWeight: "bold",


    borderWidth: 1,

  },
  flixa1:
  {
    width: '50%',
    flex: 0.3,
    borderWidth: 1,
  },
  flixa2:
  {
    width: '50%',
    flex: 0.7,
    borderWidth: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: "black",

    padding: 10,
    width: '50%'
  },
  but: {
    color: "white"
  },

  txtstyle: {
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    width: '70%',
    borderRadius: 5,
    paddingLeft: 10,
    backgroundColor: '#DCDCDC'


  }
});