import {gql, useQuery} from '@apollo/client';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
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

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :</Text>;

  return (
    <ScrollView>
      {data.countries.map((continent: any, index: any) => {
        return (
          <View key={index}>
            <Text>{continent.code}</Text>
            <Text>{continent.emoji}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};
