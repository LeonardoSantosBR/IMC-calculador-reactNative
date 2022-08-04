import React from "react";
import styles from "./style";
import { View, Text } from "react-native";

interface props {
  imcResult: number;
  message: string;
}

const Result = ({ imcResult, message }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.result}>{imcResult}</Text>
    </View>
  );
};
export default Result;
