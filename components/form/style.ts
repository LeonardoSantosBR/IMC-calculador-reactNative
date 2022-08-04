import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    fontWeight: 'bold', 
    justifyContent: "center",
    padding: '120px',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    width: "100%",
    height: '80vh',
    backgroundColor: '#202024'
  },
  title:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
 },
 button:{
   padding: '10px',
   backgroundColor: '#fff',
   marginBottom: '30px',
   borderRadius: 40
 }
});
export default styles;
