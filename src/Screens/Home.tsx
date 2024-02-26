import {gql, useQuery} from '@apollo/client';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
const GET_LIST = gql`
  query ExampleQuery {
    countries {
      code
      currency
      emoji
      emojiU
      name
      native
      phone
    }
  }
`;

export const Home = () => {
  const {loading, error, data} = useQuery(GET_LIST);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={'blue'} />
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) return <Text>Error :</Text>;

  return (
    <View style={{flex: 1}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Text style={{fontSize: 30}}>Countries</Text>
      </View>
      <FlatList
        data={data?.countries}
        renderItem={({item, index}) => {
          return (
            <View
              key={index}
              style={{
                margin: 15,
                padding: 20,
                elevation: 2,
                backgroundColor: 'white',
              }}>
              <Text>Name:{item.name}</Text>
              <Text>Code:{item.code}</Text>
              <Text>emoji:{item.emoji}</Text>
              <Text>phone:{item.phone}</Text>
              <Text>Currency:{item.currency}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
