import { StyleSheet, SafeAreaView , StatusBar ,Platform , ScrollView} from 'react-native';
import PokemonCard from './components/PokemonCard';
import pokemon from './components/objects';

export default function App() {




  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    {
      pokemon.map(e=>{
        return (<PokemonCard {...e} />)
      })
    }
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    marginTop : StatusBar.currentHeight,
    paddingTop: Platform.OS === 'android' ? 25 :  0
    },
});
