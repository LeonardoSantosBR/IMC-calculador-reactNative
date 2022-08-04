import React, { useState } from "react";
import Result from "../resultImc/result";
import styles from "./style";
import { View, Text, TextInput, Button } from "react-native";

const Formulary = () => {
  const [height, setHeight]= useState <any>(0);
  const [weight, setWeight]= useState <any>(0);
  const [Imc, setImc]= useState <any>(0);
  const [messageImc, setMessageImc] = useState("---Seu iMC é de---");

  function calculate() {
    return setImc((weight / (height * height)).toFixed(2));
  }
  
  function validate() {
    if (height != 0 && weight != 0) {
      calculate();
      setHeight(0);
      setWeight(0);
      setMessageImc("Seu imc foi:");
      return;
    } else {
      alert("Preencha os campos corretamente");
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Altura</Text>
        <TextInput
          placeholder="Insira sua altura "
          keyboardType="numeric"
          value={String(height)}
          onChangeText={setHeight}
          style={styles.button}
        />

        <Text style={styles.title}>Peso</Text>
        <TextInput
          placeholder="Insira seu peso "
          keyboardType="numeric"
          value={String(weight)}
          onChangeText={setWeight}
          style={styles.button}
        />
        <Button  title="Calcular - IMC" onPress={validate} />
      </View>
      <Result imcResult={Imc} message={messageImc} />
    </View>
  );
};
export default Formulary;
