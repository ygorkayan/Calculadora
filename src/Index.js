import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import IndexStyle from "./IndexStyle";

import Display from "./Components/Display/Display";
import Btn from "./Components/Btn/Btn";

export default (props) => {
  const [valor, setValor] = useState("");
  const [limpar, setLimpar] = useState(false);

  function limparMemoria() {
    setValor("");
  }

  function calcular() {
    setLimpar(true);
    try {
      setValor(eval(valor));
    } catch {
      setValor("erro");
    }
  }

  function addNumeros(digito) {
    return () => {
      if (limpar) {
        limparMemoria();
        setLimpar(false);
        setValor(`${digito}`);
      } else {
        setValor(`${valor}${digito}`);
      }
    };
  }

  function addOperations(digito) {
    return () => {
      setLimpar(false);
      setValor(`${valor}${digito}`);
    };
  }

  return (
    <SafeAreaView style={IndexStyle.container}>
      <Display valor={valor} />
      <View style={IndexStyle.buttons}>
        <Btn label="C" onClick={limparMemoria} operation />
        <Btn label="(" onClick={addNumeros("(")} operation />
        <Btn label=")" onClick={addNumeros(")")} operation />
        <Btn label="/" onClick={addOperations("/")} operation />
        <Btn label="7" onClick={addNumeros("7")} />
        <Btn label="8" onClick={addNumeros("8")} />
        <Btn label="9" onClick={addNumeros("9")} />
        <Btn label="*" onClick={addOperations("*")} operation />
        <Btn label="4" onClick={addNumeros("4")} />
        <Btn label="5" onClick={addNumeros("5")} />
        <Btn label="6" onClick={addNumeros("6")} />
        <Btn label="-" onClick={addOperations("-")} operation />
        <Btn label="1" onClick={addNumeros("1")} />
        <Btn label="2" onClick={addNumeros("2")} />
        <Btn label="3" onClick={addNumeros("3")} />
        <Btn label="+" onClick={addOperations("+")} operation />
        <Btn label="0" onClick={addNumeros("0")} double />
        <Btn label="." onClick={addOperations(".")} />
        <Btn label="=" onClick={calcular} operation />
      </View>
    </SafeAreaView>
  );
};
